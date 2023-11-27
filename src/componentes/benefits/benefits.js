import React from "react";
import styles from "./benefits.module.css";
import { BsFillDoorOpenFill } from "react-icons/bs";
import { FaPeopleCarry } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { AiOutlineSchedule } from "react-icons/ai";

const Benefits = () => {
  return (
    <div name="Beneficios" className={styles.benefits}>
      <h2 className={styles.benefitTitle}>
        Beneficios de comprar con nosotros
      </h2>
      <p>
        Entregas a domicilio en todo el pais <BsFillDoorOpenFill />
      </p>
      <p>
        La mejor atencion al cliente
        <FaPeopleCarry />
      </p>
      <p>
        {" "}
        Los precios más bajos del mercado <FaMoneyBillAlt />
      </p>
      <p>
        Agenda tus entregas cuando quieras
        <AiOutlineSchedule />
      </p>
      
    </div>
  );
};

export default Benefits;
