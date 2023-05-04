import { FC } from "react";
import ImageSVG from "../../assets/image/Password.svg";
import InputText from "./Text";
import { DefaultInputProps } from "./types";

const InputPassword: FC<DefaultInputProps> = ({ onChange }) => {
  return (
    <InputText
      onChange={onChange}
      name="password"
      backgroundImage={ImageSVG}
      placeHolder={"Senha"}
      type="password"
    />
  );
};

export default InputPassword;
