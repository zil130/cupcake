import { FC } from "react"

interface LogoProps {
  width: number;
  src: string;
}

const Logo: FC<LogoProps> = ({ width, src }) => {
  return (
    <img src={src} alt="cupcake logo" width={width} />
  )
}

export default Logo;
