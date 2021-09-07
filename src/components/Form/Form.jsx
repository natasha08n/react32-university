import React from "react";

import { Button } from "../Button/Button";

import styles from "./Form.module.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.reset();
  };

  reset = () => {
    this.setState({ value: "" });
  };

  render() {
    const { value } = this.state;
    const { title, placeholder } = this.props;

    return (
      <form style={{ marginBottom: "32px" }} onSubmit={this.onSubmit}>
        <p>{title}</p>
        <input
          type="text"
          value={value}
          className={styles.input}
          placeholder={placeholder}
          onChange={(e) => {
            this.setState({ value: e.currentTarget.value });
          }}
        />
        <Button type="submit" buttonName="Добавить" disabled={!value} />
      </form>
    );
  }
}

export { Form };
