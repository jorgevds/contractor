import styles from "./content.module.css";

export default class Content extends React.Component {
  render() {
    return (
      <>
        {this.props.selectedOccupation == "" ? (
          <div className={styles.content}>
            <h1>Welkom in onze databank voor vakmensen</h1>
            <h3>Kies een beroep uit de lijst om aan de slag te gaan!</h3>
            <h3>
              Wij halen voor u een aantal vakmensen op die uw opdracht willen
              opnemen
            </h3>
          </div>
        ) : (
          <div className={styles.content}>
            <h2>Kies een vakmens uit de lijst voor meer informatie</h2>
          </div>
        )}
      </>
    );
  }
}