import { FC } from "react";
import Image from "next/image";
import { SPECIALIST_ITEMS } from "@/constants";
import { CtaGroup } from "./CtaGroup";

export const Specialists: FC = () => (
    <section className="border-t border-white/[0.04] py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="mx-auto mb-12 max-w-[560px] text-center">
                <h2 className="font-display text-2xl font-extrabold md:text-4xl">Специалисты</h2>
                <p className="mt-4 font-body leading-relaxed text-white/40">
                    Некоторые специалисты, представленные в каталоге.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {SPECIALIST_ITEMS.map(({ name, meta, photoUrl }) => (
                    <div key={name} className="card overflow-hidden">
                        <Image 
                            className="aspect-[3/4] w-full object-cover"
                            alt={name}
                            src={photoUrl}
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
                <CtaGroup />
            </div>
        </div>
    </section>
)
