import { useState } from "react";
import styles from "./SubscriptionForm.module.css";

const SubscriptionForm = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }
    alert(`Subscribed successfully with: ${email}`);
    setEmail("");
  };

  return (
    <div className={styles.formContainer}>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.input}
      />
      <button onClick={handleSubscribe} className={styles.button}>Subscribe</button>
    </div>
  );
};

export default SubscriptionForm;
