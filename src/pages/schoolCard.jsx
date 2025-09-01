import React from "react";
import styles from "../styles/showSchools.module.css";

const SchoolCard = ({ school = {} }) => {
  const {
    name = "Unknown School",
    address = "-",
    city = "-",
    image = null,
  } = school;

  return (
    <div className={styles.schoolCard}>
      <img
        src={image ? `/schoolImages/${image}` : "/default-school.png"}
        alt={name}
        className={styles.schoolImage}
      />
      <div className={styles.schoolInfo}>
        <h2 className={styles.schoolName}>{name}</h2>
        <p className={styles.schoolAddress}>{address}</p>
        <p className={styles.schoolCity}>{city}</p>
      </div>
    </div>
  );
};

export default SchoolCard;
