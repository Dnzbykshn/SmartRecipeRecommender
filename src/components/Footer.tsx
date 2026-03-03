export function Footer() {
    return (
        <footer className="border-t border-border py-8 mt-20">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-text-muted text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                        />
                    </svg>
                    <span>AI Kitchen Brigade</span>
                </div>
                <p className="text-text-muted text-sm">
                    University Assignment — Part 1: UI Foundation &middot; Multi-Agent AI Integration Pending
                </p>
            </div>
        </footer>
    );
}
