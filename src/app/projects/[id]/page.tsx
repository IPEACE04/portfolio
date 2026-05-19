import { projectsData } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  // Use the predefined ordered images array, fallback to just the main image
  const allImages = project.images && project.images.length > 0 
    ? project.images 
    : [project.image];

  return (
    <div className="w-full flex flex-col pt-8">
      <Link href="/#projects" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 self-start">
        <FaArrowLeft />
        <span>Back to Projects</span>
      </Link>

      <div className="flex flex-col gap-10">
        {/* Header Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {project.title}
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-4xl">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-800 text-gray-200 text-sm font-medium rounded-full border border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
              >
                <FaExternalLinkAlt />
                <span>Live Demo</span>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors border border-gray-700"
              >
                <FaGithub />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mt-8">
          <h2 className="text-3xl font-bold text-white mb-8 border-b border-gray-800 pb-4">Gallery</h2>
          <div className="grid grid-cols-1 gap-12">
            {allImages.map((imgSrc, idx) => (
              <div key={idx} className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-gray-900 flex justify-center">
                <Image
                  src={imgSrc}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  width={1200}
                  height={800}
                  className="w-full h-auto max-h-[85vh] object-contain"
                  priority={idx === 0}
                />
              </div>
            ))}
            {allImages.length === 0 && (
              <p className="text-gray-500 italic">No images available for this project.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
