# AI Agent Planning Document

## Smart Recipe Recommender — AI Kitchen Brigade

**Course:** University Assignment — Part 1  
**Date:** March 2026  
**Author:** 20240808701 - Deniz Buyuksahin

---

## 1. Project Overview

### Website Topic and Purpose

The **Smart Recipe Recommender** (branded as "AI Kitchen Brigade") is a web-based platform that helps users discover recipes based on the ingredients they already have at home. The platform is designed as a forward-thinking system where a Multi-Agent AI architecture will process user inputs — available ingredients, dietary restrictions, and time constraints — to generate personalized, nutritionally optimized meal recommendations.

In this first phase (Part 1), the project establishes the complete UI foundation with static data. Future assignments will integrate real AI agents to replace the hardcoded content with dynamic, intelligent outputs.

### Target Users

| User Segment | Description |
|---|---|
| **Home Cooks** | Everyday people who want meal ideas from ingredients they already own, reducing food waste and saving money |
| **Health-Conscious Individuals** | Users with specific dietary needs (vegan, keto, gluten-free) who want nutritionally balanced meals |
| **Busy Professionals** | People with limited cooking time who need quick, filtered recipe suggestions |
| **Students** | Budget-conscious individuals looking to maximize meals from limited pantry items |

### Core Features of the Website

1. **Home Page** — Introduces the platform concept and explains the future Multi-Agent AI system through an interactive roadmap section
2. **Pantry Manager** — Allows users to select from a grid of common ingredients, add custom items via text input, and set preferences (dietary restriction, max cooking time). This forms the structured data layer for future AI prompt engineering
3. **Recipe Hub** — Displays recipe cards with clearly separated sections for each future AI agent: Chef's Recipe (instructions), Nutritionist's Breakdown (macros), and Inventory Alert (missing items)
4. **Responsive Design** — Fully mobile-responsive with a floating glassmorphism navbar and modern dark-themed UI

---

## 2. AI Agent Concept

### What Problem Will the AI Agent Solve?

Currently, users face three disconnected challenges when planning meals:

1. **"What can I cook with what I have?"** — Ingredient-to-recipe matching requires browsing through dozens of recipes manually
2. **"Is this meal healthy for me?"** — Nutritional analysis is separate from recipe discovery
3. **"Am I missing any ingredients?"** — Cross-referencing pantry contents with recipe requirements is tedious

The AI Kitchen Brigade solves all three simultaneously by deploying **three specialized AI agents** that collaborate on every user request.

### What Type of Agent Will It Be?

The system uses a **Multi-Agent Recommender Architecture** with three distinct agents:

| Agent | Type | Role |
|---|---|---|
| **Chef Agent** | Recommender / Generator | Takes user ingredients and preferences as input, generates personalized recipes using LLM-based prompt engineering. Produces structured output: recipe name, ingredients list, step-by-step instructions |
| **Nutritionist Agent** | Evaluator / Advisor | Analyzes each generated recipe for nutritional content (calories, protein, carbs, fat, fiber). Suggests healthier substitutions when dietary goals are specified |
| **Inventory Manager Agent** | Analyzer / Assistant | Compares recipe requirements against the user's selected ingredients. Identifies missing items, suggests alternatives from available pantry items, and flags items nearing expiration |

Each agent has a **single responsibility**, receives structured input, and produces structured output — following the principle of composable, specialized AI agents rather than a single monolithic model.

### How Users Will Interact with the Agent

The interaction model is **form-based input → automated multi-agent processing → structured card output**:

1. **Input Phase (Pantry Page):** Users select ingredients from a visual grid, add custom items, and configure preferences via dropdown menus. This creates a structured JSON payload:
   ```json
   {
     "ingredients": ["Chicken", "Garlic", "Rice"],
     "dietary_restriction": "None",
     "max_cooking_time": "30 minutes"
   }
   ```

2. **Processing Phase (Background):** The payload is sent to the backend, which orchestrates the three agents sequentially:
   - Chef Agent receives ingredients + preferences → generates recipe
   - Nutritionist Agent receives generated recipe → produces nutritional breakdown
   - Inventory Manager receives recipe ingredients + user's pantry → identifies gaps

3. **Output Phase (Recipe Hub):** Results are displayed as structured recipe cards, where each agent's output populates its designated UI section (already built in Part 1).

