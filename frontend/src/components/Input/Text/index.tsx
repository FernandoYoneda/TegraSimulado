import { FC } from "react";
import "./index.css";

type InputTextProps = {
  type: "text" | "password" | "email";
  placeHolder: string;
  backgroundImage: string;
  name: string;
  onChange?: (text: string) => void;
};

const InputText: FC<InputTextProps> = ({
  backgroundImage,
  placeHolder,
  type,
  name,
  onChange,
}) => {
  return (
    <input
      onChange={(e) => onChange && onChange(e.target.value)}
      name={name}
      type={type}
      placeholder={placeHolder}
      className="input-text"
      style={{ background: `url(${backgroundImage}) no-repeat scroll 16px` }}
    />
  );
};

export default InputText;
