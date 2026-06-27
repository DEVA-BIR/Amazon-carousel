import React, { useState } from 'react';
import './Create.css';
import { Link } from 'react-router-dom'

const CreateAccount = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
    } else {
      setPasswordError('');
      // Submit logic (e.g., API call)
      console.log({ name, email, password });
    }
  };

  return (
    <div className="create-account-container">
      <div className="create-account-box">
        <div className="logo">
          <img 
            src="https://www.hatchwise.com/wp-content/uploads/2022/08/Amazon-Logo-2000-present-1024x576.jpeg"
            alt="Amazon Logo" 
          />
        </div>
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="At least 6 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {passwordError && <p className="error">{passwordError}</p>}
          </div>
          <Link to="/Login">
          <button type="submit" className="submit-btn">
            Continue
          </button></Link>
        </form>
        <div className="terms">
          By creating an account, you agree to Amazon's <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>.
        </div>
        <Link to="/Login">
        <div className="login-redirect">
          Already have an account?<span>Sign in</span>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default CreateAccount;