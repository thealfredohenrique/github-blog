import Profile from "./components/Profile";
import Search from "./components/Search";
import { HomeWrapper } from "./styles";

function Home() {
  return (
    <HomeWrapper>
      <Profile />
      <Search />
    </HomeWrapper>
  );
}

export default Home;
