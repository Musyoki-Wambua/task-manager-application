import React, { useState } from "react";

function SignUp() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [user, setUser] = useState({ email: "", password: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleRegistrationSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:9292/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (response.status === 201) {
          setIsRegistered(true);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:9292/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {!isRegistered ? (
        <form onSubmit={handleRegistrationSubmit}>
          <label>
            Full Name:
            <input type="text" name="full_name" value={user.full_name} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Email:
            <input type="text" name="email" value={user.email} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" value={user.password} onChange={handleInputChange} />
          </label>
          <br />
          <button type="submit">Register</button>
        </form>
      ) : (
        <form onSubmit={handleLoginSubmit}>
          <label>
            Email:
            <input type="text" name="email" value={user.email} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" value={user.password} onChange={handleInputChange} />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default SignUp;
