import InputText from "./Text";
import ImageSVG from "../../assets/image/Message.svg";
import { FC } from "react";
import { DefaultInputProps } from "./types";

const InputEmail: FC<DefaultInputProps> = ({ onChange }) => {
  return (
    <InputText
      onChange={onChange}
      name="email"
      backgroundImage={ImageSVG}
      placeHolder={"Seu e-mail"}
      type="email"
    />
  );
};

export default InputEmail;
