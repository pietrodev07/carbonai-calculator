import { SupportLink } from "./_components/support-button";
import { EmissionsCalculator } from "./_components/calculator";

const copy = {
  title: "✨ CarbonAI - Ai Carbon Calculator 🌱",
  subtitle: "Estimate CO2 emissions that you are producing with your AI usage",
};

const TranslatorHeader = () => {
  return (
    <header className="flex flex-col gap-4 text-center">
      <h1 className="title">{copy.title}</h1>
      <p className="subtitle mx-auto">{copy.subtitle}</p>
    </header>
  );
};

export default function HomePage() {
  return (
    <main className="min-h-screen py-12 px-6">
      <section className="max-w-2xl mx-auto flex flex-col gap-12">
        <TranslatorHeader />
        <EmissionsCalculator />
        <SupportLink />
      </section>
    </main>
  );
}
