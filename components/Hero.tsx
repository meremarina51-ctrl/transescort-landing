import type { Dictionary } from "@/i18n/dictionaries";
import Image from "next/image";
import { CtaGroup } from "./CtaGroup";

interface Props {
    content: Dictionary["hero"];
    cta: Dictionary["cta"];
}

export const Hero = ({ content, cta }: Props) => (
    <section className="relative py-10 md:py-16 lg:py-24">
        <div className="relative mx-auto flex min-h-[560px] max-w-[1400px] flex-col justify-end overflow-hidden rounded-[28px] border border-white/[0.06] px-6 py-8 sm:min-h-[620px] md:justify-center md:px-10 md:py-16 lg:min-h-[680px] lg:px-16">
            <Image
                src="/hero.png"
                alt={content.imageAlt}
                fill
                priority
                sizes="(min-width: 1400px) 1400px, 100vw"
                className="object-cover object-left scale-125 origin-left md:scale-100 md:object-[68%_center]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/55 to-transparent md:bg-gradient-to-r md:from-[#0a0a0a] md:via-[#0a0a0a]/78 md:to-transparent" />
            <div
                className="pointer-events-none absolute inset-0 hidden md:block"
                style={{ background: 'radial-gradient(55% 60% at 12% 25%, rgba(108,92,231,0.25), transparent 70%)' }}
            />

            <div className="relative z-10 max-w-[520px] rounded-2xl bg-black/30 p-5 backdrop-blur-sm md:rounded-none md:bg-transparent md:p-0 md:backdrop-blur-none">
                <h1 className="font-display text-3xl font-extrabold leading-tight md:text-5xl">
                    {content.titleBefore}<span className="text-accent">{content.titleAccent}</span>{content.titleAfter}
                </h1>
                <p className="mt-5 max-w-[460px] font-body text-base text-[#C9CDD3] md:text-lg">
                    {content.text}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-2 font-body text-[13px] text-white/50">
                    {content.tags.map((tag, index) => (
                        <span key={tag} className="inline-flex items-center gap-2">
                            {index > 0 && <span aria-hidden="true" className="text-white/20">&bull;</span>}
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                    <CtaGroup placement="hero" labels={cta} />
                </div>
            </div>
        </div>
    </section>
);
