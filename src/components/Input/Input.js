import React from "react";
import styled from "styled-components";
import Icon from "../Icon/Icon";

const StyledDiv = styled.div`
  display: flex;
  width: 300px;
  height: 50px;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

const StyledButton = styled.button`
  position: relative;
  width: 50px;
  height: 50px;
  border: none;
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  height: 48px;
  top: 100px;
  right: 0;
`;

const Input = ({ type, visible }) => (
  <StyledDiv>
    <StyledInput
      type={type}
      visible={visible}
      placeholder={type === "email" ? "아이디(이메일)" : "비밀번호"}
    ></StyledInput>
    {type === "password" ? (
      <StyledButton>
        <StyledIcon className="hide" shape="hide" />
      </StyledButton>
    ) : null}
  </StyledDiv>
);

export default Input;
