import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
`;
export const ContentTop = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;

  display: flex;
  flex-direction: column;

  h1 {
    color: #fff;
    z-index: 999;
    font-weight: 400;
    font-size: 5em;

    span {
      color: cyan;
    }
  }
  h2 {
    color: #fff;
    z-index: 999;
    font-weight: 400;
    font-size: 4em;

    @media (max-width: 528px) {
      font-size: 2em;
    }

    span {
      color: cyan;
    }
  }
`;
export const ContentIntro = styled.div`
  height: 100vh;
  background-image: ${(props) =>
    props.theme.title === "dark"
      ? `url('https://www.planoabypa.com.br/ikhon/wp-content/uploads/2021/03/03.jpg')`
      : `url('https://img.freepik.com/vetores-premium/fundo-branco-tecnologia_23-2148405986.jpg?w=2000')`};
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.5s ease;
  background-position: center;
  background-attachment: fixed;
  padding: 0 10px;
`;
export const Blur = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 99;
`;

// https://static.vecteezy.com/ti/vetor-gratis/p3/2204194-tecnologia-fundo-design-na-cor-branca-gratis-vetor.jpg

// https://www.planoabypa.com.br/ikhon/wp-content/uploads/2021/03/03.jpg
// https://img.freepik.com/vetores-premium/fundo-branco-tecnologia_23-2148405986.jpg?w=2000

//https://revistaeducacao.com.br/wp-content/uploads/2021/02/tecnologia-linguagem.jpg
