'use client'

import { usePathname } from 'next/navigation'
import { Header } from "@/components/Header";
import { Share } from "@/components/Icons";
import blog from '../../../../public/json/blogs.json';
import ScrollToTop from "@/components/ScrollToTop";

export default function Blog() {
  const pathname = usePathname()
  const match = pathname.match(/\/blog\/([^/]+)/);
  const slug = match ? match[1] : null;
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
