import type { Dictionary } from "@/i18n/dictionaries";
import { Star } from "lucide-react";
import { REVIEW_ITEMS } from "@/constants";

export const Reviews = ({ content }: { content: Dictionary["reviews"] }) => (
    <section className="border-t border-white/[0.04] py-20 md:py-28">
         <div className="mx-auto max-w-[1100px] px-6 md:px-10">
            <h2 className="mb-12 text-center font-display text-2xl font-extrabold md:text-4xl">{content.title}</h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {content.items.map(({ text, author, date }, index) => (
                    <div key={author} className="card p-6">
                        <div className="mb-3.5 flex gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                    key={i}
                                    className="h-4 w-4 text-accent"
                                    fill={i < REVIEW_ITEMS[index].rating ? "currentColor" : "none"}
                                />
                            ))}
                        </div>
                        <p className="font-body text-sm leading-relaxed text-white/65">{text}</p>
                        <p className="mt-4 font-body text-xs text-white/30">
                            {author} · {date}
                        </p>
                    </div>
                ))}
            </div>
         </div>
    </section>
);
