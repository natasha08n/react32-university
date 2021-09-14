import { Link } from "react-router-dom";

import styles from "./Menu.module.css";

import { menuConfig } from "../../utils/menu";

function Menu() {
  return (
    <nav className={styles.menu}>
      <ul>
        {menuConfig.map((menuItem) => (
          <li key={menuItem.id} className={styles.menuItem}>
            {menuItem.icon}
            <Link to={menuItem.path} className={styles.menuName}>
              {menuItem.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export { Menu };
