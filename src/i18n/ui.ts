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
