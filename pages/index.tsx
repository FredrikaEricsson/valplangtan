import Login from "../components/login";
import { Headline } from "../styles/global";
import { StartPageWrapper } from "../styles/startPage";

const IndexPage = () => {
  return (
    <StartPageWrapper>
      <Headline>Välkommen till valplängtan</Headline>
      <Headline>Logga in eller registrera dig nedan</Headline>
      <Login></Login>
    </StartPageWrapper>
  );
};

export default IndexPage;
