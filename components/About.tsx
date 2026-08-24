import { FC } from "react";

export const About: FC = () => (
    <section className="border-t border-white/[0.04] py-20 md:py-28">
        <div className="mx-auto px-6 max-w-[700px] text-center md:px-10">
            <h2 className="font-display text-2xl font-extrabold md:text-4xl">Удобный способ познакомиться со специалистами</h2>
            <p className="mx-auto mt-4 font-body leading-relaxed text-white/40">
                На платформе собраны профили уникальных массажных специалистов с фотографиями, описанием и основной информацией. Можно познакомиться с представленными профилями и выбрать наиболее подходящий вариант.
            </p>
        </div>
    </section>
);
