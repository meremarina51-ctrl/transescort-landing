import { FC } from "react";
import { TRUST_ITEMS } from "@/constants";

export const TrustBlock: FC = () => (
    <section className="border-t border-white/[0.04] py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <h2 className="mb-12 text-center font-display text-2xl font-extrabold md:text-4xl">
                Комфорт и приватность
            </h2>
            <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
                {TRUST_ITEMS.map(({ Icon, title, text }) => (
                    <div key={title} className="card group p-6">
                        <Icon className="mb-4 h-9 w-9 text-accent" strokeWidth={1.4} />
                        <h3 className="font-display text-base font-bold group-hover:text-accent transition-colors">
                            {title}
                        </h3>
                        <p className="mt-2 font-body text-sm leading-relaxed text-white/40">{text}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
