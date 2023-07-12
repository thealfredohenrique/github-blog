import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { PostWrapper } from "./styles";

interface PostProps {
  title: string;
  createdAt: Date;
  content: string;
}

function Post({ title, createdAt, content }: PostProps) {
  return (
    <PostWrapper to="/">
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
