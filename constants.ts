import { CheckCircle2, Gem, LayoutList, Lock, MessageCircle, ShieldCheck } from "lucide-react";

const BENEFIT_ITEMS = [
    {
        Icon: Gem,
        title: 'Уникальные специалисты',
        text: 'Профили с разными образами, индивидуальностью и подходом.',
    },
    {
        Icon: ShieldCheck,
        title: 'Проверенные профили',
        text: 'Информация проходит модерацию перед размещением на платформе.',
    },
    {
        Icon: MessageCircle,
        title: 'Прямая связь',
        text: 'После выбора специалиста можно перейти к дальнейшему общению удобным способом.',
    },
];

const SPECIALIST_ITEMS = [
    {
        name: 'Алина',
        meta: '24 года · Москва, Центр',
        photoStyle: `
            radial-gradient(70% 55% at 30% 0%, rgba(255,255,255,0.06), transparent 60%),
            radial-gradient(80% 70% at 70% 100%, rgba(108,92,231,0.3), transparent 70%),
            linear-gradient(170deg, #1a1a1a, #0a0a0a)
        `,
    },
    {
        name: 'Виктория',
        meta: '27 лет · Москва, Юг',
        photoStyle: `
            radial-gradient(70% 55% at 70% 0%, rgba(255,255,255,0.05), transparent 60%),
            radial-gradient(80% 70% at 25% 100%, #4834B0, transparent 70%),
            linear-gradient(170deg, #1c1c1f, #0a0a0a)
        `,
    },
    {
        name: 'Мария',
        meta: '23 года · Санкт-Петербург',
        photoStyle: `
            radial-gradient(70% 55% at 35% 5%, rgba(255,255,255,0.06), transparent 60%),
            radial-gradient(80% 70% at 75% 100%, rgba(108,92,231,0.4), transparent 70%),
            linear-gradient(170deg, #1a1a1a, #0a0a0a)
        `,
    },
    {
        name: 'Дарья',
        meta: '25 лет · Москва, Запад',
        photoStyle: `
            radial-gradient(70% 55% at 65% 0%, rgba(255,255,255,0.05), transparent 60%),
            radial-gradient(80% 70% at 30% 100%, #A29BFE, transparent 65%),
            linear-gradient(170deg, #1c1c1f, #0a0a0a)
        `,
    },
];

const STEP_ITEMS = [
    {
        number: '01',
        title: 'Знакомитесь с профилями',
        text: 'Просматриваете информацию о представленных специалистах.',
    },
    {
        number: '02',
        title: 'Выбираете подходящего специалиста',
        text: 'Сравниваете фотографии, описание и особенности профилей.',
    },
    {
        number: '03',
        title: 'Переходите к дальнейшему общению',
        text: 'После выбора переходите к общению удобным способом.',
    },
];

const TRUST_ITEMS = [
    {
        Icon: CheckCircle2,
        title: 'Модерация',
        text: 'Профили проходят проверку перед публикацией.',
    },
    {
        Icon: Lock,
        title: 'Приватность',
        text: 'Пользователь самостоятельно решает, какой информацией делиться при дальнейшем общении.',
    },
    {
        Icon: LayoutList,
        title: 'Удобный формат',
        text: 'Основная информация о специалисте собрана в понятном и удобном формате.',
    },
];

const REVIEW_ITEMS = [
    {
        rating: 5,
        text: 'Удобно, что основная информация собрана в одном месте.',
        author: 'Игорь',
        date: '12 июля 2026',
    },
    {
        rating: 5,
        text: 'Понравилось оформление профилей — легко понять, кто тебе подходит.',
        author: 'Дмитрий',
        date: '3 июля 2026',
    },
    {
        rating: 4,
        text: 'Простой и понятный формат, без лишней информации.',
        author: 'Сергей',
        date: '26 июня 2026',
    },
];

export { BENEFIT_ITEMS, REVIEW_ITEMS, SPECIALIST_ITEMS, STEP_ITEMS, TRUST_ITEMS };
