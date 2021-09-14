import React from "react";
import { useDispatch, useSelector } from "react-redux";
import shortid from "shortid";
import axios from "axios";

import { addCity } from "../../redux/actions";
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

  const dispatch = useDispatch();

  const items = useSelector((state) => state.cities);
  const error = useSelector((state) => state.error);

  const handleSubmit = (city) => {
    const newCity = {
      id: shortid.generate(),
      name: city,
    };

    dispatch(addCity(newCity));
  };

  const handleRemove = (id) => {
    // setItems(items.filter((city) => city.id !== id));

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
      {/* {loading && <p>Идет загрузка</p>}*/}
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
