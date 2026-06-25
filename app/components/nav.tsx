export default function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-zinc-800">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-semibold text-zinc-50">Alejandro Castillo</span>
        <ul className="flex gap-8 text-sm text-zinc-400">
          <li>
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}