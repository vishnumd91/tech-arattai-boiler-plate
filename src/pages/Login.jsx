import React from "react";
import LoginForm from "../modules/login/components/LoginForm";

const Login = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>
      <LoginForm />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
};

export default Login;
