import Login from "../domain/login";
import LoginContainer from "../domain/login/Container";
import DesktopImageContainer from "../components/DesktopImageContainer";

const LoginPage = () => {
  return (
    <DesktopImageContainer>
      <LoginContainer>
        <Login />
      </LoginContainer>
    </DesktopImageContainer>
  );
};

export default LoginPage;
