import Link from "next/link";
import { RoadmapCard } from "@/components/RoadmapCard";

export default function HomePage() {
  return (
    <div className="relative">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden">
        {/* Ambient Glow Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-blue/8 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-muted text-primary text-sm font-medium mb-8">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
                </svg>
                Multi-Agent AI System — Coming Soon
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold text-text-primary leading-tight tracking-tight animate-fade-in-up-delay-1">
              Your AI
              <span className="text-primary"> Kitchen</span>
              <br />
              Brigade
            </h1>

            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto animate-fade-in-up-delay-2">
              A smart recipe platform where AI agents collaborate to manage your pantry,
              craft personalized recipes, and optimize your nutrition — all from the ingredients you have at hand.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up-delay-3">
              <Link
                href="/pantry"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-background font-semibold text-base hover:bg-primary-hover transition-all duration-200 cursor-pointer shadow-lg shadow-primary/20 hover:shadow-primary/30"
              >
                Open Your Pantry
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/recipes"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border text-text-secondary hover:text-text-primary hover:border-text-muted font-medium text-base transition-all duration-200 cursor-pointer"
              >
                Browse Recipes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Future Roadmap Section ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-raised text-text-muted text-xs font-medium uppercase tracking-wider mb-4">
            Future Vision
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
            The Multi-Agent AI System
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Upcoming versions will feature a collaborative AI Brigade — three specialized agents
            working together to turn your available ingredients into optimized, personalized meals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <RoadmapCard
            color="blue"
            delay={0}
            agentName="Inventory Manager"
            title="Smart Pantry Tracking"
            description="Monitors your available ingredients, tracks expiration dates, suggests what to use first, and alerts you about missing items for recipes."
            icon={
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
              </svg>
            }
          />

          <RoadmapCard
            color="primary"
            delay={1}
            agentName="Chef Agent"
            title="AI Recipe Generation"
            description="Creates personalized recipes based on your available ingredients, dietary preferences, and cooking time constraints using advanced prompt engineering."
            icon={
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
              </svg>
            }
          />

          <RoadmapCard
            color="green"
            delay={2}
            agentName="Nutritionist Agent"
            title="Nutritional Optimization"
            description="Analyzes every recipe for macro and micronutrient content, suggests healthier substitutions, and ensures your meals align with your dietary goals."
            icon={
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            }
          />
        </div>
      </section>

      {/* ── How It Will Work ── */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-border-light bg-surface p-8 md:p-12">
          <h3 className="font-display text-2xl font-bold text-text-primary mb-6">How the AI Brigade Works</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Add Ingredients", desc: "Tell us what you have in your pantry" },
              { step: "02", title: "Set Preferences", desc: "Choose dietary restrictions and cooking time" },
              { step: "03", title: "AI Processes", desc: "Three agents collaborate on your request" },
              { step: "04", title: "Get Results", desc: "Receive recipes, nutrition info, and shopping lists" },
            ].map((item) => (
              <div key={item.step} className="flex flex-col gap-3">
                <span className="text-3xl font-display font-bold text-primary/30">{item.step}</span>
                <h4 className="text-base font-semibold text-text-primary">{item.title}</h4>
                <p className="text-sm text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
