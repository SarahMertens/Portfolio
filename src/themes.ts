import type { Lang } from './i18n/ui';

// Alle thema's van de site. Een nieuw thema = een regel hier + een CSS-bestand in src/styles/themes/.
export const themes = [
  { id: 'duiken', icon: '🤿', label: { nl: 'Duiken', en: 'Diving' } },
  { id: 'muziek', icon: '🎸', label: { nl: 'Muziek', en: 'Music' } },
] as const satisfies readonly { id: string; icon: string; label: Record<Lang, string> }[];

export type ThemeId = (typeof themes)[number]['id'];

export const defaultTheme: ThemeId = 'duiken';