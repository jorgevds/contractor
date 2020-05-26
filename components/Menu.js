import React from "react";
import { occupations } from "../occupation";
import Card from "./Card";
import Content from "./Content";
import styles from "./menu.module.css";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOccupation: "",
    };
  }

  handleSelect = (event) => {
    this.setState({ selectedOccupation: event.target.value });
  };

  handleClick = (event) => event.target.classList.add("selectOption");

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
            })
          }
        >
          <option disabled selected value="">
            (Kies een beroep)
          </option>
          {occupations.map((occupation) => (
            <option
              className={styles.selectOption}
              key={occupation.key}
              value={occupation.value}
            >
              {occupation.value}
            </option>
          ))}
        </select>

        <Content selectedOccupation={this.state.selectedOccupation} />
        <Card selectedOccupation={this.state.selectedOccupation} />
      </div>
    );
  }
}
