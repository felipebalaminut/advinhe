import styles from "./styles.module.css";

export type LettersUsedProps = {
  value: string;
  correct: boolean;
};

type Props = {
  data: LettersUsedProps[];
};

import { Letter } from "../Letter";

export function LettersUsed({ data }: Props) {
  return (
    <div className={styles.lettersUsed}>
      <h5>Letras utilizadas</h5>

      <div>
        {data.map(({ value, correct }) => (
          <Letter
            key={value}
            color={correct ? "correct" : "wrong"}
            size="small"
            value={value}
          />
        ))}
      </div>
    </div>
  );
}
