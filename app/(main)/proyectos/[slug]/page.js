import { notFound } from "next/navigation";
import projects from "@/app/data/projects.json";
import ProjectPageClient from "./ProjectPageClient";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  const title = project.title.replace(/\n/g, " ");
  const description = project.descriptionP || project.descriptionH4;

  return {
    title,
    description,
    alternates: {
      canonical: `/proyectos/${project.slug}`,
    },
    openGraph: {
      type: "article",
      url: `/proyectos/${project.slug}`,
      title: `${title} | Yanira Robledano`,
      description,
      images: [
        {
          url: project.heroImage.src,
          alt: project.heroImage.alt || title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Yanira Robledano`,
      description,
      images: [project.heroImage.src],
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return <ProjectPageClient project={project} />;
}
