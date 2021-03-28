import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  width: 342px;
  height: 53px;
  background-color: ${({ mode }) => {
    return mode === "Primary" ? "#0074e9" : "#FFFFFF";
  }};
  color: ${({ mode }) => {
    return mode === "Primary" ? "#FFFFFF" : "#0074e9";
  }};
  filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.45));
  border-radius: 3px;
`;

const Button = ({ children, mode, state }) => {
  return <StyledButton mode={mode}>{children}</StyledButton>;
};

Button.propTypes = {
  mode: PropTypes.string,
  state: PropTypes.string,
};

Button.defaultProps = {
  mode: "Primary",
  state: "normal",
};

export default Button;
