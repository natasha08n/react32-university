import React from "react";
import { Button } from "../../components/Button/Button";
import { Section } from "../Section/Section";
import { Title } from "../Title/Title";

import styles from "./Main.module.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSection: true,
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <Title title="Информация об университете" />
        {this.state.showSection && <Section />}
        <br />
        <Button
          onClick={() => {
            this.setState({ showSection: !this.state.showSection });
          }}
          buttonName="Тогл секции"
        />
      </div>
    );
  }
}

export { Main };
