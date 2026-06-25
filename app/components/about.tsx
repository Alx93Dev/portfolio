export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-16">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            About Me
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I&apos;m a Full Stack Developer based in Santiago, Chile, specialized in modern web
            applications, API integrations, and automation. I currently work on the Treasury module
            of an enterprise ERP, solving complex integrations daily.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I&apos;m passionate about writing clean, maintainable code and I&apos;m constantly
            expanding my stack — moving into React and Next.js while deepening my Angular expertise.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Skills</h3>
          <ul className="grid grid-cols-2 gap-2 text-sm text-zinc-600 dark:text-zinc-400">
            {["Angular", "TypeScript", "React", "Next.js", ".NET / C#", "PostgreSQL", "AWS (Lambda, DynamoDB)", "Tailwind CSS", "REST APIs", "Web Scraping"].map(
              (skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                  {skill}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
