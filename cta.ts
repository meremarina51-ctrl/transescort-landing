import { cache } from "react";
import type { Dictionary } from "@/i18n/dictionaries";

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
    mode: CtaMode;
    primary: CtaLink;
    secondary: CtaLink | null;
}

const DEFAULT_CTA_MODE: CtaMode = process.env.NEXT_PUBLIC_CTA_MODE === "telegram" ? "telegram" : "account";

function toCta(mode: CtaMode, labels: Dictionary["cta"]): Cta {
    if (mode === "telegram") {
        return { mode, primary: { label: labels.contact, href: CTA_LINKS.telegram }, secondary: null };
    }

    return {
        mode,
        primary: { label: labels.createAccount, href: CTA_LINKS.account },
        secondary: { label: labels.openCatalog, href: CTA_LINKS.catalog },
    };
}

/** Server-only — reads the live platform setting from the main API. Falls back to NEXT_PUBLIC_CTA_MODE (or "account") if the API is unreachable or SETTINGS_API_URL isn't configured. */
async function fetchCtaMode(): Promise<CtaMode> {
    const apiUrl = process.env.SETTINGS_API_URL;    
    
    if (!apiUrl) return DEFAULT_CTA_MODE;

    try {
        const res = await fetch(apiUrl, { cache: "no-store" });
        if (!res.ok) return DEFAULT_CTA_MODE;

        const raw = (await res.text()).trim();

        // The API may reply with a JSON object (`{ "value": "telegram" }`),
        // a JSON string (`"telegram"`), or plain text (`telegram`) — handle all three.
        let value: unknown = raw;
        try {
            const parsed = JSON.parse(raw);
            value = typeof parsed === "string" ? parsed : parsed?.value;
        } catch {
            // Not JSON — the raw text itself is the mode value.
        }

        return value === "telegram" ? "telegram" : "account";
    } catch {
        return DEFAULT_CTA_MODE;
    }
}

const getCtaMode = cache(fetchCtaMode);

export async function getCta(labels: Dictionary["cta"]): Promise<Cta> {
    const mode = await getCtaMode();
    return toCta(mode, labels);
}
