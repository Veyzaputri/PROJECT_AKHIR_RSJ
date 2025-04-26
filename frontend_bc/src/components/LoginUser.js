// src/components/LoginUser.js

import React, { useState } from 'react';
import axios from 'axios';

import { useNavigate } from "react-router-dom";

function LoginUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password
      });

      localStorage.setItem("user", JSON.stringify(response.data));
      console.log("Login Berhasil:");
      navigate("/dashboard"); // misal ke dashboard setelah login
    } catch (error) {
      console.log(error);
      alert("Login failed. Please check username/password.");
    }
  };

  const goToSignUp = () => {
    navigate("/register");
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <div className="box p-5">
          <h1 className="title has-text-centered has-text-info">Login</h1>
          <form onSubmit={loginUser}>
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input 
                  type="text" 
                  className="input is-medium is-rounded" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username" 
                  required 
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input 
                  type="password" 
                  className="input is-medium is-rounded" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  placeholder="Enter password" 
                  required 
                />
              </div>
            </div>

            <div className="field has-text-centered">
              <button type="submit" className="button is-link is-medium is-rounded px-5">
                Login
              </button>
            </div>
          </form>
          <div className="has-text-centered mt-3">
            <p>Don't have an account?</p>
            <button 
              onClick={goToSignUp}
              className="button is-light is-rounded mt-2"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginUser;
