import React, { useState, useEffect } from "react";
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

function Section() {
  const [showed, setShowed] = useState(false);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);

    axios
      .get(`${BASE_URL}/cities`)
      .then((response) => {
        if (response.status === 200) {
          if (response.data.length !== 0) {
            setCities(response.data);
          }
        }

        if (response.status === 404) {
          throw new Error(response.message || "cities - не существует");
        }
      })
      .catch((error) => {
        setError(error.message);
      })
      .then(() => {
        setLoading(false);
      });
  }, []);

  const handleSubmit = (city) => {
    const newCity = {
      id: shortid.generate(),
      name: city,
    };

    if (cities.some((c) => c.name === newCity.name)) {
      alert("Такой город уже существует! Введи новый!");
    } else {
      axios.post(`${BASE_URL}/cities`, newCity).then((response) => {
        console.log("response", response);
        if (response.status === 201) {
          setCities((prevCities) => [...prevCities, response.data]);
        }
      });
    }
  };

  const handleRemove = (id) => {
    setCities(cities.filter((city) => city.id !== id));

    axios
      .delete(`${BASE_URL}/cities/${id}`)
      .then((response) => {
        if (response.status === 200) {
          console.log(`City with id ${id} has been successfully deleted`);
        }
      })
      .catch((error) => {});
  };

  const handleClearAll = () => {
    localStorage.removeItem("cities");
  };

  return (
    <div>
      {cities.length ? <Title title="Города" /> : null}
      {loading && <p>Города загружаются</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {cities.map((city) => {
        return (
          <Card
            key={city.id}
            id={city.id}
            name={city.name}
            buttonName="Удалить"
            handleClick={handleRemove}
          />
        );
      })}
      <br />
      {cities.length > 5 && (
        <Button onClick={handleClearAll} buttonName="Удалить все города" />
      )}
      {showed && <Form onSubmit={handleSubmit} />}
      <Button
        onClick={() => {
          setShowed(!showed);
        }}
        buttonName="Добавить город"
      />
    </div>
  );
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

export { Section };
