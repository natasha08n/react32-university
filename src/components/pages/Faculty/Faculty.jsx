import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { BASE_URL } from "../../../constants/api";

function Faculty() {
  const [faculty, setFaculty] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/faculties/${id}`)
      .then((response) => {
        if (response.status === 200) {
          if (response.data.length !== 0) {
            setFaculty(response.data);
          }
        }

        if (response.status === 404) {
          throw new Error(response.message || "Faculty - не существует");
        }
      })
      .catch((error) => {
        setError(error.message);
      })
      .then(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Привет, ты на странице факультетa!</h1>
      {loading ? (
        <p>Данные о факультете загружаются</p>
      ) : (
        <>
          <p>Имя: {faculty.name}</p>
          <p>ID: {faculty.id}</p>
        </>
      )}
      {error && <p>Произошла ошибка: {error}</p>}
    </div>
  );
}

export { Faculty };
