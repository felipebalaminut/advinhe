import styles from "./styles.module.css";

import tipIcon from "../../assets/tip.svg";

type TProps = {
  tip: string;
};

export function Tip({ tip }: TProps) {
  return (
    <div className={styles.tip}>
      <img src={tipIcon} alt="ícone de dica" />

      <div>
        <h3>Dica</h3>
        <p>{tip}</p>
      </div>
    </div>
  );
}
