import React from "react";
import { Occupations } from "../occupation";
import Card from "./Card";
import Content from "./Content";
import styles from "./menu.module.css";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      occupation: [],
      selectedOccupation: "",
      validationError: "",
    };
  }
  HandleSelect = (event) => {
    this.setState({ selectedOccupation: event.target.value });
  };
  handleClick = (event) => event.target.classList.add("selectOption");
  componentDidMount() {
    let occupationsServed = Occupations.map((occupation) => {
      return {
        key: occupation.key,
        value: occupation.value,
        display: occupation.value,
      };
    });
    this.setState({
      occupation: [{ key: [], value: "", display: "(Kies een beroep)" }].concat(
        occupationsServed
      ),
    });
  }
  render() {
    return (
      <div className={styles.selectDiv}>
        <select
          className={styles.selectBar}
          value={this.state.selectedOccupation}
          onClick={this.handleClick}
          onChange={(e) =>
            this.setState({
              selectedOccupation: e.target.value,
              validationError:
                e.target.value === "" ? "U moet een beroep kiezen" : "",
            })
          }
        >
          >
          {this.state.occupation.map((occupation) => (
            <option
              className={styles.selectOption}
              key={occupation.key}
              value={occupation.value}
            >
              {occupation.display}
            </option>
          ))}
        </select>
        <Content selectedOccupation={this.state.selectedOccupation} />
        <div className={styles.validationError}>
          {this.state.validationError}
        </div>
        <Card selectedOccupation={this.state.selectedOccupation} />
      </div>
    );
  }
}
