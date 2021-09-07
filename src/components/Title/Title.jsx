import { Container, Title as TitleTag } from "./Title.styled";

function Title({ title }) {
  return (
    <Container>
      <TitleTag>{title}</TitleTag>
    </Container>
  );
}

export { Title };
