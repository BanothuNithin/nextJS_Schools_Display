import React from 'react';
import styles from '../styles/showSchools.module.css';

const SchoolCard = ({ school }) => {
    return (
        <div className={styles.card}>
            <img src={`/schoolImages/${school.image}`} alt={school.name} className={styles.image} />
            <h2 className={styles.name}>{school.name}</h2>
            <p className={styles.address}>{school.address}</p>
            <p className={styles.city}>{school.city}</p>
        </div>
    );
};

export default SchoolCard;