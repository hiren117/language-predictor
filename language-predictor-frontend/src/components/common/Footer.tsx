// Professional Footer for Linguist AI

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-800 bg-slate-900 w-full">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-sm font-semibold text-slate-300">
            Linguist AI <span className="text-blue-500">Predictor</span>
          </p>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Hiren's Lab. All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm font-medium text-slate-400">
          <a className="hover:text-blue-400 transition-colors" href="#privacy">Privacy</a>
          <a className="hover:text-blue-400 transition-colors" href="#terms">Terms</a>
          <a 
            className="hover:text-blue-400 transition-colors" 
            href="mailto:hiren@example.com"
          >
            Support
          </a>
          <a 
            className="px-3 py-1 bg-slate-800 rounded-full hover:bg-slate-700 text-xs transition-all" 
            href="https://github.com/hiren117"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}