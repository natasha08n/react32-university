import React from "react";

import { Button } from "../Button/Button";

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      showed: false,
      showed2: false,
    };
  }

  render() {
    return (
      <div>
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
        />

        <p>
          {this.state.showed ? "Форма для добавления города 1" : "Нет формы"}
        </p>
        <Button
          onClick={() => {
            console.log("clicked 1");
            this.setState({ showed: !this.state.showed });
          }}
          buttonName="Добавить город 1"
        />

        {this.state.showed2 && <p>Форма для добавления города 2</p>}
        <Button
          onClick={() => {
            console.log("clicked 2");
            this.setState({ showed2: true });
          }}
          buttonName="Добавить город 2"
        />
      </div>
    );
  }
}

// function Section() {
//   const [showed, setShowed] = useState(false);
//   const [showed2, setShowed2] = useState(false);

//   return (
//     <div>
//       {showed && <p>Форма для добавления города</p>}
//       <Button
//         onClick={() => {
//           console.log("clicked");
//           setShowed(true);
//         }}
//         buttonName="Добавить город"
//       />

//       {showed2 && <p>Форма для добавления города 2</p>}
//       <Button
//         onClick={() => {
//           console.log("clicked");
//           setShowed2(true);
//         }}
//         buttonName="Добавить город"
//       />
//     </div>
//   );
// }

export { Section };
