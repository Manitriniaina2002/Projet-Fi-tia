import React, { useState, useEffect } from 'react'
import Fitia from './assets/Fitia.png'

/* ─── DATA ─── */
const sections = [
  {
    id: 'l1',
    icon: '\u{1F393}',
    badge: 'L1',
    title: 'LICENCE 1',
    subtitle: 'Int\u00e9gration & R\u00e9ussite Acad\u00e9mique',
    intro:
      "L\u2019entr\u00e9e en premi\u00e8re ann\u00e9e constitue une \u00e9tape d\u00e9cisive. Notre priorit\u00e9 est de garantir une int\u00e9gration r\u00e9ussie et un accompagnement solide.",
    items: [
      "AEENI Cercle d\u2019\u00c9tudes : Mise en place d\u2019un syst\u00e8me d\u2019accompagnement o\u00f9 chaque \u00e9tudiant de L1 sera encadr\u00e9 par un \u00e9tudiant de niveau sup\u00e9rieur afin de favoriser la r\u00e9ussite acad\u00e9mique.",
      "Groupes d\u2019\u00e9tudes encadr\u00e9s : Organisation de s\u00e9ances de soutien pour les mati\u00e8res complexes (Algorithmique, HTML, CSS, etc.).",
      "Syst\u00e8me de parrainage : Chaque nouvel \u00e9tudiant b\u00e9n\u00e9ficiera d\u2019un parrain pour faciliter son adaptation \u00e0 la vie universitaire.",
      "AEENI Transport : Mise en place d\u2019un syst\u00e8me de covoiturage afin de r\u00e9duire les retards et faciliter les d\u00e9placements.",
      "AEENI Solidarit\u00e9 : Organisation d\u2019activit\u00e9s favorisant la coh\u00e9sion et l\u2019esprit de famille entre \u00e9tudiants.",
      "AEENI B\u00f4ssy : Services d\u2019impression et formations en bureautique \u00e0 tarifs r\u00e9duits.",
      "Facilitation d\u2019acquisition d\u2019ordinateurs : Partenariats directs avec des fournisseurs de mat\u00e9riel informatique pour proposer des prix avantageux.",
      "Conseil d\u2019orientation acad\u00e9mique : Accompagnement dans le choix des parcours professionnels (GB, ASR, IG, etc.).",
      "Comp\u00e9titions L1 : Organisation de concours acad\u00e9miques pour stimuler l\u2019excellence et l\u2019esprit de comp\u00e9tition.",
    ],
  },
  {
    id: 'l2',
    icon: '\u{1F393}',
    badge: 'L2',
    title: 'LICENCE 2',
    subtitle: "Construction de l\u2019Avenir",
    intro:
      "La deuxi\u00e8me ann\u00e9e doit pr\u00e9parer efficacement l\u2019\u00e9tudiant au monde professionnel.",
    items: [
      "Ateliers et formations professionnelles : Interventions de professionnels du secteur IT pour renforcer les comp\u00e9tences pratiques.",
      "T\u00e9moignages d\u2019anciens \u00e9tudiants : Partage d\u2019exp\u00e9riences inspirantes pour orienter et motiver les L2.",
      "Accompagnement \u00e0 la recherche de stage : Appui personnalis\u00e9 pour trouver des stages adapt\u00e9s.",
      "Pr\u00e9paration CV et entretien : Sessions de coaching pour optimiser les candidatures.",
      "Formation en art oratoire : D\u00e9veloppement des comp\u00e9tences en communication et prise de parole en public.",
    ],
  },
  {
    id: 'l3',
    icon: '\u{1F393}',
    badge: 'L3',
    title: 'LICENCE 3',
    subtitle: 'Insertion Professionnelle',
    intro:
      "L\u2019objectif principal est de faciliter la transition vers le monde du travail.",
    items: [
      "Stages professionnels de qualit\u00e9 : Mise en place de partenariats solides avec des entreprises.",
      "Ateliers de pr\u00e9paration professionnelle : Perfectionnement des CV, simulations d\u2019entretien.",
      "Speed Recruiting AEENI : Organisation de journ\u00e9es de recrutement direct au sein de l\u2019AEENI.",
      "Mobilisation du r\u00e9seau des anciens : Activation du r\u00e9seau Alumni pour ouvrir des opportunit\u00e9s.",
      "Atelier pr\u00e9-soutenance : Simulations de soutenance avec des jurys professionnels.",
      "Pratique serveur avanc\u00e9e : Sessions techniques pratiques pour renforcer les comp\u00e9tences.",
      "Collaboration avec l\u2019administration : D\u00e9fense des int\u00e9r\u00eats des \u00e9tudiants (notes, bourses, etc.).",
      "C\u00e9r\u00e9monie de sortie L3 : Organisation d\u2019un \u00e9v\u00e9nement marquant pour c\u00e9l\u00e9brer la fin du cycle Licence.",
    ],
  },
  {
    id: 'm1',
    icon: '\u{1F393}',
    badge: 'M1',
    title: 'MASTER 1',
    subtitle: 'Innovation & Leadership',
    intro:
      "Le Master 1 doit \u00eatre un tremplin vers l\u2019innovation et le leadership technologique.",
    items: [
      "AEENI Innovation Lab : Cr\u00e9ation d\u2019un espace d\u00e9di\u00e9 au d\u00e9veloppement de projets innovants.",
      "Innovation Challenge : Concours annuel r\u00e9compensant les meilleures solutions technologiques.",
      "Mentorat invers\u00e9 : Les \u00e9tudiants de M1 accompagneront les niveaux inf\u00e9rieurs sur des technologies avanc\u00e9es.",
      "Incubateur de projets : Accompagnement des projets de startups jusqu\u2019\u00e0 maturation.",
      "Projets Open Source AEENI : Participation \u00e0 des projets visibles \u00e0 l\u2019\u00e9chelle internationale.",
      "Programme Leadership Tech : Formation d\u00e9di\u00e9e au d\u00e9veloppement des comp\u00e9tences manag\u00e9riales.",
      "Stages r\u00e9mun\u00e9r\u00e9s : N\u00e9gociation de stages payants aupr\u00e8s d\u2019entreprises partenaires.",
      "Voyages d\u2019\u00e9tudes : Visites d\u2019entreprises avec r\u00e9duction des co\u00fbts gr\u00e2ce aux initiatives de lev\u00e9e de fonds.",
      "Programme d\u2019alternance : Faciliter l\u2019int\u00e9gration progressive dans le monde professionnel.",
      "C\u00e9r\u00e9monie d\u2019accueil en Master : Valorisation du passage en cycle Master.",
    ],
  },
  {
    id: 'm2',
    icon: '\u{1F393}',
    badge: 'M2',
    title: 'MASTER 2',
    subtitle: "Carri\u00e8re & H\u00e9ritage",
    intro:
      "La derni\u00e8re ann\u00e9e doit consolider l\u2019employabilit\u00e9 et laisser un h\u00e9ritage durable.",
    items: [
      "AEENI Career Boost : Pr\u00e9paration \u00e0 l\u2019emploi et \u00e0 la n\u00e9gociation salariale.",
      "Forum Entreprises : Grand salon annuel de recrutement.",
      "AEENI Corporate Connect : Renforcement des partenariats avec les entreprises.",
      "AEENI Startup Program : Accompagnement des projets entrepreneuriaux jusqu\u2019au financement.",
      "AEENI Alumni Network : Structuration d\u2019un r\u00e9seau solide d\u2019anciens.",
      "AEENI Legacy : Cr\u00e9ation d\u2019une biblioth\u00e8que num\u00e9rique pour conserver les meilleurs m\u00e9moires.",
      "Gala de sortie M2 : Organisation d\u2019un \u00e9v\u00e9nement prestigieux pour cl\u00f4turer le parcours universitaire.",
    ],
  },
  {
    id: 'tous',
    icon: '\u{1F3DB}',
    badge: 'Pour Tous',
    title: 'TOUS LES \u00c9TUDIANTS',
    subtitle: 'Actions Communes',
    intro: '',
    items: [
      "Fonds de Solidarit\u00e9 AEENI : Soutien aux \u00e9tudiants en situation difficile.",
      "Actions humanitaires annuelles : Engagement social et communautaire.",
      "Digitalisation de l\u2019association : D\u00e9veloppement d\u2019une application et d\u2019un site web officiels.",
      "Transparence financi\u00e8re : Publication mensuelle des rapports financiers.",
      "Repr\u00e9sentants par niveau : Participation active de chaque promotion dans la gouvernance.",
      "\u00c9v\u00e9nements phares : Tech Week, Festival \u00e9tudiant, Solidarit\u00e9 Day.",
      "Hackathon AEENI : Comp\u00e9tition annuelle de programmation.",
      "Vie \u00e9tudiante dynamique : Activit\u00e9s \u00e9ducatives et festives.",
      "Soutien aux clubs : Budget structur\u00e9, calendrier annuel et accompagnement.",
      "Connexion sp\u00e9ciale AEENI : Acc\u00e8s internet d\u00e9di\u00e9.",
      "Projection Coupe du Monde 2026 : Moments de rassemblement \u00e9tudiant.",
      "Abonnement professionnel gratuit : Acc\u00e8s \u00e0 des plateformes technologiques pour renforcer les comp\u00e9tences.",
      "Valorisation des femmes en informatique : Activit\u00e9s et comp\u00e9titions d\u00e9di\u00e9es aux femmes.",
      "Sous-associations r\u00e9gionales : Promotion de la diversit\u00e9 culturelle (Merina, Sihanaka, etc.).",
      "Partenariats linguistiques : Collaboration avec des \u00e9coles de langues comme ITTI, Alliance, BRINE.",
    ],
  },
]

