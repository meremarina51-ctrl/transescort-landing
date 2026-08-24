import { FC } from "react";
import { Star } from "lucide-react";
import { REVIEW_ITEMS } from "@/constants";

export const Reviews: FC = () => (
    <section className="border-t border-white/[0.04] py-20 md:py-28">
         <div className="mx-auto max-w-[1100px] px-6 md:px-10">
            <h2 className="mb-12 text-center font-display text-2xl font-extrabold md:text-4xl">Что говорят пользователи</h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {REVIEW_ITEMS.map(({ rating, text, author, date }) => (
                    <div key={author} className="card p-6">
                        <div className="mb-3.5 flex gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                    key={i}
                                    className="h-4 w-4 text-accent"
                                    fill={i < rating ? "currentColor" : "none"}
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
