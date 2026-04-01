import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';

interface HeaderProps {
  language: 'en' | 'pt';
  onLanguageChange: (lang: 'en' | 'pt') => void;
}

export default function Header({ language, onLanguageChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const translations = {
    en: {
      home: 'Home',
      about: 'About',
      solutions: 'Solutions',
      process: 'Process',
      partners: 'Partners',
      contact: 'Contact',
      endopure: 'EndoPure USA',
    },
    pt: {
      home: 'Início',
      about: 'Sobre',
      solutions: 'Soluções',
      process: 'Processo',
      partners: 'Parceiros',
      contact: 'Contato',
      endopure: 'EndoPure USA',
    },
  };

  const t = translations[language];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 border-b border-border">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029271132/Y7eGYsDjgd9BdJXBRUhQTv/Vertical_LOGO1PURERX_EP2026_Cor_5e7db5ee.png"
            alt="1PureRx Logo"
            className="h-12 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">
            {t.home}
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            {t.about}
          </a>
          <a href="#solutions" className="text-foreground hover:text-primary transition-colors">
            {t.solutions}
          </a>
          <a href="#process" className="text-foreground hover:text-primary transition-colors">
            {t.process}
          </a>
          <a href="#partners" className="text-foreground hover:text-primary transition-colors">
            {t.partners}
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            {t.contact}
          </a>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <div className="flex items-center gap-2 border border-border rounded-lg p-1">
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-3 py-1 rounded transition-all ${
                language === 'en'
                  ? 'bg-primary text-white'
                  : 'text-foreground hover:text-primary'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onLanguageChange('pt')}
              className={`px-3 py-1 rounded transition-all ${
                language === 'pt'
                  ? 'bg-primary text-white'
                  : 'text-foreground hover:text-primary'
              }`}
            >
              PT
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-background rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-4">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              {t.home}
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              {t.about}
            </a>
            <a href="#solutions" className="text-foreground hover:text-primary transition-colors">
              {t.solutions}
            </a>
            <a href="#process" className="text-foreground hover:text-primary transition-colors">
              {t.process}
            </a>
            <a href="#partners" className="text-foreground hover:text-primary transition-colors">
              {t.partners}
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              {t.contact}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
