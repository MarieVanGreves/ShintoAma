import React, { useState, useEffect } from "react";
import styles from "./CardTemples.module.css";

function CardTemples() {
  const [temples, setTemples] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTemples = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/temples`
      );
      const data = await response.json();

      // Assuming data is an array of arrays, access the first inner array
      const innerData = data[0] ?? [];

      // Check if innerData is an array, if not, set an empty array to avoid errors
      const templesData = Array.isArray(innerData) ? innerData : [];
      setTemples(templesData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTemples();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {temples.map((temple) => (
        <div key={temple.Id} className={styles.card}>
          <div className={styles.containerPhoto}>
            <img
              src={temple.imageUrl}
              alt={temple.Nom}
              className={styles.templeImage}
            />
          </div>
          <div className={styles.templeDetails}>
            <h3 className={styles.nom}>{temple.Nom}</h3>
            <p className={styles.ville}>{temple.Ville}</p>
            <p className={styles.description}>{temple.Description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardTemples;
