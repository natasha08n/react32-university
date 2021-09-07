import { Wrapper } from "../../Wrapper/Wrapper";

function Home(props) {
  console.log("home props", props);

  return (
    <Wrapper>
      <div>
        <h1>Привет, ты на странице университета</h1>
      </div>
    </Wrapper>
  );
}

export { Home };
