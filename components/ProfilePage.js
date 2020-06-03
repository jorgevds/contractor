import { profiles } from "../data";
import Link from "next/link";
import { useRouter } from "next/router";

const ProfilePage = () => {
  const router = useRouter();
  const filteredProfiles = profiles.filter(
    (profile) => profile.id == router.query.id
  );

  if (!filteredProfiles.length) return null;
  console.log(router.query);

  return filteredProfiles.map((profile) => (
    <div key={profile.id}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <div>{profile.name}</div>
      <img src={profile.img} />
      <div>{profile.price}</div>
    </div>
  ));
};
export default ProfilePage;
