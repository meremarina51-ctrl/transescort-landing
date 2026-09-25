"use client";

import { reachGoal } from "@/metrika";

interface IProps {
    href: string;
    label: string;
    className: string;
    goal: string;
    params?: Record<string, unknown>;
}

export const TrackedCtaLink = ({ href, label, className, goal, params }: IProps) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={() => reachGoal(goal, params)}
    >
        {label}
    </a>
);
