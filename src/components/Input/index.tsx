import styles from "./styles.module.css";

type TProps = React.ComponentProps<"input">;

export function Input({ ...rest }: TProps) {
  return <input type="text" className={styles.input} {...rest} />;
}
