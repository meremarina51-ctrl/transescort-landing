import { CheckCircle2, Gem, LayoutList, Lock, MessageCircle, ShieldCheck } from "lucide-react";

// Presentation data follows the same item order as the locale dictionaries.
export const BENEFIT_ITEMS = [
    { Icon: Gem },
    { Icon: ShieldCheck },
    { Icon: MessageCircle },
];

export const SPECIALIST_ITEMS = [
    { photoUrl: "/catalog/alina.png" },
    { photoUrl: "/catalog/victoria.png" },
    { photoUrl: "/catalog/maria.png" },
    { photoUrl: "/catalog/daria.png" },
];

export const TRUST_ITEMS = [
    { Icon: CheckCircle2 },
    { Icon: Lock },
    { Icon: LayoutList },
];

export const REVIEW_ITEMS = [
    { rating: 5 },
    { rating: 5 },
    { rating: 4 },
];
