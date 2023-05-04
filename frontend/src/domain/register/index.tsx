import { Link } from "react-router-dom";
import Button from "../../components/Button";
import InputConfirmPassword from "../../components/Input/ConfirmPassword";
import InputEmail from "../../components/Input/Email";
import InputName from "../../components/Input/Name";
import InputPassword from "../../components/Input/Password";
import Subtitle from "../../components/Subtitle";
import Title from "../../components/Title";
import "./index.css";

const Register = () => {
  return (
    <>
      <Title>Vamos começar!</Title>
      <Subtitle>Crie uma nova conta</Subtitle>
      <form className="register-form" onSubmit={(e) => e.preventDefault()}>
        <InputName />
        <InputEmail />
        <InputPassword />
        <InputConfirmPassword />
        <Button text="Cadastrar" variant="big" type="submit" />
      </form>
      <Subtitle>
        Já tem uma conta?{" "}
        <Link className="link-login" to="/login">
          Entrar
        </Link>
      </Subtitle>
    </>
  );
};

export default Register;
