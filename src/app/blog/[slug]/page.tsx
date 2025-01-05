import type { Metadata, ResolvingMetadata } from 'next'
import { Header } from "@/components/Header";
import { Share } from "@/components/Icons";
import blog from '../../../../public/json/blogs.json';
import ScrollToTop from "@/components/ScrollToTop";

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug
  const post = blog.find((post) => post.slug === slug);
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: post?.title,
    description: post?.description || post?.content.slice(0, 160),
    openGraph: {
      title: post?.title,
      description: post?.description || post?.content.slice(0, 160),
      images: ['https://res.cloudinary.com/iam-kaz/image/upload/v1696200621/thumbnail_thumbnail_IMG_3236_cea0cbe13a.jpg', ...previousImages],
      siteName: 'Kaz Portfolio',
    },
    twitter: {
      card: 'summary_large_image',
      title: post?.title,
      description: post?.description || post?.content.slice(0, 160),
      images: ['https://res.cloudinary.com/iam-kaz/image/upload/v1696200621/thumbnail_thumbnail_IMG_3236_cea0cbe13a.jpg'],
    },
  }
}

export default async function Page({params}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const post = blog.find((post) => post.slug === slug);

  if (!post) {
    return (
      <div>
        <h1>Post not found</h1>
      </div>
    );
  }


  return (
    <main className="page">
      <div className="page__content">
        <Header title={post.title} link="/blog" />
        <section>
          <div
            className="blog"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </section>
        <div className="share">
          <p>Enjoyed this post? Please kindly share:</p>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://iam-kaz/blog/${post.slug}`)}&text=${encodeURIComponent(`${post.title} by @iam_kaz`)}`}
            target="_blank"
            rel="noreferrer"
          >
            <Share /> <span>Twitter</span>
          </a>
          <a
            href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(`https://iam-kaz/blog/${post.slug}`)}`}
            target="_blank"
            rel="noreferrer"
          >
            <Share /> <span>Facebook</span>
          </a>
          <a
            href={`whatsapp://send?text=${encodeURIComponent(`${post.title} https://iam-kaz/blog/${post.slug}`)}`}
            data-action="share/whatsapp/share"
          >
            <Share /> <span>WhatsApp</span>
          </a>
        </div>
      </div>
      <ScrollToTop />
    </main>
  );
}
