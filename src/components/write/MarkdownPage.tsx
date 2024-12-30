import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';

export default function MarkdownPage({ markdown }: { markdown: string }) {
  return (
    <div>
      <div className="text-sm">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ className, children }) {
              // const match = /language-(\w+)/.exec(className || '');
              const match = /language-(\w+)/.exec(className || '');
              const codeContent = String(children || '').trim(); // 빈 값이나 undefined를 방지

              if (!codeContent) return null; // 내용이 없다면 렌더링하지 않음
              const cleanedContent = codeContent.replace(/\n\s*\n/g, '\n');
              return match ? (
                // 코드 (```)
                <SyntaxHighlighter
                  style={nord}
                  language={match[1]}
                  PreTag="div"
                >
                  {cleanedContent}
                  {String(children)
                    .replace(/\n$/, '')
                    .replace(/\n&nbsp;\n/g, '')
                    .replace(/\n&nbsp\n/g, '')}
                </SyntaxHighlighter>
              ) : (
                <SyntaxHighlighter
                  style={nord}
                  background="green"
                  language="textile"
                  PreTag="div"
                >
                  {cleanedContent}
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              );
            },
            // 인용문 (>)
            blockquote({ children, ...props }) {
              return (
                <blockquote
                  style={{
                    background: '#7afca19b',
                    padding: '1px 15px',
                    borderRadius: '10px',
                  }}
                  {...props}
                >
                  {children}
                </blockquote>
              );
            },
            img({ ...props }) {
              return (
                <img
                  style={{ maxWidth: '40vw' }}
                  src={props.src?.replace('../../../../public/', '/')}
                  alt="MarkdownRenderer__Image"
                />
              );
            },
            em({ children, ...props }) {
              return (
                <span style={{ fontStyle: 'italic' }} {...props}>
                  {children}
                </span>
              );
            },
          }}
        >
          {markdown
            .replace(/\n/gi, '\n\n')
            .replace(/\*\*/gi, '@$_%!^')
            .replace(/@\$_%!\^/gi, '**')
            .replace(/<\/?u>/gi, '*')}
        </ReactMarkdown>
      </div>
    </div>
  );
}
