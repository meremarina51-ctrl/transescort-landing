import type { Dictionary } from "@/i18n/dictionaries";
import Image from "next/image";
import { SPECIALIST_ITEMS } from "@/constants";
import { CtaGroup } from "./CtaGroup";

interface Props {
    content: Dictionary["specialists"];
    cta: Dictionary["cta"];
}

export const Specialists = ({ content, cta }: Props) => (
    <section className="border-t border-white/[0.04] py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="mx-auto mb-12 max-w-[560px] text-center">
                <h2 className="font-display text-2xl font-extrabold md:text-4xl">{content.title}</h2>
                <p className="mt-4 font-body leading-relaxed text-white/40">
                    {content.text}
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {content.items.map(({ name, meta }, index) => (
                    <div key={name} className="card overflow-hidden">
                        <Image 
                            className="aspect-[3/4] w-full object-cover"
                            alt={name}
                            src={SPECIALIST_ITEMS[index].photoUrl}
                            width={325}
                            height={410}
                        />
                        <div className="p-4">
                            <h3 className="font-display text-[15px] font-bold">{name}</h3>
                            <p className="mt-1.5 font-body text-xs text-white/40">{meta}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
                <CtaGroup placement="specialists" labels={cta} />
            </div>
        </div>
    </section>
)
