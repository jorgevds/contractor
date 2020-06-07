import styles from "./aboutBanner.module.css";
import Link from "next/link";

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
        <h3 className={styles.header}>Onze missie</h3>
        <p className={styles.description}>
          Werken starten hoeft niet zo een moeilijk en formeel proces te zijn.
          Daarom sloegen wij, het{" "}
          <Link href="/team">
            <a>team</a>
          </Link>{" "}
          bij Contractor™, onze handen in elkaar en gingen wij aan het werk.
        </p>
        <p className={styles.description}>
          Wij hopen traag maar zeker de kloof tussen business en klant te
          dichten, met kwaliteit en een vlotte transactie in het oog.
        </p>
        <h3 className={styles.header}>Weg met de formaliteit</h3>
        <p className={styles.description}>
          Nooit meer vol spanning een vraag voor een offerte insturen. Gedaan
          met lange, saaie meetings waar je je toch nooit zeker voelt. Een
          vlotte, snelle en kwaliteitsvolle samenwerking is de leidraad!
        </p>
      </div>
    </div>
  );
};

export default AboutBanner;
