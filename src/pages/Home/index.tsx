import { useCallback, useEffect, useState } from "react";
import * as services from "../../services/issues";
import Post from "./components/Post";
import Profile from "./components/Profile";
import Search from "./components/Search";
import { Posts } from "./styles";
import debounce from "../../utils/debounce";

interface Post {
  id: number;
  code: number;
  title: string;
  createdAt: Date;
  content: string;
  url: string;
}

function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = useCallback(async () => {
    const issues = await services.fetchIssues();
    setPosts(issues);
  }, []);

  useEffect(() => {
    void fetchPosts();
  }, [fetchPosts]);

  async function handleSearch(query: string): Promise<void> {
    const issues = query.length
      ? await services.searchIssues(query)
      : await services.fetchIssues();

    setPosts(issues);
  }

  return (
    <>
      <Profile />
      <Search onSearch={debounce(handleSearch)} />

      <Posts>
        {posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            code={post.code}
            createdAt={post.createdAt}
            content={post.content}
          />
        ))}
      </Posts>
    </>
  );
}

export default Home;
