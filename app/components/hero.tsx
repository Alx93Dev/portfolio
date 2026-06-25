export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16 bg-zinc-950">
      <div className="max-w-5xl w-full flex flex-col gap-6">
        <p className="text-sm font-medium text-emerald-400 uppercase tracking-widest">
          HELLO, I&apos;M
        </p>
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-zinc-50">
          Alejandro Castillo
        </h1>
        <p className="max-w-xl text-xl text-zinc-400 leading-relaxed">
          Full Stack Developer specialized in Angular, React &amp; automation.
          I build solid interfaces and integrate complex APIs.
        </p>
        <div className="flex gap-4 pt-2">
          
            <a href="#projects"
            className="inline-flex h-11 items-center justify-center rounded-full bg-emerald-400 px-6 text-sm font-medium text-zinc-900 transition-colors hover:bg-emerald-300"
          >
            View Projects
          </a>
          
            <a href="#contact"
            className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-700 px-6 text-sm font-medium text-zinc-50 transition-colors hover:border-emerald-400 hover:text-emerald-400"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}