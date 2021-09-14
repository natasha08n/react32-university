import { useSelector } from "react-redux";

function Cities() {
  const items = useSelector((state) => state.cities);

  return (
    <div>
      <h1>Привет, ты на странице городов</h1>
      {items.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}

export { Cities };
