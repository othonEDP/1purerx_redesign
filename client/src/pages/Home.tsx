import { useState } from 'react';
import { ChevronDown, Beaker, Users, Shield, BookOpen, Calculator, FileText, Globe, Award, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'pt'>('en');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const translations = {
    en: {
      // Hero
      heroTitle: 'Advancing Pharmaceutical Excellence',
      heroSubtitle: 'Leading global distributor of high-purity cannabinoid products for healthcare professionals',
      heroButton: 'Learn More',
      
      // About
      aboutTitle: 'About 1PureRx',
      aboutSubtitle: 'Discover the Power of 1Pure Cannabidiol',
      aboutContent: 'The 1Pure Cannabidiol offers an experience that goes beyond simple treatment: we guarantee exceptional purity of our products, generating greater quality of life and well-being for patients. We are pioneers in research, production and global distribution of cannabinoid-based products, offering Cannabidiol with impressive 99.82% purity.',
      aboutHighlight: 'Our mission is to offer a natural, reliable and safe solution through products developed with scientific rigor and differentiated purity.',
      
      // Solutions
      solutionsTitle: 'Our Solutions',
      solutionsSubtitle: 'Exclusive tools for healthcare professionals',
      scientificArticles: 'Scientific Articles',
      scientificDesc: 'Access a vast library of scientific articles covering the latest advances in cannabinoid research',
      supportReps: 'Expert Support',
      supportDesc: 'Trained representatives available to provide guidance and answer your questions',
      regulatory: 'Regulatory Compliance',
      regulatoryDesc: 'ANVISA authorized for import activities, complying with FDA and INFARMED standards',
      referenceManual: 'Reference Materials',
      referenceDesc: 'Comprehensive materials from informative brochures to detailed reports',
      
      // Tools
      toolsTitle: 'Professional Tools',
      toolsSubtitle: 'Simplify your clinical practice',
      dosageCalc: 'Dosage Calculator',
      prescriptionGen: 'Prescription Generator',
      
      // Process
      processTitle: 'How to Purchase',
      processSubtitle: 'Three simple steps to access our products',
      step1Title: 'Consult a Healthcare Professional',
      step1Desc: 'Obtain a medical prescription from an experienced cannabinoid prescriber',
      step2Title: 'Register with ANVISA',
      step2Desc: 'Get import authorization through ANVISA with required documentation',
      step3Title: 'Contact Our Team',
      step3Desc: 'Request a quote and complete your purchase with our support team',
      
      // Partners
      partnersTitle: 'Our Partners',
      partnersSubtitle: 'Collaborating to advance cannabinoid medicine',
      endopure: 'EndoPure Life Sciences',
      endopureDesc: 'Pioneer company in cannabinoid research and distribution',
      academy: 'EndoPure Academy',
      academyDesc: 'Online platform for cannabinoid medicine courses',
      
      // Compliance
      complianceTitle: 'Legal Compliance',
      complianceSubtitle: 'Committed to safety and quality',
      complianceContent: 'At 1PureRx, we prioritize safety and well-being. We strictly follow ANVISA standards in Brazil, as well as FDA and international regulatory guidelines. All our products meet the highest quality and safety standards.',
      
      // Contact
      contactTitle: 'Get in Touch',
      contactSubtitle: 'Have questions? We\'re here to help',
      contactEmail: 'Email us',
      contactPhone: 'Call us',
      
      // FAQ
      faqTitle: 'Frequently Asked Questions',
      faqSubtitle: 'Common questions about 1PureRx',
      faq1Q: 'Who is 1PureRx Brasil?',
      faq1A: '1PureRx Brasil is a pioneer in the production and distribution of natural pharmaceutical products, specializing in high-purity cannabidiol with 99.82% purity.',
      faq2Q: 'What countries does 1PureRx distribute to?',
      faq2A: 'We distribute our cannabinoid-based products to over 30 countries worldwide.',
      faq3Q: 'What is the purity level of 1PureRx Cannabidiol?',
      faq3A: 'Our Cannabidiol has an impressive 99.82% purity level, the highest in the market.',
      faq4Q: 'Is 1PureRx Cannabidiol registered with ANVISA?',
      faq4A: 'Yes, our products are widely recognized by ANVISA and authorized for import.',
      faq5Q: 'How does the support system work?',
      faq5A: 'We provide trained representatives available to offer guidance and support to healthcare professionals.',
      
      // Newsletter
      newsletterTitle: 'Stay Updated',
      newsletterSubtitle: 'Subscribe to our newsletter for the latest cannabinoid medicine insights',
      newsletterPlaceholder: 'Your email address',
      newsletterButton: 'Subscribe',
    },
    pt: {
      // Hero
      heroTitle: 'Avançando a Excelência Farmacêutica',
      heroSubtitle: 'Distribuidora global líder de produtos canabinoides de alta pureza para profissionais de saúde',
      heroButton: 'Saiba Mais',
      
      // About
      aboutTitle: 'Sobre a 1PureRx',
      aboutSubtitle: 'Descubra o Poder do Canabidiol 1Pure',
      aboutContent: 'O Canabidiol da 1Pure oferece uma experiência que vai além do simples tratamento: garantimos a pureza excepcional dos nossos produtos, gerando maior qualidade de vida e bem-estar aos pacientes. Somos pioneiros na pesquisa, produção e distribuição global de produtos à base de canabinoides, oferecendo um Canabidiol com impressionantes 99,82% de pureza.',
      aboutHighlight: 'Nossa missão é oferecer uma solução natural, confiável e segura por meio de produtos desenvolvidos com rigor científico e pureza diferenciada.',
      
      // Solutions
      solutionsTitle: 'Nossas Soluções',
      solutionsSubtitle: 'Ferramentas exclusivas para profissionais de saúde',
      scientificArticles: 'Artigos Científicos',
      scientificDesc: 'Acesse uma vasta biblioteca de artigos científicos cobrindo os avanços mais recentes em pesquisa de canabinoides',
      supportReps: 'Suporte Especializado',
      supportDesc: 'Representantes treinados disponíveis para orientação e responder suas dúvidas',
      regulatory: 'Conformidade Regulatória',
      regulatoryDesc: 'Autorizada pela ANVISA para atividades de importação, em conformidade com padrões FDA e INFARMED',
      referenceManual: 'Materiais de Referência',
      referenceDesc: 'Materiais abrangentes desde folhetos informativos até relatórios detalhados',
      
      // Tools
      toolsTitle: 'Ferramentas Profissionais',
      toolsSubtitle: 'Simplifique sua prática clínica',
      dosageCalc: 'Calculadora de Doses',
      prescriptionGen: 'Gerador de Receita',
      
      // Process
      processTitle: 'Como Comprar',
      processSubtitle: 'Três passos simples para acessar nossos produtos',
      step1Title: 'Consulte um Profissional de Saúde',
      step1Desc: 'Obtenha uma prescrição médica de um prescritor experiente em canabinoides',
      step2Title: 'Registre-se na ANVISA',
      step2Desc: 'Obtenha autorização de importação através da ANVISA com documentação necessária',
      step3Title: 'Entre em Contato Conosco',
      step3Desc: 'Solicite uma cotação e complete sua compra com suporte de nossa equipe',
      
      // Partners
      partnersTitle: 'Nossos Parceiros',
      partnersSubtitle: 'Colaborando para avançar a medicina canabinoide',
      endopure: 'EndoPure Life Sciences',
      endopureDesc: 'Empresa pioneira em pesquisa e distribuição de canabinoides',
      academy: 'EndoPure Academy',
      academyDesc: 'Plataforma online de cursos sobre medicina canabinoide',
      
      // Compliance
      complianceTitle: 'Conformidade Legal',
      complianceSubtitle: 'Comprometidos com segurança e qualidade',
      complianceContent: 'Na 1PureRx, priorizamos segurança e bem-estar. Seguimos rigorosamente as normas da ANVISA no Brasil, bem como as diretrizes regulatórias do FDA e internacionais. Todos os nossos produtos atendem aos mais altos padrões de qualidade e segurança.',
      
      // Contact
      contactTitle: 'Entre em Contato',
      contactSubtitle: 'Tem dúvidas? Estamos aqui para ajudar',
      contactEmail: 'Envie um email',
      contactPhone: 'Ligue para nós',
      
      // FAQ
      faqTitle: 'Perguntas Frequentes',
      faqSubtitle: 'Dúvidas comuns sobre a 1PureRx',
      faq1Q: 'Quem é a 1PureRx Brasil?',
      faq1A: 'A 1PureRx Brasil é pioneira na produção e distribuição de produtos farmacêuticos naturais, especializando-se em canabidiol de alta pureza com 99,82% de pureza.',
      faq2Q: 'Para quais países a 1PureRx distribui?',
      faq2A: 'Distribuímos nossos produtos à base de canabinoides para mais de 30 países em todo o mundo.',
      faq3Q: 'Qual é o nível de pureza do Canabidiol 1PureRx?',
      faq3A: 'Nosso Canabidiol possui um nível impressionante de 99,82% de pureza, o mais alto do mercado.',
      faq4Q: 'O Canabidiol 1PureRx é registrado na ANVISA?',
      faq4A: 'Sim, nossos produtos são amplamente reconhecidos pela ANVISA e autorizados para importação.',
      faq5Q: 'Como funciona o sistema de suporte?',
      faq5A: 'Fornecemos representantes treinados disponíveis para oferecer orientação e suporte a profissionais de saúde.',
      
      // Newsletter
      newsletterTitle: 'Mantenha-se Atualizado',
      newsletterSubtitle: 'Inscreva-se em nossa newsletter para os últimos insights sobre medicina canabinoide',
      newsletterPlaceholder: 'Seu endereço de email',
      newsletterButton: 'Inscrever-se',
    },
  };

  const t = translations[language];

  const faqItems = [
    { q: t.faq1Q, a: t.faq1A },
    { q: t.faq2Q, a: t.faq2A },
    { q: t.faq3Q, a: t.faq3A },
    { q: t.faq4Q, a: t.faq4A },
    { q: t.faq5Q, a: t.faq5A },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={setLanguage} />

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="pharma-line mb-6" />
              <h1 className="text-primary mb-6">{t.heroTitle}</h1>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">{t.heroSubtitle}</p>
              <button className="pharma-button-accent flex items-center gap-2 group">
                {t.heroButton}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029271132/Y7eGYsDjgd9BdJXBRUhQTv/hero-pharmaceutical-ZTyWGHJ8B4MHQ3um3gttmV.webp"
                alt="Pharmaceutical Laboratory"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029271132/Y7eGYsDjgd9BdJXBRUhQTv/cannabinoid-science-554uBfKkhwkrr8kvit4Wdh.webp"
                alt="Cannabinoid Science"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <div className="pharma-line mb-6" />
              <h2 className="text-primary mb-6">{t.aboutTitle}</h2>
              <h3 className="text-2xl text-foreground mb-6">{t.aboutSubtitle}</h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">{t.aboutContent}</p>
              <div className="bg-primary/5 border-l-4 border-accent p-6 rounded">
                <p className="text-foreground font-semibold">{t.aboutHighlight}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <div className="pharma-line mx-auto mb-6" />
            <h2 className="text-primary mb-4">{t.solutionsTitle}</h2>
            <p className="text-lg text-foreground/80">{t.solutionsSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="pharma-card group">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                <Beaker className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{t.scientificArticles}</h3>
              <p className="text-foreground/80">{t.scientificDesc}</p>
            </div>

            <div className="pharma-card group">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                <Users className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{t.supportReps}</h3>
              <p className="text-foreground/80">{t.supportDesc}</p>
            </div>

            <div className="pharma-card group">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                <Shield className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{t.regulatory}</h3>
              <p className="text-foreground/80">{t.regulatoryDesc}</p>
            </div>

            <div className="pharma-card group">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                <BookOpen className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{t.referenceManual}</h3>
              <p className="text-foreground/80">{t.referenceDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="pharma-line mx-auto mb-6" />
            <h2 className="text-primary mb-4">{t.toolsTitle}</h2>
            <p className="text-lg text-foreground/80">{t.toolsSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="pharma-card text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calculator className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary">{t.dosageCalc}</h3>
            </div>

            <div className="pharma-card text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary">{t.prescriptionGen}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <div className="pharma-line mx-auto mb-6" />
            <h2 className="text-primary mb-4">{t.processTitle}</h2>
            <p className="text-lg text-foreground/80">{t.processSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '1', title: t.step1Title, desc: t.step1Desc },
              { num: '2', title: t.step2Title, desc: t.step2Desc },
              { num: '3', title: t.step3Title, desc: t.step3Desc },
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="pharma-card">
                  <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">{step.title}</h3>
                  <p className="text-foreground/80">{step.desc}</p>
                </div>
                {idx < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="text-accent" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="pharma-line mx-auto mb-6" />
            <h2 className="text-primary mb-4">{t.partnersTitle}</h2>
            <p className="text-lg text-foreground/80">{t.partnersSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="pharma-card">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{t.endopure}</h3>
              <p className="text-foreground/80 mb-4">{t.endopureDesc}</p>
              <a
                href="https://www.endopureusa.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-semibold hover:text-primary transition-colors flex items-center gap-2"
              >
                Visit <ArrowRight size={16} />
              </a>
            </div>

            <div className="pharma-card">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Award className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{t.academy}</h3>
              <p className="text-foreground/80">{t.academyDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center mb-12">
            <div className="h-1 w-12 bg-accent rounded-full mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.complianceTitle}</h2>
            <p className="text-lg opacity-90">{t.complianceSubtitle}</p>
          </div>
          <p className="text-center max-w-2xl mx-auto text-lg opacity-90 leading-relaxed">{t.complianceContent}</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <div className="pharma-line mx-auto mb-6" />
            <h2 className="text-primary mb-4">{t.faqTitle}</h2>
            <p className="text-lg text-foreground/80">{t.faqSubtitle}</p>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            {faqItems.map((item, idx) => (
              <div key={idx} className="pharma-card cursor-pointer" onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}>
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-primary">{item.q}</h3>
                  <ChevronDown
                    size={20}
                    className={`text-accent transition-transform ${expandedFaq === idx ? 'rotate-180' : ''}`}
                  />
                </div>
                {expandedFaq === idx && (
                  <p className="text-foreground/80 mt-4 pt-4 border-t border-border">{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-2xl">
          <div className="text-center mb-8">
            <div className="pharma-line mx-auto mb-6" />
            <h2 className="text-primary mb-4">{t.newsletterTitle}</h2>
            <p className="text-lg text-foreground/80">{t.newsletterSubtitle}</p>
          </div>

          <form className="flex gap-3">
            <input
              type="email"
              placeholder={t.newsletterPlaceholder}
              className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button type="submit" className="pharma-button-accent">
              {t.newsletterButton}
            </button>
          </form>
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
}
