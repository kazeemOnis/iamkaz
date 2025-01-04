import { Metadata } from "next";
import Link from "next/link";
import { Arrow, ArrowRise, GitHub, Linkedin } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Kaz | Crafting Web and Mobile Apps",
  description: "👋 I am Kaz. I craft exceptional web and mobile apps, one pixel at a time.",
  openGraph: {
    title: 'Kaz | Crafting Web and Mobile Apps',
    description: '👋 I am Kaz. I craft exceptional web and mobile apps, one pixel at a time.',
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
    title: 'Kaz | Crafting Web and Mobile Apps',
    description: '👋 I am Kaz. I craft exceptional web and mobile apps, one pixel at a time.',
    images: ['https://res.cloudinary.com/iam-kaz/image/upload/v1696200621/thumbnail_thumbnail_IMG_3236_cea0cbe13a.jpg'],
  },
};

export default function Home() {
  return (
    <main className="page">
      <div className="page__content">
        <h1 className="heading">👋 I am Kaz. I craft exceptional web and mobile apps, one pixel at a time.</h1>
        <div className="page__sub-content">
          <div className="page__links">
            <Link href="/blog">
              <Arrow />
              <b>Blog</b>
            </Link>
            <Link href="/projects">
              <Arrow/>
              <b>Projects</b>
            </Link>
            <Link href="/contact">
              <Arrow/>
              <b>Contact</b>
            </Link>
          </div>
          <div className="page__socials">
            <a target="__blank" href="https://www.linkedin.com/in/kazeemonisarotu/">
              <Linkedin/>
              Connect on Linkedin
            </a>
            <a target="__blank" href="https://github.com/kazeemOnis">
              <GitHub/>
              Follow on GitHub
            </a>
            <Link href="/blog">
              <ArrowRise/>
              1k blog views
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
