import { profiles } from "../data";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./profile.module.css";

const ProfilePage = () => {
  const router = useRouter();
  const filteredProfiles = profiles.filter(
    (profile) => profile.id == router.query.id
  );

  if (!filteredProfiles.length) return null;
  console.log(router.query);
  console.log(router);

  return filteredProfiles.map((profile) => (
    <div key={profile.id} className={styles.container}>
      <div className={styles.profileName}>{profile.name}</div>
      <div className={styles.profileOccupation}>{profile.occupation}</div>
      <img src={profile.img} className={styles.profileImage} />
      <div className={styles.profileRate}>{profile.price}</div>
      <div className={styles.profileTime}>{profile.worktime}</div>
      <Link href="/">
        <a className={styles.backButton}>Terug naar hoofdmenu</a>
      </Link>
    </div>
  ));
};
export default ProfilePage;
