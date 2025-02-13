import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        <h2 className={styles.logo}>📩 Newsletter App</h2>
      </div>
      <ul className={styles.navLinks}>
        <li><Link to="/" className={styles.link}>Home</Link></li>
        <li><Link to="/dashboard" className={styles.link}>Dashboard</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