const stats = [
  { value: '6', label: 'Niveaux couverts' },
  { value: '80+', label: 'Actions concr\u00e8tes' },
  { value: '100%', label: 'Transparence' },
  { value: '1', label: 'Vision commune' },
]

/* ─── ICONS (inline SVG) ─── */
const ChevronDown = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
)

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
)

const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
)

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
)

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
)

/* ─── SECTION CARD ─── */
function SectionCard({ section, isOpen, onToggle, index }) {
  return (
    <div
      className="group bg-white/70 backdrop-blur-sm rounded-2xl border border-white/40 shadow-sm hover:shadow-xl hover:shadow-brand/5 transition-all duration-300 overflow-hidden"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <button
        onClick={onToggle}
        className="w-full text-left px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-3 sm:gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 rounded-2xl"
      >
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          <span className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-brand to-brand-light flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-md shadow-brand/25">
            {section.badge}
          </span>
          <div className="min-w-0">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 truncate">{section.title}</h3>
            <p className="text-xs sm:text-sm text-gray-500 truncate">{section.subtitle}</p>
          </div>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-brand-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-1">
            {section.intro && (
              <p className="text-gray-500 text-sm sm:text-base mb-4 pl-4 border-l-2 border-brand-200 italic">
                {section.intro}
              </p>
            )}
            <div className="grid gap-2 sm:gap-3">
              {section.items.map((item, i) => {
                const colonIdx = item.indexOf(' : ')
                const bold = colonIdx !== -1 ? item.slice(0, colonIdx) : item
                const desc = colonIdx !== -1 ? item.slice(colonIdx + 3) : ''
                return (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-brand-50/50 hover:bg-brand-50 transition-colors"
                  >
                    <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brand-400" />
                    <p className="text-sm sm:text-[0.94rem] text-gray-700 leading-relaxed">
                      <strong className="text-brand-700 font-semibold">{bold}</strong>
                      {desc && <span className="text-gray-600">{' \u2014 '}{desc}</span>}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── APP ─── */
export default function App() {
  const [openSection, setOpenSection] = useState(null)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggle = (id) => setOpenSection(openSection === id ? null : id)

  const navLinks = [
    { href: '#programme', label: 'Programme' },
    { href: '#contact', label: 'Contact' },
    { href: 'https://web.facebook.com/Herinifitia', label: 'Facebook', external: true },
  ]

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">

      {/* ─── NAVBAR ─── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-brand/5 border-b border-gray-200/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-brand rounded-xl rotate-6 scale-105 opacity-20 group-hover:rotate-12 transition-transform" />
                <img
                  src={Fitia}
                  alt="Fi&quot;tia"
                  className="relative h-9 w-9 sm:h-10 sm:w-10 rounded-xl object-cover ring-2 ring-brand/30"
                />
              </div>
              <div className="hidden sm:block">
                <span className={`font-bold text-sm tracking-widest uppercase ${scrolled ? 'text-brand' : 'text-brand'}`}>
                  Fi&quot;tia
                </span>
                <span className={`block text-[0.65rem] tracking-wider ${scrolled ? 'text-gray-400' : 'text-brand-300'}`}>
                  Projet Pr&eacute;sidentiel AEENI
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    scrolled
                      ? 'text-gray-600 hover:text-brand hover:bg-brand-50'
                      : 'text-brand-700 hover:text-brand hover:bg-brand-50/50'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-brand hover:bg-brand-50/50'
              }`}
            >
              {mobileMenu ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenu(false)}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="block px-4 py-3 rounded-xl text-gray-700 hover:text-brand hover:bg-brand-50 font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* ─── HERO ─── */}
      <header className="relative min-h-[100svh] flex items-center overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-brand-50/30" />
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-brand/[0.03] rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-brand/[0.04] rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'radial-gradient(circle, #1510AD 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-brand/5 border border-brand/10 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                <span className="text-brand text-xs sm:text-sm font-semibold tracking-wide uppercase">
                  Candidat N&deg;1 &mdash; AEENI
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight animate-fade-in-up">
                <span className="text-gray-900">HERINIRINA</span>
                <br />
                <span className="text-gray-900">Sitrakiniaina</span>
                <br />
                <span className="bg-gradient-to-r from-brand to-brand-light bg-clip-text text-transparent">
                  Fi&quot;tia
                </span>
              </h1>

              <div className="mt-6 sm:mt-8 inline-flex items-center gap-2 bg-white rounded-2xl shadow-lg shadow-brand/5 border border-brand/10 px-5 sm:px-6 py-3 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <span className="text-2xl">&laquo;</span>
                <span className="text-brand font-bold text-base sm:text-lg tracking-wide">Fi&quot;tia dia ampy</span>
                <span className="text-2xl">&raquo;</span>
              </div>

              <p className="mt-6 sm:mt-8 text-gray-500 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                Un projet ambitieux pour accompagner chaque &eacute;tudiant de l&rsquo;AEENI, de la Licence au Master, vers la r&eacute;ussite acad&eacute;mique et l&rsquo;insertion professionnelle.
              </p>

              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <a
                  href="#programme"
                  className="bg-brand hover:bg-brand-dark text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-brand/25 hover:shadow-xl hover:shadow-brand/30 transition-all active:scale-95 text-center"
                >
                  D&eacute;couvrir le programme
                </a>
                <a
                  href="#contact"
                  className="bg-white hover:bg-gray-50 text-gray-700 font-semibold px-7 py-3.5 rounded-xl border border-gray-200 shadow-sm hover:shadow transition-all active:scale-95 text-center"
                >
                  Me contacter
                </a>
              </div>
            </div>

            {/* Right - Image */}
            <div className="flex justify-center order-1 lg:order-2 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="relative max-w-[280px] sm:max-w-[340px] lg:max-w-[400px]">
                {/* Decorative elements */}
                <div className="absolute -inset-6 sm:-inset-8 bg-gradient-to-br from-brand/10 to-brand-light/5 rounded-[2rem] rotate-3 blur-sm" />
                <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-br from-brand/20 to-transparent rounded-[1.5rem] -rotate-2" />

                <img
                  src={Fitia}
                  alt="HERINIRINA Sitrakiniaina Fi&quot;tia"
                  className="relative w-full rounded-2xl sm:rounded-3xl shadow-2xl shadow-brand/15 object-cover aspect-[3/4]"
                />

                {/* Floating badge */}
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-white rounded-2xl shadow-xl shadow-brand/10 px-4 sm:px-5 py-2.5 sm:py-3 border border-brand/5">
                  <p className="text-xs text-gray-400 font-medium">Matricule</p>
                  <p className="text-brand font-bold text-sm sm:text-base">1740 H-F</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/60 shadow-sm"
              >
                <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-br from-brand to-brand-light bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ─── PROGRAMME ─── */}
      <section id="programme" className="relative py-16 sm:py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block text-brand text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 bg-brand-50 px-4 py-1.5 rounded-full">
              Notre Vision
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
              Programme{' '}
              <span className="bg-gradient-to-r from-brand to-brand-light bg-clip-text text-transparent">
                Complet
              </span>
            </h2>
            <p className="text-gray-500 mt-3 sm:mt-4 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
              De la L1 au M2, chaque niveau b&eacute;n&eacute;ficie d&rsquo;actions concr&egrave;tes pour votre r&eacute;ussite. Cliquez pour explorer.
            </p>
          </div>

          {/* Cards */}
          <div className="space-y-3 sm:space-y-4">
            {sections.map((section, index) => (
              <SectionCard
                key={section.id}
                section={section}
                isOpen={openSection === section.id}
                onToggle={() => toggle(section.id)}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT / FOOTER ─── */}
      <footer id="contact" className="relative overflow-hidden">
        {/* Top CTA band */}
        <div className="bg-gradient-to-r from-brand via-brand-light to-brand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-3 sm:mb-4">
              Ensemble, construisons l&rsquo;avenir de l&rsquo;AEENI
            </h3>
            <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto mb-6 sm:mb-8">
              Le changement commence avec votre voix. Rejoignez le mouvement Fi&quot;tia.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="tel:+261342509134"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-95"
              >
                <PhoneIcon />
                <span>+261 34 25 091 34</span>
              </a>
              <a
                href="mailto:herinirinafitia@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-6 py-3 rounded-xl transition-all active:scale-95"
              >
                <MailIcon />
                <span>herinirinafitia@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="bg-brand-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="text-white font-bold text-sm sm:text-base">
                HERINIRINA Sitrakiniaina Fi&quot;tia
              </p>
              <p className="text-white/40 text-xs mt-0.5">
                Master 1 &ndash; IG &middot; Matricule 1740 H-F
              </p>
            </div>
            <p className="text-white/30 text-xs">
              &copy; 2026 Projet Pr&eacute;sidentiel AEENI &mdash; Tous droits r&eacute;serv&eacute;s
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
