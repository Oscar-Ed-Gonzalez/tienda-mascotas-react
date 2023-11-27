import React from "react";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div name="Contacto" className={styles.contact}>
      <h2>Contactanos</h2>
      <form
        className={styles.form}
        method="POST"
        action="https://getform.io/f/490459c2-f59b-4642-8f96-20777465b49b"
      >
        <label for="Name">Nombre</label>
        <input id="Name" name="Name" className={styles.input}></input>
        <label for="Email">Email</label>
        <input
          id="Email"
          name="Email"
          type="Email"
          className={styles.input}
        ></input>
        <label for="Message">Mensaje</label>
        <textarea id="Message" className={styles.textArea}></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
