import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { Avatar, ProfileData, ProfileWrapper } from "./styles";

function Profile() {
  return (
    <ProfileWrapper>
      <Avatar src="https://github.com/thealfredohenrique.png" alt="" />

      <ProfileData>
        <header>
          <strong>Cameron Williamson</strong>
          <a
            href="http://github.com/thealfredohenrique"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <footer>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            cameronwll
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} />
            Rocketseat
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            32 seguidores
          </span>
        </footer>
      </ProfileData>
    </ProfileWrapper>
  );
}

export default Profile;
