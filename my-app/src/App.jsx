import  { useState } from 'react';
import { 
  Mail, 
  MessageSquare, 
  Linkedin, 
  Instagram, 
  Facebook, 
  Check, 
  Copy, 
  ExternalLink, 
  ArrowRight,
  Code2
} from 'lucide-react';
import { GeometricConfetti } from './components/GeometricConfetti.jsx';
import tiagoAvatar from '/images/tiago_clean_avatar_1786105880212.png';

export default function App() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('tiago_coroado@icloud.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const whatsappMessage = encodeURIComponent(
    'Olá Tiago! Vi o teu site e gostaria de falar sobre a criação de um site.'
  );

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#1E1B18] relative font-sans overflow-x-hidden selection:bg-[#FF2A85] selection:text-white pb-20 sm:pb-12">
      
      {/* Background Animated Memphis Confetti Shapes */}
      <GeometricConfetti />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
        
        {/* TOP HEADER / LOGO */}
        <header className="flex items-center justify-between py-4 mb-8 sm:mb-12 border-b-4 border-black pb-4">
          
          {/* Logo - "Coroado" */}
          <div className="bg-white border-4 border-black px-4 sm:px-5 py-2 shadow-memphis rotate-[-1deg] hover:rotate-0 transition-transform">
            <span className="font-bungee text-2xl sm:text-3xl tracking-tight text-black">
              COROADO
            </span>
          </div>

          {/* Role Pill */}
          <div className="bg-[#FFE600] border-3 border-black px-3.5 py-1.5 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-memphis-xs rotate-[1deg]">
            Web & Software Developer
          </div>
        </header>

        {/* ==========================================
            HERO SECTION
           ========================================== */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-16 sm:mb-20">
          
          {/* Left Column: Clear Text & CTAs */}
          <div className="md:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 bg-[#8B3DFF] text-white border-3 border-black px-3.5 py-1 shadow-memphis-xs rounded-full font-extrabold text-xs sm:text-sm uppercase tracking-wider">
              <Code2 className="w-4 h-4 text-[#FFE600]" />
              <span>Desenvolvimento Web Moderno</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.15] text-black">
              Sites feitos <span className="marker-highlight-yellow px-1.5 py-0.5 inline-block border-b-4 border-black">rápido</span>. Com AI a ajudar, ainda mais rápido e <span className="marker-highlight-pink px-1.5 py-0.5 inline-block  border-b-4 border-black">mais em conta</span>.
            </h1>

            {/* Proposal Text / Subheadline */}
            <div className="bg-white border-4 border-black p-5 shadow-memphis-lg rotate-[-1deg] w-full space-y-3">
              <p className="text-base sm:text-xl font-bold text-slate-900 leading-snug">
                Sou o <span className="bg-[#FFE600] px-1.5 py-0.5 border border-black font-black">Tiago</span>, developer sediado em Évora. Crio sites e aplicações web modernas, e uso ferramentas de AI no processo, o que quer dizer <span className="bg-[#00F0FF] px-1.5 py-0.5 border border-black font-black">entregas mais rápidas</span> e <span className="text-[#FF2A85] font-black">orçamentos mais acessíveis</span>, sem abdicar de qualidade.
              </p>
              <p className="text-sm sm:text-base font-extrabold text-slate-700 border-t-2 border-black/10 pt-2.5">
                ⚡ Faço sites e aplicações à medida, simples, rápidos, e sem complicações. Com AI no fluxo de trabalho, o que antes demorava semanas, demora dias.
              </p>
            </div>

            {/* Animated Candy-Outlined CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full pt-2">
              
              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/351969197848?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-memphis bg-[#50EB14] text-black border-4 border-black px-6 py-3.5 shadow-memphis flex items-center justify-center gap-2.5 font-black text-base sm:text-lg uppercase tracking-wider group"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>WhatsApp</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Email Button */}
              <a
                href="mailto:tiago_coroado@icloud.com?subject=Pedido%20de%20Site%20-%20Coroado"
                className="btn-memphis bg-[#FF2A85] text-white border-4 border-black px-6 py-3.5 shadow-memphis flex items-center justify-center gap-2.5 font-black text-base sm:text-lg uppercase tracking-wider group"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>

              {/* Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                className="btn-memphis bg-[#FFE600] text-black border-4 border-black p-3.5 shadow-memphis flex items-center justify-center font-black text-sm uppercase tracking-wider"
                title="Copiar email"
              >
                {copiedEmail ? (
                  <span className="flex items-center gap-1.5 text-xs text-black font-black">
                    <Check className="w-4 h-4" /> Copiado!
                  </span>
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </button>

            </div>

          </div>

          {/* Right Column: Clean Portrait Avatar of Tiago (NO earrings) */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm">
              
              {/* Memphis Photo Frame */}
              <div className="bg-white border-4 border-black p-4 shadow-memphis-xl rotate-[2deg] hover:rotate-0 transition-transform duration-300">
                
                {/* Name Header Tag */}
                <div className="bg-[#FFE600] text-black border-3 border-black px-4 py-1 font-bungee text-xs text-center uppercase shadow-memphis-xs mb-3">
                  TIAGO COROADO
                </div>

                {/* Clean Portrait Image with NO Earring */}
                <div className="overflow-hidden border-4 border-black bg-[#00F0FF] aspect-square rounded-xl">
                  <img 
                    src={tiagoAvatar} 
                    alt="Tiago Coroado - Web Developer" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Subtitle Label */}
                <div className="mt-3 text-center">
                  <span className="font-extrabold text-xs uppercase text-slate-800 bg-[#FAF7F0] border-2 border-black px-3 py-0.5 inline-block">
                    Web & Software Developer
                  </span>
                </div>

              </div>

            </div>
          </div>

        </section>

        {/* ==========================================
            SECTION: SOBRE MIM
           ========================================== */}
        <section id="sobre-mim" className="mb-16 sm:mb-20">
          
          <div className="bg-white border-4 border-black p-6 sm:p-8 shadow-memphis-lg space-y-6">
            
            <div className="inline-block bg-[#8B3DFF] text-white border-3 border-black px-4 py-1 shadow-memphis font-bungee text-sm uppercase tracking-widest rotate-[-1deg]">
              🙋‍♂️ SOBRE MIM
            </div>

            <div className="space-y-4 text-slate-900 font-extrabold text-base sm:text-lg leading-relaxed">
              
              <p className="bg-amber-50 border-3 border-black p-5 shadow-memphis-xs rounded-xl text-slate-900 font-bold">
                Trabalho como web developer, com experiência em React, Node.js e bases de dados. Uso AI como aliada no processo de desenvolvimento, não para substituir o trabalho, mas para o acelerar. Isso traduz-se em prazos mais curtos e preços mais competitivos, sem perder o cuidado no detalhe. Se precisas de um site simples, uma landing page, ou algo mais robusto, fala comigo.
              </p>

              <p className="bg-[#FAF7F0] border-2 border-black p-4 rounded-lg text-slate-800 text-sm sm:text-base font-bold">
                Vem falar comigo! Podes também encontrar-me no <span className="text-[#0077B5] font-black">LinkedIn</span>, no <span className="text-[#E1306C] font-black">Instagram</span> e no <span className="text-[#1877F2] font-black">Facebook</span> (este uso pouco, por isso prefere as outras redes por favor!).
              </p>

            </div>

            {/* CTA Highlight Banner inside About */}
            <div className="bg-[#50EB14] border-3 border-black p-5 shadow-memphis flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-black text-lg text-black">
                  Gostaste do que viste? Este site também foi feito por mim.
                </h3>
                <p className="text-xs font-extrabold text-slate-900 mt-0.5">
                  Precisas de um site assim? Resposta rápida, orçamento sem complicações.
                </p>
              </div>

              <a
                href={`https://wa.me/351969197848?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-memphis bg-black text-white border-2 border-black px-5 py-3 font-black text-xs uppercase tracking-wider flex items-center gap-2 whitespace-nowrap shadow-memphis-xs"
              >
                <MessageSquare className="w-4 h-4 text-[#50EB14] fill-current" />
                <span>Contactar Agora</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="mt-6 pt-4 border-t-3 border-black grid grid-cols-1 sm:grid-cols-3 gap-3">
              
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/tiago-coroado"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-memphis bg-[#0077B5] text-white border-3 border-black p-3.5 shadow-memphis flex items-center justify-between font-black text-sm uppercase"
              >
                <div className="flex items-center gap-2">
                  <Linkedin className="w-5 h-5 fill-current" />
                  <span>LinkedIn</span>
                </div>
                <ExternalLink className="w-4 h-4 opacity-80" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/tiagocoroado/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-memphis bg-[#E1306C] text-white border-3 border-black p-3.5 shadow-memphis flex items-center justify-between font-black text-sm uppercase"
              >
                <div className="flex items-center gap-2">
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </div>
                <ExternalLink className="w-4 h-4 opacity-80" />
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-memphis bg-slate-100 text-slate-800 border-3 border-black p-3.5 shadow-memphis flex items-center justify-between font-black text-sm uppercase opacity-85 hover:opacity-100"
              >
                <div className="flex items-center gap-2">
                  <Facebook className="w-5 h-5 text-[#1877F2]" />
                  <span>Facebook</span>
                </div>
                <span className="text-[10px] bg-amber-200 border border-black px-1.5 py-0.5 text-black">Uso pouco</span>
              </a>

            </div>

          </div>

        </section>

        {/* ==========================================
            SEO FOOTER
           ========================================== */}
        <footer className="bg-white border-4 border-black p-6 shadow-memphis space-y-4">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b-2 border-black pb-4">
            <span className="font-bungee text-xl text-black">
              COROADO
            </span>
            
            <div className="flex items-center gap-3">
              <a 
                href={`https://wa.me/351969197848?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-memphis bg-[#50EB14] text-black border-2 border-black px-3 py-1 font-black text-xs uppercase"
              >
                WhatsApp
              </a>
              <a 
                href="mailto:tiago_coroado@icloud.com"
                className="btn-memphis bg-[#FF2A85] text-white border-2 border-black px-3 py-1 font-black text-xs uppercase"
              >
                Email
              </a>
            </div>
          </div>

          {/* SEO Keywords Badges */}
          <div className="flex flex-wrap gap-2 text-xs font-extrabold text-black pt-1">
            <span className="bg-[#FAF7F0] border border-black px-2 py-0.5">Fazer sites em portugal</span>
            <span className="bg-[#FAF7F0] border border-black px-2 py-0.5">Sites baratos e bons</span>
            <span className="bg-[#FAF7F0] border border-black px-2 py-0.5">Web Developer</span>
            <span className="bg-[#FFE600] border border-black px-2 py-0.5">Coroado | Web Developer</span>
          </div>

          <p className="text-center text-xs font-bold text-slate-600 pt-2">
            © {new Date().getFullYear()} Tiago Coroado. Todos os direitos reservados.
          </p>

        </footer>

      </div>

      {/* MOBILE STICKY BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-4 border-black p-2.5 sm:hidden flex items-center gap-2 shadow-lg">
        <a
          href={`https://wa.me/351969197848?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-memphis bg-[#50EB14] text-black border-3 border-black py-2.5 px-4 flex-1 text-center font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>WhatsApp</span>
        </a>

        <a
          href="mailto:tiago_coroado@icloud.com"
          className="btn-memphis bg-[#FF2A85] text-white border-3 border-black py-2.5 px-4 flex-1 text-center font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5"
        >
          <Mail className="w-4 h-4" />
          <span>Email</span>
        </a>
      </div>

    </div>
  );
}
