import styles from "./Temples.module.css";
import Bio from "../../component/Bio/Bio";
import CardTemples from "../../component/CardTemples/CardTemples";

export default function Temples() {
  return (
    <div className={styles.templeContainer}>
      <div className={styles.deuxCotes}>
        <div className={styles.leftContainer}>
          <CardTemples />
        </div>
        <div className={styles.rightContainer}>
          <Bio />
        </div>
      </div>
    </div>
  );
}
