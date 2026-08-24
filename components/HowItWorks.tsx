import { FC } from "react";
import { STEP_ITEMS } from "@/constants";

export const HowItWorks: FC = () => (
    <section className="border-t border-white/[0.04] py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <h2 className="mb-12 text-center font-display text-2xl font-extrabold md:text-4xl">
                Как это работает
            </h2>
            <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
                {STEP_ITEMS.map(({ number, title, text }) => (
                     <div key={number} className="card group p-6">
                        <p className="font-display text-3xl font-extrabold text-white/[0.14]">{number}</p>
                        <h3 className="mt-3 font-display text-base font-bold group-hover:text-accent transition-colors">
                            {title}
                        </h3>
                        <p className="mt-2 font-body text-sm leading-relaxed text-white/40">{text}</p>
                     </div>
                ))}
            </div>
        </div>
    </section>
);
