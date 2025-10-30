import styles from "./Card.module.css";
import coffeeImg from "../assets/Logo-Coffee.svg"; // ajuste o caminho conforme seu projeto

export function Card() {
  return (
    <section className={styles.container}>
      <div className={styles.textContent}>
        <h1>
          Encontre o café perfeito <br /> para qualquer hora do dia
        </h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
        </p>

        <ul className={styles.benefits}>
          <li> Compra simples e segura</li>
          <li> Embalagem mantém o café intacto</li>
          <li> Entrega rápida e rastreada</li>
          <li> O café chega fresquinho até você</li>
        </ul>
      </div>

      <div className={styles.imageContent}>
        <img src={coffeeImg} alt="Coffee Delivery" />
      </div>
    </section>
  );
}
