import  { useState } from 'react';
import { Menu, X, Server, Home, Shield, Code, Network, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';

export default function SipDigital() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    motivo: '',
    mensagem: ''
  });

  const services = [
    {
      icon: <Server className="w-12 h-12" />,
      title: "Consultoria em TI",
      description: "Avaliação estratégica e otimização de infraestrutura para maximizar a eficiência do seu negócio.",
      features: ["Avaliação Estratégica", "Otimização de Infraestrutura", "Integração de Sistemas"]
    },
    {
      icon: <Home className="w-12 h-12" />,
      title: "Automação Residencial",
      description: "Transforme sua casa em um ambiente inteligente com controle total de climatização, iluminação e segurança.",
      features: ["Controle por App", "Economia de Energia", "Conforto e Segurança"]
    },
    {
      icon: <Network className="w-12 h-12" />,
      title: "Infraestrutura de Redes",
      description: "Projetos e implementação de redes estruturadas com alta performance e segurança.",
      features: ["Cabeamento Estruturado", "Wi-Fi Corporativo", "Monitoramento 24/7"]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Gerenciamento de TI",
      description: "Suporte técnico especializado e gerenciamento proativo da sua infraestrutura tecnológica.",
      features: ["Monitoramento Proativo", "Segurança Cibernética", "Backup Automatizado"]
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Softwarehouse",
      description: "Desenvolvimento de software personalizado para atender as necessidades específicas do seu negócio.",
      features: ["Desenvolvimento Web", "Aplicativos Mobile", "Sistemas Customizados"]
    }
  ];

  const benefits = [
    "Customização para seu negócio",
    "Economia de custos operacionais",
    "Inovação contínua",
    "Foco no seu core business",
    "Segurança de ponta a ponta",
    "Suporte técnico especializado"
  ];

  const handleSubmit = () => {
    if (!formData.nome || !formData.motivo || !formData.mensagem) {
      alert('Por favor, preencha todos os campos');
      return;
    }
    const { nome, motivo, mensagem } = formData;
    const whatsappMessage = `Olá! Meu nome é *${nome}*%0A%0A*Motivo do contato:* ${motivo}%0A%0A*Mensagem:* ${mensagem}`;
    window.open(`https://wa.me/55414199011083?text=${whatsappMessage}`, '_blank');
    setShowContactForm(false);
    setFormData({ nome: '', motivo: '', mensagem: '' });
  };

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="fixed w-full bg-slate-900/95 backdrop-blur-sm shadow-lg z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Server className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                SIP Digital
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-cyan-400 transition">Início</a>
              <a href="#services" className="hover:text-cyan-400 transition">Serviços</a>
              <a href="#about" className="hover:text-cyan-400 transition">Sobre</a>
              <a href="#contact" className="hover:text-cyan-400 transition">Contato</a>
            </div>

            <button
              onClick={() => setShowContactForm(true)}
              className="hidden md:block bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition"
            >
              Fale Conosco
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-4">
              <a href="#home" className="block hover:text-cyan-400 transition">Início</a>
              <a href="#services" className="block hover:text-cyan-400 transition">Serviços</a>
              <a href="#about" className="block hover:text-cyan-400 transition">Sobre</a>
              <a href="#contact" className="block hover:text-cyan-400 transition">Contato</a>
              <button
                onClick={() => setShowContactForm(true)}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-2 rounded-lg"
              >
                Fale Conosco
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Soluções Tecnológicas Inteligentes
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Especializada em TI, automação residencial, infraestrutura de redes e desenvolvimento de software sob medida para o seu negócio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowContactForm(true)}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition transform hover:scale-105"
            >
              Solicitar Orçamento
            </button>
            <a
              href="#services"
              className="border-2 border-cyan-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-500/10 transition"
            >
              Nossos Serviços
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Nossos Serviços</h2>
          <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
            Soluções completas em tecnologia para impulsionar o seu negócio
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition hover:shadow-xl hover:shadow-cyan-500/20 group"
              >
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-400">
                      <ChevronRight className="w-4 h-4 text-cyan-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setShowContactForm(true)}
                  className="mt-6 w-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500 px-4 py-2 rounded-lg hover:from-cyan-500 hover:to-blue-500 transition"
                >
                  Saiba Mais
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Por que escolher a SIP Digital?</h2>
          <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
            Compromisso com excelência, inovação e resultados
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition"
              >
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                  <p className="text-slate-200">{benefit}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Nosso Diferencial</h3>
            <div className="grid md:grid-cols-2 gap-6 text-slate-300">
              <div>
                <h4 className="font-semibold text-cyan-400 mb-2">Monitoramento Proativo</h4>
                <p className="text-sm">Detectamos e resolvemos problemas antes mesmo deles afetarem suas operações.</p>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-400 mb-2">Gestão Profissional</h4>
                <p className="text-sm">Metodologias avançadas garantindo entrega pontual e dentro do orçamento.</p>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-400 mb-2">Segurança Robusta</h4>
                <p className="text-sm">Proteção de ponta a ponta com as melhores práticas de segurança cibernética.</p>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-400 mb-2">Suporte Especializado</h4>
                <p className="text-sm">Equipe qualificada pronta para fornecer suporte rápido e eficaz.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Entre em Contato</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-slate-900/50 p-6 rounded-xl text-center">
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Telefone</h3>
              <p className="text-slate-300 text-sm">(48) 99999-9999</p>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-xl text-center">
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">E-mail</h3>
              <p className="text-slate-300 text-sm">contato@sipdigital.com.br</p>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-xl text-center">
              <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Localização</h3>
              <p className="text-slate-300 text-sm">Florianópolis, SC</p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setShowContactForm(true)}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 px-12 py-4 rounded-lg text-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition transform hover:scale-105"
            >
              Solicitar Atendimento
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 px-6">
        <div className="container mx-auto text-center text-slate-400">
          <p>&copy; 2025 SIP Digital. Todos os direitos reservados.</p>
          <p className="text-sm mt-2">Soluções em TI, Automação, Redes e Software</p>
        </div>
      </footer>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-900 rounded-xl p-8 max-w-md w-full border border-slate-700 relative">
            <button
              onClick={() => setShowContactForm(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Fale Conosco
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nome Completo</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Motivo do Contato</label>
                <select
                  name="motivo"
                  value={formData.motivo}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition"
                >
                  <option value="">Selecione...</option>
                  <option value="Consultoria em TI">Consultoria em TI</option>
                  <option value="Automação Residencial">Automação Residencial</option>
                  <option value="Infraestrutura de Redes">Infraestrutura de Redes</option>
                  <option value="Gerenciamento de TI">Gerenciamento de TI</option>
                  <option value="Desenvolvimento de Software">Desenvolvimento de Software</option>
                  <option value="Suporte Técnico">Suporte Técnico</option>
                  <option value="Orçamento">Solicitar Orçamento</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Mensagem</label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  // rows="4"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition resize-none"
                  placeholder="Descreva sua necessidade..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition transform hover:scale-105"
              >
                Enviar via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}