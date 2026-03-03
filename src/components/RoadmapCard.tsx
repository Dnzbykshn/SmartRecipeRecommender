interface RoadmapCardProps {
    icon: React.ReactNode;
    title: string;
    agentName: string;
    description: string;
    color: "primary" | "green" | "blue";
    delay: number;
}

const colorMap = {
    primary: {
        bg: "bg-primary-muted",
        border: "border-primary/20",
        icon: "text-primary",
        badge: "bg-primary/10 text-primary",
    },
    green: {
        bg: "bg-accent-green-muted",
        border: "border-accent-green/20",
        icon: "text-accent-green",
        badge: "bg-accent-green/10 text-accent-green",
    },
    blue: {
        bg: "bg-accent-blue-muted",
        border: "border-accent-blue/20",
        icon: "text-accent-blue",
        badge: "bg-accent-blue/10 text-accent-blue",
    },
};

export function RoadmapCard({ icon, title, agentName, description, color, delay }: RoadmapCardProps) {
    const c = colorMap[color];
    const delayClass =
        delay === 0
            ? "animate-fade-in-up"
            : delay === 1
                ? "animate-fade-in-up-delay-1"
                : delay === 2
                    ? "animate-fade-in-up-delay-2"
                    : "animate-fade-in-up-delay-3";

    return (
        <div
            className={`${delayClass} rounded-2xl border ${c.border} bg-surface p-6 md:p-8 flex flex-col gap-4 transition-all duration-300 hover:bg-surface-raised hover:border-border cursor-default group`}
        >
            <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center ${c.icon} transition-transform duration-200 group-hover:scale-110`}>
                {icon}
            </div>
            <div>
                <span className={`text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded-full ${c.badge}`}>
                    {agentName}
                </span>
            </div>
            <h3 className="text-lg font-display font-semibold text-text-primary">{title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
        </div>
    );
}
