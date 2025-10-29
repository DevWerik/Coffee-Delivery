import styles from "./Header.module.css";

import coffeeLogo from "../assets/coffee-logo.svg";
import Location from "../assets/location.svg";
import Cart from "../assets/cart.svg";

export function Header() {
  return (
   <header className={styles.header}>
  <img src={coffeeLogo} alt="Logotipo do Coffee Delivery" />

  <nav className={styles.nav}>
    <div className={styles.location}>
      <img src={Location} alt="Localização" />
      <span>Porto Alegre, RS</span>
    </div>

    <div className={styles.cart}>
      <img src={Cart} alt="Carrinho de compras" />
    </div>
  </nav>
</header>

  );
}
