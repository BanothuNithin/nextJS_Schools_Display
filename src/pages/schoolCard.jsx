import React from "react";
import styles from "../styles/showSchools.module.css";

const SchoolCard = ({ school }) => {
  return (
    <div className={styles.schoolCard}>
      <img
        src={`/schoolImages/${school.image}`}
        alt={school.name}
        className={styles.schoolImage}
      />
      <div className={styles.schoolInfo}>
        <h2 className={styles.schoolName}>{school.name}</h2>
        <p className={styles.schoolAddress}>{school.address}</p>
        <p className={styles.schoolCity}>{school.city}</p>
      </div>
    </div>
  );
};

export default SchoolCard;
