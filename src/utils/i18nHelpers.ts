import { TFunction } from 'i18next';
import type {
  TService,
  TTechnology,
  TExperience,
  TProject,
  TCertification,
} from '../types';
import {
  web,
  mobile,
  backend,
  creator,
  snagz,
  anef,
  morpheus,
  datascientest,
  iscod,
  projetrh,
  projetsuivibudg,
  projetcallcenter,
  projetvelos,
  powerbi,
  sql,
  powerquery,
  talend,
  python,
  excel,
  n8n,
  tosa,
  certificationTosaExcel,
  certificationIscodPdf,
  iscodCertificationLogo,
  certificationDatascientest,
} from '../assets';

// Mapping des clés de traduction vers les identifiants
const SERVICE_KEYS = ['finance', 'data', 'businessIntelligence', 'artificialIntelligence'] as const;
const TECH_KEYS = ['excel', 'powerquery', 'powerbi', 'sql', 'automation', 'python', 'talend'] as const;
const EXPERIENCE_KEYS = ['snagz', 'anef', 'morpheus', 'datascientest', 'iscod'] as const;
const PROJECT_KEYS = ['budget', 'rh', 'callcenter', 'velos'] as const;
const CERTIFICATION_KEYS = ['tosa', 'datascientest', 'iscod'] as const;

const SERVICE_ICONS = [web, mobile, backend, creator];
const TECH_ICONS = [excel, powerquery, powerbi, sql, n8n, python, talend];
const EXPERIENCE_ICONS = [snagz, anef, morpheus, datascientest, iscod];
const PROJECT_IMAGES = [projetsuivibudg, projetrh, projetcallcenter, projetvelos];
const CERTIFICATION_ICONS = [tosa, datascientest, iscodCertificationLogo];
const CERTIFICATION_URLS = [certificationTosaExcel, certificationDatascientest, certificationIscodPdf];

const PROJECT_TAG_COLORS: Record<string, string> = {
  'Excel': 'green-gradient-text',
  'sql': 'grey-gradient-text',
  'Finance': 'blue-text-gradient',
  'PowerQuery': 'white-gradient-text',
  'RH': 'pink-text-gradient',
  'PowerBi': 'yellow-gradient-text',
  'Data': 'grey-gradient-text',
  'Python': 'orange-gradient-text',
  'Streamlit': 'red-gradient-text',
  'Data Analysis': 'grey-gradient-text',
  'React': 'blue-text-gradient',
  'Next.js': 'green-gradient-text',
  'Web': 'pink-text-gradient',
  'Calcul': 'green-gradient-text',
  'FastAPI': 'green-gradient-text',
  'Outils métier': 'pink-text-gradient',
};

const PROJECT_LINKS = [
  { demoLink: 'https://youtu.be/NRX0Rryb45s?si=9KuPAPcuvhBnH1dp' },
  { demoLink: 'https://youtu.be/sMP8HLD4v_M?si=Yr3COVXv4Jf3spFA' },
  { demoLink: 'https://www.youtube.com/watch?v=DglGvOUYmvA&ab_channel=AminercIT' },
  { sourceCodeLink: 'https://github.com/aminerc' },
];

export const getTranslatedServices = (t: TFunction): TService[] => {
  return SERVICE_KEYS.map((key, index) => ({
    title: t(`about.services.${key}`),
    icon: SERVICE_ICONS[index],
  }));
};

export const getTranslatedTechnologies = (t: TFunction): TTechnology[] => {
  return TECH_KEYS.map((key, index) => ({
    name: t(`tech.items.${key}.name`),
    icon: TECH_ICONS[index],
    level: t(`tech.items.${key}.level`),
    usage: t(`tech.items.${key}.usage`),
  }));
};

export const getTranslatedExperiences = (t: TFunction): TExperience[] => {
  const iconBg = '#E6DEDD';
  return EXPERIENCE_KEYS.map((key, index) => ({
    title: t(`experience.items.${key}.title`),
    companyName: t(`experience.items.${key}.company`),
    icon: EXPERIENCE_ICONS[index],
    iconBg,
    date: t(`experience.items.${key}.date`),
    points: (t(`experience.items.${key}.points`, { returnObjects: true }) as string[]) || [],
  }));
};

export const getTranslatedProjects = (t: TFunction): TProject[] => {
  return PROJECT_KEYS.map((key, index) => {
    const tags = (t(`works.items.${key}.tags`, { returnObjects: true }) as string[]) || [];
    return {
      name: t(`works.items.${key}.name`),
      description: t(`works.items.${key}.description`),
      tags: tags.map((tag) => ({
        name: tag,
        color: PROJECT_TAG_COLORS[tag] || 'grey-gradient-text',
      })),
      image: PROJECT_IMAGES[index],
      ...PROJECT_LINKS[index],
    };
  });
};

export const getTranslatedCertifications = (t: TFunction): TCertification[] => {
  return CERTIFICATION_KEYS.map((key, index) => ({
    title: t(`certifications.items.${key}.title`),
    issuer: t(`certifications.items.${key}.issuer`),
    date: t(`certifications.items.${key}.date`),
    description: t(`certifications.items.${key}.description`),
    icon: CERTIFICATION_ICONS[index],
    url: CERTIFICATION_URLS[index],
  }));
};
