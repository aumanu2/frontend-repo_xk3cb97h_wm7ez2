export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow">
            {/* Simple Rocket icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4.5 16.5L7 14c3-1 5-3 6-6l2.5-2.5a7 7 0 0 1 7 7L20 15c-3 1-5 3-6 6l-2.5 2.5a7 7 0 0 1-7-7Z"/>
              <path d="M12 12l-1.5-1.5"/>
            </svg>
          </div>
          <span className="text-lg font-semibold tracking-tight text-gray-900">FitFlow CRM</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
          <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
            {/* Login icon */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
              <polyline points="10 17 15 12 10 7"/>
              <line x1="15" y1="12" x2="3" y2="12"/>
            </svg>
            Sign in
          </button>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Get started
          </a>
        </div>
      </nav>
    </header>
  );
}
