import styled from "styled-components";

export const Container = styled.div``;

export const ContentPages = styled.div`
  height: calc(100vh - 70px);
  transition: 0.5s ease;
  background: ${(props) => props.theme.colors.body};
`;
