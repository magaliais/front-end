import { useState, useEffect } from "react";

import { Application } from "./style";

import LoginForm from "./components/LoginForm";


function App() {
  window.addEventListener('storage', () => {
    if(user.email === adminUser.email && user.password === adminUser.password) {
      setLogged("true");
    } else {
      localStorage.setItem('logged', "false");
      setLogged("false");
    }
  })

  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [logged, setLogged] = useState(localStorage.getItem('logged'));
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem('logged', logged);
    localStorage.setItem('user', JSON.stringify(user));
  }, [logged])

  function login(details) {
    if(details.email === adminUser.email && details.password === adminUser.password) {
      setUser({
        name: details.name,
        email: details.email
      });

      setLogged("true");
    } else {
      setError("The details do not match!");
    }
  }
  
  function logout() {
    setUser({name: "", email: ""});

    setError("");

    setLogged("false");
  }

  return (
    <Application>
      { (logged === "true") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={logout}>Logout</button>
        </div>
      ) :  (
        <LoginForm login={login} error={error} />
      )}
    </Application>
  )
}

export default App