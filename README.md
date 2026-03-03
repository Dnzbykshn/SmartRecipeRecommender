# 🔥 AI Kitchen Brigade — Smart Recipe Recommender

A forward-thinking recipe platform built as the UI foundation for a **Multi-Agent AI system**. Three specialized AI agents (Chef, Nutritionist, Inventory Manager) will collaborate to generate personalized recipes from your available ingredients.

> **Part 1 — UI Foundation:** All data is currently static. Multi-Agent AI integration will be implemented in future assignments.

---

## ✨ Features

- **Home Page** — Animated hero section introducing the AI Kitchen Brigade concept with a future roadmap of the three AI agents
- **Pantry Manager** — Interactive ingredient selection grid (16 items), custom ingredient input, removable tags, dietary restriction and cooking time preference dropdowns
- **Recipe Hub** — Static recipe cards structured with agent-labeled sections (Chef's Recipe, Nutritionist's Breakdown, Inventory Alert) and a disclaimer banner
- **Responsive Design** — Mobile-first, fully responsive with floating glassmorphism navbar
- **Modern UI** — Dark theme, OKLCH color system, Space Grotesk + DM Sans typography, ambient glow animations

---

## 🛠 Technologies Used

| Technology | Version | Purpose |
|---|---|---|
| **Next.js** | 16.1.6 | React framework with App Router |
| **React** | 19.2.3 | UI component library |
| **TypeScript** | 5.x | Type-safe development |
| **Tailwind CSS** | 4.x | Utility-first CSS with v4 `@theme` tokens |
| **Node.js** | 18+ | Runtime environment |

---

## 🚀 Setup and Run Instructions

### Prerequisites

- **Node.js** 18 or higher
- **npm** (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/SmartRecipeRecommender.git
cd SmartRecipeRecommender

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

The app will be available at **http://localhost:3000**

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

```bash
npx vercel
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css            # Design system (OKLCH tokens, animations)
│   ├── layout.tsx             # Root layout with persistent Navbar + Footer
│   ├── page.tsx               # Home — hero section + AI roadmap
│   ├── pantry/
│   │   └── page.tsx           # Pantry — ingredient grid + preferences
│   └── recipes/
│       └── page.tsx           # Recipe Hub — static agent-labeled cards
└── components/
    ├── Navbar.tsx              # Floating glassmorphism navigation
    ├── Footer.tsx              # Assignment attribution footer
    ├── IngredientCard.tsx      # Toggleable pantry ingredient
    ├── Tag.tsx                 # Removable selection chip
    ├── RoadmapCard.tsx         # Future agent roadmap card
    └── RecipeCard.tsx          # Recipe with Chef/Nutritionist/Inventory sections
```

---

## 📄 Planning Document

The AI Agent Planning Document detailing the multi-agent architecture, agent roles, user interaction model, and system architecture diagram is available at:

📎 **[`docs/AI_AGENT_PLANNING.md`](docs/AI_AGENT_PLANNING.md)**

---

## 🗺 Roadmap

- [x] **Part 1** — UI Foundation (current)
- [ ] **Part 2** — Backend API routes + Agent Orchestrator
- [ ] **Part 3** — OpenAI integration (Chef Agent)
- [ ] **Part 4** — Nutrition API + Inventory logic
- [ ] **Part 5** — Full multi-agent pipeline + deployment

---

## 📝 License

This project is a university assignment and is not intended for commercial use.
