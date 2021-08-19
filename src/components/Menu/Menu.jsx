import styles from "./Menu.module.css";

import { menuConfig } from "../../utils/menu";

function Menu() {
  return (
    <div>
      {menuConfig.map((menuItem) => (
        <div key={menuItem.id} className={styles.menuItem}>
          {menuItem.icon}
          <span className={styles.menuName}>{menuItem.name}</span>
        </div>
      ))}
    </div>
  );
}

export { Menu };
