import type { Dictionary } from "@/i18n/dictionaries";

export const Footer = ({ content }: { content: Dictionary["footer"] }) => (
    <footer className="border-t border-white/[0.06] py-10">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-6 px-6 md:px-10">
            <p className="font-body text-xs text-white/20">&copy; 2026</p>
            <div className="flex flex-wrap items-center justify-center gap-6">
                <a href="#" className="font-body text-xs text-white/25 transition-colors hover:text-accent">
                    {content.privacy}
                </a>
                <a href="#" className="font-body text-xs text-white/25 transition-colors hover:text-accent">
                    {content.terms}
                </a>
            </div>
        </div>
    </footer>
);
