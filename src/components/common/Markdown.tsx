import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import nord from 'react-syntax-highlighter/dist/esm/styles/prism/nord';
import remarkGfm from 'remark-gfm';
import dynamic from 'next/dynamic';

const ReactMarkdown = dynamic(() => import('react-markdown'), { ssr: false });

export default function MarkDown() {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        code({ className, children }) {
          const match = /language-(\w+)/.exec(className || '');
          const codeContent = String(children || '').trim();

          if (!codeContent) return null;

          return match ? (
            <SyntaxHighlighter style={nord} language={match[1]} PreTag="div">
              {codeContent}
            </SyntaxHighlighter>
          ) : (
            <SyntaxHighlighter style={nord} language="textile" PreTag="div">
              {codeContent}
            </SyntaxHighlighter>
          );
        },
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
      }}
    >
      {/* {data?.content || ''} */}
    </ReactMarkdown>
  );
}
