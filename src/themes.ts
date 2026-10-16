import type { Lang } from './i18n/ui';

export const themes = [
  { id: 'duiken', icon: '🤿', label: { nl: 'Duiken', en: 'Diving' } },
] as const satisfies readonly {
  id: string;
  icon: string;
  label: Record<Lang, string>;
}[];

export type ThemeId = (typeof themes)[number]['id'];

export const defaultTheme: ThemeId = 'duiken';
