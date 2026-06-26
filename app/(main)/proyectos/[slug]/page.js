import { notFound } from "next/navigation";
import projects from "@/app/data/projects.json";
import ProjectPageClient from "./ProjectPageClient";

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return <ProjectPageClient project={project} />;
}
