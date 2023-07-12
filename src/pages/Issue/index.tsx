import { useCallback, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as services from "../../services/issues";
import { IssueInfo } from "./styles";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface Post {
  id: number;
  code: number;
  title: string;
  createdAt: Date;
  content: string;
  url: string;
  username: string;
  comments: number;
}

function Issue() {
  const [post, setPost] = useState<Post | null>(null);
  const { code } = useParams();

  const fetchPost = useCallback(async () => {
    const issue = await services.fetchIssue(String(code));
    setPost(issue);
  }, [code]);

  useEffect(() => {
    void fetchPost();
  }, [fetchPost]);

  if (!post) return <></>;

  return (
    <article>
      <IssueInfo>
        <header>
          <NavLink to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            voltar
          </NavLink>
          <NavLink to={post.url} target="_blank" rel="noopener noreferrer">
            ver no github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </NavLink>
        </header>

        <h1>{post.title}</h1>

        <footer>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {post.username}
          </span>

          <span>
            <FontAwesomeIcon icon={faCalendarDay} />
            {formatDistanceToNow(post.createdAt, {
              addSuffix: true,
              locale: ptBR,
            })}
          </span>

          <span>
            <FontAwesomeIcon icon={faComment} />
            {post.comments} comentários
          </span>
        </footer>
      </IssueInfo>
    </article>
  );
}

export default Issue;
