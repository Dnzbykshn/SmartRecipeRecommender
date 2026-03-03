"use client";

interface TagProps {
    label: string;
    onRemove: () => void;
}

export function Tag({ label, onRemove }: TagProps) {
    return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-muted text-primary text-sm font-medium transition-all duration-200 hover:bg-primary/25">
            {label}
            <button
                onClick={onRemove}
                className="w-4 h-4 rounded-full hover:bg-primary/30 flex items-center justify-center transition-colors duration-150 cursor-pointer"
                aria-label={`Remove ${label}`}
            >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
        </span>
    );
}
