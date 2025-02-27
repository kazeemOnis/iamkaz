import Image from 'next/image';
import type { Metadata, ResolvingMetadata } from 'next';
import { Header } from "@/components/Header";
import { Share } from "@/components/Icons";
import ScrollToTop from "@/components/ScrollToTop";
import blog from '../../../../public/json/blogs.json';

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

type Params = {
  slug: string;
};

type PageProps = {
  params: Promise<Params>;
};

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
      images: [post?.image ? post.image : 'https://res.cloudinary.com/iam-kaz/image/upload/v1696200621/thumbnail_thumbnail_IMG_3236_cea0cbe13a.jpg', ...previousImages],
      siteName: 'Kaz Portfolio',
    },
    twitter: {
      card: 'summary_large_image',
      title: post?.title,
      description: post?.description || post?.content.slice(0, 160),
      images: [post?.image ? post.image : 'https://res.cloudinary.com/iam-kaz/image/upload/v1696200621/thumbnail_thumbnail_IMG_3236_cea0cbe13a.jpg'],
    },
  }
}

const ShareLinks = ({ slug, title }: { slug: string; title: string }) => (
  <div className="share">
    <p>Enjoyed this post? Please kindly share:</p>
    <a
      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://iam-kaz.com/blog/${slug}?utm_source=twitter&utm_medium=social`)}&text=${encodeURIComponent(`${title} by @iam_kaz`)}`}
      target="_blank"
      rel="noreferrer"
    >
      <Share /> <span>X</span>
    </a>
    <a
      href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(`https://iam-kaz.com/blog/${slug}?utm_source=facebook&utm_medium=social`)}`}
      target="_blank"
      rel="noreferrer"
    >
      <Share /> <span>Facebook</span>
    </a>
    <a
      href={`whatsapp://send?text=${encodeURIComponent(`${title} https://iam-kaz.com/blog/${slug}?utm_source=whatsapp&utm_medium=social`)}`}
      data-action="share/whatsapp/share"
    >
      <Share /> <span>WhatsApp</span>
    </a>
  </div>
);

export default async function Page({ params }: PageProps) {
  let slug: string;
  try {
    slug = (await params).slug;
  } catch (error: unknown) {
    const err = error as Error;
    return (
      <div>
        <h1>Error loading post: {err.message}</h1>
      </div>
    );
  }

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
          {post.image && (
            <Image 
              className="blog__image"
              width={800}
              height={450}
              src={post.image}
              alt={post.title}
              priority
            />
          )}
          <div className="blog__meta">
            <span className="blog__meta-date">{new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            <span className="blog__meta-views">{post.views} views</span>
          </div>
          <div
            className="blog"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </section>
        <ShareLinks slug={post.slug} title={post.title} />
      </div>
      <ScrollToTop />
    </main>
  );
}
