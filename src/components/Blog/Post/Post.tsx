import type { PostMeta } from '@/blog/getAllPostPreviews';
import { HorizontalDivider } from '@/components/Divider';
import { IOWrapper } from '@/components/IntersectionObserver/Wrapper';
import { PageMetaTags, publicUrl } from '@/components/Seo/PageMetaTags';
import { InternalLink } from '@/components/Typography/InternalLink';
// import { TwitterShare } from '@/components/Social/TwitterShare';
import { LazyWebmentionWidget } from '@/components/Webmention/LazyWebmentionWidget';
import { MDXProvider } from '@mdx-js/react';
import { useRouter } from 'next/router';
import tinytime from 'tinytime';

import { PostHeader } from './PostHeader';

const mdxComponents = {
  pre: ({ className, ...props }: any) => (
    <pre
      className={`${className} rounded-md bg-gray-800 py-3 px-4 overflow-x-auto`}
      {...props}
    />
  ),
  'pre.code': ({ className, ...props }: any) => (
    <code className={`${className} text-gray-200`} {...props} />
  ),
};

const postDateTemplate = tinytime('{MM} {DD}, {YYYY}');

type Props = {
  meta: PostMeta;
  children: React.ReactChildren;
  posts: {
    title: string;
    link: string;
  }[];
};

export default function Post({ meta, children, posts }: Props) {
  const router = useRouter();
  const postIndex = posts.findIndex((post) => post.link === router.pathname);
  const previous = posts[postIndex + 1];
  const next = posts[postIndex - 1];
  const fullUrl = `${publicUrl}${router.pathname}`;

  return (
    <article>
      <PageMetaTags
        title={meta.title}
        description={meta.description}
        image={meta.image}
        readingTime={meta.readingTime}
        publishDate={postDateTemplate.render(new Date(meta.date))}
      />
      <PostHeader meta={meta} />

      <div className="pb-16 xl:pb-20">
        <div className="xl:pb-0 xl:col-span-3 xl:row-span-2">
          <div className="prose max-w-none pb-8">
            <MDXProvider components={mdxComponents}>{children}</MDXProvider>
          </div>

          <HorizontalDivider />

          <IOWrapper>
            {(show) =>
              show ? <LazyWebmentionWidget url={fullUrl} meta={meta} /> : null
            }
          </IOWrapper>
        </div>
        <footer className="text-sm font-medium leading-5 xl:col-start-1 xl:row-start-2">
          {(next || previous) && (
            <div className="space-y-8 py-8">
              {next && (
                <div>
                  <h2 className="text-xs tracking-wide uppercase text-theme-subtitle">
                    Next Article
                  </h2>
                  <div>
                    <InternalLink href={next.link}>{next.title}</InternalLink>
                  </div>
                </div>
              )}
              {previous && (
                <div>
                  <h2 className="text-xs tracking-wide uppercase text-theme-subtitle">
                    Previous Article
                  </h2>
                  <div>
                    <InternalLink href={previous.link}>
                      {previous.title}
                    </InternalLink>
                  </div>
                </div>
              )}
            </div>
          )}
        </footer>
      </div>
    </article>
  );
}