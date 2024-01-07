import { useContext } from "react";
import { AuthContext } from "../../Contexts/Auth.context";
import LoginCard from "../../components/LoginCard/LoginCard";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  function handleLogin() {
    fetch("http://localhost:5000/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "vishnu@test.com",
        password: "password",
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        if (result.success) {
          try {
            sessionStorage.setItem("_tk", result.token);
            setIsLoggedIn(true);
            navigate("/home/MensTees");
          } catch (error) {
            console.log(error);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="login-page-container d-flex align-items-center justify-content-center">
      <LoginCard handleLogin={handleLogin} />
    </div>
  );
}
