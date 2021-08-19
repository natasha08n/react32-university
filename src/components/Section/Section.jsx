import React from "react";
import shortid from "shortid";

import { Title } from "../Title/Title";
import { Card } from "../Card/Card";
import { Form } from "../Form/Form";
import { Button } from "../Button/Button";

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showed: false,
      cities: [],
    };
  }

  handleSubmit = (city) => {
    console.log("data", this.state.cities);
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
  };

  render() {
    const { cities, showed } = this.state;

    return (
      <div>
        {cities.length ? <Title title="Города" /> : null}
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
