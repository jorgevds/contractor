import { profiles } from "../data";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ selectedOccupation }) => {
  const filteredProfiles = profiles.filter(
    (profile) => profile.occupation == selectedOccupation
  );

  if (!filteredProfiles.length) return null;

  return filteredProfiles.map((profile) => (
    <div key={profile.id} className={styles.layout}>
      <div className={styles.grid}>
        <img src={profile.img} className={styles.img} />
        <h3 className={styles.name}>{profile.name}</h3>
        <h3 className={styles.price}>{profile.price}</h3>
        <h3 className={styles.worktime}>{profile.worktime}</h3>
        <Link href="/people/[id]" as={`/people/${profile.id}`}>
          <button className={styles.profileLink}>Lees meer</button>
        </Link>
      </div>
    </div>
  ));
};

export default Card;
