import { Menu } from "../Menu/Menu";

import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Menu />
    </div>
  );
}

export { Sidebar };
