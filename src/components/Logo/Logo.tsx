import { FC } from "react";
import classes from './Logo.module.scss';

interface LogoProps {
  width: number;
  src: string;
}

const Logo: FC<LogoProps> = ({ width, src }) => {
  return (
    <img className={classes.logo} src={src} alt="cupcake logo" width={width} />
  )
}

export default Logo;
