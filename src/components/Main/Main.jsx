import { Section } from "../Section/Section";
import { Title } from "../Title/Title";

import styles from './Main.module.css';

function Main() {
  return (
    <div className={styles.container}>
      <Title title="Информация об университете" />
      <Section />
    </div>
  );
}

export { Main };
