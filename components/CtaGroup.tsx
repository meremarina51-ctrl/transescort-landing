import { getCta } from "@/cta";
import type { Dictionary } from "@/i18n/dictionaries";
import { TrackedCtaLink } from "./TrackedCtaLink";

interface IProps {
    placement: string;
    labels: Dictionary["cta"];
}

export const CtaGroup = async ({ placement, labels }: IProps) => {
    const { mode, primary, secondary } = await getCta(labels);

    return (
        <>
            <TrackedCtaLink
                href={primary.href}
                label={primary.label}
                className="btn-primary w-full sm:w-auto"
                goal={`cta_primary_click_${mode}`}
                params={{ placement }}
            />
            {secondary && (
                <TrackedCtaLink
                    href={secondary.href}
                    label={secondary.label}
                    className="btn-secondary w-full sm:w-auto"
                    goal={`cta_secondary_click_${mode}`}
                    params={{ placement }}
                />
            )}
        </>
    );
};
