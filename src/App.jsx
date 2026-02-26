import React, { useState } from 'react'
import Fitia from './assets/Fitia.png'

const sections = [
  {
    id: 'l1',
    icon: '\u{1F393}',
    title: 'LICENCE 1 (L1)',
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
    title: 'LICENCE 2 (L2)',
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
    title: 'LICENCE 3 (L3)',
    subtitle: 'Insertion Professionnelle',
    intro:
      "L\u2019objectif principal est de faciliter la transition vers le monde du travail.",
    items: [
      "Stages professionnels de qualit\u00e9 : Mise en place de partenariats solides avec des entreprises.",
      "Ateliers de pr\u00e9paration professionnelle : Perfectionnement des CV, simulations d\u2019entretien.",
      "Speed Recruiting ENI : Organisation de journ\u00e9es de recrutement direct au sein de l\u2019ENI.",
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
    title: 'MASTER 1 (M1)',
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
    title: 'MASTER 2 (M2)',
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
    title: 'POUR TOUS LES \u00c9TUDIANTS',
    subtitle: 'Actions Communes',
    intro: '',
    items: [
      "Fonds de Solidarit\u00e9 AEENI : Soutien aux \u00e9tudiants en situation difficile.",
      "Actions humanitaires annuelles : Engagement social et communautaire.",
      "Digitalisation de l\u2019association : D\u00e9veloppement d\u2019une application et d\u2019un site web officiels.",
      "Transparence financi\u00e8re : Publication mensuelle des rapports financiers.",
      "Repr\u00e9sentants par niveau : Participation active de chaque promotion dans la gouvernance.",
      "\u00c9v\u00e9nements phares : Tech Week, Festival \u00e9tudiant, Solidarit\u00e9 Day.",
      "Hackathon ENI : Comp\u00e9tition annuelle de programmation.",
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

function SectionCard({ section, isOpen, onToggle }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-brand-100 hover:shadow-lg transition-shadow">
      <button
        onClick={onToggle}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-brand-300 rounded-xl"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{section.icon}</span>
          <div>
            <h3 className="text-lg font-bold text-brand-700">{section.title}</h3>
            <p className="text-sm text-brand-400">{section.subtitle}</p>
          </div>
        </div>
        <svg
          className={`w-5 h-5 text-brand transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          {section.intro && (
            <p className="text-gray-600 mb-4 italic">{section.intro}</p>
          )}
          <ul className="space-y-2">
            {section.items.map((item, i) => {
              const colonIdx = item.indexOf(' : ')
              const bold = colonIdx !== -1 ? item.slice(0, colonIdx) : item
              const desc = colonIdx !== -1 ? item.slice(colonIdx + 3) : ''
              return (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-brand flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong className="text-brand-dark">{bold}</strong>
                    {desc && <>{' : '}{desc}</>}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

export default function App() {
  const [openSection, setOpenSection] = useState(null)

  const toggle = (id) => setOpenSection(openSection === id ? null : id)

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 via-white to-brand-50">
      {/* Navigation */}
      <nav className="bg-brand shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={Fitia} alt="Fitia" className="h-10 w-10 rounded-full object-cover border-2 border-white" />
            <span className="text-white font-bold text-lg tracking-wide">PROJET PR&Eacute;SIDENTIEL</span>
          </div>
          <a
            href="#programme"
            className="text-white/90 hover:text-white text-sm font-medium transition-colors"
          >
            Programme &darr;
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-brand font-semibold uppercase tracking-widest text-sm mb-2">
              Candidat N&deg;1
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              HERINIRINA Sitrakiniaina{' '}
              <span className="text-brand">Fi&quot;tia</span>
            </h1>
            <div className="inline-block bg-brand/10 border border-brand/20 rounded-full px-6 py-2 mb-6">
              <span className="text-brand font-bold text-lg">&laquo; Fi&quot;tia dia ampy &raquo;</span>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              Un projet ambitieux pour accompagner chaque &eacute;tudiant de l&rsquo;ENI, de la Licence 1 au Master 2, vers la r&eacute;ussite acad&eacute;mique et l&rsquo;insertion professionnelle.
            </p>
            <a
              href="#programme"
              className="inline-block mt-8 bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              D&eacute;couvrir le programme
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand/10 rounded-2xl rotate-3" />
              <img
                src={Fitia}
                alt="Fitia"
                className="relative rounded-2xl shadow-xl max-w-xs md:max-w-sm object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Programme */}
      <main id="programme" className="max-w-4xl mx-auto px-4 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Programme <span className="text-brand">Complet</span>
          </h2>
          <p className="text-gray-500 mt-2">
            Cliquez sur chaque section pour d&eacute;couvrir les d&eacute;tails du projet.
          </p>
        </div>

        <div className="space-y-4">
          {sections.map((section) => (
            <SectionCard
              key={section.id}
              section={section}
              isOpen={openSection === section.id}
              onToggle={() => toggle(section.id)}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-brand text-white">
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-1">HERINIRINA Sitrakiniaina Fi&quot;tia</h3>
            <p className="text-white/80 text-sm">Matricule : 1740 H-F &middot; Master 1 &ndash; IG</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-1 text-sm text-white/80">
            <a href="tel:+261342509134" className="hover:text-white transition-colors">
              &#x1F4DE; +261 34 25 091 34
            </a>
            <a href="mailto:herinirinafitia@gmail.com" className="hover:text-white transition-colors">
              &#x1F4E7; herinirinafitia@gmail.com
            </a>
          </div>
        </div>
        <div className="border-t border-white/20 text-center py-4 text-xs text-white/60">
          &copy; 2026 Projet Pr&eacute;sidentiel Fi&quot;tia &mdash; Tous droits r&eacute;serv&eacute;s
        </div>
      </footer>
    </div>
  )
}
