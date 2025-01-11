import dynamic from 'next/dynamic';
import Image from 'next/image';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import nord from 'react-syntax-highlighter/dist/esm/styles/prism/nord';
import remarkGfm from 'remark-gfm';

const ReactMarkdown = dynamic(() => import('react-markdown'), { ssr: false });

interface MarkdownPreviewProps {
  markdownText: string;
  imageUrl: string;
}

export default function MarkdownPreview({
  markdownText,
  imageUrl,
}: MarkdownPreviewProps) {
  return (
    <div>
      {!imageUrl ? (
        <div></div>
      ) : (
        <div className="flex justify-center">
          <Image
            src={imageUrl}
            alt="Preview"
            width={300}
            height={300}
            className="flex h-auto w-full max-w-[300px]"
            style={{ objectFit: 'contain' }} // 이미지를 비율대로 맞추기
          />
        </div>
      )}

      <div className="text-sm">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ className, children }) {
              const match = /language-(\w+)/.exec(className || '');
              const codeContent = String(children || '').trim();

              if (!codeContent) return null;
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
          {markdownText
            .replace(/\n/gi, '\n\n')
            .replace(/\*\*/gi, '@$_%!^')
            .replace(/@\$_%!\^/gi, '**')
            .replace(/<\/?u>/gi, '*')}
        </ReactMarkdown>
      </div>
    </div>
  );
}
