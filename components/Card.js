import { profiles } from "../data";
import styles from "./card.module.css";

const Card = ({ selectedOccupation }) => {
  const filteredProfiles = profiles.filter(
    (profile) => profile.occupation == selectedOccupation
  );

  if (!filteredProfiles.length) return null;

  return filteredProfiles.map((profile) => (
    <table key={profile.id} className={styles.table}>
      <tbody>
        <tr className={styles.tr}>
          <td>
            <img src={profile.img} className={styles.img} />
          </td>
          <td className={styles.name}>{profile.name}</td>
          <td>{profile.price}</td>
          <td>{profile.worktime}</td>
        </tr>
      </tbody>
    </table>
  ));
};

export default Card;
