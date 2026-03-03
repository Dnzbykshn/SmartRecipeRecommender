interface RecipeCardProps {
    name: string;
    description: string;
    cookTime: string;
    difficulty: string;
    chefSection: {
        ingredients: string[];
        instructions: string[];
    };
    nutritionistSection: {
        calories: number;
        protein: string;
        carbs: string;
        fat: string;
        fiber: string;
    };
    inventoryAlert: string[];
}

export function RecipeCard({
    name,
    description,
    cookTime,
    difficulty,
    chefSection,
    nutritionistSection,
    inventoryAlert,
}: RecipeCardProps) {
    return (
        <div className="rounded-2xl border border-border-light bg-surface overflow-hidden transition-all duration-300 hover:border-border hover:shadow-lg hover:shadow-black/10 group">
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-border-light">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h3 className="text-xl font-display font-bold text-text-primary mb-2">{name}</h3>
                        <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
                    </div>
                </div>
                <div className="flex gap-3 mt-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-text-muted bg-surface-raised px-3 py-1.5 rounded-full">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        {cookTime}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-text-muted bg-surface-raised px-3 py-1.5 rounded-full">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                        </svg>
                        {difficulty}
                    </span>
                </div>
            </div>

            {/* Agent Sections */}
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border-light">
                {/* Chef's Recipe */}
                <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-7 h-7 rounded-lg bg-primary-muted flex items-center justify-center">
                            <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                            </svg>
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Chef&apos;s Recipe</span>
                    </div>
                    <div className="space-y-3">
                        <div>
                            <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">Ingredients</h4>
                            <ul className="space-y-1">
                                {chefSection.ingredients.map((ing, i) => (
                                    <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                                        <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                                        {ing}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">Steps</h4>
                            <ol className="space-y-1.5">
                                {chefSection.instructions.map((step, i) => (
                                    <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                                        <span className="text-primary font-semibold text-xs mt-0.5 shrink-0">{i + 1}.</span>
                                        {step}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>

                {/* Nutritionist's Breakdown */}
                <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-7 h-7 rounded-lg bg-accent-green-muted flex items-center justify-center">
                            <svg className="w-4 h-4 text-accent-green" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-accent-green">Nutritionist&apos;s Breakdown</span>
                    </div>
                    <div className="space-y-3">
                        <div className="text-center py-3 px-4 rounded-xl bg-accent-green-muted">
                            <p className="text-2xl font-display font-bold text-accent-green">{nutritionistSection.calories}</p>
                            <p className="text-xs text-text-muted">kcal / serving</p>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            {[
                                { label: "Protein", value: nutritionistSection.protein },
                                { label: "Carbs", value: nutritionistSection.carbs },
                                { label: "Fat", value: nutritionistSection.fat },
                                { label: "Fiber", value: nutritionistSection.fiber },
                            ].map((macro) => (
                                <div key={macro.label} className="text-center py-2 px-3 rounded-lg bg-surface-raised">
                                    <p className="text-sm font-semibold text-text-primary">{macro.value}</p>
                                    <p className="text-xs text-text-muted">{macro.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Inventory Alert */}
                <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-7 h-7 rounded-lg bg-accent-blue-muted flex items-center justify-center">
                            <svg className="w-4 h-4 text-accent-blue" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                            </svg>
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-accent-blue">Inventory Alert</span>
                    </div>
                    {inventoryAlert.length > 0 ? (
                        <div className="space-y-3">
                            <div className="flex items-start gap-2 p-3 rounded-xl bg-accent-red-muted">
                                <svg className="w-4 h-4 text-accent-red mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                </svg>
                                <div>
                                    <p className="text-sm font-medium text-accent-red">Missing Items</p>
                                    <p className="text-xs text-text-secondary mt-1">You are missing:</p>
                                </div>
                            </div>
                            <ul className="space-y-1.5">
                                {inventoryAlert.map((item, i) => (
                                    <li key={i} className="text-sm text-text-secondary flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent-red shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2 p-3 rounded-xl bg-accent-green-muted">
                            <svg className="w-4 h-4 text-accent-green" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            <p className="text-sm text-accent-green font-medium">All ingredients in stock!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
