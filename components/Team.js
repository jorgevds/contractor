import styles from "./team.module.css";
import Link from "next/link";

const Team = () => {
  return (
    <div className={styles.container}>
      <h1>Ons team</h1>
      <h3>Team, work</h3>
      <p>
        Hier bij <em>Contractor™</em> staat ons team telkens weer voor u klaar.
        Wij zorgen elke weekdag voor een vlotte en correcte service.
      </p>
      <img
        src="images/teamphoto.jpg"
        title="Elke dag in de wind"
        alt="Het Contractor team: Judi, Katelyn, John, Mac, Elvis"
      />
      <h4>Ons team hier bij Contractor</h4>
      <p>
        Uw werk is onze garantie. Wij garanderen een kwalitatieve werkzaamheid
        door onze kandidaten aandachtig te filteren. Nog voor uw moeite om een
        match te vinden, hebben wij de moeite gedaan om uw match te verzekeren.
        Daarom bieden wij enkel de beste bedrijven en freelancers aan om
        potentiële match te zijn!
      </p>
      <p>
        Wij blijven voor u paraat staan. Ons doel is om werk gedaan te krijgen,
        en dit proces te versoepelen. Daarom werken wij met de de laatste nieuwe
        technologiën en een <em>can do attitude</em> om dit te verwezenlijken.
      </p>
      <h3>
        Heeft u vragen of opmerkingen voor ons? Neem gerust{" "}
        <Link href="/contact">
          <a className={styles.contactLink}>contact</a>
        </Link>{" "}
        op!
      </h3>
    </div>
  );
};

export default Team;
