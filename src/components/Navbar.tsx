import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar = ({ activeSection }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  // Conditional classes based on scroll
  const logoClasses = isScrolled
    ? 'text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900'
    : 'text-white bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-white';

  const navButtonTextClasses = isScrolled ? 'text-gray-900' : 'text-white';
  const navButtonHoverClasses = isScrolled
    ? 'hover:bg-gray-100'
    : 'hover:bg-gray-800';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'backdrop-blur-xl bg-white/70 shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className={`text-2xl font-bold transition-all duration-300 ${logoClasses}`}
            >
              Sophos Home
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gray-900 text-white shadow-lg shadow-gray-900/30'
                    : `${navButtonTextClasses} ${navButtonHoverClasses}`
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
              isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-gray-800'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className={`md:hidden absolute top-20 left-0 right-0 backdrop-blur-xl ${
            isScrolled ? 'bg-white/95 shadow-2xl shadow-black/10 border-t border-gray-200/50' : 'bg-gray-900/95 shadow-2xl shadow-black/10 border-t border-gray-800/50'
          }`}
        >
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gray-900 text-white shadow-lg'
                    : `${navButtonTextClasses} ${navButtonHoverClasses}`
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
