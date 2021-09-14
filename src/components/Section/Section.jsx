import React, { useState, useEffect, useRef } from "react";
import shortid from "shortid";
import axios from "axios";

import { useToggle } from "../../hooks/use-toggle";
import { BASE_URL } from "../../constants/api";

import { Title } from "../Title/Title";
import { Card } from "../Card/Card";
import { Form } from "../Form/Form";
import { Button } from "../Button/Button";

// вынести запрос в файл API
// попрбовать обновить город
// реализовать добавление нового города в db.json
// реализовать удаление таблицы

function Section(props) {
  const { title, url, path, formTitle, placeholder } = props;

  const [showed, toggleShowed] = useToggle(false);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isUsed = useRef(false);

  useEffect(() => {
    if (!isUsed.current) {
      isUsed.current = true;

      setLoading(true);

      axios
        .get(`${BASE_URL}/${url}`)
        .then((response) => {
          if (response.status === 200) {
            if (response.data.length !== 0) {
              setItems(response.data);
            }
          }

          if (response.status === 404) {
            throw new Error(response.message || "items - не существует");
          }
        })
        .catch((error) => {
          setError(error.message);
        })
        .then(() => {
          setLoading(false);
          isUsed.current = true;
        });
    }
  }, []);

  const handleSubmit = (city) => {
    const newCity = {
      id: shortid.generate(),
      name: city,
    };

    if (items.some((c) => c.name === newCity.name)) {
      alert("Такой элемент уже существует! Введи новый!");
    } else {
      axios.post(`${BASE_URL}/${url}`, newCity).then((response) => {
        if (response.status === 201) {
          setItems((prevItems) => [...prevItems, response.data]);
        }
      });
    }
  };

  const handleRemove = (id) => {
    setItems(items.filter((city) => city.id !== id));

    axios
      .delete(`${BASE_URL}/${url}/${id}`)
      .then((response) => {
        if (response.status === 200) {
          console.log(`City with id ${id} has been successfully deleted`);
        }
      })
      .catch(() => {});
  };

  return (
    <div style={{ marginTop: "40px", marginBottom: "40px" }}>
      <Title title={title} path={path} />
      {loading && <p>Идет загрузка</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {items.map((city) => {
        return (
          <Card
            key={city.id}
            id={city.id}
            name={city.name}
            buttonName="Удалить"
            handleClick={handleRemove}
            url={url}
          />
        );
      })}
      <br />
      {showed && (
        <Form
          onSubmit={handleSubmit}
          title={formTitle}
          placeholder={placeholder}
        />
      )}
      <Button
        onClick={toggleShowed}
        buttonName={showed ? "Скрыть форму" : "Открыть форму"}
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
