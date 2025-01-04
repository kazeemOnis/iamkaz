import { Metadata } from 'next';
import Image from 'next/image';
import { Header } from "@/components/Header";
import { Arrow, ArrowCurl } from "@/components/Icons";
import thumbnail from '../../../public/img/thumbnail.jpg';

export const metadata: Metadata = {
  title: "Contact Kaz | Let's Connect",
  description:
    "I'm always open to connecting on exciting projects or exploring new opportunities. Get in touch and let's make it happen.",
  openGraph: {
    title: "Contact Kaz | Let's Connect",
    description: "I'm always open to connecting on exciting projects or exploring new opportunities. Get in touch and let's make it happen.",
    images: [
      {
        url: "https://res.cloudinary.com/iam-kaz/image/upload/v1696200621/thumbnail_thumbnail_IMG_3236_cea0cbe13a.jpg",
        width: 1200,
        height: 630,
        alt: "Kaz crafting web and mobile apps",
      },
    ],
    siteName: "Kaz Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Kaz | Let's Connect",
    description: "I'm always open to connecting on exciting projects or exploring new opportunities. Get in touch and let's make it happen.",
    images: ['https://res.cloudinary.com/iam-kaz/image/upload/v1696200621/thumbnail_thumbnail_IMG_3236_cea0cbe13a.jpg'],
  },
};

export default function Contact() {
  return (
    <main className="page">
      <div className="page__content">
        <Header title="Get in Touch" link="/" />
        <section>
          <p className="contact">I`m always open to connecting on <b>exciting projects</b> or <b>exploring new opportunities</b>. Have an idea or a project in mind? <b>Get in touch</b>, and let`s <b>make it happen</b>.</p>
          <div className="thumbnail">
            <Image 
              src={thumbnail}
              alt='Portfolio Image'
              height={200}
              width={200}
              priority
            />
            <div className="thumbnail__icon">
              <ArrowCurl />
              <p><b>Kaz</b></p>
            </div>
          </div>
          <div className="page__links">
            <a href="mailto:konisarotu@gmail.com">
              <Arrow/>
              <b>Email: konisarotu@gmail.com</b>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
