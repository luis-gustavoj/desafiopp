import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <small>
        <a href="https://luisilva-dev.vercel.app">Luis Silva</a> |{" "}
        <p>Projeto desenvolvido durante o desafio do PedidoPago</p> |{" "}
        <a href="https://github.com/luis-gustavoj">Github</a>
      </small>
    </footer>
  );
};
