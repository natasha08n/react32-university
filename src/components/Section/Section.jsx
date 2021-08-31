import React from "react";
import shortid from "shortid";
import axios from "axios";

import { Title } from "../Title/Title";
import { Card } from "../Card/Card";
import { Form } from "../Form/Form";
import { Button } from "../Button/Button";

const BASE_URL = "http://localhost:3000";

// вынести запрос в файл API
// попрбовать обновить город
// реализовать добавление нового города в db.json
// реализовать удаление таблицы

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showed: false,
      cities: [],
      loading: false,
      error: "",
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    axios
      .get(`${BASE_URL}/cities`)
      .then((response) => {
        if (response.status === 200) {
          this.setState({ cities: response.data });
        }

        if (response.status === 404) {
          throw new Error(response.message || "cities - не существует")
        }
      })
      .catch((error) => {
        this.setState({ error: error.message });
      })
      .then(() => {
        this.setState({ loading: false });
      });
  }

  componentDidUpdate() {
    localStorage.setItem("cities", JSON.stringify(this.state.cities));
  }

  // componentWillUnmount() {
  //   console.log('componentWillUnmount')
  //   this.handleClearAll();
  // }

  handleSubmit = (city) => {
    this.setState((prevState) => ({
      cities: [
        ...prevState.cities,
        {
          id: shortid.generate(),
          name: city,
        },
      ],
    }));
  };

  handleRemove = (id) => {
    this.setState({
      cities: this.state.cities.filter((city) => city.id !== id),
    });

    axios.delete(`${BASE_URL}/cities/${id}`).then((response) => {
      if (response.status === 200) {
        console.log(`City with id ${id} has been successfully deleted`);
      }
    }).catch((error) => {

    })
  };

  handleClearAll = () => {
    console.log("handleClearAll");
    localStorage.removeItem("cities");
  };

  render() {
    const { cities, showed, loading, error } = this.state;

    return (
      <div>
        {cities.length ? <Title title="Города" /> : null}
        {loading && <p>Города загружаются</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {cities.map((city) => {
          return (
            <Card
              key={city.id}
              id={city.id}
              name={city.name}
              buttonName="Удалить"
              handleClick={this.handleRemove}
            />
          );
        })}
        <br />
        {cities.length > 5 && (
          <Button
            onClick={this.handleClearAll}
            buttonName="Удалить все города"
          />
        )}
        {showed && <Form onSubmit={this.handleSubmit} />}
        <Button
          onClick={() => {
            this.setState({ showed: !showed });
          }}
          buttonName="Добавить город"
        />
      </div>
    );
  }
}

{
  /* ---COUNTER----
  <p>{this.state.counter}</p>
<Button
  onClick={() => {
    for (let i = 0; i < 10; i++) {
      console.log("usual clicked", this.state.counter);

      this.setState((prevState) => {
        console.log("prev state clicked", prevState.counter);

        return { counter: prevState.counter + 1 };
      });
    }
  }}
  buttonName="Увеличить"
/> */
}

// function Section() {
//   const [showed, setShowed] = useState(false);
//   const [showed2, setShowed2] = useState(false);

//   return (
//     <div>
//       {showed && <p>Форма для добавления города</p>}
//       <Button
//         onClick={() => {
//           console.log("clicked");
//           setShowed(true);
//         }}
//         buttonName="Добавить город"
//       />

//       {showed2 && <p>Форма для добавления города 2</p>}
//       <Button
//         onClick={() => {
//           console.log("clicked");
//           setShowed2(true);
//         }}
//         buttonName="Добавить город"
//       />
//     </div>
//   );
// }

export { Section };
