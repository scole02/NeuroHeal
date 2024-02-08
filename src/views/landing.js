import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';

// Define the Login component
const Login = ({ isLoggedIn, login }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform authentication logic here (e.g., validate credentials)
    // For simplicity, let's assume the login is successful if username and password are not empty
    if (username.trim() && password.trim()) {
      login();
    } else {
      alert('Invalid username or password');
    }
  };

  // Redirect to dashboard if already logged in
  if (isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <h2>Login Page</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

// Define the Dashboard component
const Dashboard = ({ isLoggedIn, logout }) => {
  // Redirect to login if not logged in
  if (!isLoggedIn) {
    return <Redirect to="/" />;
  }

  const handleLogout = () => {
    // Perform logout logic here (e.g., clear session, etc.)
    logout();
  };

  return (
    <div>
      <h2>Dashboard Page</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

// Define the App component
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Login isLoggedIn={isLoggedIn} login={login} />
          </Route>
          <Route path="/dashboard">
            <Dashboard isLoggedIn={isLoggedIn} logout={logout} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

// Export the App component
export default App;
