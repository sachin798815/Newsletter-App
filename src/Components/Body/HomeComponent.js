import styles from "./HomeComponent.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1>Stay Updated with Our Newsletter</h1>
        <p>Subscribe to receive the latest updates, articles, and exclusive content straight to your inbox.</p>
      </div>
    </div>
  );
};

export default Home;
