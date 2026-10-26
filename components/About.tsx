import type { Dictionary } from "@/i18n/dictionaries";

export const About = ({ content }: { content: Dictionary["about"] }) => (
    <section className="border-t border-white/[0.04] py-20 md:py-28">
        <div className="mx-auto px-6 max-w-[700px] text-center md:px-10">
            <h2 className="font-display text-2xl font-extrabold md:text-4xl">{content.title}</h2>
            <p className="mx-auto mt-4 font-body leading-relaxed text-white/40">
                {content.text}
            </p>
        </div>
    </section>
);
