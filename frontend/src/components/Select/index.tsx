import { FC } from "react";
import "./index.css";

type SelectProps = {
  onChange: (value: number) => void;
  value: string | number | readonly string[] | undefined;
};

const Select: FC<SelectProps> = ({ onChange, value }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="select"
    >
      <option value="1">1x</option>
      <option value="2">2x</option>
      <option value="3">3x</option>
    </select>
  );
};

export default Select;
