import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../initFirebase";
import UserForm from "../components/UserForm";
import {useNavigate} from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = async (e, email, password) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
      <div className="Content">
        <div className="Login-Form">
      <h1>Login</h1>
      <UserForm handleSubmit={handleLogin} submitButtonLabel="Login" or="register" />
    </div>
      </div>
  );
}
