export type CtaMode = "account" | "telegram";

export const CTA_LINKS = {
    account: process.env.NEXT_PUBLIC_REGISTER_URL ?? "#",
    catalog: process.env.NEXT_PUBLIC_CATALOG_URL ?? "#",
    telegram: process.env.NEXT_PUBLIC_TELEGRAM_URL ?? "#",
};

interface CtaLink {
    label: string;
    href: string;
}

interface Cta {
    primary: CtaLink;
    secondary: CtaLink | null;
}

const DEFAULT_CTA_MODE: CtaMode = process.env.NEXT_PUBLIC_CTA_MODE === "telegram" ? "telegram" : "account";

function toCta(mode: CtaMode): Cta {
    if (mode === "telegram") {
        return { primary: { label: "Связаться с нами в Telegram", href: CTA_LINKS.telegram }, secondary: null };
    }

    return {
        primary: { label: "Создать аккаунт", href: CTA_LINKS.account },
        secondary: { label: "Перейти в каталог", href: CTA_LINKS.catalog },
    };
}

/** Server-only — reads the live platform setting from the main API. Falls back to NEXT_PUBLIC_CTA_MODE (or "account") if the API is unreachable or SETTINGS_API_URL isn't configured. */
async function fetchCtaMode(): Promise<CtaMode> {
    const apiUrl = process.env.SETTINGS_API_URL;    
    
    console.log("apiUrl", apiUrl);
    
    if (!apiUrl) return DEFAULT_CTA_MODE;

    try {
        const res = await fetch(apiUrl, { next: { revalidate: 60 } });
        if (!res.ok) return DEFAULT_CTA_MODE;

        const data = await res.json().catch(() => null);
        // Tolerate either `{ value: "telegram" }` or a bare `"telegram"` string response.
        const value = typeof data === "string" ? data : data?.value;

        return value === "telegram" ? "telegram" : "account";
    } catch {
        return DEFAULT_CTA_MODE;
    }
}

export async function getCta(): Promise<Cta> {
    const mode = await fetchCtaMode();
    return toCta(mode);
}
