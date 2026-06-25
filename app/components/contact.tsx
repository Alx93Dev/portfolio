export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold tracking-tight text-emerald-400">
            Let&apos;s Talk
          </h2>
          <p className="max-w-lg text-zinc-400 leading-relaxed">
            Have a project in mind or looking for a developer for your team? Get in touch.
          </p>
        </div>
        <a href="mailto:corporatealx93@gmail.com"
  className="inline-flex h-11 w-fit items-center justify-center rounded-full bg-emerald-400 px-6 text-sm font-medium text-zinc-900 transition-colors hover:bg-emerald-300"
>
  Say Hello
</a>
        <div className="flex gap-6 text-sm text-zinc-500">
          <a href="mailto:corporatealx93@gmail.com" className="hover:text-emerald-400 transition-colors">
            Email
          </a>
          <a href="https://github.com/Alx93Dev" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/in/alejandrocastillo-lopez" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
