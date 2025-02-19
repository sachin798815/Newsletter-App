const Dashboard = () => {
  const [subscribers, setSubscribers] = useState(["user1@example.com", "user2@example.com"]);

  return (
    <div className={styles.container}>
      <h1>Admin Dashboard</h1>
      <h3>Subscribers List</h3>
      <ul className={styles.list}>
        {subscribers.length > 0 ? (
          subscribers.map((email, index) => <li key={index} className={styles.listItem}>{email}</li>)
        ) : (
          <p>No subscribers yet.</p>
        )}
      </ul>
    </div>
  );
};

export default Dashboard;
