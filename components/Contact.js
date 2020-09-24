import Form from "./Form";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <section className={styles.container}>
      <h1>Contact</h1>
      <h3>Vragen voor het team?</h3>
      <p>
        Vul hieronder je gegevens in en laat een boodschap achter. Het
        Contractor™ team volgt zo snel mogelijk met je op!
      </p>
      <Form />
    </section>
  );
};

export default Contact;
