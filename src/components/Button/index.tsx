import styles from "./styles.module.css";

type TProps = React.ComponentProps<"button"> & {
  title: string;
};

export function Button({ title, ...rest }: TProps) {
  return (
    <button type="button" className={styles.button} {...rest}>
      {title}
    </button>
  );
}
