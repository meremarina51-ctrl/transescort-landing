import { notFound } from "next/navigation";
import { hasLocale } from "./config";

export type { Dictionary } from "./dictionaries/ru";

const dictionaries = {
    ru: () => import("./dictionaries/ru").then((module) => module.default),
    en: () => import("./dictionaries/en").then((module) => module.default),
};

export async function getDictionary(locale: string) {
    if (!hasLocale(locale)) notFound();
    return dictionaries[locale]();
}
