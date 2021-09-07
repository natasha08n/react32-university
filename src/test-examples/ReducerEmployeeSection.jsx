import React, { useReducer } from "react";

const people = [
  { id: 1, name: "Ann", employeed: false },
  { id: 2, name: "Юрiй", employeed: false },
  { id: 3, name: "Дима", employeed: true },
  { id: 4, name: "Наташа", employeed: true },
];

const reducer = (people, action) => {
  if (action.type === "hire") {
    return people.map((person) => {
      if (person.id === action.payload.id) {
        person.employeed = true;
      }

      return person;
    });
  }

  if (action.type === "fire") {
    return people.map((person) => {
      if (person.id === action.payload.id) {
        person.employeed = false;
      }

      return person;
    });
  }
};

function ReducerEmployeeSection() {
  const [state, dispatch] = useReducer(reducer, people);

  const fire = (id) => {
    dispatch({ type: "fire", payload: { id } });
  };

  const hire = (id) => {
    dispatch({ type: "hire", payload: { id } });
  };

  return (
    <div>
      <h3>REDUCER Employee status</h3>
      <ul>
        {state.map((person) => (
          <li key={person.id}>
            <span>{person.name}</span>
            {person.employeed ? (
              <>
                <span style={{ color: "green" }}> Hired</span>
                <button
                  onClick={() => {
                    fire(person.id);
                  }}
                >
                  Action: Fire
                </button>
              </>
            ) : (
              <>
                <span style={{ color: "red " }}> Fired</span>
                <button
                  onClick={() => {
                    hire(person.id);
                  }}
                >
                  Action: Hire
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export { ReducerEmployeeSection };
