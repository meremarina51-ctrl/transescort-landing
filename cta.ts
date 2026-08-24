export type CtaMode = "account" | "telegram";

// Переключатель режима CTA для всего лендинга: "account" — две кнопки
// (регистрация + каталог), "telegram" — только кнопка Telegram.
export const CTA_MODE = "account" as CtaMode;

export const CTA_LINKS = {
    account: "#",
    catalog: "#",
    telegram: "#",
};

interface CtaLink {
    label: string;
    href: string;
}

export const PRIMARY_CTA: CtaLink =
    CTA_MODE === "telegram"
        ? { label: "Связаться с нами в Telegram", href: CTA_LINKS.telegram }
        : { label: "Создать аккаунт", href: CTA_LINKS.account };

export const SECONDARY_CTA: CtaLink | null =
    CTA_MODE === "telegram" ? null : { label: "Перейти в каталог", href: CTA_LINKS.catalog };
