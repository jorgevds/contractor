import styles from "./form.module.css";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: "",
      voornaam: "",
      achternaam: "",
      email: "",
      bericht: "",
      titel: "klant",
      submit: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ submit: true });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className={styles.container}>
          <div>
            <label for="titel" className={styles.label}>
              Titel
            </label>
            <select
              name="titel"
              required
              value={this.state.title}
              onChange={this.handleChange}
              className={styles.formSelect}
            >
              <option>Klant</option>
              <option>Bedrijf</option>
              <option>Freelancer</option>
              <option>Andere</option>
            </select>
          </div>
          <label for="voornaam" className={styles.label}>
            Voornaam
          </label>
          <input
            name="voornaam"
            placeholder="voornaam"
            value={this.state.firstName}
            onChange={this.handleChange}
            className={styles.formInput}
          />
          <label for="achternaam" className={styles.label}>
            Naam
          </label>
          <input
            name="achternaam"
            placeholder="naam"
            value={this.state.achternaam}
            onChange={this.handleChange}
            className={styles.formInput}
          />
          <label for="email" className={styles.label}>
            Email
          </label>
          <input
            name="email"
            placeholder="email"
            required
            value={this.state.email}
            onChange={this.handleChange}
            className={styles.formInput}
          />
          <label for="bericht" className={styles.label}>
            Uw bericht
          </label>
          <textarea
            name="bericht"
            placeholder="hier uw boodschap"
            required
            value={this.state.bericht}
            onChange={this.handleChange}
            className={styles.formTextArea}
          />
          <button type="submit" className={styles.formSubmit}>
            Verzend
          </button>
        </form>
        {this.state.submit ? (
          <h3>
            Bedankt voor uw bericht! Wij gaan aan het werk en geven u zo snel
            mogelijk een antwoord.
          </h3>
        ) : (
          <h3>
            Gelieve een titel bovenaan te kiezen en een boodschap achter te
            laten. Om u van een antwoord te voorzien, hebben we een emailadres
            nodig.
          </h3>
        )}
      </div>
    );
  }
}
