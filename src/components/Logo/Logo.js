import React from "react";
import { ReactComponent as BlackLogo } from "../../icon/logo-black.svg";
import { ReactComponent as ColorfulLogo } from "../../icon/logo-colorful.svg";
import { ReactComponent as MonoLogo } from "../../icon/logo-mono.svg";

const Logo = ({ type }) => {
  switch (type) {
    case "black":
      return <BlackLogo></BlackLogo>;
    case "color":
      return <ColorfulLogo></ColorfulLogo>;
    case "mono":
      return <MonoLogo></MonoLogo>;
    default:
      return <ColorfulLogo></ColorfulLogo>;
  }
};

export default Logo;
