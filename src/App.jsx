import { useState, useEffect } from "react";

const GRADIENT_HERO = "linear-gradient(135deg, #7c3aed 0%, #4f46e5 50%, #0ea5e9 100%)";
const GLOW_PRIMARY = "0 0 32px 4px rgba(124,58,237,0.25)";

function SparklesIcon({ size = 16, style = {} }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style} aria-hidden="true">
      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
      <path d="M20 2v4" /><path d="M22 4h-4" /><circle cx="4" cy="20" r="2" />
    </svg>
  );
}

function BotIcon({ size = 14 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" />
    </svg>
  );
}

function ArrowRightIcon({ size = 16 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function ShieldCheckIcon({ size = 12 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function MailIcon({ size = 12 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" />
    </svg>
  );
}

function WandIcon({ size = 12 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" />
      <path d="m14 7 3 3" /><path d="M5 6v4" /><path d="M19 14v4" /><path d="M10 2v2" /><path d="M7 8H3" /><path d="M21 16h-4" /><path d="M11 3H9" />
    </svg>
  );
}

function TargetIcon({ size = 20, color = "currentColor" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function CheckIcon({ size = 12 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function UsersIcon({ size = 20 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ZapIcon({ size = 20 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function ChartIcon({ size = 20 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

function StarIcon({ size = 14, filled = true }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={filled ? "#f59e0b" : "none"} stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function MenuIcon({ size = 20 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function XIcon({ size = 20 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 6 6 18" /><path d="m6 6 12 12" />
    </svg>
  );
}

// Animated score component
function AnimatedScore({ target, color }) {
  const [score, setScore] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setScore(target); clearInterval(timer); }
      else setScore(start);
    }, 30);
    return () => clearInterval(timer);
  }, [target]);
  return <span style={{ color, fontWeight: 700, fontSize: 13 }}>{score}</span>;
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredNav, setHoveredNav] = useState(null);
  const [hoveredCTA, setHoveredCTA] = useState(false);
  const [hoveredOutline, setHoveredOutline] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);

  const navLinks = [
    // TODO: reemplazar "#" con URLs reales de cada sección
    { label: "StratIA Academia", href: "#academia" },
    { label: "Acceso Pro", href: "#planes" },
    { label: "Términos", href: "#terminos", hidden: true },
    { label: "Privacidad", href: "#privacidad", hidden: true },
    { label: "Reembolsos", href: "#reembolsos", hidden: true },
  ];

  const features = [
    {
      icon: <TargetIcon size={20} color="#fff" />,
      title: "Describe a tu cliente ideal",
      desc: "Respondes preguntas simples sobre tu negocio. La IA arma el perfil de cliente que más te conviene.",
    },
    {
      icon: <WandIcon size={20} />,
      title: "Recibe tu embudo inteligente",
      desc: "StratIA te genera el plan completo: mensajes, recursos y pasos concretos para atraer y convertir.",
    },
    {
      icon: <UsersIcon size={20} />,
      title: "Filtra a los mejores prospectos",
      desc: "Un sistema de puntuación automática te dice quién está listo para comprar y quién necesita más tiempo.",
    },
  ];

  const faqs = [
    {
      q: "¿Necesito saber de marketing para usar StratIA?",
      a: "Para nada. Solo describes tu negocio con tus propias palabras y la IA transforma esa información en un plan de acción claro y ejecutable.",
    },
    {
      q: "¿Cómo funciona el plan gratuito?",
      a: "Puedes generar hasta 3 embudos inteligentes al mes sin necesidad de tarjeta de crédito. Es ideal para probar la plataforma con tu negocio real.",
    },
    {
      q: "¿En cuánto tiempo obtengo resultados?",
      a: "En menos de 10 minutos tienes tu plan completo. La mayoría de usuarios reportan ver sus primeros prospectos calificados en la primera semana.",
    },
    {
      q: "¿Puedo usar StratIA para cualquier tipo de negocio?",
      a: "Sí. Funciona para servicios, productos físicos, consultoría, e-commerce, negocios locales y más. La IA adapta el plan a tu sector.",
    },
  ];

  const testimonials = [
    {
      name: "Andrea M.",
      role: "Asesora fiscal",
      text: "En 3 días conseguí 5 prospectos calificados. Nunca pensé que el marketing pudiera ser tan sencillo.",
      score: 5,
    },
    {
      name: "Roberto G.",
      role: "Consultor de RRHH",
      text: "El filtro de clientes me ahorró horas de llamadas inútiles. Ahora solo hablo con quienes están listos.",
      score: 5,
    },
    {
      name: "Lucía P.",
      role: "Diseñadora freelance",
      text: "Me dio el plan, los correos y las preguntas de filtrado. Solo tuve que ejecutarlo. Increíble.",
      score: 5,
    },
  ];

  const styles = {
    root: {
      minHeight: "100vh",
      background: "#0a0a0f",
      color: "#e2e8f0",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      position: "relative",
      overflowX: "hidden",
    },
    bgGlow: {
      pointerEvents: "none",
      position: "fixed",
      inset: 0,
      zIndex: 0,
      opacity: 0.45,
      background: "radial-gradient(60% 50% at 20% 10%, rgba(124,58,237,0.28) 0%, transparent 70%), radial-gradient(50% 40% at 80% 0%, rgba(14,165,233,0.22) 0%, transparent 70%)",
    },
    header: {
      borderBottom: "1px solid rgba(255,255,255,0.08)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(10,10,15,0.75)",
    },
    headerInner: {
      maxWidth: 1152,
      margin: "0 auto",
      padding: "0 16px",
      height: 64,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
    },
    logo: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      textDecoration: "none",
      cursor: "pointer",
    },
    logoIcon: {
      height: 32,
      width: 32,
      borderRadius: 8,
      display: "grid",
      placeItems: "center",
      background: GRADIENT_HERO,
      boxShadow: GLOW_PRIMARY,
      flexShrink: 0,
    },
    logoText: {
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: "-0.02em",
      color: "#fff",
    },
    nav: {
      display: "flex",
      alignItems: "center",
      gap: 2,
    },
    navLink: (hovered) => ({
      padding: "0 12px",
      height: 36,
      display: "flex",
      alignItems: "center",
      fontSize: 13,
      color: hovered ? "#e2e8f0" : "#94a3b8",
      textDecoration: "none",
      borderRadius: 6,
      background: hovered ? "rgba(255,255,255,0.06)" : "transparent",
      transition: "color 0.15s, background 0.15s",
      cursor: "pointer",
      whiteSpace: "nowrap",
    }),
    btnPrimary: (hovered) => ({
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 6,
      background: GRADIENT_HERO,
      boxShadow: hovered ? "0 0 24px 6px rgba(124,58,237,0.4)" : GLOW_PRIMARY,
      color: "#fff",
      border: "none",
      borderRadius: 8,
      padding: "0 18px",
      height: 36,
      fontSize: 13,
      fontWeight: 600,
      cursor: "pointer",
      transition: "box-shadow 0.2s, transform 0.15s",
      transform: hovered ? "translateY(-1px)" : "none",
      textDecoration: "none",
      whiteSpace: "nowrap",
    }),
    main: {
      maxWidth: 1152,
      margin: "0 auto",
      padding: "64px 16px 96px",
      position: "relative",
      zIndex: 1,
    },
    heroBadge: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      borderRadius: 99,
      border: "1px solid rgba(255,255,255,0.1)",
      background: "rgba(255,255,255,0.04)",
      padding: "4px 14px",
      fontSize: 12,
      color: "#94a3b8",
      marginBottom: 24,
    },
    h1: {
      fontSize: "clamp(2rem, 5vw, 3.5rem)",
      fontWeight: 800,
      lineHeight: 1.05,
      letterSpacing: "-0.03em",
      marginBottom: 20,
      color: "#f1f5f9",
    },
    h1Gradient: {
      backgroundImage: GRADIENT_HERO,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    heroParagraph: {
      fontSize: "clamp(15px, 2vw, 18px)",
      color: "#94a3b8",
      maxWidth: 640,
      margin: "0 auto 32px",
      lineHeight: 1.7,
    },
    ctaRow: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
      marginBottom: 12,
    },
    btnHero: (hovered) => ({
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      background: GRADIENT_HERO,
      boxShadow: hovered ? "0 0 32px 8px rgba(124,58,237,0.45)" : GLOW_PRIMARY,
      color: "#fff",
      border: "none",
      borderRadius: 10,
      padding: "0 28px",
      height: 50,
      fontSize: 16,
      fontWeight: 700,
      cursor: "pointer",
      transition: "box-shadow 0.2s, transform 0.15s",
      transform: hovered ? "translateY(-2px) scale(1.02)" : "none",
      textDecoration: "none",
    }),
    btnOutline: (hovered) => ({
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid rgba(255,255,255,0.15)",
      background: hovered ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.03)",
      color: hovered ? "#e2e8f0" : "#cbd5e1",
      borderRadius: 10,
      padding: "0 32px",
      height: 50,
      fontSize: 15,
      fontWeight: 500,
      cursor: "pointer",
      transition: "background 0.15s, color 0.15s, transform 0.15s",
      transform: hovered ? "translateY(-1px)" : "none",
      textDecoration: "none",
    }),
    subNote: {
      fontSize: 12,
      color: "#64748b",
      marginBottom: 56,
    },
    mockupWrapper: {
      position: "relative",
      maxWidth: 960,
      margin: "0 auto",
    },
    mockupGlow: {
      position: "absolute",
      inset: -24,
      zIndex: -1,
      borderRadius: 32,
      opacity: 0.5,
      filter: "blur(48px)",
      background: GRADIENT_HERO,
    },
    mockup: {
      borderRadius: 20,
      border: "1px solid rgba(255,255,255,0.1)",
      background: "rgba(15,15,25,0.85)",
      backdropFilter: "blur(24px)",
      boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
      overflow: "hidden",
    },
    mockupBar: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "12px 16px",
      borderBottom: "1px solid rgba(255,255,255,0.07)",
      background: "rgba(0,0,0,0.3)",
    },
    mockupDots: {
      display: "flex",
      gap: 6,
    },
    mockupGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    mockupCell: {
      padding: 20,
      borderRight: "1px solid rgba(255,255,255,0.07)",
    },
    mockupCellLast: {
      padding: 20,
    },
    mockupStepBadge: {
      height: 24,
      width: 24,
      borderRadius: 6,
      display: "grid",
      placeItems: "center",
      fontSize: 10,
      fontWeight: 700,
      color: "#fff",
      background: GRADIENT_HERO,
      marginRight: 8,
      flexShrink: 0,
    },
    mockupStepLabel: {
      fontSize: 11,
      color: "#64748b",
      fontWeight: 500,
    },
    mockupInputQ: {
      borderRadius: 8,
      background: "rgba(255,255,255,0.05)",
      padding: "10px 12px",
      fontSize: 11,
      color: "#94a3b8",
      marginBottom: 6,
    },
    mockupInputA: {
      borderRadius: 8,
      background: "rgba(124,58,237,0.12)",
      border: "1px solid rgba(124,58,237,0.2)",
      padding: "10px 12px",
      fontSize: 11,
      color: "#c4b5fd",
      marginBottom: 6,
    },
    mockupPlanItem: {
      borderRadius: 8,
      border: "1px solid rgba(255,255,255,0.08)",
      padding: "10px 12px",
      fontSize: 11,
      color: "#cbd5e1",
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 6,
    },
    mockupLeadItem: (opacity = 1) => ({
      borderRadius: 8,
      border: "1px solid rgba(255,255,255,0.08)",
      padding: "10px 12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 6,
      opacity,
    }),
    sectionTitle: {
      fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
      fontWeight: 800,
      letterSpacing: "-0.03em",
      color: "#f1f5f9",
      marginBottom: 12,
    },
    sectionSub: {
      fontSize: 15,
      color: "#64748b",
      maxWidth: 520,
      margin: "0 auto 48px",
      lineHeight: 1.6,
    },
    featuresGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: 20,
      marginTop: 16,
    },
    featureCard: (hovered) => ({
      borderRadius: 20,
      border: `1px solid ${hovered ? "rgba(124,58,237,0.35)" : "rgba(255,255,255,0.08)"}`,
      background: hovered ? "rgba(124,58,237,0.07)" : "rgba(15,15,25,0.5)",
      backdropFilter: "blur(12px)",
      padding: 24,
      transition: "border-color 0.2s, background 0.2s, transform 0.2s, box-shadow 0.2s",
      transform: hovered ? "translateY(-4px)" : "none",
      boxShadow: hovered ? "0 16px 40px rgba(124,58,237,0.18)" : "none",
      cursor: "default",
    }),
    featureIconBox: {
      height: 44,
      width: 44,
      borderRadius: 12,
      display: "grid",
      placeItems: "center",
      background: GRADIENT_HERO,
      boxShadow: GLOW_PRIMARY,
      marginBottom: 16,
    },
    featureTitle: {
      fontSize: 15,
      fontWeight: 700,
      color: "#f1f5f9",
      marginBottom: 8,
    },
    featureDesc: {
      fontSize: 13,
      color: "#64748b",
      lineHeight: 1.65,
    },
    divider: {
      height: 1,
      background: "rgba(255,255,255,0.06)",
      margin: "80px 0",
    },
    testimonialsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: 20,
    },
    testimonialCard: {
      borderRadius: 16,
      border: "1px solid rgba(255,255,255,0.08)",
      background: "rgba(15,15,25,0.6)",
      padding: 24,
    },
    faqItem: (open) => ({
      borderRadius: 14,
      border: `1px solid ${open ? "rgba(124,58,237,0.3)" : "rgba(255,255,255,0.08)"}`,
      background: open ? "rgba(124,58,237,0.06)" : "rgba(15,15,25,0.4)",
      marginBottom: 10,
      overflow: "hidden",
      transition: "border-color 0.2s, background 0.2s",
    }),
    faqQuestion: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "transparent",
      border: "none",
      padding: "18px 20px",
      cursor: "pointer",
      fontSize: 14,
      fontWeight: 600,
      color: "#e2e8f0",
      textAlign: "left",
    },
    faqAnswer: {
      padding: "0 20px 18px",
      fontSize: 13,
      color: "#94a3b8",
      lineHeight: 1.7,
    },
    ctaSection: {
      textAlign: "center",
      borderRadius: 24,
      border: "1px solid rgba(124,58,237,0.25)",
      background: "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(79,70,229,0.08) 50%, rgba(14,165,233,0.08) 100%)",
      padding: "64px 24px",
      position: "relative",
      overflow: "hidden",
    },
    footer: {
      borderTop: "1px solid rgba(255,255,255,0.07)",
      padding: "32px 16px",
      textAlign: "center",
    },
    footerInner: {
      maxWidth: 1152,
      margin: "0 auto",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
    },
    footerLinks: {
      display: "flex",
      flexWrap: "wrap",
      gap: 4,
    },
    footerLink: {
      fontSize: 12,
      color: "#475569",
      textDecoration: "none",
      padding: "4px 8px",
      cursor: "pointer",
    },
    mobileMenu: {
      position: "fixed",
      top: 64,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 40,
      background: "rgba(10,10,15,0.97)",
      backdropFilter: "blur(24px)",
      display: "flex",
      flexDirection: "column",
      padding: 24,
      gap: 4,
    },
    mobileNavLink: {
      padding: "14px 16px",
      fontSize: 15,
      color: "#cbd5e1",
      textDecoration: "none",
      borderRadius: 10,
      background: "rgba(255,255,255,0.03)",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.root}>
      {/* Background glow */}
      <div style={styles.bgGlow} />

      {/* HEADER */}
      <header style={styles.header}>
        <div style={styles.headerInner}>
          {/* Logo */}
          <a href="#inicio" style={styles.logo}>
            <div style={styles.logoIcon}>
              <SparklesIcon size={16} style={{ color: "#fff" }} />
            </div>
            <span style={styles.logoText}>StratIA®</span>
          </a>

          {/* Desktop Nav */}
          <nav style={{ ...styles.nav, display: "flex" }}>
            {/* StratIA Academia */}
            <a
              href="#academia"
              style={{ ...styles.navLink(hoveredNav === "academia"), display: window.innerWidth < 640 ? "none" : "flex" }}
              onMouseEnter={() => setHoveredNav("academia")}
              onMouseLeave={() => setHoveredNav(null)}
            >
              StratIA Academia
            </a>
            {/* Acceso Pro */}
            <a
              href="#planes"
              style={styles.navLink(hoveredNav === "planes")}
              onMouseEnter={() => setHoveredNav("planes")}
              onMouseLeave={() => setHoveredNav(null)}
            >
              Acceso Pro
            </a>
            {/* Entrar */}
            <a
              href="#ir-a-mi-cuenta"
              style={styles.navLink(hoveredNav === "entrar")}
              onMouseEnter={() => setHoveredNav("entrar")}
              onMouseLeave={() => setHoveredNav(null)}
            >
              {/* TODO: Conectar con sistema de autenticación real */}
              Entrar
            </a>
            {/* Crear cuenta */}
            <a
              href="#registrarse"
              style={styles.btnPrimary(hoveredNav === "crear")}
              onMouseEnter={() => setHoveredNav("crear")}
              onMouseLeave={() => setHoveredNav(null)}
            >
              {/* TODO: Conectar con flujo de registro */}
              Crear cuenta
            </a>
            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: "transparent",
                border: "none",
                color: "#94a3b8",
                cursor: "pointer",
                padding: 8,
                display: "none",
                // shown via @media in real CSS, here always flex for simplicity
              }}
              aria-label="Menú"
            >
              {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={styles.mobileMenu}>
          <a href="#academia" style={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>StratIA Academia</a>
          <a href="#planes" style={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Acceso Pro</a>
          <a href="#ir-a-mi-cuenta" style={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Entrar</a>
          <a href="#registrarse" style={{ ...styles.mobileNavLink, background: GRADIENT_HERO, color: "#fff", marginTop: 12, textAlign: "center" }} onClick={() => setMobileMenuOpen(false)}>Crear cuenta</a>
        </div>
      )}

      {/* MAIN */}
      <main style={styles.main}>

        {/* ===== HERO ===== */}
        <section id="inicio" style={{ textAlign: "center" }}>
          {/* Badge */}
          <div style={styles.heroBadge}>
            <BotIcon size={14} />
            <span style={{ color: "#a78bfa" }}>Con tecnología Gemini 2.5 Pro</span>
          </div>

          {/* H1 */}
          <h1 style={styles.h1}>
            Deja de perseguir visitas.{" "}
            <span style={styles.h1Gradient}>Atrae clientes reales.</span>
          </h1>

          {/* Subtitle */}
          <p style={styles.heroParagraph}>
            Cuéntale a StratIA® qué vendes y a quién. Te entrega el plan, los mensajes y las preguntas para reconocer a las personas que{" "}
            <strong style={{ color: "#e2e8f0" }}>sí están listas</strong> para comprarte.{" "}
            Sin saber de marketing.
          </p>

          {/* CTAs */}
          <div style={styles.ctaRow}>
            <a
              href="#acceder"
              style={styles.btnHero(hoveredCTA)}
              onMouseEnter={() => setHoveredCTA(true)}
              onMouseLeave={() => setHoveredCTA(false)}
            >
              {/* TODO: Conectar con flujo de onboarding/acceso */}
              Empezar gratis <ArrowRightIcon size={16} />
            </a>
            <a
              href="#planes"
              style={styles.btnOutline(hoveredOutline)}
              onMouseEnter={() => setHoveredOutline(true)}
              onMouseLeave={() => setHoveredOutline(false)}
            >
              Ver precios
            </a>
          </div>
          <p style={styles.subNote}>3 embudos gratis al mes · sin tarjeta</p>

          {/* MOCKUP */}
          <div style={styles.mockupWrapper}>
            <div style={styles.mockupGlow} />
            <div style={styles.mockup}>
              {/* Browser bar */}
              <div style={styles.mockupBar}>
                <div style={styles.mockupDots}>
                  <div style={{ height: 10, width: 10, borderRadius: "50%", background: "rgba(239,68,68,0.5)" }} />
                  <div style={{ height: 10, width: 10, borderRadius: "50%", background: "rgba(245,158,11,0.5)" }} />
                  <div style={{ height: 10, width: 10, borderRadius: "50%", background: "rgba(16,185,129,0.5)" }} />
                </div>
                <div style={{ marginLeft: 12, flex: 1, textAlign: "left" }}>
                  <div style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: 6,
                    padding: "4px 12px",
                    fontSize: 11,
                    color: "#64748b",
                  }}>
                    <ShieldCheckIcon size={11} />
                    stratia.ai / mi-embudo
                  </div>
                </div>
              </div>

              {/* Grid: 3 columns */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
              }}>
                {/* Col 1: Responde */}
                <div style={{ ...styles.mockupCell, borderRight: "1px solid rgba(255,255,255,0.07)" }}>
                  <div style={{ display: "flex", alignItems: "center", marginBottom: 16 }}>
                    <div style={styles.mockupStepBadge}>1</div>
                    <span style={styles.mockupStepLabel}>Responde</span>
                  </div>
                  <div style={styles.mockupInputQ}>¿Qué vendes?</div>
                  <div style={styles.mockupInputA}>Asesoría fiscal para PyMEs</div>
                  <div style={styles.mockupInputQ}>¿Ticket promedio?</div>
                  <div style={styles.mockupInputA}>$8,000 MXN / mes</div>
                </div>

                {/* Col 2: Tu plan */}
                <div style={{ ...styles.mockupCell, borderRight: "1px solid rgba(255,255,255,0.07)" }}>
                  <div style={{ display: "flex", alignItems: "center", marginBottom: 16 }}>
                    <div style={styles.mockupStepBadge}>2</div>
                    <span style={styles.mockupStepLabel}>Tu embudo inteligente</span>
                  </div>
                  <div style={styles.mockupPlanItem}>
                    <MailIcon size={11} />
                    <span>Guía: "5 errores fiscales"</span>
                  </div>
                  <div style={styles.mockupPlanItem}>
                    <WandIcon size={11} />
                    <span>Página de captura</span>
                  </div>
                  <div style={styles.mockupPlanItem}>
                    <TargetIcon size={11} color="#94a3b8" />
                    <span>4 correos de seguimiento</span>
                  </div>
                  <div style={styles.mockupPlanItem}>
                    <CheckIcon size={11} />
                    <span>Tareas semanales</span>
                  </div>
                </div>

                {/* Col 3: Filtro */}
                <div style={styles.mockupCellLast}>
                  <div style={{ display: "flex", alignItems: "center", marginBottom: 16 }}>
                    <div style={styles.mockupStepBadge}>3</div>
                    <span style={styles.mockupStepLabel}>Filtro de prospectos</span>
                  </div>
                  <div style={styles.mockupLeadItem()}>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 600, color: "#e2e8f0" }}>María L.</div>
                      <div style={{ fontSize: 10, color: "#64748b" }}>Lista para comprar</div>
                    </div>
                    <AnimatedScore target={92} color="#10b981" />
                  </div>
                  <div style={styles.mockupLeadItem()}>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 600, color: "#e2e8f0" }}>Carlos R.</div>
                      <div style={{ fontSize: 10, color: "#64748b" }}>Necesita nutrir</div>
                    </div>
                    <AnimatedScore target={64} color="#f59e0b" />
                  </div>
                  <div style={styles.mockupLeadItem(0.45)}>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 600, color: "#e2e8f0" }}>Anónimo</div>
                      <div style={{ fontSize: 10, color: "#64748b" }}>Curioso · descartar</div>
                    </div>
                    <AnimatedScore target={21} color="#64748b" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div style={styles.divider} />

        {/* ===== FEATURES ===== */}
        <section id="funcionalidades" style={{ textAlign: "center" }}>
          <div style={styles.heroBadge}>
            <SparklesIcon size={12} />
            <span>Cómo funciona</span>
          </div>
          <h2 style={styles.sectionTitle}>
            Tu sistema completo de captación,{" "}
            <span style={styles.h1Gradient}>en minutos</span>
          </h2>
          <p style={styles.sectionSub}>
            Sin aprender herramientas complicadas. StratIA convierte tu descripción en un sistema listo para atraer y filtrar clientes.
          </p>
          <div style={styles.featuresGrid}>
            {features.map((f, i) => (
              <div
                key={i}
                style={styles.featureCard(hoveredCard === i)}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={styles.featureIconBox}>{f.icon}</div>
                <div style={styles.featureTitle}>{f.title}</div>
                <div style={styles.featureDesc}>{f.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <div style={styles.divider} />

        {/* ===== STATS ===== */}
        <section style={{ textAlign: "center" }}>
          <h2 style={{ ...styles.sectionTitle, marginBottom: 40 }}>
            Resultados que puedes{" "}
            <span style={styles.h1Gradient}>medir desde el día 1</span>
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 16,
          }}>
            {[
              { value: "+3,200", label: "Embudos generados", icon: <ChartIcon size={18} /> },
              { value: "< 10 min", label: "Para tener tu plan listo", icon: <ZapIcon size={18} /> },
              { value: "92%", label: "Satisfacción de usuarios", icon: <StarIcon size={18} /> },
              { value: "3 gratis", label: "Sin tarjeta requerida", icon: <CheckIcon size={18} /> },
            ].map((stat, i) => (
              <div key={i} style={{
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(15,15,25,0.5)",
                padding: "28px 16px",
                textAlign: "center",
              }}>
                <div style={{ color: "#7c3aed", marginBottom: 8, display: "flex", justifyContent: "center" }}>{stat.icon}</div>
                <div style={{ fontSize: 28, fontWeight: 800, color: "#f1f5f9", letterSpacing: "-0.03em", marginBottom: 6 }}>{stat.value}</div>
                <div style={{ fontSize: 12, color: "#64748b" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <div style={styles.divider} />

        {/* ===== TESTIMONIALS ===== */}
        <section id="testimonios" style={{ textAlign: "center" }}>
          <h2 style={{ ...styles.sectionTitle, marginBottom: 8 }}>Lo que dicen nuestros usuarios</h2>
          <p style={{ ...styles.sectionSub }}>Negocios reales, resultados reales.</p>
          <div style={styles.testimonialsGrid}>
            {testimonials.map((t, i) => (
              <div key={i} style={styles.testimonialCard}>
                <div style={{ display: "flex", gap: 2, marginBottom: 12 }}>
                  {[1, 2, 3, 4, 5].map((s) => <StarIcon key={s} size={13} filled={s <= t.score} />)}
                </div>
                <p style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.7, marginBottom: 16, textAlign: "left" }}>
                  "{t.text}"
                </p>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#e2e8f0" }}>{t.name}</div>
                  <div style={{ fontSize: 11, color: "#64748b" }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div style={styles.divider} />

        {/* ===== FAQ ===== */}
        <section id="faq" style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ ...styles.sectionTitle, marginBottom: 8 }}>Preguntas frecuentes</h2>
          <p style={{ ...styles.sectionSub }}>Todo lo que necesitas saber antes de empezar.</p>
          <div style={{ textAlign: "left" }}>
            {faqs.map((f, i) => (
              <div key={i} style={styles.faqItem(faqOpen === i)}>
                <button
                  style={styles.faqQuestion}
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  aria-expanded={faqOpen === i}
                >
                  <span>{f.q}</span>
                  <span style={{
                    fontSize: 18,
                    color: "#7c3aed",
                    transform: faqOpen === i ? "rotate(45deg)" : "none",
                    transition: "transform 0.2s",
                    flexShrink: 0,
                    marginLeft: 12,
                  }}>+</span>
                </button>
                {faqOpen === i && (
                  <div style={styles.faqAnswer}>{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        <div style={styles.divider} />

        {/* ===== FINAL CTA ===== */}
        <section style={styles.ctaSection}>
          {/* Decorative blobs */}
          <div style={{
            position: "absolute",
            top: -40,
            right: -40,
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "rgba(124,58,237,0.15)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute",
            bottom: -40,
            left: -40,
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "rgba(14,165,233,0.12)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }} />
          <div style={{ position: "relative" }}>
            <div style={styles.heroBadge}>
              <SparklesIcon size={12} />
              <span>Comienza hoy</span>
            </div>
            <h2 style={{ ...styles.sectionTitle, fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: 16 }}>
              Tu próximo cliente ideal{" "}
              <br />
              <span style={styles.h1Gradient}>ya está buscándote</span>
            </h2>
            <p style={{ fontSize: 15, color: "#64748b", maxWidth: 460, margin: "0 auto 32px", lineHeight: 1.7 }}>
              Crea tu primer embudo inteligente gratis. Sin tarjeta, sin jerga técnica, sin fricción.
            </p>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 12 }}>
              <a
                href="#acceder"
                style={styles.btnHero(hoveredCTA)}
                onMouseEnter={() => setHoveredCTA(true)}
                onMouseLeave={() => setHoveredCTA(false)}
              >
                {/* TODO: Conectar con flujo de acceso/registro */}
                Empezar gratis <ArrowRightIcon size={16} />
              </a>
            </div>
            <p style={{ fontSize: 11, color: "#475569", marginTop: 12 }}>3 embudos gratis · sin tarjeta · cancela cuando quieras</p>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer style={{ ...styles.footer, position: "relative", zIndex: 1 }}>
        <div style={styles.footerInner}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ ...styles.logoIcon, height: 24, width: 24, borderRadius: 6 }}>
              <SparklesIcon size={12} style={{ color: "#fff" }} />
            </div>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#475569" }}>StratIA®</span>
            <span style={{ fontSize: 12, color: "#334155", marginLeft: 4 }}>© {new Date().getFullYear()}</span>
          </div>
          <div style={styles.footerLinks}>
            {/* TODO: Agregar páginas de términos, privacidad y reembolsos */}
            <a href="#terminos" style={styles.footerLink}>Términos</a>
            <a href="#privacidad" style={styles.footerLink}>Privacidad</a>
            <a href="#reembolsos" style={styles.footerLink}>Reembolsos</a>
            <a href="#academia" style={styles.footerLink}>StratIA Academia</a>
            <a href="#planes" style={styles.footerLink}>Acceso Pro</a>
          </div>
        </div>
      </footer>

    </div>
  );
}