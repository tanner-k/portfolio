---
title: "All Around Foods"
tagline: "From saved recipe Reels to a meal on the table."
summary: "A personal cooking app that brings scattered recipes into one cookbook, turns them into weekly plans and shopping lists, and provides clear steps to cook from."
year: "2026"
role: "Personal project — product and engineering"
status: "Live · personal project"
stack: ["Next.js 16", "TypeScript", "React 19", "Supabase", "IndexedDB", "Claude", "Python", "FastAPI", "Tailwind CSS"]
repoUrl: "https://github.com/tanner-k/all-around-food"
featured: true
order: 2
---

## Why I built it

My wife and I had recipes scattered across saved Instagram Reels and other sources, alongside favorites we kept coming back to. Finding a recipe was one problem; cooking from it was another. I would spend 20–30 minutes replaying a Reel to catch the next instruction, with the audio repeating and my phone battery draining.

I wanted one place to collect those recipes, follow clear instructions while cooking, and turn ingredients into a shopping list without missing anything. With AI becoming capable enough to extract recipes from those sources, I wanted to see whether I could build that workflow myself.

## What it is

All Around Foods connects the steps between finding something you want to cook and getting dinner on the table: import a recipe, keep it in a cookbook, add it to the week, shop for the ingredients, and cook from readable instructions.

The screenshots below come from the live app and my own recipe library. Select an image to view it at full size.

## From a saved link to a usable recipe

The import screen accepts links, screenshots, and pasted recipe text, including a path for Instagram and TikTok videos. Parsed recipes can be reviewed and edited before saving to the cookbook. Manual recipe entry also works offline.

<figure>
  <a href="/portfolio/images/projects/all-around-foods/import.jpg" aria-label="View the recipe import screenshot at full size">
    <img src="/portfolio/images/projects/all-around-foods/import.jpg" alt="Live recipe import screen with screenshot, URL, Instagram and TikTok inputs, plus a field for pasted recipe text." width="1664" height="916" decoding="async" class="rounded-xl border border-line" />
  </a>
  <figcaption class="mt-3 text-sm text-ink-muted">Bring recipes in from the places they were saved, then review the extracted ingredients and steps.</figcaption>
</figure>

## A week built from saved recipes

The planner puts recipes into a seven-day view. Once the week is planned, the **Review shopping** action brings ingredients from the selected recipes into the shopping list. The cookbook keeps recipes available to return to instead of having to find the original post again.

<figure>
  <a href="/portfolio/images/projects/all-around-foods/planner.jpg" aria-label="View the weekly meal planner screenshot at full size">
    <img src="/portfolio/images/projects/all-around-foods/planner.jpg" alt="Live weekly planner showing saved meals including Dumpling Lasagna and Peanut Chilli Noodles, with serving controls." width="1664" height="835" decoding="async" class="rounded-xl border border-line" />
  </a>
  <figcaption class="mt-3 text-sm text-ink-muted">The weekly planner connects saved recipes and serving sizes to the next grocery trip.</figcaption>
</figure>

## Instructions you can cook from

Cook mode replaces repeated video playback with a focused view of the current step. Ingredients and amounts stay alongside the instructions, timed steps can start a timer, and desktop users can switch between step and scrolling layouts. On smaller screens, the interface provides large previous and next controls, with ingredients available in a sheet.

This is the part closest to the original frustration: being able to move through a recipe at my own pace while actually making it.

<figure>
  <a href="/portfolio/images/projects/all-around-foods/cook-mode.jpg" aria-label="View the step-by-step cook mode screenshot at full size">
    <img src="/portfolio/images/projects/all-around-foods/cook-mode.jpg" alt="Live cook mode for Niku Miso, highlighting one preparation step with ingredients beside it, progress, and large navigation controls." width="1664" height="916" loading="lazy" decoding="async" class="rounded-xl border border-line" />
  </a>
  <figcaption class="mt-3 text-sm text-ink-muted">A focused cooking step, ingredient amounts, and large navigation controls, with the screen kept awake.</figcaption>
</figure>

## A shopping list that starts with the recipe

Ingredients can be added from saved recipes and grouped by store section. Pantry indicators flag items already on hand or running low, and the list also accepts manually added items. Purchased items can be moved into pantry stock.

The goal is to reduce the copying and cross-checking between a recipe, the kitchen cupboards, and a separate grocery list.

<figure>
  <a href="/portfolio/images/projects/all-around-foods/shopping-list.jpg" aria-label="View the shopping list screenshot at full size">
    <img src="/portfolio/images/projects/all-around-foods/shopping-list.jpg" alt="Live shopping list showing the Produce section with cilantro, ginger, garlic, and other ingredients from saved recipes." width="1664" height="916" loading="lazy" decoding="async" class="rounded-xl border border-line" />
  </a>
  <figcaption class="mt-3 text-sm text-ink-muted">The live shopping list groups recipe ingredients by store section.</figcaption>
</figure>

## Engineering behind the workflow

**Import from different sources.** The import flow accepts recipe links, screenshots, and Instagram or TikTok video links. Imports enter a job queue; a Python worker handles extraction and AI parsing so that processing can continue independently of the page. The UI exposes the queue so the user can follow progress.

**Structured recipes.** Recipes have defined fields for ingredients, quantities, ordered steps, durations, and equipment. That shared structure supports the cookbook, cooking view, and shopping list. Claude handles recipe parsing, while schema validation checks the shape of the resulting data.

**Local storage with account sync.** IndexedDB holds recipes, plans, shopping items, and cooking progress on the device. Supabase provides account services and library sync. The app shows sync status and keeps unsent offline imports on the device until they can be submitted.

**Designed around the task.** Planning benefits from a broad weekly view; cooking needs a readable next step and reachable controls. The same recipe data supports both views without requiring someone to keep revisiting the original video.

## Current scope

This is an evolving personal project, built around the way my wife and I save recipes and the workflow I wanted in our kitchen. The live app brings that workflow together, and I am continuing to refine it around the path from a saved Reel to a finished meal.
