import React, { useState } from "react";
import { Button } from "../../components/Button/Button";
import { Section } from "../Section/Section";
import { Title } from "../Title/Title";

import styles from "./Main.module.css";

function Main() {
  const [showSection, setShowSection] = useState(true);

  return (
    <div className={styles.container}>
      <Title title="Информация об университете" />
      {showSection && <Section />}
      <br />
      <Button
        onClick={() => {
          setShowSection(!showSection);
        }}
        buttonName="Тогл секции"
      />
    </div>
  );
}

export { Main };
