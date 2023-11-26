import React from "react";
import styles from "./services.module.css";

const Services = () => {
  return (
    <div name="Servicios" className={styles.services}>
      <p>Compra el alimento de tus mascotas</p>
      <img
        className={styles.webImage}
        src={require("../../assets/comida.jpg")}
      ></img>
      <p>Selecciona entre los mejores juguetes y accesorios</p>
      <img
        className={styles.webImage}
        src={require("../../assets/juguete.jpg")}
      ></img>
    </div>
  );
};

export default Services;
