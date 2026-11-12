---
title: "Deere Farm ROI Copilot"
tagline: "Who should own the machine: the farm, or a custom operator?"
summary: "A forward-deployed case study that models a farmer's equipment decision from public data, tests the idea against how Iowa's custom-hire market actually behaves, and reports where it held and where it did not."
year: "2026"
role: "Solo — analysis, modelling, engineering"
status: "Public case study · reproducible"
stack: ["Python", "Polars", "scikit-learn", "Pydantic", "matplotlib", "USDA NASS and ERS data", "John Deere Operations Center API", "Claude Code", "Codex"]
repoUrl: "https://github.com/tanner-k/fde-case-studies/tree/main/case-studies/john-deere-roi-copilot"
featured: true
order: 3
---

## The question

I set out to build a tool that tells an Iowa farmer whether a John Deere See & Spray sprayer pays for itself. For a typical 2,400-acre farm, the tool's answer was blunter than the question: the farm should not own the sprayer at all.

A $650,000 sprayer on that farm runs about 24 hours a year. Owning beats hiring at roughly 9,073 acres sprayed a year, and the farm sprays 4,800.

I rebuilt the case study around that answer. For each machine, which customer should own it: the farm, or a custom operator serving many farms?

This is independent work. It is not affiliated with or endorsed by Deere & Company, every published number comes from public data, and the scope is Iowa corn and soybeans.

## The customer trade-off

The same acres can reach Deere through three customers. A farm that owns has the machine on the day it is needed, and pays for iron that sits idle most of the year. A farm that hires ties up no capital, and depends on the operator arriving on time. A custom operator spreads one machine over many farms, and has to serve every client inside the same short window.

Two forces decide who wins. The fewer hours a machine runs, the worse ownership looks. The shorter the window to do the job, the riskier hiring is.

The exhibit plots ten field operations on those two axes at three farm sizes. Bubble size is the number of Iowa providers reporting a custom rate. Select a figure to view it at full size.

<figure>
  <a href="/portfolio/images/projects/deere-farm-roi-copilot/landscape-quadrants.png" aria-label="View the machine landscape exhibit at full size">
    <img src="/portfolio/images/projects/deere-farm-roi-copilot/landscape-quadrants.png" alt="Three panels at 500, 2,400 and 10,000 acres plotting ten field operations by annual machine hours and agronomic window in days, with the self-propelled sprayer in the low-use, narrow-window corner at every size." width="2400" height="880" decoding="async" class="rounded-xl border border-line" />
  </a>
  <figcaption class="mt-3 text-sm text-ink-muted">Machines in the bottom-left corner are rarely used and must arrive on time. The idea predicts these are the ones farms hire out.</figcaption>
</figure>

## Testing the idea against the market

If the idea is right, the machines in that corner should be the ones Iowa already hires out most. I fixed the cut lines and the definition of "window" before running the check, so I could not pick the flattering version afterward.

- The sprayer and vertical tillage matched at every farm size.
- Overall agreement was 5 of 8 at 500 and 2,400 acres, and 2 of 8 at 10,000.
- Under two wider, equally defensible window definitions it fell to 3 of 8.
- The two combine rows disagreed at every size and under every definition.

So the sprayer case is strong and the general rule is not proven. The same USDA data, read two defensible ways, points in opposite directions, and the case study says so.

## Getting into the Deere API

The claim that this could sit on top of Deere's Operations Center is only true if the credentials work, so I built the client first. Sign-in, organization discovery and link traversal run against the live sandbox, and 10 of 13 endpoints authorize.

The connected account holds no farm records, so the demo runs on a stand-in with the same interface. I chose not to fill the sandbox with invented field records, because that would manufacture the evidence the project promises not to fake.

Three traps were invisible in the documentation and only showed up on live calls:

- **An unconnected account returns success with an empty list.** It reads as "this farm has no fields" when it means "not connected yet".
- **The documented field name is wrong by one letter.** A working connection was classified as unknown until both spellings were accepted.
- **Sandbox responses link to production addresses.** Following them as designed walks a test client into production.

Each one is pinned by a test.

## The combine: catching a flaw in my own model

The combines kept breaking the pattern, so I looked at why. The data had one row for the corn head and one for the soybean head, and the plot treated them as two lightly used machines. A farm owns one combine and swaps the head.

<figure>
  <a href="/portfolio/images/projects/deere-farm-roi-copilot/combine-shared-use.png" aria-label="View the shared-use combine exhibit at full size">
    <img src="/portfolio/images/projects/deere-farm-roi-copilot/combine-shared-use.png" alt="Stacked bars of soybean and corn harvest hours on one base combine at 500, 2,400 and 10,000 acres, reaching 223 hours at 2,400 acres against a 200-hour line." width="1840" height="864" loading="lazy" decoding="async" class="rounded-xl border border-line" />
  </a>
  <figcaption class="mt-3 text-sm text-ink-muted">Counted as one machine, the combine runs 223 hours a year at 2,400 acres, above the line either crop alone falls under.</figcaption>
</figure>

That corrects the picture. It does not make a purchase case. I set a rule for the follow-up: no number gets published without a source, and both cost and timing must pass before any option is called a winner.

Under that rule the answer is indeterminate. The only supported figure is hiring both harvests at survey rates, about $106,920 a year. No dated, itemized price exists for a combine plus both heads, and no evidence shows that owning or hiring finishes both crops when harvests overlap. The output is a checklist of what to ask the customer for.

## When the simple model won

The payback depends on yield, so I tested a gradient-boosted yield model against a plain historical trend. The fancier model won only 4 of 10 held-out years for each crop. For corn it looked better on average, but the whole lead came from one unusual year.

My rule was that a challenger must win on average and in most years. It did neither, so the simple model ships.

## What comes next

The unbuilt part is sizing the opportunity: how many acres sit with customers who can justify each machine, and what that is worth at a per-acre fee. The first gate is whether the custom-operator segment can be sized from public data at all. If it cannot, it ships as a labelled range.

Deere's own machine-hours data would replace my utilization estimates. That is the seam the API client proves.

## How I worked

I built this with AI coding agents doing most of the typing. The calls were mine: reframing the case when the first answer was "don't buy", fixing the test definitions before running them, refusing to fabricate sandbox data, questioning why combines broke the pattern, and blocking any unsourced price.

The repository has 398 tests, and the figures rebuild from tracked data with one command.
