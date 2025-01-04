import { Metadata } from 'next';
import { Header } from "@/components/Header";
import projects from "../../../public/json/projects.json";

export const metadata: Metadata = {
  title: "Projects | My Work",
  description: "Explore the projects I've worked on in web and mobile app development.",
  openGraph: {
    title: "Projects | My Work",
    description: "Explore the projects I've worked on in web and mobile app development.",
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
    title: "Projects | My Work",
    description: "Explore the projects I've worked on in web and mobile app development.",
    images: ['https://res.cloudinary.com/iam-kaz/image/upload/v1696200621/thumbnail_thumbnail_IMG_3236_cea0cbe13a.jpg'],
  },
};

export default function Projects() {
  return (
    <main className="page">
      <div className="page__content">
        <Header title="Projects" link="/" />
        <section>
          {
            projects.map(project => (
              <div className="page__block" key={project.id}>
                <a href={project.url} target="__blank" rel="noreferrer">
                  <div className="page__title">
                    <span>
                    {
                      project.isJob ?  '💼' : project.type === "web" ? '🌐' : '📱'
                    }
                    </span>
                    <p>{project.title}</p>
                  </div>
                  <p className="page__subtext">{project.description}</p>
                </a>
                <div className="flex">
                  {
                    project.iOSUrl && (
                      <a href={project.iOSUrl} target="__blank" rel="noreferrer">
                        🍎
                      </a>
                    )
                  }
                  {
                    project.androidUrl && (
                      <a href={project.androidUrl} target="__blank" rel="noreferrer">
                        🤖
                      </a>
                    )
                  }
                </div>
              </div>
            ))
          }
        </section>
      </div>
    </main>
  );
}
