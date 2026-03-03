"use client";

interface IngredientCardProps {
    name: string;
    icon: React.ReactNode;
    selected: boolean;
    onToggle: () => void;
}

export function IngredientCard({ name, icon, selected, onToggle }: IngredientCardProps) {
    return (
        <button
            onClick={onToggle}
            className={`flex flex-col items-center gap-3 p-4 rounded-2xl border transition-all duration-200 cursor-pointer group ${selected
                    ? "bg-primary-muted border-primary/40 shadow-lg shadow-primary/10"
                    : "bg-surface border-border-light hover:border-border hover:bg-surface-raised"
                }`}
            aria-pressed={selected}
        >
            <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-transform duration-200 group-hover:scale-110 ${selected ? "bg-primary/20" : "bg-surface-raised"
                    }`}
            >
                {icon}
            </div>
            <span
                className={`text-sm font-medium ${selected ? "text-primary" : "text-text-secondary"
                    }`}
            >
                {name}
            </span>
            {selected && (
                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                    <svg className="w-3 h-3 text-background" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                </div>
            )}
        </button>
    );
}
