import React from "react";
import { Link } from "react-router-dom";

import { Button } from "../Button/Button";

function Card(props) {
  const { id, name, buttonName, handleClick, url } = props;
  const onClick = () => {
    handleClick(id);
  };

  return (
    <div key={id}>
      <Link
        to={{
          pathname: `/${url}/${id}`,
        }}
      >
        {name}
      </Link>
      <Button buttonName={buttonName} onClick={onClick} />
    </div>
  );
}

export { Card };
