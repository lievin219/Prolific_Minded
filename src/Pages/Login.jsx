import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./css/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);

  // Handle input changes
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Login Function
  const loginFunc = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // Store token in cookies
        Cookies.set("authTokenii", data.token, { expires: 1, secure: true });

        notifySuccess("Login Successful!");
        setFormData({ email: "", password: "" });

        setTimeout(() => {
          navigate("/shop");
          window.location.reload();
        }, 2000);
      } else {
        notifyError(data.message || "Invalid email or password.");
      }
    } catch (error) {
      notifyError("Something went wrong. Try again!");
    }
  };

  // Signup Function
  const signup = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        notifySuccess("User registered! Check your email for verification.");
        setTimeout(() => {
          setState("Login");
        }, 2000);
      } else {
        notifyError(data.message || "Registration failed.");
      }
    } catch (error) {
      notifyError(`Something went wrong. Try again! due to ${error}`);
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignuppage-fields">
          <input
            type="email"
            name="email"
            onChange={changeHandler}
            value={formData.email}
            placeholder="Email Address"
          />
          <input
            type="password"
            name="password"
            onChange={changeHandler}
            value={formData.password}
            placeholder="Enter your Password"
          />
          <input
            type="password"
            name="password"
            onChange={changeHandler}
            value={formData.role}
            placeholder="Enter your role"
          />
          <input
            type="password"
            name="password"
            onChange={changeHandler}
            value={formData.name}
            placeholder="Enter name"
          />
        </div>
        <button onClick={state === "Login" ? loginFunc : signup}>
          Continue
        </button>
        {state === "Login" ? (
          <p className="loginsignup-login">
            Create an account?{" "}
            <span onClick={() => setState("Sign up")}>Signup Here</span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Already have an account?{" "}
            <span onClick={() => setState("Login")}>Login Here</span>
          </p>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
