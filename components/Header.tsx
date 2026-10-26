import Logo from "./Logo";
import { getCta } from "@/cta";
import { TrackedCtaLink } from "./TrackedCtaLink";
import { LanguageSwitcher } from "./LanguageSwitcher";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

interface Props {
    locale: Locale;
    common: Dictionary["common"];
    cta: Dictionary["cta"];
    query: string;
}

export const Header = async ({ locale, common, cta, query }: Props) => {
    const { mode, primary } = await getCta(cta);

    return (
        <header className="sticky z-20 top-0 border-b border-white/[0.06] bg-[#0a0a0a]/90 backdrop-blur-xl">
            <div className="max-w-[1400px] mx-auto min-h-16 w-full flex items-center gap-3 px-4 sm:px-6 md:px-10 justify-between">
                <Logo label={common.logoLabel} className="shrink-0" />

                <div className="flex items-center gap-2 sm:gap-4">
                    <LanguageSwitcher locale={locale} label={common.languageLabel} query={query} />
                    <TrackedCtaLink
                        href={primary.href}
                        label={primary.label}
                        className="btn-primary !px-3 !py-2.5 !text-xs sm:!px-6 sm:!text-sm"
                        goal={`cta_primary_click_${mode}`}
                        params={{ placement: "header" }}
                    />
                </div>
            </div>
        </header>
    );
};
