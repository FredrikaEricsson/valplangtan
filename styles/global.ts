import styled, { createGlobalStyle } from "styled-components";
import { colors } from "../assets/colors";
import Link from "next/link";
interface IMenuProps {
  isOpen: boolean;
}
export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', serif;
  }
  body {
    overflow-x:hidden;
    margin: 0;
  }
  html {
    scroll-behavior: smooth;

  }
`;
export const MainContainer = styled.main`
  padding: 5% 10%;
  background-color: ${colors.colorLightBlue};
  height: 100vh;
`;

export const HeadingWrapper = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${colors.colorLightGrey};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${(props: IMenuProps) => (props.isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

export const Logo = styled.a`
  padding: 1rem 0;
  color: ${colors.colorBrown};
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;
export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: ${colors.colorDarkGrey};
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MenuLink = styled.a`
  padding: 0.5rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: ${colors.colorDarkGrey};
  transition: color 0.2s;
  font-size: 0.9rem;
  &:hover {
    color: ${colors.colorBrown};
  }
`;
