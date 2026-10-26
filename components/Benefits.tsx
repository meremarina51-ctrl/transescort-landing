import type { Dictionary } from "@/i18n/dictionaries";
import { BENEFIT_ITEMS } from "@/constants";

export const Benefits = ({ content }: { content: Dictionary["benefits"] }) => (
    <section className="border-t border-white/[0.04] py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
                {content.map(({ title, text }, index) => {
                    const { Icon } = BENEFIT_ITEMS[index];
                    return (
                        <div key={title} className="card group p-6">
                            <Icon className="mb-4 h-9 w-9 text-accent" strokeWidth={1.4} />
                            <h3 className="font-display text-base font-bold group-hover:text-accent transition-colors">
                                {title}
                            </h3>
                            <p className="mt-2 font-body text-sm leading-relaxed text-white/40">{text}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
);
