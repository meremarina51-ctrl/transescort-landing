import { getCta } from "@/cta";

export const CtaGroup = async () => {
    const { primary, secondary } = await getCta();

    return (
        <>
            <a href={primary.href} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
                {primary.label}
            </a>
            {secondary && (
                <a href={secondary.href} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full sm:w-auto">
                    {secondary.label}
                </a>
            )}
        </>
    );
};
