import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import InputEmail from "../../components/Input/Email";
import InputPassword from "../../components/Input/Password";
import Subtitle from "../../components/Subtitle";
import Title from "../../components/Title";
import "./index.css";
import Spacer from "./Spacer";
import GoogleButton from "./GoogleButton";
import { MouseEventHandler, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { login } from "../../features/user/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [loginEmpty, setLoginEmpty] = useState(false);
  const dispatch = useAppDispatch();

  const submitHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    setLoginError(false);
    setLoginEmpty(false);

    if (email === "" || password === "") {
      return setLoginEmpty(true);
    }

    if (email === "fernando@email.com" && password === "123") {
      dispatch(login({ admin: false, id: "1", email: "fernando@email.com" }));
      return navigate("/produtos");
    }

    if (email === "fernando@tegra.com" && password === "123") {
      setLoginError(false);
      dispatch(login({ admin: true, id: "2", email: "fernando@tegra.com" }));
      return navigate("/produtos");
    }

    setLoginError(true);
  };
  return (
    <>
      <Title>Bem-vindo!</Title>
      <Subtitle>Faça o login para continuar</Subtitle>
      <form className="register-form" onSubmit={(e) => e.preventDefault()}>
        <InputEmail onChange={setEmail} />
        <InputPassword onChange={setPassword} />
        <Button
          text="Entrar"
          variant="big"
          type="submit"
          onClick={submitHandler}
        />
        {loginError && (
          <p className="error-message">Usuário e/ou senha incorreto</p>
        )}
        {loginEmpty && (
          <p className="error-message">E-mail e senha são obrigatórios</p>
        )}
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
