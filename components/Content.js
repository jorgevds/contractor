import styles from "./content.module.css";

const Content = ({ selectedOccupation }) => {
  if (selectedOccupation == "") {
    return (
      <div className={styles.contentBefore}>
        <h1 className={styles.header}>
          Welkom in onze databank voor vakmensen
        </h1>
        <h2 className={styles.description}>
          Kies een beroep uit de lijst om aan de slag te gaan!
        </h2>
        <h2 className={styles.description}>
          Wij halen voor u een aantal vakmensen op die uw opdracht willen
          opnemen
        </h2>
      </div>
    );
  } else {
    return (
      <div className={styles.contentAfter}>
        <h2 className={styles.title}>
          Kies een vakmens uit de lijst voor meer informatie
        </h2>
      </div>
    );
  }
};

export default Content;
