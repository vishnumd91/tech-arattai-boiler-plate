import React from "react";
import Dashboard from "../modules/dashboard/components/Dashboard";
import Todos from "../modules/users/Users";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to the Home Page</h1>
      <p style={styles.description}>This is a clean and simple home page.</p>
      <Dashboard />
      <Todos />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: "2rem",
    color: "#333",
  },
  description: {
    fontSize: "1.2rem",
    color: "#666",
  },
};

export default Home;
