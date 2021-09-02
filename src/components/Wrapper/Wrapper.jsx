import { Sidebar } from "../Sidebar/Sidebar";
import { Main } from "../Main/Main";
import styles from "./Wrapper.module.css";

function Wrapper() {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <Main />
    </div>
  );
}

export { Wrapper };
