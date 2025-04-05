import React, { useState } from "react";
// import grl from "./images/grl.png"; // Replace with the path to your image
import dhanushriGhibiliimage from "./images/dhanushree_ghibili.png"
import { Toast } from "react-bootstrap"; // Importing Toast from React-Bootstrap for the cute alert
import 'animate.css';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [error, setError] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let errorMessage = { username: "", password: "" };
    let isValid = true;

    // Check if username and password are provided
    if (!username) {
      errorMessage.username = "Username is required.";
      isValid = false;
    }

    if (!password) {
      errorMessage.password = "Password is required.";
      isValid = false;
    }

    // If validation failed, set error messages but do not show toast
    if (!isValid) {
      setError(errorMessage);
      return;  // Skip showing the Toast for error
    }

    // Check for specific username and password
    if (username === "dhanushri" && password === "dhanushri.17") {
      setAlertMessage("Login successful! ✨");
      setShowAlert(true);
    } else {
      setAlertMessage(" 😕 Oops! The username or password you entered is incorrect. Please try again.");
      setShowAlert(true);
    }

    // Automatically hide the toast after 3 seconds
    setTimeout(() => setShowAlert(false), 3000);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    // Reset the username error if user starts typing
    if (error.username) {
      setError((prevError) => ({
        ...prevError,
        username: "",
      }));
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // Reset the password error if user starts typing
    if (error.password) {
      setError((prevError) => ({
        ...prevError,
        password: "",
      }));
    }
  };

  return (
    <div className="login-container bg-gradient-to-r from-pink-500 to-indigo-500 min-h-screen flex justify-center items-center p-4">
      <div className="login-box bg-white p-8 rounded-3xl shadow-2xl flex flex-col sm:flex-row items-center justify-between w-full max-w-5xl space-y-8 sm:space-y-0 sm:space-x-6">
        {/* Left Section (Form) */}
        <div className="login-left w-full sm:w-1/2 flex flex-col items-center sm:items-start">
          <h2 className="text-3xl font-bold text-center sm:text-left text-gray-800 mb-4">
            Admin Login
          </h2>
          <p className="text-center sm:text-left text-sm text-red-600 font-semibold mb-5" >
            Only admin has access to this page.
          </p>

          <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-semibold text-gray-800 ">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                className="w-full mt-3 p-3 rounded-lg border-1 border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
                placeholder="Enter your username"
              />
              {error.username && <p className="text-sm text-red-600 ">{error.username}</p>}
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-800">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full  mt-3 p-3 rounded-lg border-1 border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
                placeholder="Enter your password"
              />
              {error.password && <p className="text-sm text-red-600">{error.password}</p>}
            </div>
            <button
              type="submit"
              className="w-full py-3 mt-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>

        {/* Right Section (Image) */}
        <div className="login-right w-full sm:w-1/2 flex justify-center items-center mt-8 sm:mt-0">
          <img
            src={dhanushriGhibiliimage}
            alt="Login Illustration"
            className="rounded-2xl shadow-xl max-w-full"
          />
        </div>
      </div>

      {/* Beautiful Bootstrap Alert (Toast) */}
      <div className="position-fixed top-0 w-full p-4 z-50">
        <Toast
          show={showAlert}
          onClose={() => setShowAlert(false)}
          className="toast-custom animate__animated animate__fadeIn animate__delay-1s"
        >
          <Toast.Body className="d-flex align-items-center justify-content-center bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600  p-4 rounded-xl shadow-lg transform transition-all duration-500">
            <strong className="font-bold">{alertMessage}</strong>
          </Toast.Body>
        </Toast>
      </div>
    </div>
  );
};

export default Login;
