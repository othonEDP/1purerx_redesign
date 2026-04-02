import { Facebook, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'pt';
}

export default function Footer({ language }: FooterProps) {
  const translations = {
    en: {
      about: 'About',
      solutions: 'Solutions',
      process: 'Process',
      partners: 'Partners',
      endopure: 'EndoPure USA',
      contact: 'Contact',
      followUs: 'Follow Us',
      rights: '© 2026 1PureRx & Grupo EndoPure. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      cnpj: 'CNPJ 09.325.999/0001-13',
    },
    pt: {
      about: 'Sobre',
      solutions: 'Soluções',
      process: 'Processo',
      partners: 'Parceiros',
      endopure: 'EndoPure USA',
      contact: 'Contato',
      followUs: 'Nos Siga',
      rights: '© 2026 1PureRx & Grupo EndoPure. Todos os direitos reservados.',
      privacy: 'Política de Privacidade',
      terms: 'Termos de Uso',
      cnpj: 'CNPJ 09.325.999/0001-13',
    },
  };

  const t = translations[language];

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029271132/Y7eGYsDjgd9BdJXBRUhQTv/LogoBrancocomCannabidiol_cc78e597.png"
              alt="1PureRx Logo"
              className="h-16 w-auto mb-4"
            />
            <p className="text-sm opacity-90 mb-6">
              {language === 'en'
                ? 'Leading pharmaceutical distributor of high-purity cannabinoid products'
                : 'Distribuidora farmacêutica líder em produtos canabinoides de alta pureza'}
            </p>
            <p className="text-xs opacity-75">{t.cnpj}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{language === 'en' ? 'Quick Links' : 'Links Rápidos'}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  {t.about}
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-accent transition-colors">
                  {t.solutions}
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-accent transition-colors">
                  {t.process}
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-accent transition-colors">
                  {t.partners}
                </a>
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h4 className="font-semibold mb-4">{language === 'en' ? 'Partners' : 'Parceiros'}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.endopureusa.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  {t.endopure}
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-accent transition-colors">
                  EndoPure Academy
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-accent transition-colors">
                  {language === 'en' ? 'EndoPure Life Sciences' : 'EndoPure Life Sciences'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-4">{t.contact}</h4>
            <div className="space-y-3 text-sm mb-6">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:sac@1pure.com.br" className="hover:text-accent transition-colors">
                  sac@1pure.com.br
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+5521967621020" className="hover:text-accent transition-colors">
                  +55 (21) 96762-1020
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-sm font-semibold mb-3">{t.followUs}</p>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                >
                  <Facebook size={18} className="text-primary" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin size={18} className="text-primary" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram size={18} className="text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-75">
            <p>{t.rights}</p>
            <div className="flex gap-6">
              <a href="#privacy" className="hover:text-accent transition-colors">
                {t.privacy}
              </a>
              <a href="#terms" className="hover:text-accent transition-colors">
                {t.terms}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
