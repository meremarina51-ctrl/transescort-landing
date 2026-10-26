import type { Dictionary } from "@/i18n/dictionaries";
import { CtaGroup } from "./CtaGroup";

interface Props {
    content: Dictionary["finalCta"];
    cta: Dictionary["cta"];
}

export const FinalCta = ({ content, cta }: Props) => (
    <section className="border-t border-white/[0.04] py-20 md:py-28">
        <div className="mx-auto max-w-[700px] px-6 text-center md:px-10">
            <h2 className="font-display text-2xl font-extrabold md:text-4xl">{content.title}</h2>
            <p className="mx-auto mt-4 font-body leading-relaxed text-white/40">
                {content.text}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
                <CtaGroup placement="final_cta" labels={cta} />
            </div>
        </div>
    </section>
);
