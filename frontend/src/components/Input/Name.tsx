import { FC } from "react";
import ImageSVG from "../../assets/image/User.svg";
import InputText from "./Text";
import { DefaultInputProps } from "./types";

const InputName: FC<DefaultInputProps> = ({ onChange }) => {
  return (
    <InputText
      onChange={onChange}
      name="username"
      backgroundImage={ImageSVG}
      placeHolder={"Nome completo"}
      type="text"
    />
  );
};

export default InputName;
