import { FC } from "react";
import Logo from "./Logo";
import { PRIMARY_CTA } from "@/cta";

export const Header: FC = () => (
    <header className="sticky z-20 top-0 border-b border-white/[0.06] bg-[#0a0a0a]/90 backdrop-blur-xl">
        <div className="max-w-[1400px] mx-auto h-16 w-full flex items-center px-6 md:px-10 justify-between">
            <Logo />

            <a href={PRIMARY_CTA.href} target="_blank" rel="noopener noreferrer" className="btn-primary !px-6 !py-2.5">
                {PRIMARY_CTA.label}
            </a>
        </div>
    </header>
);
