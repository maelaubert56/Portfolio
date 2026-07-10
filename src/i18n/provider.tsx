"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";

import fr from "@/i18n/fr.json";
import en from "@/i18n/en.json";
import frProjects from "@/i18n/fr.projects.json";
import enProjects from "@/i18n/en.projects.json";
import frExperiences from "@/i18n/fr.experiences.json";
import enExperiences from "@/i18n/en.experiences.json";
import frEducation from "@/i18n/fr.education.json";
import enEducation from "@/i18n/en.education.json";

export type Locale = "fr" | "en";

type Translations = typeof fr;

export interface ProjectTranslation {
  shortDescription: string;
  longDescription: string;
}
export type ProjectTranslations = Record<string, ProjectTranslation>;

export interface ExperienceTranslation {
  role?: string;
  company?: string;
  description?: string;
  contractType?: string;
  longDescription?: string;
  highlights?: string[];
}
export type ExperienceTranslations = Record<string, ExperienceTranslation>;

export interface EducationTranslation {
  title?: string;
  description?: string;
  location?: string;
}
export type EducationTranslations = Record<string, EducationTranslation>;

const translations: Record<Locale, Translations> = { fr, en };
const projectTranslations: Record<Locale, ProjectTranslations> = {
  fr: frProjects,
  en: enProjects,
};
const experienceTranslations: Record<Locale, ExperienceTranslations> = {
  fr: frExperiences,
  en: enExperiences,
};
const educationTranslations: Record<Locale, EducationTranslations> = {
  fr: frEducation,
  en: enEducation,
};

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
  tp: ProjectTranslations;
  te: ExperienceTranslations;
  ted: EducationTranslations;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");

  useEffect(() => {
    const stored = localStorage.getItem("locale") as Locale | null;
    if (stored && (stored === "fr" || stored === "en")) {
      setLocaleState(stored);
      document.documentElement.lang = stored;
    }
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
    document.documentElement.lang = newLocale;
  }, []);

  return (
    <I18nContext.Provider
      value={{
        locale,
        setLocale,
        t: translations[locale],
        tp: projectTranslations[locale],
        te: experienceTranslations[locale],
        ted: educationTranslations[locale],
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
