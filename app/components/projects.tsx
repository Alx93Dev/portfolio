interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    title: "Finance Dashboard",
    description:
      "Personal finance tracker built with Angular 21, Signals and Tailwind CSS. Features interactive charts, transaction management and local persistence.",
    tags: ["Angular", "Signals", "Tailwind CSS", "Chart.js"],
    github: "https://github.com/Alx93Dev/finance-dashboard",
    demo: "https://finance-dashboard-phi-hazel.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        <h2 className="text-3xl font-bold tracking-tight text-emerald-400">
          Projects
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col gap-4 rounded-2xl border border-zinc-800 p-6 hover:border-emerald-400 transition-colors"
            >
              <h3 className="font-semibold text-zinc-50">
                {project.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed flex-1">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-zinc-900 border border-zinc-700 px-3 py-1 text-xs text-zinc-400"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 pt-2">
                
                  <a href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-zinc-500 hover:text-emerald-400 transition-colors"
                >
                  GitHub ↗
                </a>
                
                  <a href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-zinc-500 hover:text-emerald-400 transition-colors"
                >
                  Live Demo ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}