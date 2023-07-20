import styles from "./Home.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.containerTitre}>
        <h1 className={styles.titreUn}>BIENVENUE</h1>
        <h2 className={styles.titreUn}>SUR SHINTOAMA</h2>
      </div>
      <div className={styles.containerPhrase}>
        <h2 className={styles.phrase}> Kon'nichiwa, je suis Kei.</h2>
        <h2 className={styles.phrase}>
          {" "}
          Asseyez-vous, reposez-vous. Je vous embarque à travers une des plus
          belle beauté que le Japon a à offrir,
        </h2>
        <h2 className={styles.phrase}> le Shintoïsme et ses temples.</h2>
      </div>
    </div>
  );
}
