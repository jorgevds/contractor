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

  return filteredProfiles.map((profile) => (
    <section key={profile.id} className={styles.container}>
      <h3 className={styles.profileName}>{profile.name}</h3>
      <h3 className={styles.profileOccupation}>{profile.occupation}</h3>
      <div className={styles.profileCaption}>
        <h3>
          {profile.name}
          {profile.captionOne}
          {profile.occupation}.
        </h3>
        <h3>
          {profile.captionTwo}
          {profile.location}.
        </h3>
      </div>
      <img src={profile.img} className={styles.profileImage} />
      <h3 className={styles.profileRate}>{profile.price}</h3>
      <h3 className={styles.profileTime}>{profile.worktime}</h3>
      <h3 className={styles.match}>
        <a href={`mailto:${profile.email}${profile.occupation}@contractor.be`}>
          Dit is mijn match!
        </a>
      </h3>

      <Link href="/">
        <a className={styles.backButton}>Terug naar hoofdmenu</a>
      </Link>
    </section>
  ));
};
export default ProfilePage;
