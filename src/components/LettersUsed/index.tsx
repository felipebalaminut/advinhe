import styles from "./styles.module.css";

import { Letter } from "../Letter";

export function LettersUsed() {
  return (
    <div className={styles.lettersUsed}>
      <h5>Letras utilizadas</h5>

      <div>
        <Letter color="wrong" size="small" value="X" />
        <Letter color="correct" size="small" value="R" />
      </div>
    </div>
  );
}
