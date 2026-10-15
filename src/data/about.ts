import type { Lang } from '../i18n/ui';

export interface TimelineItem {
  period: string;
  title: string;
  place: string;
}

export interface SkillGroup {
  name: string;
  items: string[];
}

interface AboutContent {
  story: string[];
  skills: SkillGroup[];
  education: TimelineItem[];
  work: TimelineItem[];
  certificates: string[];
  languages: { name: string; level: string }[];
  hobbies: string[];
}

// Technologieën hebben in beide talen dezelfde naam, dus die staan maar één keer hier.
const skillItems = {
  frontend: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Astro', 'HTML & CSS', 'Blazor'],
  backend: ['Node.js', 'NestJS', 'C# / .NET', 'Java', 'REST API', 'JWT'],
  data: ['MySQL', 'PostgreSQL (Supabase)', 'Drizzle ORM', 'Firebase', 'SQLite'],
  quality: ['Jest', 'Cypress', 'xUnit', 'JUnit', 'Git', 'GitHub Actions', 'Docker'],
  desktop: ['JavaFX', 'Swing / Java 2D', 'Fabric (Minecraft)', 'Maven', 'Gradle'],
};

export const about: Record<Lang, AboutContent> = {
  nl: {
    story: [
      'Mijn weg naar IT was niet de rechtste. Na het secundair in sportwetenschappen volgde ik een specialisatiejaar integrale veiligheid, en ik werk nog altijd als jobstudent bewakingsagent. Daar leerde ik hoe belangrijk het is dat systemen betrouwbaar zijn, en dat je goed nadenkt over wie waar toegang toe heeft.',
      'Aan HOGENT ontdekte ik hoe graag ik dingen bouw. Het liefst voor echte mensen: de boekhouding van een vrijwilligersgroep, het programma van een vriendenkring, de tickets van een toneelgroep. Zien dat iemand er echt tijd mee wint, motiveert me het meest.',
      'Naast het programmeren speel ik al sinds 2014 gitaar en duik ik als 2-sterduiker. Daarom kan je deze site ook bekijken in een thema rond duiken, muziek of een controlekamer.',
    ],
    skills: [
      { name: 'Frontend', items: skillItems.frontend },
      { name: 'Backend', items: skillItems.backend },
      { name: 'Databanken', items: skillItems.data },
      { name: 'Testen en tools', items: skillItems.quality },
      { name: 'Desktop en games', items: skillItems.desktop },
    ],
    education: [
      { period: '2024 – nu', title: 'Professionele bachelor Toegepaste Informatica', place: 'HOGENT, Gent' },
      { period: '2023 – 2024', title: '7de specialisatiejaar Integrale veiligheid', place: 'Sint-Vincentius, Torhout' },
      { period: '– 2023', title: 'Secundair onderwijs, Sportwetenschappen (ASO)', place: 'Centrum Athena, Oostende' },
    ],
    work: [
      { period: '2026 – nu', title: 'Jobstudent bewakingsagent', place: 'Mundo Security' },
      { period: '2024 – nu', title: 'Jobstudent bewakingsagent', place: 'Expert Security' },
      { period: '2024 – 2026', title: 'Jobstudent bewakingsagent', place: 'VestaGuard' },
      { period: '2021 – 2024', title: 'Jobstudent horeca', place: 'Bavet, Oostende' },
      { period: 'Zomers 2022 en 2023', title: 'Jobstudent logistiek kinderopvang', place: 'Stad Oostende' },
    ],
    certificates: [
      'Algemeen bekwaamheidsattest bewakingsagent',
      'Preventieadviseur niveau 3',
      'Bedrijfseerstehulpverlener',
    ],
    languages: [
      { name: 'Nederlands', level: 'moedertaal' },
      { name: 'Engels', level: 'C1' },
      { name: 'Frans', level: 'B1' },
    ],
    hobbies: ['Gitaar (sinds 2014)', 'Duiken, 2-sterduiker (sinds 2020)', "Video's maken voor vrijwilligersgroep Niet Alleen"],
  },
  en: {
    story: [
      "My path into IT wasn't the most direct one. After secondary school in sports science I took a specialisation year in integrated security, and I still work as a student security guard. That taught me how important it is for systems to be reliable, and to think carefully about who has access to what.",
      'At HOGENT I discovered how much I enjoy building things. Preferably for real people: the bookkeeping of a volunteer group, the programme of a social club, the tickets of a theatre company. Seeing that someone really saves time with it motivates me the most.',
      "Besides programming, I've been playing guitar since 2014 and I'm a 2-star diver. That's why you can also view this site in a diving, music or control room theme.",
    ],
    skills: [
      { name: 'Frontend', items: skillItems.frontend },
      { name: 'Backend', items: skillItems.backend },
      { name: 'Databases', items: skillItems.data },
      { name: 'Testing and tools', items: skillItems.quality },
      { name: 'Desktop and games', items: skillItems.desktop },
    ],
    education: [
      { period: '2024 – now', title: 'Bachelor in Applied Computer Science', place: 'HOGENT, Ghent' },
      { period: '2023 – 2024', title: 'Specialisation year in Integrated Security', place: 'Sint-Vincentius, Torhout' },
      { period: '– 2023', title: 'Secondary school, Sports Science', place: 'Centrum Athena, Ostend' },
    ],
    work: [
      { period: '2026 – now', title: 'Student security guard', place: 'Mundo Security' },
      { period: '2024 – now', title: 'Student security guard', place: 'Expert Security' },
      { period: '2024 – 2026', title: 'Student security guard', place: 'VestaGuard' },
      { period: '2021 – 2024', title: 'Student job in hospitality', place: 'Bavet, Ostend' },
      { period: 'Summers 2022 and 2023', title: 'Student job in childcare logistics', place: 'City of Ostend' },
    ],
    certificates: ['Security guard certificate (Belgium)', 'Prevention advisor, level 3', 'Company first aider'],
    languages: [
      { name: 'Dutch', level: 'native' },
      { name: 'English', level: 'C1' },
      { name: 'French', level: 'B1' },
    ],
    hobbies: ['Guitar (since 2014)', 'Diving, 2-star diver (since 2020)', 'Making videos for volunteer group Niet Alleen'],
  },
};