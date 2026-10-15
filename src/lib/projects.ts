import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Project = CollectionEntry<'projects'>;

// 'nl/de-ballon' → 'de-ballon'
export function projectSlug(project: Project) {
  return project.id.split('/').slice(1).join('/');
}

// 'nl/de-ballon' → 'nl'
export function projectLang(project: Project) {
  return project.id.split('/')[0] as Lang;
}

export async function getProjects(lang: Lang) {
  const projects = await getCollection(
    'projects',
    (project) => projectLang(project) === lang,
  );
  return projects.sort((a, b) => a.data.order - b.data.order);
}
