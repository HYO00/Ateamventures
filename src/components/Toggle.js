import React from "react";
import styled from "styled-components";

const ToggleContainer = styled.div`
  display: flex;
  padding-top: 60px;
  @media screen and (max-width: 480px) {
    position: absolute;
    top: 230px;
  }
`;
const ToggleWrapper = styled.div`
  position: relative;
  margin-right: 10px;
  cursor: pointer;
  > .toggle-container {
    width: 46px;
    height: 14px;
    border-radius: 30px;
    background-color: #C2C2C2;
    &.toggle--checked {
      background-color: #bbdefb;
    }
  }

  > .toggle-circle {
    background-color: #f5f5f5;
    position: absolute;
    top: -4px;
    left: 0px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    transition: 0.5s;
    &.toggle--checked {
        background-color:: #2196F3;
        left:27px;
    }
    
  }
`;

const Toggle = ({ isOn, setIsOn }) => {
  const toggleHandelr = () => {
    setIsOn(!isOn);
  };

  return (
    <ToggleContainer>
      <ToggleWrapper onClick={toggleHandelr}>
        <div className={`toggle-container ${isOn ? "toggle--checked" : ""}`} />
        <div className={`toggle-circle ${isOn ? "toggle--checked" : ""}`} />
      </ToggleWrapper>
      <p>상담 중인 요청만 보기</p>
    </ToggleContainer>
  );
};

export default Toggle;
