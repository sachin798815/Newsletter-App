import React from "react";
import SubscriptionForm from "../components/SubscriptionForm";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to Our Newsletter</h1>
      <p>Stay updated with the latest news. Subscribe now!</p>
      <SubscriptionForm />
    </div>
  );
};

export default Home;
