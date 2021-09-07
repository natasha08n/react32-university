import { Sidebar } from "../Sidebar/Sidebar";
import styles from "./Wrapper.module.css";

function Wrapper(props) {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      {props.children}
    </div>
  );
}

export { Wrapper };
