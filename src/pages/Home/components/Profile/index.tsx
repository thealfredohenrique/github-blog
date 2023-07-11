import { useCallback, useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { api } from "../../../../lib/axios";
import { Avatar, ProfileData, ProfileWrapper } from "./styles";

const GITHUB_USERNAME = "thealfredohenrique";

interface User {
  id: number;
  name: string;
  username: string;
  bio: string;
  company: string;
  followers: number;
  profileURL: string;
  avatarURL: string;
}

interface GetUserResponse {
  id: number;
  name: string;
  login: string;
  bio: string;
  company: string;
  followers: number;
  html_url: string;
  avatar_url: string;
}

function Profile() {
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = useCallback(async () => {
    const response: AxiosResponse<GetUserResponse> = await api.get(
      `/users/${GITHUB_USERNAME}`
    );

    setUser({
      id: response.data.id,
      name: response.data.name,
      username: response.data.login,
      bio: response.data.bio,
      company: response.data.company,
      followers: response.data.followers,
      profileURL: response.data.html_url,
      avatarURL: response.data.avatar_url,
    });
  }, []);

  useEffect(() => {
    void fetchUser();
  }, [fetchUser]);

  return (
    <ProfileWrapper>
      <Avatar src={user?.avatarURL} alt="" />

      <ProfileData>
        <header>
          <strong>{user?.name}</strong>
          <a href={user?.profileURL} target="_blank" rel="noopener noreferrer">
            github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>

        <p>{user?.bio}</p>

        <footer>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {user?.username}
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} />
            {user?.company}
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            {user?.followers} seguidores
          </span>
        </footer>
      </ProfileData>
    </ProfileWrapper>
  );
}

export default Profile;
