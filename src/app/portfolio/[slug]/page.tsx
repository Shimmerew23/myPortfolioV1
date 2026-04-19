import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import ProjectDetailClient from "@/components/project-detail/ProjectDetailClient";
import { getProjectBySlug, getAdjacentProjects, projects } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <>
      <ScrollProgressBar />
      <Navbar />
      <main>
        <ProjectDetailClient project={project} prev={prev} next={next} />
      </main>
    </>
  );
}
