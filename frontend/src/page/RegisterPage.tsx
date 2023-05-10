import DesktopImageContainer from "../components/DesktopImageContainer";
import Register from "../domain/register";
import RegisterContainer from "../domain/register/Container";

const RegisterPage = () => {
  return (
    <DesktopImageContainer>
      <RegisterContainer>
        <Register />
      </RegisterContainer>
    </DesktopImageContainer>
  );
};

export default RegisterPage;
