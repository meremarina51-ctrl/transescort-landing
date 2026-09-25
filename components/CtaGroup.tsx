import { getCta } from "@/cta";
import { TrackedCtaLink } from "./TrackedCtaLink";

interface IProps {
    placement: string;
}

export const CtaGroup = async ({ placement }: IProps) => {
    const { mode, primary, secondary } = await getCta();

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
