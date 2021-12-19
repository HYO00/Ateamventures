import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.aside`
  z-index: 999;
  position: fixed;
  left: ${({ isToggle }) => (isToggle ? "0" : "-200%")};
  transition: 0.8s ease-in-out;
`;

const SidebarBackground = styled.div`
  display: ${({ isToggle }) => (isToggle ? "flex" : "none")};
  position: absolute;
  z-index: 777;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
`;

const SidebarHeader = styled.h3`
  padding: 22px;
  color: #2296f3;
  border-bottom: 1px solid #e5e5e5;
`;

const Icon = styled.div`
  position: absolute;
  top: 10px;
  left: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
const SidebarWrapper = styled.div`
  width: 80%;
  height: 100%;
  background: #fff;
`;

const SidebarMenu = styled.ul`
  display: column;
  text-align: left;
  padding: 36px 32px;
`;
const SidebarList = styled.li`
  list-style: none;
  margin-bottom: 28px;
  cursor: pointer;
`;
const Sidebar = ({ isToggle, toggleHandler }) => {
  return (
    <>
      <SidebarContainer isToggle={isToggle}>
        <SidebarBackground isToggle={isToggle} onClick={toggleHandler}>
          <SidebarWrapper>
            <SidebarHeader>CAPA파트너스</SidebarHeader>
            <SidebarMenu>
              <SidebarList>
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 10.5H10.5V12.1667H12V10.5ZM12 7.16667H10.5V8.83333H12V7.16667ZM13.5 13.8333H7.5V12.1667H9V10.5H7.5V8.83333H9V7.16667H7.5V5.5H13.5V13.8333ZM6 3.83333H4.5V2.16667H6V3.83333ZM6 7.16667H4.5V5.5H6V7.16667ZM6 10.5H4.5V8.83333H6V10.5ZM6 13.8333H4.5V12.1667H6V13.8333ZM3 3.83333H1.5V2.16667H3V3.83333ZM3 7.16667H1.5V5.5H3V7.16667ZM3 10.5H1.5V8.83333H3V10.5ZM3 13.8333H1.5V12.1667H3V13.8333ZM7.5 3.83333V0.5H0V15.5H15V3.83333H7.5Z"
                    fill="#323D45"
                  />
                </svg>
                파트너정밀가공
              </SidebarList>
              <SidebarList>로그아웃</SidebarList>
            </SidebarMenu>
          </SidebarWrapper>
        </SidebarBackground>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
