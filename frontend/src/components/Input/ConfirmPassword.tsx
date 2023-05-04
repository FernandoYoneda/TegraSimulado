import { FC } from "react";
import ImageSVG from "../../assets/image/Password.svg";
import InputText from "./Text";
import { DefaultInputProps } from "./types";

const InputConfirmPassword: FC<DefaultInputProps> = ({ onChange }) => {
  return (
    <InputText
      onChange={onChange}
      name="confirm-password"
      backgroundImage={ImageSVG}
      placeHolder={"Confirme a Senha"}
      type="password"
    />
  );
};

export default InputConfirmPassword;
