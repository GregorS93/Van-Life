import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { loginUser } from "../../apis/api";
import { setLoggedInLocal } from "../../localStorage/handles.localStorage";

export default function Login() {
  const Status = {
    Idle: "idle",
    Submitting: "submitting",
  };

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const [status, setStatus] = useState(Status.Idle);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/host";

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(Status.Submitting);
    try {
      const data = await loginUser(loginFormData);
      setError(null);
      navigate(from, { replace: true });
      {
        setLoggedInLocal();
      }
    } catch (err) {
      setError(err);
    } finally {
      setStatus(Status.Idle);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <div className="login-container">
      {location.state ? (
        <p className="error-message">{location.state.message}</p>
      ) : null}
      <h1>Sign in to your account</h1>
      {error?.message && <p className="error-message">{error.message}</p>}
      <form onSubmit={handleSubmit} className="login-form">
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
        />
        <button disabled={status === Status.Submitting} className="login-btn">
          {status === Status.Submitting ? "Logging in..." : "Log in"}
        </button>
      </form>
    </div>
  );
}
