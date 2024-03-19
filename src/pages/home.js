import Navigation from "../components/mainNavigation";
import { styled } from "styled-components";

const Welcome = styled.h1`
  text-align: center;
  letter-spacing: 1.2px;
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
`;
const WelcomeText = styled.p`
  text-align: center;
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  letter-spacing: 1.2px;
`;
function HomePage() {
  return (
    <>
      <Welcome>Welcome!</Welcome>
      <WelcomeText> Browse all our amazing events.</WelcomeText>
    </>
  );
}

export default HomePage;
