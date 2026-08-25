import Logo from "./Logo";
import { getCta } from "@/cta";

export const Header = async () => {
    const { primary } = await getCta();

    return (
        <header className="sticky z-20 top-0 border-b border-white/[0.06] bg-[#0a0a0a]/90 backdrop-blur-xl">
            <div className="max-w-[1400px] mx-auto h-16 w-full flex items-center px-6 md:px-10 justify-between">
                <Logo />

                <a href={primary.href} target="_blank" rel="noopener noreferrer" className="btn-primary !px-6 !py-2.5">
                    {primary.label}
                </a>
            </div>
        </header>
    );
};
