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
