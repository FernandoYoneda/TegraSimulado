import { FC, MouseEventHandler } from "react";
import "./index.css";

type Props = {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant: "small" | "big";
  type?: "button" | "submit";
};

const Button: FC<Props> = ({ text, onClick, variant, type }) => {
  return (
    <button
      type={type ?? "button"}
      className={`button ${
        variant === "small" ? "button-small" : "button-big"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
