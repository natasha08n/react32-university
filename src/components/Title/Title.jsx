import { Link } from "react-router-dom";

import { Container, Title as TitleTag } from "./Title.styled";

function Title({ title, path = "/" }) {
  return (
    <Link to={path}>
      <Container>
        <TitleTag>{title}</TitleTag>
      </Container>
    </Link>
  );
}

export { Title };
