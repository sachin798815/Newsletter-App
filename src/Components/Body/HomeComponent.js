import SubscriptionForm from "./Components/SubscriptionForm";
import styles from "./HomeComponeny.module.css";

const HomeComponent = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to Our Newsletter</h1>
      <p>Stay updated with the latest news. Subscribe now!</p>
      <SubscriptionForm />
    </div>
  );
};

export default HomeComponent;
