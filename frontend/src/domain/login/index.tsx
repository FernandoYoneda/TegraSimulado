import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import InputEmail from "../../components/Input/Email";
import InputPassword from "../../components/Input/Password";
import Subtitle from "../../components/Subtitle";
import Title from "../../components/Title";
import "./index.css";
import Spacer from "./Spacer";
import GoogleButton from "./GoogleButton";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <Title>Bem-vindo!</Title>
      <Subtitle>Faça o login para continuar</Subtitle>
      <form className="register-form" onSubmit={(e) => e.preventDefault()}>
        <InputEmail />
        <InputPassword />
        <Button
          text="Entrar"
          variant="big"
          type="submit"
          onClick={() => navigate("/")}
        />
      </form>
      <Spacer />
      <GoogleButton />
      <Subtitle>
        Não tem uma conta?{" "}
        <Link className="link-login" to="/cadastro">
          Cadastrar
        </Link>
      </Subtitle>
    </>
  );
};

export default Login;
