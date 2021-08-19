import React from "react";

import { Button } from "../Button/Button";

class Card extends React.Component {
  handleClick = () => {
    const { id, handleClick } = this.props;
    handleClick(id);
  };

  render() {
    const { id, name, buttonName } = this.props;
    return (
      <div key={id}>
        <span>{name}</span>
        <Button buttonName={buttonName} onClick={this.handleClick} />
      </div>
    );
  }
}

export { Card };
