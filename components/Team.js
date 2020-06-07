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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada in
        dui et facilisis. Curabitur ultrices tincidunt pretium. Fusce facilisis
        neque sed consequat faucibus. Vestibulum dignissim viverra metus, vitae
        interdum enim facilisis at. Aenean sagittis tortor nulla, laoreet
        scelerisque nisl tristique sit amet. Phasellus volutpat, leo a egestas
        efficitur, leo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada in
        dui et facilisis. Curabitur ultrices tincidunt pretium. Fusce facilisis
        neque sed consequat faucibus. Vestibulum dignissim viverra metus, vitae
        interdum enim facilisis at. Aenean sagittis tortor nulla, laoreet
        scelerisque nisl tristique sit amet. Phasellus volutpat, leo a egestas
        efficitur, leo.
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
