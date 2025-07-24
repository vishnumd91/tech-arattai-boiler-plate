import React from "react";

const styles = {
  dashboard: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    backgroundColor: "#f4f4f4",
  },
  dashboardTitle: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  dashboardButton: {
    marginTop: "10px",
    padding: "10px 15px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  dashboardCards: {
    display: "flex",
    gap: "10px",
    marginTop: "20px",
  },
  card: {
    flex: 1,
    padding: "10px",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
};

const Dashboard = () => {
  return (
    <div style={styles.dashboard}>
      <h1 style={styles.dashboardTitle}>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <button style={styles.dashboardButton}>Get Started</button>
      <div style={styles.dashboardCards}>
        <div style={styles.card}>
          <h2>Card Title 1</h2>
          <p>Some information about this card.</p>
        </div>
        <div style={styles.card}>
          <h2>Card Title 2</h2>
          <p>Some information about this card.</p>
        </div>
        <div style={styles.card}>
          <h2>Card Title 3</h2>
          <p>Some information about this card.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
