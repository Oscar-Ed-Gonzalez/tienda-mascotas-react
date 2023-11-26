import React from "react";
import { Link } from "react-scroll";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div name="Inicio" className={styles.home}>
      <div className={styles.titleContainer}>
        <p>
          Compra lo que necesites para tu Mascota <br />
          <b>Lo mejor para tu Animal</b>
        </p>
        <p>
          Con los mejores <br />
          <b>Precios</b>
        </p>
      </div>
      <div className={styles.ctaContainer}>
        <Link
          to="Contacto"
          smooth
          duration={500}
          className={styles.callToAction}
        >
          Contactanos
        </Link>
        <Link
          to="Contacto"
          smooth
          duration={500}
          className={styles.callToAction}
        >
          Cotiza nuestros productos
        </Link>
      </div>
    </div>
  );
};

export default Home;
