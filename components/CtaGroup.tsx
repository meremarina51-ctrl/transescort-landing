import { FC } from "react";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/cta";

export const CtaGroup: FC = () => (
    <>
        <a href={PRIMARY_CTA.href} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
            {PRIMARY_CTA.label}
        </a>
        {SECONDARY_CTA && (
            <a href={SECONDARY_CTA.href} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full sm:w-auto">
                {SECONDARY_CTA.label}
            </a>
        )}
    </>
);
