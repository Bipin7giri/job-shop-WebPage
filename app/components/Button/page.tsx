import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button className="w-full  items-center p-2">{children}</button>;
};
