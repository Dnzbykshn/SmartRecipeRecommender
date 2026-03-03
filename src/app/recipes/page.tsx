import { RecipeCard } from "@/components/RecipeCard";

/* ── Static Recipe Data (Hardcoded for Part 1) ── */
const STATIC_RECIPES = [
    {
        name: "Garlic Butter Chicken with Rice",
        description:
            "A rich and savory pan-seared chicken breast glazed with garlic butter, served over fluffy steamed rice with a side of roasted vegetables.",
        cookTime: "35 min",
        difficulty: "Medium",
        chefSection: {
            ingredients: [
                "2 chicken breasts",
                "4 cloves garlic, minced",
                "3 tbsp butter",
                "1 cup jasmine rice",
                "1 tbsp olive oil",
                "Salt & pepper to taste",
                "Fresh parsley for garnish",
            ],
            instructions: [
                "Season chicken breasts with salt and pepper on both sides.",
                "Heat olive oil in a skillet over medium-high heat. Sear chicken 6-7 min per side.",
                "Add butter and minced garlic to the pan, baste chicken for 2 minutes.",
                "Cook rice according to package directions.",
                "Slice chicken and serve over rice. Drizzle with pan juices and garnish with parsley.",
            ],
        },
        nutritionistSection: {
            calories: 520,
            protein: "42g",
            carbs: "48g",
            fat: "16g",
            fiber: "2g",
        },
        inventoryAlert: ["Olive Oil", "Fresh Parsley"],
    },
    {
        name: "Mediterranean Veggie Pasta",
        description:
            "A vibrant pasta dish loaded with bell peppers, tomatoes, mushrooms, and spinach tossed in a light lemon-herb dressing.",
        cookTime: "25 min",
        difficulty: "Easy",
        chefSection: {
            ingredients: [
                "300g penne pasta",
                "1 bell pepper, sliced",
                "2 tomatoes, diced",
                "150g mushrooms, sliced",
                "2 cups spinach",
                "2 tbsp lemon juice",
                "3 tbsp olive oil",
                "Italian seasoning",
            ],
            instructions: [
                "Cook penne pasta according to package instructions. Reserve 1/2 cup pasta water.",
                "In a large pan, heat olive oil and sauté bell pepper and mushrooms for 4 minutes.",
                "Add diced tomatoes and cook for 2 more minutes.",
                "Toss in spinach and stir until wilted.",
                "Add drained pasta, lemon juice, Italian seasoning, and pasta water. Toss to combine.",
            ],
        },
        nutritionistSection: {
            calories: 410,
            protein: "14g",
            carbs: "62g",
            fat: "12g",
            fiber: "6g",
        },
        inventoryAlert: [],
    },
    {
        name: "Teriyaki Salmon Bowl",
        description:
            "Perfectly glazed teriyaki salmon fillet over a bed of seasoned rice with steamed broccoli and pickled carrots.",
        cookTime: "30 min",
        difficulty: "Medium",
        chefSection: {
            ingredients: [
                "2 salmon fillets",
                "3 tbsp soy sauce",
                "2 tbsp honey",
                "1 tbsp rice vinegar",
                "1 cup short-grain rice",
                "2 cups broccoli florets",
                "1 carrot, julienned",
                "Sesame seeds for garnish",
            ],
            instructions: [
                "Mix soy sauce, honey, and rice vinegar to make teriyaki glaze.",
                "Cook rice according to package directions.",
                "Steam broccoli florets for 4 minutes until tender-crisp.",
                "Pan-sear salmon skin-side down for 4 min, flip, and brush with teriyaki glaze. Cook 3 more min.",
                "Assemble bowls: rice, broccoli, salmon on top. Drizzle remaining glaze and sprinkle sesame seeds.",
            ],
        },
        nutritionistSection: {
            calories: 580,
            protein: "38g",
            carbs: "56g",
            fat: "20g",
            fiber: "4g",
        },
        inventoryAlert: ["Soy Sauce", "Honey", "Rice Vinegar"],
    },
];

export default function RecipesPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
            {/* ── Disclaimer Banner ── */}
            <div className="mb-10 p-4 rounded-2xl border border-primary/30 bg-primary-muted flex items-start gap-3 animate-fade-in-up">
                <svg
                    className="w-6 h-6 text-primary shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                    />
                </svg>
                <div>
                    <p className="text-sm font-semibold text-primary">Draft Version</p>
                    <p className="text-sm text-text-secondary mt-0.5">
                        Data displayed is static and hardcoded. Multi-Agent AI integration (Chef, Nutritionist,
                        and Inventory Manager agents) will be implemented in future assignments.
                    </p>
                </div>
            </div>

            {/* Header */}
            <div className="mb-12 animate-fade-in-up-delay-1">
                <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-3">
                    Recipe Hub
                </h1>
                <p className="text-text-secondary text-lg max-w-2xl">
                    Each recipe below is structured with distinct sections representing future AI agent
                    responsibilities. In upcoming versions, these sections will be dynamically generated by the AI Brigade.
                </p>
            </div>

            {/* ── Agent Legend ── */}
            <div className="mb-10 flex flex-wrap gap-4 animate-fade-in-up-delay-2">
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-surface border border-border-light">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span className="text-xs font-medium text-text-secondary">Chef Agent</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-surface border border-border-light">
                    <div className="w-3 h-3 rounded-full bg-accent-green" />
                    <span className="text-xs font-medium text-text-secondary">Nutritionist Agent</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-surface border border-border-light">
                    <div className="w-3 h-3 rounded-full bg-accent-blue" />
                    <span className="text-xs font-medium text-text-secondary">Inventory Manager Agent</span>
                </div>
            </div>

            {/* ── Recipe Cards ── */}
            <div className="space-y-8">
                {STATIC_RECIPES.map((recipe) => (
                    <RecipeCard key={recipe.name} {...recipe} />
                ))}
            </div>
        </div>
    );
}