No chat interface is needed — the form-to-card pattern provides a cleaner UX for this use case.

---

## 3. System Architecture (High-Level)

### Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        FRONTEND (Next.js)                       │
│                                                                 │
│  ┌──────────┐    ┌──────────────┐    ┌───────────────────────┐  │
│  │  Pantry   │───▶│  User Input  │───▶│  API Request (POST)   │  │
│  │  Page     │    │  State       │    │  /api/generate-recipe │  │
│  └──────────┘    └──────────────┘    └───────────┬───────────┘  │
│                                                   │              │
│  ┌───────────────────────────────────────────────┐│              │
│  │              Recipe Hub Page                   ││              │
│  │  ┌─────────┐ ┌──────────────┐ ┌────────────┐ ││              │
│  │  │ Chef's  │ │Nutritionist's│ │ Inventory  │ ││              │
│  │  │ Recipe  │ │  Breakdown   │ │   Alert    │ ◀┘              │
│  │  └─────────┘ └──────────────┘ └────────────┘ │               │
│  └───────────────────────────────────────────────┘               │
└──────────────────────────────┬──────────────────────────────────┘
                               │
                               ▼
┌──────────────────────────────────────────────────────────────────┐
│                    BACKEND (Next.js API Routes)                  │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐    │
│  │                  Agent Orchestrator                       │    │
│  │                                                          │    │
│  │  Step 1: ┌──────────────┐  Prompt: ingredients +         │    │
│  │          │  Chef Agent  │  preferences → recipe          │    │
│  │          └──────┬───────┘                                │    │
│  │                 │                                        │    │
│  │  Step 2: ┌──────▼───────────┐  Input: recipe →           │    │
│  │          │ Nutritionist     │  nutritional data           │    │
│  │          │ Agent            │                             │    │
│  │          └──────┬───────────┘                             │    │
│  │                 │                                         │    │
│  │  Step 3: ┌──────▼───────────┐  Input: recipe +            │    │
│  │          │ Inventory Mgr   │  pantry → missing items      │    │
│  │          │ Agent            │                              │    │
│  │          └──────────────────┘                              │    │
│  └──────────────────────────────────────────────────────────┘    │
└──────────────────────────────┬───────────────────────────────────┘
                               │
                               ▼
┌──────────────────────────────────────────────────────────────────┐
│                     EXTERNAL SERVICES                            │
│                                                                  │
│  ┌────────────────┐  ┌──────────────────┐  ┌─────────────────┐  │
│  │  OpenAI API    │  │  Nutrition API   │  │  Spoonacular /  │  │
│  │  (GPT-4)       │  │  (Edamam /       │  │  Food Database  │  │
│  │                │  │   Nutritionix)   │  │  API            │  │
│  │  Used by:      │  │                  │  │                 │  │
│  │  Chef Agent    │  │  Used by:        │  │  Used by:       │  │
│  │                │  │  Nutritionist    │  │  Inventory Mgr  │  │
│  └────────────────┘  └──────────────────┘  └─────────────────┘  │
└──────────────────────────────────────────────────────────────────┘
```

### How the AI Agent Interacts with Each Layer

| Layer | Technology | Agent Interaction |
|---|---|---|
| **Frontend** | Next.js (React) | Collects structured user input (ingredients, preferences) via the Pantry page. Displays agent outputs in designated RecipeCard sections on the Recipe Hub |
| **Backend** | Next.js API Routes / Server Actions | Hosts the Agent Orchestrator that sequences agent calls. Validates input, manages API keys, handles errors, and formats responses |
| **External APIs** | OpenAI GPT-4, Edamam Nutrition API, Spoonacular | Chef Agent uses OpenAI for recipe generation via structured prompts. Nutritionist Agent uses Edamam for accurate macro calculations. Inventory Manager uses Spoonacular for ingredient matching and substitution logic |

### Data Flow Summary

1. User fills pantry form → structured JSON payload created client-side
2. Payload sent to `/api/generate-recipe` (Next.js API Route)
3. Agent Orchestrator runs three agents **sequentially** (each agent's output feeds the next)
4. Combined response returned as structured JSON matching the `RecipeCard` component props
5. Frontend renders the response into the existing agent-labeled card sections

This architecture ensures the UI built in Part 1 requires **zero structural changes** when AI integration is added — only the data source changes from hardcoded to dynamic.

---

*End of Planning Document*
