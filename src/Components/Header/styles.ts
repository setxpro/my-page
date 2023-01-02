import styled from "styled-components";

export const Container = styled.div<{ wrapperMenu: boolean }>`
  height: 70px;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  background: red;
  overflow: hidden;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  transition: 0.5s ease;

  z-index: 999;

  @media (max-width: 528px) {
    width: ${(props) => (props.wrapperMenu ? "245px" : "0px")};
    height: 100vh;
    align-items: flex-start;
    padding: 0;
  }
`;
export const ContentHeaderLeft = styled.div`
  @media (max-width: 528px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
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
    color: #fff;
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

  @media (max-width: 528px) {
    display: inline-flex;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    height: 70px;
    background: blue;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
  }
`;
