import { useState, useEffect } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F4] border-b border-[#A8C5A0]/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <button
          onClick={() => onNavigate('home')}
          className="text-lg font-light text-[#2D4A2D] hover:text-[#A8C5A0] transition-colors"
        >
          Luna Elvira Arts
        </button>

        <div className="hidden md:flex items-center gap-12 text-sm">
          <button
            onClick={() => onNavigate('home')}
            className={`transition-colors ${
              currentPage === 'home' ? 'text-[#2D4A2D]' : 'text-[#2D4A2D]/60 hover:text-[#2D4A2D]'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => onNavigate('about')}
            className={`transition-colors ${
              currentPage === 'about' ? 'text-[#2D4A2D]' : 'text-[#2D4A2D]/60 hover:text-[#2D4A2D]'
            }`}
          >
            About
          </button>
          <a
            href="https://lunaelviraartsstudio.etsy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2D4A2D]/60 hover:text-[#2D4A2D] transition-colors"
          >
            Find Us
          </a>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://instagram.com/lunaelvira"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors ${isScrolled ? 'text-[#2D4A2D]' : 'text-[#FAF8F4]'}`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.015-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.981-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z" />
            </svg>
          </a>
          <a
            href="https://tiktok.com/@lunaelviraarts"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors ${isScrolled ? 'text-[#2D4A2D]' : 'text-[#FAF8F4]'}`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.283 10.24c-.464.263-.94.42-1.42.451v4.26c0 2.088-1.696 3.784-3.784 3.784-2.088 0-3.784-1.696-3.784-3.784 0-.416.066-.816.19-1.2h-1.76c-.14.816-.216 1.644-.216 2.4 0 3.76 3.024 6.784 6.784 6.784 3.76 0 6.784-3.024 6.784-6.784v-2.88c1.24.912 2.752 1.464 4.368 1.536v-1.76c-1.528-.072-2.912-.608-3.968-1.452z" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
