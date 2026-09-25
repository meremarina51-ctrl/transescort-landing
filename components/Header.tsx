import Logo from "./Logo";
import { getCta } from "@/cta";
import { TrackedCtaLink } from "./TrackedCtaLink";

export const Header = async () => {
    const { mode, primary } = await getCta();

    return (
        <header className="sticky z-20 top-0 border-b border-white/[0.06] bg-[#0a0a0a]/90 backdrop-blur-xl">
            <div className="max-w-[1400px] mx-auto h-16 w-full flex items-center px-6 md:px-10 justify-between">
                <Logo />

                <TrackedCtaLink
                    href={primary.href}
                    label={primary.label}
                    className="btn-primary !px-6 !py-2.5"
                    goal={`cta_primary_click_${mode}`}
                    params={{ placement: "header" }}
                />
            </div>
        </header>
    );
};
