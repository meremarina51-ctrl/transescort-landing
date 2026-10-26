import type { Dictionary } from "./ru";

const en: Dictionary = {
    meta: {
        title: "Massage Specialists Catalog",
        description: "A catalog of unique massage specialists: verified profiles, privacy and an easy way to choose the right specialist.",
    },
    common: {
        logoLabel: "Logo",
        languageLabel: "Language",
    },
    cta: {
        contact: "Contact us",
        createAccount: "Create an account",
        openCatalog: "Go to catalog",
    },
    hero: {
        imageAlt: "Specialists in an interior overlooking the city at night",
        titleBefore: "A catalog of ",
        titleAccent: "unique",
        titleAfter: " massage specialists",
        text: "Meet the specialists, explore their profiles and choose the one that suits you best.",
        tags: ["Verified profiles", "Individuality", "Privacy"],
    },
    benefits: [
        {
            title: "Unique specialists",
            text: "Profiles with different looks, personalities and approaches.",
        },
        {
            title: "Verified profiles",
            text: "All information is moderated before it appears on the platform.",
        },
        {
            title: "Direct contact",
            text: "Once you've chosen a specialist, you can continue the conversation in whatever way suits you.",
        },
    ],
    about: {
        title: "An easy way to get to know the specialists",
        text: "The platform brings together profiles of unique massage specialists with photos, descriptions and key details. Browse the profiles and choose the option that suits you best.",
    },
    specialists: {
        title: "Specialists",
        text: "Some of the specialists featured in the catalog.",
        items: [
            { name: "Alina", meta: "24 · Moscow, Center" },
            { name: "Victoria", meta: "27 · Moscow, South" },
            { name: "Maria", meta: "23 · Saint Petersburg" },
            { name: "Daria", meta: "25 · Moscow, West" },
        ],
    },
    howItWorks: {
        title: "How it works",
        steps: [
            {
                title: "Browse the profiles",
                text: "Look through the information about the featured specialists.",
            },
            {
                title: "Choose the right specialist",
                text: "Compare photos, descriptions and profile details.",
            },
            {
                title: "Get in touch",
                text: "Once you've made your choice, continue the conversation in whatever way suits you.",
            },
        ],
    },
    trust: {
        title: "Comfort and privacy",
        items: [
            {
                title: "Moderation",
                text: "Profiles are reviewed before they are published.",
            },
            {
                title: "Privacy",
                text: "You decide what information to share as the conversation goes on.",
            },
            {
                title: "Convenient format",
                text: "Key information about each specialist is presented in a clear, convenient format.",
            },
        ],
    },
    reviews: {
        title: "What users say",
        items: [
            {
                text: "Convenient that all the key information is in one place.",
                author: "Igor",
                date: "July 12, 2026",
            },
            {
                text: "I liked how the profiles are presented — it's easy to see who's right for you.",
                author: "Dmitry",
                date: "July 3, 2026",
            },
            {
                text: "A simple, clear format with no unnecessary information.",
                author: "Sergey",
                date: "June 26, 2026",
            },
        ],
    },
    finalCta: {
        title: "Find the right specialist",
        text: "Meet unique specialists and choose the one that suits you best.",
    },
    footer: {
        privacy: "Privacy policy",
        terms: "Terms of use",
    },
};

export default en;
