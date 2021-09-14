import React from "react";

// import { StateEmployeeSection } from "../../test-examples/StateEmployeeSection";
// import { ReducerEmployeeSection } from "../../test-examples/ReducerEmployeeSection";
import { Section } from "../Section/Section";
import { Title } from "../Title/Title";

import styles from "./Main.module.css";

function Main() {
  return (
    <div className={styles.container}>
      <Title title="Информация об университете" />
      <Section
        title="Города"
        placeholder="Город"
        formTitle="Добавление города"
        path="/cities"
      />
      <Section
        title="Факультеты"
        placeholder="Факультет"
        formTitle="Добавление факультета"
        path="/faculties"
      />
      <br />
      <p>--------------------------------------------------------</p>
      {/* <StateEmployeeSection /> */}
      {/* <ReducerEmployeeSection /> */}
    </div>
  );
}

export { Main };
