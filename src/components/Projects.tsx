import Link from "next/link";
import { Github, PlayCircle } from "lucide-react"; 
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="mb-16 text-center md:text-left">
        <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">
          Ausgewählte Projekte
        </h2>
        <p className="text-lg text-gray-500 max-w-2xl">
          Eine Mischung aus Mobile Apps, Game Development und Fullstack Web-Anwendungen.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm"
          >
            {/* BILD BEREICH (Statisch) */}
            <div className="relative h-64 w-full bg-gray-100">
              {project.image.startsWith("/") || project.image.startsWith("http") ? (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Bild folgt
                </div>
              )}
            </div>

            {/* INHALT */}
            <div className="p-8 flex flex-col flex-grow">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* TAGS */}
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-600 text-xs font-semibold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex items-center gap-5 pt-4 border-t border-gray-100">
                  {project.demoLink && project.demoLink !== "#" && (
                    <Link
                      href={project.demoLink}
                      target="_blank"
                      className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800"
                    >
                      <PlayCircle size={20} />
                      {project.tags.includes("Game Dev") || project.tags.includes("iOS") ? "Video Demo" : "Live App"}
                    </Link>
                  )}
                  
                  {project.repoLink && project.repoLink !== "#" && (
                    <Link
                      href={project.repoLink}
                      target="_blank"
                      className="flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-black"
                    >
                      <Github size={20} />
                      Code
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}