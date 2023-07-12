import { useCallback, useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { api } from "../../lib/axios";
import Post from "./components/Post";
import Profile from "./components/Profile";
import Search from "./components/Search";
import { HomeWrapper, Posts } from "./styles";

interface Post {
  id: number;
  code: number;
  title: string;
  createdAt: Date;
  content: string;
  url: string;
}

interface FetchPostResponse {
  id: number;
  number: number;
  title: string;
  created_at: string;
  body: string;
  url: string;
}

const GITHUB_USERNAME = "thealfredohenrique";
const GITHUB_REPO = "github-blog";

function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = useCallback(async () => {
    const response: AxiosResponse<FetchPostResponse[]> = await api.get(
      `/repos/${GITHUB_USERNAME}/${GITHUB_REPO}/issues`
    );

    response.data;

    setPosts(
      response.data.map((e) => ({
        id: e.id,
        code: e.number,
        title: e.title,
        createdAt: new Date(e.created_at),
        content: e.body,
        url: e.url,
      }))
    );
  }, []);

  useEffect(() => {
    void fetchPosts();
  }, [fetchPosts]);

  return (
    <HomeWrapper>
      <Profile />
      <Search />

      <Posts>
        {posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            createdAt={post.createdAt}
            content={post.content}
          />
        ))}
      </Posts>
    </HomeWrapper>
  );
}

export default Home;
