import { useContext } from "react";
import { AuthContext } from "../../Contexts/Auth.context";
import { setSessionStorageData } from "../../storage/sessionstorage";
import "./style.css";
import { useNavigate } from "react-router";
import API from "../../axios/custom-interceptors";

export default function Login() {
  const { setLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogin() {
    API.post("/auth/signin", {
      email: "vishnu@test.com",
      password: "password",
    })
      .then((response) => {
        if (response.status === 200) {
          setLoggedIn(true);
          setSessionStorageData("_tk", response.data.token);
          navigate("/home/MensTees");
        }
      })
      .catch((error) => console.error(error));
  }
  return (
    <div className="login-page-container d-flex align-items-center justify-content-center">
      <div
        className="card"
        style={{
          width: 400,
        }}
      >
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="email"
              className="form-control"
              id="password"
              placeholder="**********"
            />
          </div>
          <div className="d-grid gap-2">
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleLogin}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
