import React from "react";
import Link from "next/link";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>SchoolApp</div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/addSchool">Add School</Link>
        </li>
        <li>
          <Link href="/showSchools">Show Schools</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
