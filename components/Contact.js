import styles from "./contact.module.css";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: "",
    };
  }
  render() {
    return (
      <div className={styles.container}>
        <h1>Contact</h1>
        <h3>Hier komt nog een contactformulier</h3>
      </div>
    );
  }
}
