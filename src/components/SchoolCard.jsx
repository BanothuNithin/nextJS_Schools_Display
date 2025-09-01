import React from "react";
import styles from "../styles/showSchools.module.css";

const SchoolCard = ({ school }) => {
  if (!school) {
    return null; // prevents error during build
  }

  return (
    <div className={styles.schoolCard}>
      <img
        src={school.image ? `/schoolImages/${school.image}` : "/placeholder.png"}
        alt={school.name || "School"}
        className={styles.schoolImage}
      />
      <div className={styles.schoolInfo}>
        <h2 className={styles.schoolName}>{school.name || "Unknown School"}</h2>
        <p className={styles.schoolAddress}>{school.address || "No address"}</p>
        <p className={styles.schoolCity}>{school.city || "No city"}</p>
      </div>
    </div>
  );
};

export default SchoolCard;
