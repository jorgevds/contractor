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
        <div className={styles.name}>{profile.name}</div>
        <div>{profile.price}</div>
        <div>{profile.worktime}</div>
        <Link href="/people/[id]" as={`/people/${profile.id}`}>
          <button className={styles.profileLink}>Lees meer</button>
        </Link>
      </div>
    </div>
  ));
};

export default Card;
