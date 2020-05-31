import styles from "./aboutBanner.module.css";

const AboutBanner = () => {
  return (
    <div className={styles.container}>
      <h1>About</h1>
      <div>
        <h3 className={styles.header}>
          Contractor™ is an online company hosting service
        </h3>
        <h3 className={styles.description}>
          It is a webplatform made for independent contractors to host their
          services, and for consumers to find the right match for the work they
          need to have done.
        </h3>
        <h3 className={styles.description}>Have some lorem ipsums</h3>
        <h3 className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          auctor metus eu ipsum vestibulum sagittis. Morbi auctor eu metus ac.
        </h3>
        <h3 className={styles.descriptionTwo}>This one is aligned right</h3>
        <h3 className={styles.descriptionTwo}>
          Quisque et lorem porta, auctor elit in, maximus elit. Nam eu odio ac
          ante eleifend dictum pellentesque at ligula. Aenean.
        </h3>
      </div>
    </div>
  );
};

export default AboutBanner;
