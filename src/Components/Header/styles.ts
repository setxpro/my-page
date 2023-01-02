import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { MdClose, MdLightMode, MdNightlight } from "react-icons/md";

export const Container = styled.div<{
  wrapperMenu: boolean;
  disappearHeader: boolean;
}>`
  height: 70px;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  transition: 0.5s ease;
  background: ${(props) =>
    props.disappearHeader ? props.theme.colors.header : "transparent"};

  overflow: hidden;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  z-index: 9999;

  box-shadow: 1px 1px 5px
    ${(props) => (props.disappearHeader ? "#000" : "transparent")};

  @media (max-width: 528px) {
    width: ${(props) => (props.wrapperMenu ? "245px" : "0px")};
    height: 100vh;
    align-items: flex-start;
    padding: 0;
    z-index: 9999;

    background: ${(props) =>
      props.disappearHeader
        ? props.theme.colors.header
        : props.theme.colors.header};
  }
`;
export const ContentHeaderLeft = styled.div`
  @media (max-width: 528px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
export const ContentBlur = styled.div<{ wrapperMenu: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);

  display: ${(props) => (props.wrapperMenu ? "inline" : "none")};
  cursor: pointer;

  z-index: 99;
`;
export const ContentHeaderRight = styled.div``;

export const NavArea = styled.nav`
  width: 100%;
`;
export const Ul = styled.ul`
  display: flex;
  gap: 1rem;

  width: inherit !important;
  @media (max-width: 528px) {
    width: inherit !important;
    flex-direction: column;
    gap: 0;
  }

  a {
    transition: 0.5s ease;
    /* color: ${(props) => props.theme.colors.text}; */
    color: #fff;
    white-space: nowrap;
    @media (max-width: 528px) {
      padding: 0.5rem;
      font-size: 1.5em;
      &:hover {
        background: #6555;
      }
    }
  }
`;
export const ThemeContentArea = styled.div`
  @media (max-width: 528px) {
    display: none;
  }
`;
export const ContentTopMobile = styled.div`
  display: none;

  h2 {
    font-size: 1.8em;
    transition: 0.5s ease;
    color: ${(props) => props.theme.colors.text};
    white-space: nowrap;
  }

  @media (max-width: 528px) {
    display: inline-flex;
    gap: 10px;
    width: 100%;

    height: 70px;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    border-bottom: 1px solid #2222;
  }
`;

export const HeaderMobile = styled.div`
  display: none;
  z-index: 999;
  @media (max-width: 528px) {
    display: inline-flex;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    height: 70px;
    background: green;
    transition: 0.5s ease;
    background: ${(props) => props.theme.colors.headerMobile};

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
  }
`;

export const BarsIcon = styled(FaBars)`
  cursor: pointer;
  font-size: 1.5em;
  transition: 0.5s ease;
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 528px) {
    font-size: 2.5em;
  }
`;
export const CloseIcon = styled(MdClose)`
  cursor: pointer;
  font-size: 1.5em;
  transition: 0.5s ease;
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 528px) {
    font-size: 2.5em;
  }
`;
export const LightIcon = styled(MdLightMode)`
  cursor: pointer;
  font-size: 1.5em;
  transition: 0.5s ease;
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 528px) {
    font-size: 2.5em;
  }
`;
export const DarkIcon = styled(MdNightlight)`
  cursor: pointer;
  font-size: 1.5em;
  transition: 0.5s ease;
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 528px) {
    font-size: 2.5em;
  }
`;
