import React, { useEffect, useState } from "react";
import SchoolCard from "../components/SchoolCard";
import styles from "../styles/showSchools.module.css";

export const dynamic = "force-dynamic"; // prevents build-time errors

const ShowSchools = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await fetch("/api/schools");
        const data = await response.json();
        setSchools(data);
      } catch (err) {
        console.error("Error fetching schools:", err);
      }
    };
    fetchSchools();
  }, []);

  return (
    <div className={styles.container}>
      <h1>List of Schools</h1>
      {schools.length === 0 ? (
        <p>No schools added yet.</p>
      ) : (
        <div className={styles.cardGrid}>
          {schools.map((school) => (
            <SchoolCard key={school.id} school={school} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowSchools;
