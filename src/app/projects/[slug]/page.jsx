import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import { projects } from '@/data/projects';
import ProjectDetails from '@/components/sections/ProjectDetails';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${project.title} | Maksudur Rahman`,
    description: project.description,
  };
}

// Page component
export default function ProjectPage({ params }) {
  return <ProjectPageContent params={params} />;
}

// Async component
async function ProjectPageContent({ params }) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
}
