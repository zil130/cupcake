import { FC } from "react";
import Logo from "./Logo/Logo";
import logo from "../assets/cupcake_logo.png";

const App: FC = () => {
  return (
    <Logo src={logo} width={300} />
  );
};

export default App;
