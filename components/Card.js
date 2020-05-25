import { Profiles } from "../data";
import styles from "./card.module.css";

export default class Card extends React.Component {
  render() {
    let job = this.props.selectedOccupation;
    let profession = Profiles.filter(function (filt) {
      return filt.occupation == job;
    });
    console.log(this.props.selectedOccupation);
    return (
      <>
        {this.props.selectedOccupation !== ""
          ? profession.map((card) => (
              <table key={card.id} className={styles.table}>
                <tbody>
                  <tr className={styles.tr}>
                    <td>
                      <img src={card.img} className={styles.img} />
                    </td>
                    <td className={styles.name}>{card.name}</td>
                    <td>{card.price}</td>
                    <td>{card.worktime}</td>
                  </tr>
                </tbody>
              </table>
            ))
          : ""}
      </>
    );
  }
}
