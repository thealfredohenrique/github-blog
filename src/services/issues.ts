import { AxiosResponse } from "axios";
import { api } from "../lib/axios";

interface FetchPostResponse {
  id: number;
  number: number;
  title: string;
  created_at: string;
  body: string;
  html_url: string;
  user: {
    login: string;
  };
  comments: number;
}

const GITHUB_USERNAME = "thealfredohenrique";
const GITHUB_REPO = "github-blog";

export async function fetchIssue(code: string) {
  const response: AxiosResponse<FetchPostResponse> = await api.get(
    `/repos/${GITHUB_USERNAME}/${GITHUB_REPO}/issues/${code}`
  );

  return {
    id: response.data.id,
    code: response.data.number,
    title: response.data.title,
    createdAt: new Date(response.data.created_at),
    content: response.data.body,
    url: response.data.html_url,
    username: response.data.user.login,
    comments: response.data.comments,
  };
}

export async function fetchIssues() {
  const response: AxiosResponse<FetchPostResponse[]> = await api.get(
    `/repos/${GITHUB_USERNAME}/${GITHUB_REPO}/issues`
  );

  return response.data.map((e) => ({
    id: e.id,
    code: e.number,
    title: e.title,
    createdAt: new Date(e.created_at),
    content: e.body,
    url: e.html_url,
  }));
}
