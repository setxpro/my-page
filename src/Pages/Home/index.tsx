import About from "../About";
import * as C from "./styles";

const Home = () => {
  return (
    <C.Container>
      <C.ContentIntro>
        <C.ContentTop>
          <h1>
            <span>Patrick</span> Anjos
          </h1>
          <h2>
            Full-Stack <span>Developer</span>
          </h2>
        </C.ContentTop>
      </C.ContentIntro>
      <C.Blur></C.Blur>
    </C.Container>
  );
};

export default Home;
