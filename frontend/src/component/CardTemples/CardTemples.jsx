import React, { useState, useEffect } from "react";
import styles from "./CardTemples.module.css";

function CardTemples() {
  const [temples, setTemples] = useState([]);

  const fetchTemples = async () => {
    try {
      const response = await fetch("/temples");
      const data = await response.json();
      setTemples(data);
    } catch (error) {
      // Attape l'erreur, wesh
    }
  };

  useEffect(() => {
    fetchTemples();
  }, []);

  return (
    <div className={styles.cardContainer}>
      {temples.map((temple) => (
        <div key={temple.id} className={styles.card}>
          <img
            src={temple.imageUrl}
            alt={temple.name}
            className={styles.templeImage}
          />
          <div className={styles.templeDetails}>
            <h3>{temple.name}</h3>
            <p>Ville: {temple.city}</p>
            <p>Description: {temple.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardTemples;
