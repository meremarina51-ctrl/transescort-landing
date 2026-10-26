import { LOCALES, type Locale } from "@/i18n/config";

interface Props {
    locale: Locale;
    label: string;
    query: string;
}

export function LanguageSwitcher({ locale, label, query }: Props) {
    return (
        <nav aria-label={label} className="flex shrink-0 items-center rounded-full border border-white/15 bg-white/[0.04] p-1 font-body text-xs font-semibold">
            {LOCALES.map((language) => (
                <a
                    key={language}
                    href={`/${language}${query ? `?${query}` : ""}`}
                    hrefLang={language}
                    lang={language}
                    aria-label={language === "ru" ? "Русский" : "English"}
                    aria-current={locale === language ? "page" : undefined}
                    className={`rounded-full px-2.5 py-2 transition-colors ${locale === language ? "bg-accent text-white" : "text-white/50 hover:text-white"}`}
                >
                    {language.toUpperCase()}
                </a>
            ))}
        </nav>
    );
}
