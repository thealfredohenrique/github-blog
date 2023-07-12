import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { PostWrapper } from "./styles";

interface PostProps {
  title: string;
  code: number;
  createdAt: Date;
  content: string;
}

function Post({ title, code, createdAt, content }: PostProps) {
  return (
    <PostWrapper to={`/issue/${code}`}>
      <header>
        <h1>{title}</h1>
        <span>
          {formatDistanceToNow(createdAt, {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </header>

      <p>{content}</p>
    </PostWrapper>
  );
}

export default Post;
