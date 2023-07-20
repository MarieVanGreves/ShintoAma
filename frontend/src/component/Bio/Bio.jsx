import styles from "./Bio.module.css";
import ama from "../../assets/images/Amaterasu01.png";

export default function Bio() {
  return (
    <div className={styles.bioContainer}>
      <div className={styles.containerTop}>
        <div className={styles.amaImg}>
          <img
            src={ama}
            alt="La déesse suprême, Amaterasu avec son armure de Samuraï"
            className={styles.amaTaille}
          />
          <div className={styles.name}>Osu, je suis Kei.</div>
        </div>
      </div>
      <p className={styles.bio}>
        Passionnée de culture japonaise depuis mon enfance, j'ai découvert ce
        pays magnifique au travers de ses temples et de son plus beau trésor, le
        Shintoïsme. Croyant ou pas, tout le monde à quelque chose à apprendre du
        Shinto. J'ai choisi de dédier ma vie à ma déesse, Amaterasu.
      </p>
    </div>
  );
}
