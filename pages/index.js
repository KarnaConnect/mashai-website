import { useState } from 'react'

// SVG icon helpers
const MicIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z"/>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
    <line x1="12" y1="19" x2="12" y2="22"/>
    <line x1="8" y1="22" x2="16" y2="22"/>
  </svg>
)

const MenuIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24">
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
)

const ChevronIcon = ({ open }) => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"
    style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', color: '#534AB7' }}>
    <polyline points="6 9 12 15 18 9"/>
  </svg>
)

const featureIcons = {
  mic: (
    <svg width="22" height="22" fill="none" stroke="#534AB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z"/>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
      <line x1="12" y1="19" x2="12" y2="22"/>
      <line x1="8" y1="22" x2="16" y2="22"/>
    </svg>
  ),
  fileText: (
    <svg width="22" height="22" fill="none" stroke="#534AB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
    </svg>
  ),
  zap: (
    <svg width="22" height="22" fill="none" stroke="#534AB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  headphones: (
    <svg width="22" height="22" fill="none" stroke="#534AB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/>
      <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
    </svg>
  ),
  barChart: (
    <svg width="22" height="22" fill="none" stroke="#534AB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <line x1="18" y1="20" x2="18" y2="10"/>
      <line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
  ),
  bell: (
    <svg width="22" height="22" fill="none" stroke="#534AB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
    </svg>
  ),
  smartphone: (
    <svg width="22" height="22" fill="none" stroke="#534AB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
      <line x1="12" y1="18" x2="12.01" y2="18"/>
    </svg>
  ),
  link: (
    <svg width="22" height="22" fill="none" stroke="#534AB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
    </svg>
  ),
  shield: (
    <svg width="22" height="22" fill="none" stroke="#534AB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
}

const industryIcons = {
  wrench: (
    <svg width="26" height="26" fill="none" stroke="#534AB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
  home: (
    <svg width="26" height="26" fill="none" stroke="#534AB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  building: (
    <svg width="26" height="26" fill="none" stroke="#534AB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"/>
      <path d="M2 22h20"/>
      <path d="M9 7h1"/><path d="M9 11h1"/><path d="M9 15h1"/>
      <path d="M14 7h1"/><path d="M14 11h1"/><path d="M14 15h1"/>
    </svg>
  ),
  scale: (
    <svg width="26" height="26" fill="none" stroke="#534AB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <line x1="12" y1="3" x2="12" y2="21"/>
      <path d="M5 3h14"/>
      <path d="M4 21h16"/>
      <path d="M5 3l-3 7h6l-3-7z"/>
      <path d="M19 3l-3 7h6l-3-7z"/>
    </svg>
  ),
  heart: (
    <svg width="26" height="26" fill="none" stroke="#534AB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ),
  dollarSign: (
    <svg width="26" height="26" fill="none" stroke="#534AB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <line x1="12" y1="1" x2="12" y2="23"/>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  ),
  scissors: (
    <svg width="26" height="26" fill="none" stroke="#534AB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <circle cx="6" cy="6" r="3"/>
      <circle cx="6" cy="18" r="3"/>
      <line x1="20" y1="4" x2="8.12" y2="15.88"/>
      <line x1="14.47" y1="14.48" x2="20" y2="20"/>
      <line x1="8.12" y1="8.12" x2="12" y2="12"/>
    </svg>
  ),
  utensils: (
    <svg width="26" height="26" fill="none" stroke="#534AB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
      <path d="M7 2v20"/>
      <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/>
    </svg>
  ),
}

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [faqOpen, setFaqOpen] = useState(null)

  const faqs = [
    { q: 'How quickly can I get started?', a: 'Most businesses are live within 24 hours. Fill in the onboarding form, we set up your AI agent, and your phone number is ready to go.' },
    { q: 'Do I need to install anything?', a: 'No. Mash works with your existing phone number or we provide you with a new Australian number. Nothing to install.' },
    { q: 'What happens if the AI can\'t answer a question?', a: 'Mash collects the caller\'s details and lets them know your team will follow up. You get an immediate notification with the full call summary.' },
    { q: 'Can I customise what the agent says?', a: 'Yes — during onboarding you define your agent\'s name, personality, services, FAQs and more. We train it specifically for your business.' },
    { q: 'What happens after the 7-day trial?', a: 'Your card is charged automatically on day 8 for the plan you selected. Cancel anytime before then with no charge.' },
    { q: 'Is my data stored in Australia?', a: 'Yes — all your call data is stored in Australian data centres. We take data privacy seriously.' },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        body { font-family:'Plus Jakarta Sans',sans-serif; background:#fff; color:#1a1535; -webkit-font-smoothing:antialiased; overflow-x:hidden; }
        a { text-decoration:none; color:inherit; }

        /* NAV */
        nav { position:fixed; top:0; left:0; right:0; z-index:100; background:rgba(255,255,255,0.95); backdrop-filter:blur(12px); border-bottom:1px solid rgba(83,74,183,0.1); padding:0 40px; height:68px; display:flex; align-items:center; justify-content:space-between; }
        .nav-logo { display:flex; align-items:center; gap:10px; }
        .nav-logo-text { font-size:1.2rem; font-weight:800; color:#1a1535; letter-spacing:-0.3px; }
        .nav-logo-text span { color:#7F77DD; }
        .nav-links { display:flex; align-items:center; gap:32px; }
        .nav-links a { font-size:0.875rem; font-weight:500; color:#64748b; transition:color 0.2s; }
        .nav-links a:hover { color:#534AB7; }
        .nav-cta { display:flex; align-items:center; gap:12px; }
        .btn-outline { padding:9px 20px; border:1.5px solid #534AB7; border-radius:8px; color:#534AB7; font-size:0.875rem; font-weight:600; cursor:pointer; transition:all 0.2s; font-family:'Plus Jakarta Sans',sans-serif; background:none; }
        .btn-outline:hover { background:#EEEDFE; }
        .btn-solid { padding:9px 20px; background:linear-gradient(135deg,#534AB7,#7F77DD); border:none; border-radius:8px; color:#fff; font-size:0.875rem; font-weight:700; cursor:pointer; font-family:'Plus Jakarta Sans',sans-serif; box-shadow:0 4px 14px rgba(83,74,183,0.3); transition:opacity 0.2s; }
        .btn-solid:hover { opacity:0.9; }
        .hamburger { display:none; background:none; border:none; cursor:pointer; color:#1a1535; padding:4px; }

        /* HERO */
        .hero { min-height:100vh; display:flex; align-items:center; justify-content:center; text-align:center; padding:120px 40px 80px; background:linear-gradient(160deg,#f0effe 0%,#ffffff 50%,#f0effe 100%); position:relative; overflow:hidden; }
        .hero::before { content:''; position:absolute; top:-200px; left:-200px; width:600px; height:600px; background:radial-gradient(circle,rgba(127,119,221,0.12) 0%,transparent 70%); }
        .hero::after { content:''; position:absolute; bottom:-200px; right:-200px; width:600px; height:600px; background:radial-gradient(circle,rgba(83,74,183,0.1) 0%,transparent 70%); }
        .hero-content { max-width:800px; position:relative; z-index:1; }
        .hero-badge { display:inline-flex; align-items:center; gap:8px; background:#EEEDFE; border:1px solid #CECBF6; border-radius:20px; padding:7px 16px; font-size:0.78rem; font-weight:700; color:#534AB7; margin-bottom:28px; }
        .hero-title { font-size:clamp(2.4rem,6vw,4rem); font-weight:800; color:#1a1535; letter-spacing:-1.5px; line-height:1.1; margin-bottom:20px; }
        .hero-title span { color:#7F77DD; }
        .hero-sub { font-size:1.15rem; color:#64748b; line-height:1.75; max-width:580px; margin:0 auto 36px; }
        .hero-btns { display:flex; gap:14px; justify-content:center; flex-wrap:wrap; margin-bottom:56px; }
        .hero-btn-primary { padding:16px 32px; background:linear-gradient(135deg,#534AB7,#7F77DD); color:#fff; font-size:1rem; font-weight:700; border:none; border-radius:10px; cursor:pointer; font-family:'Plus Jakarta Sans',sans-serif; box-shadow:0 6px 20px rgba(83,74,183,0.35); transition:opacity 0.2s; }
        .hero-btn-primary:hover { opacity:0.9; }
        .hero-btn-secondary { padding:16px 32px; background:#fff; color:#534AB7; font-size:1rem; font-weight:700; border:2px solid #534AB7; border-radius:10px; cursor:pointer; font-family:'Plus Jakarta Sans',sans-serif; transition:all 0.2s; }
        .hero-btn-secondary:hover { background:#EEEDFE; }
        .hero-stats { display:flex; gap:40px; justify-content:center; flex-wrap:wrap; }
        .hero-stat { text-align:center; }
        .hero-stat-num { font-size:1.8rem; font-weight:800; color:#534AB7; letter-spacing:-0.5px; }
        .hero-stat-label { font-size:0.78rem; color:#94a3b8; margin-top:2px; }
        .hero-stat.highlight .hero-stat-num { color:#1a1535; }
        .hero-stat.highlight .hero-stat-label { color:#534AB7; font-weight:600; }

        /* SECTION */
        section { padding:80px 40px; }
        .section-inner { max-width:1100px; margin:0 auto; }
        .section-badge { display:inline-block; background:#EEEDFE; border:1px solid #CECBF6; border-radius:20px; padding:5px 14px; font-size:0.75rem; font-weight:700; color:#534AB7; margin-bottom:16px; }
        .section-title { font-size:clamp(1.8rem,4vw,2.6rem); font-weight:800; color:#1a1535; letter-spacing:-0.8px; margin-bottom:14px; }
        .section-sub { font-size:1rem; color:#64748b; line-height:1.7; max-width:560px; }

        /* HOW IT WORKS */
        .how { background:#f0effe; }
        .steps-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; margin-top:48px; }
        .step-card { background:#fff; border-radius:16px; padding:28px; border:1px solid #CECBF6; position:relative; }
        .step-num { width:40px; height:40px; border-radius:10px; background:linear-gradient(135deg,#534AB7,#7F77DD); color:#fff; font-size:1rem; font-weight:800; display:flex; align-items:center; justify-content:center; margin-bottom:16px; }
        .step-title { font-size:1rem; font-weight:700; color:#1a1535; margin-bottom:8px; }
        .step-desc { font-size:0.875rem; color:#64748b; line-height:1.7; }

        /* FEATURES */
        .features-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; margin-top:48px; }
        .feature-card { background:#fff; border-radius:14px; padding:24px; border:1px solid #e2e8f5; box-shadow:0 1px 4px rgba(26,21,53,0.05); transition:transform 0.2s, box-shadow 0.2s; }
        .feature-card:hover { transform:translateY(-3px); box-shadow:0 8px 24px rgba(83,74,183,0.1); }
        .feature-icon { width:44px; height:44px; background:#EEEDFE; border-radius:10px; display:flex; align-items:center; justify-content:center; margin-bottom:16px; }
        .feature-title { font-size:0.95rem; font-weight:700; color:#1a1535; margin-bottom:8px; }
        .feature-desc { font-size:0.84rem; color:#64748b; line-height:1.7; }

        /* INDUSTRIES */
        .industries { background:#f0effe; }
        .industry-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:14px; margin-top:40px; }
        .industry-card { background:#fff; border-radius:12px; padding:24px 20px; text-align:center; border:1px solid #CECBF6; transition:all 0.2s; cursor:default; }
        .industry-card:hover { border-color:#534AB7; background:#EEEDFE; }
        .industry-icon { display:flex; align-items:center; justify-content:center; width:52px; height:52px; background:#EEEDFE; border-radius:12px; margin:0 auto 12px; }
        .industry-name { font-size:0.84rem; font-weight:700; color:#1a1535; }

        /* PRICING */
        .pricing-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; margin-top:48px; }
        .pricing-card { background:#fff; border-radius:16px; padding:32px; border:1px solid #e2e8f5; position:relative; transition:transform 0.2s; }
        .pricing-card:hover { transform:translateY(-3px); }
        .pricing-card.featured { border:2px solid #534AB7; }
        .pricing-badge { position:absolute; top:-12px; left:50%; transform:translateX(-50%); background:linear-gradient(135deg,#534AB7,#7F77DD); color:#fff; font-size:0.72rem; font-weight:700; padding:4px 14px; border-radius:20px; white-space:nowrap; }
        .pricing-name { font-size:1rem; font-weight:700; color:#64748b; margin-bottom:8px; }
        .pricing-price { font-size:2.4rem; font-weight:800; color:#1a1535; letter-spacing:-1px; margin-bottom:4px; }
        .pricing-price span { font-size:1rem; font-weight:500; color:#94a3b8; }
        .pricing-desc { font-size:0.82rem; color:#94a3b8; margin-bottom:24px; }
        .pricing-features { list-style:none; margin-bottom:28px; }
        .pricing-features li { display:flex; align-items:center; gap:8px; font-size:0.875rem; color:#475569; padding:6px 0; border-bottom:1px solid #f8fafc; }
        .pricing-features li:last-child { border-bottom:none; }
        .check { color:#534AB7; font-weight:700; }
        .pricing-btn { width:100%; padding:13px; background:linear-gradient(135deg,#534AB7,#7F77DD); color:#fff; font-size:0.9rem; font-weight:700; border:none; border-radius:10px; cursor:pointer; font-family:'Plus Jakarta Sans',sans-serif; box-shadow:0 4px 14px rgba(83,74,183,0.25); transition:opacity 0.2s; }
        .pricing-btn:hover { opacity:0.9; }
        .pricing-btn.outline { background:none; border:2px solid #534AB7; color:#534AB7; box-shadow:none; }
        .pricing-btn.outline:hover { background:#EEEDFE; }
        .trial-note { text-align:center; margin-top:20px; font-size:0.82rem; color:#94a3b8; }
        .trial-note strong { color:#534AB7; }

        /* FAQ */
        .faq { background:#f0effe; }
        .faq-list { max-width:720px; margin:40px auto 0; }
        .faq-item { background:#fff; border-radius:12px; margin-bottom:10px; border:1px solid #CECBF6; overflow:hidden; }
        .faq-q { padding:18px 20px; font-size:0.95rem; font-weight:600; color:#1a1535; cursor:pointer; display:flex; justify-content:space-between; align-items:center; gap:12px; }
        .faq-q:hover { background:#EEEDFE; }
        .faq-a { padding:0 20px 18px; font-size:0.875rem; color:#64748b; line-height:1.7; }

        /* CTA */
        .cta-section { background:linear-gradient(135deg,#1a1535,#211a42); padding:80px 40px; text-align:center; }
        .cta-title { font-size:clamp(1.8rem,4vw,2.8rem); font-weight:800; color:#fff; letter-spacing:-0.8px; margin-bottom:14px; }
        .cta-sub { font-size:1rem; color:#AFA9EC; margin-bottom:36px; max-width:520px; margin-left:auto; margin-right:auto; }
        .cta-btn { display:inline-block; padding:16px 36px; background:linear-gradient(135deg,#7F77DD,#AFA9EC); color:#fff; font-size:1rem; font-weight:700; border:none; border-radius:10px; cursor:pointer; font-family:'Plus Jakarta Sans',sans-serif; box-shadow:0 6px 20px rgba(127,119,221,0.4); transition:opacity 0.2s; }
        .cta-btn:hover { opacity:0.9; }
        .cta-note { margin-top:16px; font-size:0.82rem; color:#6B63B5; }

        /* FOOTER */
        footer { background:#1a1535; padding:40px; text-align:center; }
        .footer-logo { display:flex; align-items:center; gap:10px; justify-content:center; margin-bottom:16px; }
        .footer-logo-text { font-size:1.1rem; font-weight:800; color:#fff; }
        .footer-logo-text span { color:#7F77DD; }
        .footer-links { display:flex; gap:24px; justify-content:center; margin-bottom:16px; flex-wrap:wrap; }
        .footer-links a { font-size:0.82rem; color:#534AB7; transition:color 0.2s; }
        .footer-links a:hover { color:#AFA9EC; }
        .footer-copy { font-size:0.75rem; color:#3C3489; }

        /* MOBILE */
        @media (max-width:900px) {
          nav { padding:0 20px; }
          .nav-links { display:none; }
          .nav-cta { display:none; }
          .hamburger { display:block; }
          .mobile-menu { position:fixed; top:68px; left:0; right:0; background:#fff; border-bottom:1px solid #CECBF6; padding:20px; z-index:99; display:flex; flex-direction:column; gap:16px; }
          .mobile-menu a { font-size:0.95rem; font-weight:600; color:#1a1535; padding:8px 0; border-bottom:1px solid #f1f5f9; }
          .mobile-menu-btn { width:100%; padding:14px; background:linear-gradient(135deg,#534AB7,#7F77DD); color:#fff; font-size:0.9rem; font-weight:700; border:none; border-radius:10px; cursor:pointer; font-family:'Plus Jakarta Sans',sans-serif; margin-top:8px; }
          section { padding:60px 20px; }
          .hero { padding:100px 20px 60px; }
          .steps-grid { grid-template-columns:1fr; }
          .features-grid { grid-template-columns:1fr 1fr; }
          .industry-grid { grid-template-columns:repeat(2,1fr); }
          .pricing-grid { grid-template-columns:1fr; }
          .cta-section { padding:60px 20px; }
          footer { padding:40px 20px; }
        }
        @media (max-width:600px) {
          .features-grid { grid-template-columns:1fr; }
          .hero-stats { gap:24px; }
        }
      `}</style>

      {/* NAV */}
      <nav>
        <div className="nav-logo">
          <svg width="32" height="32" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="16" fill="#EEEDFE"/>
            <rect x="7" y="12" width="2.5" height="8" rx="1.25" fill="#534AB7"/>
            <rect x="11" y="9" width="2.5" height="14" rx="1.25" fill="#534AB7"/>
            <rect x="15" y="6" width="2.5" height="20" rx="1.25" fill="#7F77DD"/>
            <rect x="19" y="9" width="2.5" height="14" rx="1.25" fill="#534AB7"/>
            <rect x="23" y="12" width="2.5" height="8" rx="1.25" fill="#534AB7"/>
          </svg>
          <div className="nav-logo-text">M<span>ash</span></div>
        </div>
        <div className="nav-links">
          <a href="#how">How it works</a>
          <a href="#features">Features</a>
          <a href="#industries">Industries</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="nav-cta">
          <button className="btn-outline" onClick={() => window.location.href='https://dashboard.mashai.com.au/login'}>Sign In</button>
          <button className="btn-solid" onClick={() => window.location.href='https://dashboard.mashai.com.au/onboarding'}>Start Free Trial</button>
        </div>
        <button className="hamburger" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Menu">
          <MenuIcon />
        </button>
      </nav>

      {mobileMenu && (
        <div className="mobile-menu">
          <a href="#how" onClick={() => setMobileMenu(false)}>How it works</a>
          <a href="#features" onClick={() => setMobileMenu(false)}>Features</a>
          <a href="#industries" onClick={() => setMobileMenu(false)}>Industries</a>
          <a href="#pricing" onClick={() => setMobileMenu(false)}>Pricing</a>
          <a href="#faq" onClick={() => setMobileMenu(false)}>FAQ</a>
          <button className="mobile-menu-btn" onClick={() => window.location.href='https://dashboard.mashai.com.au/onboarding'}>Start Free Trial →</button>
        </div>
      )}

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <MicIcon />
            AI Receptionist for Australian Businesses
          </div>
          <h1 className="hero-title">Your business never sleeps.<br/><span>Neither does Mash.</span></h1>
          <p className="hero-sub">While you're on the job, with a client, or off the clock — Mash picks up every call, captures every detail, and sends you a full summary the moment it hangs up. Zero missed leads.</p>
          <div className="hero-btns">
            <button className="hero-btn-primary" onClick={() => window.location.href='https://dashboard.mashai.com.au/onboarding'}>Start Free Trial →</button>
            <button className="hero-btn-secondary" onClick={() => document.getElementById('how').scrollIntoView({behavior:'smooth'})}>See How It Works</button>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><div className="hero-stat-num">24/7</div><div className="hero-stat-label">Always answering</div></div>
            <div className="hero-stat"><div className="hero-stat-num">7 day</div><div className="hero-stat-label">Free trial</div></div>
            <div className="hero-stat highlight"><div className="hero-stat-num">100%</div><div className="hero-stat-label">Australian based</div></div>
            <div className="hero-stat"><div className="hero-stat-num">$0</div><div className="hero-stat-label">Setup fee</div></div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how" id="how">
        <div className="section-inner">
          <div style={{textAlign:'center'}}>
            <div className="section-badge">How it works</div>
            <h2 className="section-title">Up and running in 24 hours</h2>
            <p className="section-sub" style={{margin:'0 auto'}}>No technical setup. No hardware. Just a smarter way to handle every call.</p>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-num">1</div>
              <div className="step-title">Tell us about your business</div>
              <div className="step-desc">Fill in our simple onboarding form — your services, hours, tone and FAQs. Takes about 5 minutes.</div>
            </div>
            <div className="step-card">
              <div className="step-num">2</div>
              <div className="step-title">We build your AI agent</div>
              <div className="step-desc">Our team reviews your details and configures your Mash agent. You get an Australian phone number ready to go.</div>
            </div>
            <div className="step-card">
              <div className="step-num">3</div>
              <div className="step-title">Never miss a call again</div>
              <div className="step-desc">Mash answers every call, captures details and sends you a summary. All data flows into your live dashboard.</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features">
        <div className="section-inner">
          <div>
            <div className="section-badge">Features</div>
            <h2 className="section-title">Everything you need to never miss a lead</h2>
          </div>
          <div className="features-grid">
            {[
              { icon: featureIcons.mic, title: 'Natural Australian Voice', desc: 'Your agent speaks with a natural Australian accent, warm and professional — callers feel right at home.' },
              { icon: featureIcons.fileText, title: 'Full Call Transcripts', desc: 'Every conversation is transcribed word for word. Search, read and review any call at any time.' },
              { icon: featureIcons.zap, title: 'AI Call Summaries', desc: 'After every call, Mash generates an intelligent summary so you know exactly what was discussed.' },
              { icon: featureIcons.headphones, title: 'Call Recordings', desc: 'Listen back to any call directly from your dashboard. Never lose important details again.' },
              { icon: featureIcons.barChart, title: 'Live Dashboard', desc: 'See call volume, outcomes, peak hours and usage in real time. Available on desktop and mobile.' },
              { icon: featureIcons.bell, title: 'Instant Notifications', desc: 'Get notified the moment a call ends with the summary and caller details sent straight to your inbox.' },
              { icon: featureIcons.smartphone, title: 'Mobile Friendly', desc: 'Add Mash to your phone home screen for instant access to your dashboard anywhere, anytime.' },
              { icon: featureIcons.link, title: 'CRM Integration', desc: 'Connect Mash to your existing CRM — HubSpot, Salesforce, ServiceM8 and more. Data flows automatically.' },
              { icon: featureIcons.shield, title: 'Australian Data Storage', desc: 'All your call data is stored securely in Australian data centres. Your clients\' privacy is protected.' },
            ].map((f, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <div className="feature-title">{f.title}</div>
                <div className="feature-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="industries" id="industries">
        <div className="section-inner">
          <div style={{textAlign:'center'}}>
            <div className="section-badge">Industries</div>
            <h2 className="section-title">Built for every Australian business</h2>
            <p className="section-sub" style={{margin:'0 auto'}}>Mash is trained specifically for your industry so it sounds like it belongs in your business.</p>
          </div>
          <div className="industry-grid">
            {[
              { icon: industryIcons.wrench, name: 'Trades & Construction' },
              { icon: industryIcons.home, name: 'Real Estate' },
              { icon: industryIcons.building, name: 'Building Inspections' },
              { icon: industryIcons.scale, name: 'Legal Services' },
              { icon: industryIcons.heart, name: 'Healthcare' },
              { icon: industryIcons.dollarSign, name: 'Accounting & Finance' },
              { icon: industryIcons.scissors, name: 'Beauty & Wellness' },
              { icon: industryIcons.utensils, name: 'Hospitality' },
            ].map((ind, i) => (
              <div key={i} className="industry-card">
                <div className="industry-icon">{ind.icon}</div>
                <div className="industry-name">{ind.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing">
        <div className="section-inner">
          <div style={{textAlign:'center'}}>
            <div className="section-badge">Pricing</div>
            <h2 className="section-title">Simple, transparent pricing</h2>
            <p className="section-sub" style={{margin:'0 auto'}}>All plans include a 7-day free trial. No setup fees. No lock-in contracts.</p>
          </div>
          <div className="pricing-grid">
            {[
              { name: 'Basic', price: 149, minutes: 100, response: '24hr', features: ['100 minutes of AI call handling', '1 AI agent', '1 phone number', 'Live dashboard', 'Call recordings & transcripts', 'AI call summaries', 'Email notifications', '24hr support response'], featured: false },
              { name: 'Standard', price: 299, minutes: 300, response: '12hr', features: ['300 minutes of AI call handling', '1 AI agent', '1 phone number', 'Live dashboard', 'Call recordings & transcripts', 'AI call summaries', 'Email notifications', 'Weekly call reports', 'Agent tuning included', '12hr support response'], featured: true },
              { name: 'Premium', price: 699, minutes: 1000, response: '4hr', features: ['1000 minutes of AI call handling', 'Up to 3 AI agents', '3 phone numbers', 'Live dashboard', 'Call recordings & transcripts', 'AI call summaries', 'Email notifications', 'Daily call reports', 'CRM integration included', 'Unlimited agent tuning', '4hr support response'], featured: false },
            ].map((p, i) => (
              <div key={i} className={`pricing-card ${p.featured ? 'featured' : ''}`}>
                {p.featured && <div className="pricing-badge">Most Popular</div>}
                <div className="pricing-name">{p.name}</div>
                <div className="pricing-price">${p.price}<span>/mo</span></div>
                <div className="pricing-desc">{p.minutes} minutes included · {p.response} support</div>
                <ul className="pricing-features">
                  {p.features.map((f, j) => (
                    <li key={j}><span className="check">✓</span>{f}</li>
                  ))}
                </ul>
                <button
                  className={`pricing-btn ${p.featured ? '' : 'outline'}`}
                  onClick={() => window.location.href='https://dashboard.mashai.com.au/onboarding'}
                >
                  Start Free Trial →
                </button>
              </div>
            ))}
          </div>
          <p className="trial-note">All plans start with a <strong>7-day free trial</strong>. Card required. Cancel anytime before day 8.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="section-inner">
          <div style={{textAlign:'center'}}>
            <div className="section-badge">FAQ</div>
            <h2 className="section-title">Common questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div key={i} className="faq-item">
                <div className="faq-q" onClick={() => setFaqOpen(faqOpen === i ? null : i)}>
                  {f.q}
                  <ChevronIcon open={faqOpen === i} />
                </div>
                {faqOpen === i && <div className="faq-a">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="section-inner">
          <h2 className="cta-title">Stop losing leads to missed calls.</h2>
          <p className="cta-sub">Every unanswered call is a missed opportunity. Join Australian businesses using Mash to capture every enquiry, 24 hours a day.</p>
          <button className="cta-btn" onClick={() => window.location.href='https://dashboard.mashai.com.au/onboarding'}>
            Start Your Free Trial →
          </button>
          <p className="cta-note">7 days free · No setup fee · Cancel anytime</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">
          <svg width="28" height="28" viewBox="0 0 28 28">
            <circle cx="14" cy="14" r="14" fill="#EEEDFE"/>
            <rect x="6" y="10" width="2.2" height="8" rx="1.1" fill="#534AB7"/>
            <rect x="10" y="7" width="2.2" height="14" rx="1.1" fill="#534AB7"/>
            <rect x="14" y="4" width="2.2" height="20" rx="1.1" fill="#7F77DD"/>
            <rect x="18" y="7" width="2.2" height="14" rx="1.1" fill="#534AB7"/>
            <rect x="22" y="10" width="2.2" height="8" rx="1.1" fill="#534AB7"/>
          </svg>
          <div className="footer-logo-text">M<span>ash</span></div>
        </div>
        <div className="footer-links">
          <a href="#how">How it works</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="https://dashboard.mashai.com.au/login">Sign In</a>
          <a href="https://dashboard.mashai.com.au/onboarding">Get Started</a>
          <a href="/terms">Terms & Conditions</a>
        </div>
        <div style={{display:'flex',gap:'16px',justifyContent:'center',marginBottom:'16px'}}>
          {/* Facebook */}
          <a href="https://www.facebook.com/profile.php?id=61578172665076" target="_blank" rel="noopener noreferrer" style={{color:'#534AB7',transition:'color 0.2s'}} onMouseEnter={e=>e.currentTarget.style.color='#AFA9EC'} onMouseLeave={e=>e.currentTarget.style.color='#534AB7'}>
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/mashai.com.au/" target="_blank" rel="noopener noreferrer" style={{color:'#534AB7',transition:'color 0.2s'}} onMouseEnter={e=>e.currentTarget.style.color='#AFA9EC'} onMouseLeave={e=>e.currentTarget.style.color='#534AB7'}>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/company/mashai-official" target="_blank" rel="noopener noreferrer" style={{color:'#534AB7',transition:'color 0.2s'}} onMouseEnter={e=>e.currentTarget.style.color='#AFA9EC'} onMouseLeave={e=>e.currentTarget.style.color='#534AB7'}>
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          {/* YouTube */}
          <a href="https://www.youtube.com/channel/UCxkvuGTRhcbyJmIR-uU5Cqw" target="_blank" rel="noopener noreferrer" style={{color:'#534AB7',transition:'color 0.2s'}} onMouseEnter={e=>e.currentTarget.style.color='#AFA9EC'} onMouseLeave={e=>e.currentTarget.style.color='#534AB7'}>
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
          </a>
        </div>
        <div className="footer-copy">
          © 2026 Mash · A KarnaConnect product · ABN 84 924 272 443 · South Lake WA 6164
        </div>
      </footer>
    </>
  )
}
