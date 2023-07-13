import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { MarkdownWrapper } from "./styles";

interface MarkdownProps {
  content: string;
}

function Markdown({ content }: MarkdownProps) {
  return (
    <MarkdownWrapper>
      <ReactMarkdown
        children={content}
        components={{
          code({ inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");

            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                children={String(children).replace(/\n$/, "")}
                // eslint-disable-next-line
                style={coldarkDark}
                language={match[1]}
                PreTag="div"
              />
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            );
          },
        }}
      />
    </MarkdownWrapper>
  );
}

export default Markdown;
