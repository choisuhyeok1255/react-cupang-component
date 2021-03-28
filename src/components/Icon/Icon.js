import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ReactComponent as Letter } from "../../icon/icon-letter.svg";
import { ReactComponent as Lock } from "../../icon/icon-lock.svg";
import { ReactComponent as Show } from "../../icon/icon-show.svg";
import { ReactComponent as Hide } from "../../icon/icon-hide.svg";

const Icons = ({ className, shape }) => {
  switch (shape) {
    case "letter":
      return <Letter className={className}></Letter>;
    case "lock":
      return <Lock className={className}></Lock>;
    case "show":
      return <Show className={className}></Show>;
    case "hide":
      return <Hide className={className}></Hide>;
    default:
      return null;
  }
};

const Icon = styled(Icons)`
  width: 50px;
  height: 45px;
`;

Icons.propTypes = {
  shape: PropTypes.string,
};

Icons.defaultProps = {
  shape: "letter",
};

export default Icon;
