"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IngredientCard } from "@/components/IngredientCard";
import { Tag } from "@/components/Tag";

/* ── Mock Ingredient Data ── */
const MOCK_INGREDIENTS = [
    { name: "Chicken", icon: <span className="text-2xl">🍗</span> },
    { name: "Tomato", icon: <span className="text-2xl">🍅</span> },
    { name: "Garlic", icon: <span className="text-2xl">🧄</span> },
    { name: "Onion", icon: <span className="text-2xl">🧅</span> },
    { name: "Rice", icon: <span className="text-2xl">🍚</span> },
    { name: "Pasta", icon: <span className="text-2xl">🍝</span> },
    { name: "Salmon", icon: <span className="text-2xl">🐟</span> },
    { name: "Eggs", icon: <span className="text-2xl">🥚</span> },
    { name: "Broccoli", icon: <span className="text-2xl">🥦</span> },
    { name: "Cheese", icon: <span className="text-2xl">🧀</span> },
    { name: "Bell Pepper", icon: <span className="text-2xl">🫑</span> },
    { name: "Mushroom", icon: <span className="text-2xl">🍄</span> },
    { name: "Potato", icon: <span className="text-2xl">🥔</span> },
    { name: "Carrot", icon: <span className="text-2xl">🥕</span> },
    { name: "Lemon", icon: <span className="text-2xl">🍋</span> },
    { name: "Spinach", icon: <span className="text-2xl">🥬</span> },
];

const DIETARY_OPTIONS = [
    "None",
    "Vegan",
    "Vegetarian",
    "Keto",
    "Gluten-Free",
    "Paleo",
    "Dairy-Free",
    "Low-Carb",
];

const COOK_TIME_OPTIONS = [
    "15 minutes",
    "30 minutes",
    "45 minutes",
    "60 minutes",
    "90+ minutes",
];

export default function PantryPage() {
    const router = useRouter();
    const [selected, setSelected] = useState<string[]>([]);
    const [customInput, setCustomInput] = useState("");
    const [customIngredients, setCustomIngredients] = useState<string[]>([]);
    const [diet, setDiet] = useState("None");
    const [cookTime, setCookTime] = useState("30 minutes");

    const allSelected = [...selected, ...customIngredients];

    function toggleIngredient(name: string) {
        setSelected((prev) =>
            prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
        );
    }

    function addCustom() {
        const trimmed = customInput.trim();
        if (trimmed && !allSelected.includes(trimmed)) {
            setCustomIngredients((prev) => [...prev, trimmed]);
            setCustomInput("");
        }
    }

    function removeIngredient(name: string) {
        setSelected((prev) => prev.filter((n) => n !== name));
        setCustomIngredients((prev) => prev.filter((n) => n !== name));
    }

    function handleKeyDown(e: React.KeyboardEvent) {
        if (e.key === "Enter") {
            e.preventDefault();
            addCustom();
        }
    }

    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
            {/* Header */}
            <div className="mb-12 animate-fade-in-up">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-raised text-text-muted text-xs font-medium uppercase tracking-wider mb-4">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                    </svg>
                    Data Layer for AI
                </span>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-3">
                    Your Pantry
                </h1>
                <p className="text-text-secondary text-lg max-w-2xl">
                    Select the ingredients you have on hand. This data will feed the AI Kitchen Brigade
                    agents in future versions to generate personalized recipes.
                </p>
            </div>

            {/* ── Ingredient Grid ── */}
            <section className="mb-12">
                <h2 className="font-display text-xl font-semibold text-text-primary mb-6 flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" />
                    </svg>
                    Choose Ingredients
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
                    {MOCK_INGREDIENTS.map((ing) => (
                        <IngredientCard
                            key={ing.name}
                            name={ing.name}
                            icon={ing.icon}
                            selected={selected.includes(ing.name)}
                            onToggle={() => toggleIngredient(ing.name)}
                        />
                    ))}
                </div>
            </section>

            {/* ── Custom Ingredient Input ── */}
            <section className="mb-12">
                <h2 className="font-display text-xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Add Custom Ingredient
                </h2>
                <div className="flex gap-3 max-w-md">
                    <input
                        type="text"
                        value={customInput}
                        onChange={(e) => setCustomInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="e.g. Avocado, Tofu..."
                        className="flex-1 px-4 py-3 rounded-xl bg-surface border border-border-light text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200"
                    />
                    <button
                        onClick={addCustom}
                        disabled={!customInput.trim()}
                        className="px-6 py-3 rounded-xl bg-surface-raised border border-border-light text-text-secondary hover:text-text-primary hover:border-border font-medium text-sm transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                        Add
                    </button>
                </div>
            </section>

            {/* ── Selected Ingredients Tags ── */}
            {allSelected.length > 0 && (
                <section className="mb-12">
                    <h2 className="font-display text-xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        Selected ({allSelected.length})
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {allSelected.map((name) => (
                            <Tag key={name} label={name} onRemove={() => removeIngredient(name)} />
                        ))}
                    </div>
                </section>
            )}

            {/* ── Preferences Form ── */}
            <section className="mb-12">
                <h2 className="font-display text-xl font-semibold text-text-primary mb-6 flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    Preferences
                </h2>
                <p className="text-sm text-text-muted mb-6">
                    These preferences will be used as parameters for the AI prompt engineering pipeline in future versions.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 max-w-xl">
                    {/* Dietary Restriction */}
                    <div>
                        <label htmlFor="diet" className="block text-sm font-medium text-text-secondary mb-2">
                            Dietary Restriction
                        </label>
                        <select
                            id="diet"
                            value={diet}
                            onChange={(e) => setDiet(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-surface border border-border-light text-text-primary text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200 cursor-pointer appearance-none"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='2' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' /%3E%3C/svg%3E")`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "right 12px center",
                                backgroundSize: "16px",
                            }}
                        >
                            {DIETARY_OPTIONS.map((opt) => (
                                <option key={opt} value={opt}>
                                    {opt}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Max Cooking Time */}
                    <div>
                        <label htmlFor="cooktime" className="block text-sm font-medium text-text-secondary mb-2">
                            Max Cooking Time
                        </label>
                        <select
                            id="cooktime"
                            value={cookTime}
                            onChange={(e) => setCookTime(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-surface border border-border-light text-text-primary text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200 cursor-pointer appearance-none"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='2' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' /%3E%3C/svg%3E")`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "right 12px center",
                                backgroundSize: "16px",
                            }}
                        >
                            {COOK_TIME_OPTIONS.map((opt) => (
                                <option key={opt} value={opt}>
                                    {opt}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </section>

            {/* ── Find Recipes Button ── */}
            <section>
                <button
                    onClick={() => router.push("/recipes")}
                    className="inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-primary text-background font-semibold text-base hover:bg-primary-hover transition-all duration-200 cursor-pointer shadow-lg shadow-primary/20 hover:shadow-primary/30"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    Find Recipes
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </button>
                <p className="text-xs text-text-muted mt-3">
                    In future versions, your selections ({allSelected.length} ingredients, {diet} diet, {cookTime}) will be sent to the AI Brigade.
                </p>
            </section>
        </div>
    );
}
