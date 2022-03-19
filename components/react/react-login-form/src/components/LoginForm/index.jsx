import React, { useState } from "react";

import { Form } from "./style";


function LoginForm({ login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  function handleSubmit(e) {
    e.preventDefault();

    login(details);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div className="inner-form">
        <h2>Login</h2>
        
        {(error !== "") ? (
          <div className="error">{error}</div>
        ) : null}

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} autoComplete="off" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} autoComplete="off" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} autoComplete="off" />
        </div>
        <input type="submit" value="LOGIN" />
      </div>
    </Form>
  );
}

export default LoginForm;
