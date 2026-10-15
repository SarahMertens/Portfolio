export const languages = {
  nl: 'Nederlands',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'nl';

export const ui = {
  nl: {
    'site.description':
      'Portfolio van Sarah Mertens, full stack developer in opleiding.',
    skip: 'Ga naar de inhoud',
    'nav.label': 'Hoofdmenu',
    'nav.home': 'Home',
    'nav.projects': 'Projecten',
    'nav.about': 'Over mij',
    'nav.contact': 'Contact',
    'lang.switch': 'Bekijk deze pagina in het Engels',
    'home.title': 'Hallo, ik ben Sarah',
    'home.metaTitle': 'Full stack developer in opleiding',
    'home.eyebrow': 'Full stack developer in opleiding',
    'home.intro':
      'Ik ben laatstejaarsstudent Toegepaste Informatica aan HOGENT. Ik bouw software die echte problemen oplost voor echte mensen: van een boekhoudapp voor een vrijwilligersgroep tot het ticketbeheer van een toneelgroep.',
    'home.status': 'Op zoek naar een stageplaats',
    'home.ctaProjects': 'Bekijk mijn projecten',
    'home.ctaContact': 'Neem contact op',
    'home.whyTitle': 'Wat ik meebreng',
    'home.why1Title': 'Voor echte gebruikers',
    'home.why1Text':
      'Mijn projecten worden echt gebruikt, door een vrijwilligersorganisatie, een vriendenkring en een toneelgroep. Ik luister eerst, en bouw dan.',
    'home.why2Title': 'Veiligheid in mijn achtergrond',
    'home.why2Text':
      'Als bewakingsagent denk ik vanzelf na over wie wat mag zien. Dat neem ik mee in mijn code: rollen, rechten en geen geheimen in de repository.',
    'home.why3Title': 'Kalm onder druk',
    'home.why3Text':
      'Als duiker leerde ik rustig te blijven als iets onverwacht loopt. Handig als een test om middernacht nog altijd rood is.',
    'home.featuredTitle': 'Uitgelichte projecten',
    'home.allProjects': 'Alle projecten',
    'home.contactTitle': 'Zin om samen te werken?',
    'home.contactText':
      'Ik zoek een stage als full stack developer. Stuur me gerust een berichtje.',
    'project.live': 'Live demo',
    'projects.title': 'Projecten',
    'about.title': 'Over mij',
    'contact.title': 'Contact',
    'footer.made': 'Zelf gebouwd met Astro',
    'projects.intro':
      'Een selectie van wat ik bouwde: voor school, voor vrijwilligers en uit nieuwsgierigheid.',
    'projects.featured': 'Uitgelichte projecten',
    'projects.more': 'Meer projecten',
    'project.back': 'Terug naar alle projecten',
    'project.year': 'Jaar',
    'project.context': 'Context',
    'project.role': 'Rol',
    'project.tech': 'Technologieën',
    'project.code': 'Bekijk de code',
    'project.demo': 'Live demo',
    'project.details': 'Lees meer',
    'context.school': 'Schoolproject',
    'context.personal': 'Persoonlijk project',
    'context.volunteer': 'Vrijwilligerswerk',
    'context.internship': 'Stage-opdracht',
    'demo.title': 'Probeer het zelf',
    'demo.start': 'Start de demo',
    'demo.newTab': 'Open in een nieuw tabblad',
    'demo.loadNote': 'De demo laadt pas als je op de knop klikt.',
    'demo.frameTitle': 'Live demo van',
  },
  en: {
    'site.description':
      'Portfolio of Sarah Mertens, full stack developer in training.',
    skip: 'Skip to content',
    'nav.label': 'Main menu',
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About me',
    'nav.contact': 'Contact',
    'lang.switch': 'View this page in Dutch',
    'home.title': "Hi, I'm Sarah",
    'home.metaTitle': 'Full stack developer in training',
    'home.eyebrow': 'Full stack developer in training',
    'home.intro':
      "I'm a final-year Applied Computer Science student at HOGENT. I build software that solves real problems for real people: from a bookkeeping app for a volunteer group to the box office of a theatre company.",
    'home.status': 'Looking for an internship',
    'home.ctaProjects': 'See my projects',
    'home.ctaContact': 'Get in touch',
    'home.whyTitle': 'What I bring',
    'home.why1Title': 'Built for real users',
    'home.why1Text':
      'My projects are used for real, by a volunteer organisation, a social club and a theatre group. I listen first, then I build.',
    'home.why2Title': 'Security is in my background',
    'home.why2Text':
      'As a security guard and prevention advisor, I naturally think about who may see what. I bring that into my code: roles, permissions and no secrets in the repository.',
    'home.why3Title': 'Calm under pressure',
    'home.why3Text':
      'As a diver I learned to stay calm when things go unexpectedly. Useful when a test is still red at midnight.',
    'home.featuredTitle': 'Featured projects',
    'home.allProjects': 'All projects',
    'home.contactTitle': 'Want to work together?',
    'home.contactText':
      "I'm looking for an internship as a full stack developer. Feel free to send me a message.",
    'project.live': 'Live demo',
    'projects.title': 'Projects',
    'about.title': 'About me',
    'contact.title': 'Contact',
    'footer.made': 'Built by me with Astro',
    'projects.intro':
      'A selection of what I built: for school, for volunteers and out of curiosity.',
    'projects.featured': 'Featured projects',
    'projects.more': 'More projects',
    'project.back': 'Back to all projects',
    'project.year': 'Year',
    'project.context': 'Context',
    'project.role': 'Role',
    'project.tech': 'Technologies',
    'project.code': 'View the code',
    'project.demo': 'Live demo',
    'project.details': 'Read more',
    'context.school': 'School project',
    'context.personal': 'Personal project',
    'context.volunteer': 'Volunteer work',
    'context.internship': 'Internship assignment',
    'demo.title': 'Try it yourself',
    'demo.start': 'Start the demo',
    'demo.newTab': 'Open in a new tab',
    'demo.loadNote': 'The demo only loads when you click the button.',
    'demo.frameTitle': 'Live demo of',
  },
} as const;

export type UiKey = keyof (typeof ui)[typeof defaultLang];

export function useTranslations(lang: Lang) {
  return (key: UiKey) => ui[lang][key];
}

export function getLangPaths() {
  return (Object.keys(languages) as Lang[]).map((lang) => ({
    params: { lang },
  }));
}

export function switchLangPath(pathname: string, to: Lang) {
  return pathname.replace(/^\/(nl|en)(?=\/|$)/, `/${to}`);
}
