import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { timeAgo } from "@/utils";
import blogs from "../../../public/json/blogs.json";

export const metadata: Metadata = {
  title: "Blog | Insights and Tutorials",
  description: "Read insights, tutorials, and stories about web and mobile app development.",
  openGraph: {
    title: "Blog | Insights and Tutorials",
    description: "Read insights, tutorials, and stories about web and mobile app development.",
    images: [
      {
        url: 'https://res.cloudinary.com/iam-kaz/image/upload/v1696200621/thumbnail_thumbnail_IMG_3236_cea0cbe13a.jpg',
        width: 1200,
        height: 630,
        alt: 'Kaz crafting web and mobile apps',
      },
    ],
    siteName: 'Kaz Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Blog | Insights and Tutorials",
    description: "Read insights, tutorials, and stories about web and mobile app development.",
    images: ['https://res.cloudinary.com/iam-kaz/image/upload/v1696200621/thumbnail_thumbnail_IMG_3236_cea0cbe13a.jpg'],
  },
};

export default function Blog() {
  return (
    <main className="page">
      <div className="page__content">
        <Header title="Blog" link="/" />
        <section>
          {
            blogs.map(blog => (  
              <Link className="page__block" key={blog.id} href={`/blog/${blog.slug}`}>
                <p className="page__title">{blog.title}</p>
                <p className="page__subtext">{timeAgo(blog.createdAt)}  |  {blog.views} views</p>
              </Link>
            ))
          }
        </section>
      </div>
    </main>
  );
}
