import React, { useState } from "react";

export default function Register({ isLoggedIn, setLoggedIn }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [registerError, setRegisterError] = useState(null);
  const [registered, setRegistered] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!userName || !password || !email || !firstName || !lastName) {
      setRegisterError("All fields are required.");
      return;
    }

    try {
      const response = await fetch("/djangoapp/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName,
          password,
          email,
          firstName,
          lastName,
        }),
      });

      const data = await response.json();

      if (data.status === "Authenticated") {
        setLoggedIn(true);
        setRegistered(true);
        setRegisterError(null);
        sessionStorage.setItem("username", data.userName);
      } else {
        setRegisterError(
          data.error || "Registration failed. Please try again."
        );
      }
    } catch (error) {
      setRegisterError("An error occurred. Please try again later.");
    }
  };

  if (registered) {
    return (
      <div className="container mt-5">
        <div className="alert alert-success text-center" role="alert">
          <h4>Registration Successful!</h4>
          <p>Welcome, {firstName} {lastName}! You are now logged in.</p>
          <a href="/" className="btn btn-primary">Go to Home</a>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-header bg-primary text-white text-center">
              <h3>Register</h3>
              <p className="mb-0">Create your account</p>
            </div>
            <div className="card-body p-4">
              {registerError && (
                <div className="alert alert-danger" role="alert">
                  {registerError}
                </div>
              )}
              <form onSubmit={handleRegister}>
                <div className="form-group mb-3">
                  <label htmlFor="username">
                    <strong>Username</strong>
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    placeholder="Choose a username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="firstName">
                    <strong>First Name</strong>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="form-control"
                    placeholder="Enter your first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="lastName">
                    <strong>Last Name</strong>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="form-control"
                    placeholder="Enter your last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="email">
                    <strong>Email</strong>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="password">
                    <strong>Password</strong>
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block w-100 mt-3"
                >
                  Register
                </button>
              </form>
              <div className="text-center mt-3">
                <p>
                  Already have an account?{" "}
                  <a href="/login">Login here</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}