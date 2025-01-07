import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  url?: string;
}

export const SEO = ({ title, description, url }: SEOProps) => {
  return (
    <Head>
      {/* 페이지 타이틀 */}
      <title>{title}</title>

      {/* 메타 설명 */}
      <meta name="description" content={description} />

      {/* Open Graph 메타 태그 */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter 메타 태그 */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
};
