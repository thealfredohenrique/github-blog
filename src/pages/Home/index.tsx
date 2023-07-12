import Post from "./components/Post";
import Profile from "./components/Profile";
import Search from "./components/Search";
import { HomeWrapper, Posts } from "./styles";

function Home() {
  return (
    <HomeWrapper>
      <Profile />
      <Search />

      <Posts>
        <Post />
        <Post />
        <Post />
        <Post />
      </Posts>
    </HomeWrapper>
  );
}

export default Home;
