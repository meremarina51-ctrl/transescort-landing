import { About } from "@/components/About";
import { Benefits } from "@/components/Benefits";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Reviews } from "@/components/Reviews";
import { Specialists } from "@/components/Specialists";
import { TrustBlock } from "@/components/TrustBlock";
import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default async function Home({ params, searchParams }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dictionary = await getDictionary(lang);
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(await searchParams)) {
    if (value === undefined) continue;
    for (const entry of Array.isArray(value) ? value : [value]) {
      query.append(key, entry);
    }
  }

  return (
    <div className="bg-[#0a0a0a] text-white">
      <Header locale={lang} common={dictionary.common} cta={dictionary.cta} query={query.toString()} />
      <div className="z-10">
        <Hero content={dictionary.hero} cta={dictionary.cta} />
        <Benefits content={dictionary.benefits} />
        <About content={dictionary.about} />
        <Specialists content={dictionary.specialists} cta={dictionary.cta} />
        <HowItWorks content={dictionary.howItWorks} />
        <TrustBlock content={dictionary.trust} />
        <Reviews content={dictionary.reviews} />
        <FinalCta content={dictionary.finalCta} cta={dictionary.cta} />
        <Footer content={dictionary.footer} />
      </div>
    </div>
  );
};
