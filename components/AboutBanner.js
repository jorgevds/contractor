import styles from "./aboutBanner.module.css";

const AboutBanner = () => {
  return (
    <div className={styles.container}>
      <h1>Over ons</h1>
      <div>
        <h3 className={styles.header}>
          Contractor™ is een online bron van stielmensen uit elk beroep
        </h3>
        <p className={styles.description}>
          Het is een webplatform voor bedrijven en freelancers om hun diensten
          aan te bieden, en voor u om de juiste match voor de job te vinden.
        </p>
        <p className={styles.description}>Hier een paar lorem ipsums:</p>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          auctor metus eu ipsum vestibulum sagittis. Morbi auctor eu metus ac.
        </p>
        <p className={styles.descriptionTwo}>Deze zijn rechts uitgelijnd</p>
        <p className={styles.descriptionTwo}>
          Quisque et lorem porta, auctor elit in, maximus elit. Nam eu odio ac
          ante eleifend dictum pellentesque at ligula. Aenean.
        </p>
      </div>
    </div>
  );
};

export default AboutBanner;
