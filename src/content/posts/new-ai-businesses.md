---
title: "Layoffs, AI and New Businesses: Early Evidence from US States"
description: "Do laid-off workers start more businesses now that AI makes building cheaper? A working paper with US state data, 2023–2026."
date: 2026-10-16
draft: false
---

*Working paper, October 2026 · Tanner Kunz · [PDF](/papers/new-ai-businesses/new-ai-businesses.pdf) · [Code and data](https://github.com/tanner-k/new-ai-businesses-research)*

## Abstract

When a large company lays people off, a group of skilled workers is suddenly out of work at the same time, competing for a limited number of open jobs. Starting a business is one way out of that bottleneck, because a new firm adds jobs instead of competing for existing ones. AI tools that let non-programmers build software could make that path easier. I test whether, from January 2026, layoffs in a state were followed by more new business applications than before. Over the same period, two trends rose together. In 2026, 17% of SEC restructuring filings named AI as a reason for cutting jobs, up from 4% in 2025, and business applications reached their highest level outside the pandemic. But the state-level data do not link the two. My pre-registered model finds a *negative* relationship in the AI era. It disappears once each state's average shift between the two periods is accounted for, and the remaining estimates are too imprecise to rule out a modest positive effect. The paper also contributes a dataset that links layoff notices, AI-labeled restructuring filings and business applications.

## 1. Introduction

### Why I started this project

Layoffs waste talent. When a large employer cuts thousands of jobs, many experienced people stop working at once. For weeks or months they produce nothing, while they compete with each other for a fixed set of openings that other companies have posted. From the economy's point of view, that is lost output: skills that could be creating value are sitting idle.

Getting hired is one way out. Starting a company is another, and it works differently. A new firm does not take one of the existing openings. It adds to the number of jobs, starting with the founder's own and sometimes more. If even a small share of laid-off workers started firms, the pool of jobs would grow instead of just being reshuffled.

That raised a set of questions I wanted to answer:

- When a mass layoff happens, do some of those workers start businesses?
- Has AI made that path more common? Tools like Claude Code and "vibe coding" apps now let someone with no programming background build a website, an app or an online store in days. If the cost of building a product was what kept laid-off workers from founding, AI should lower it.
- If it has, can policy help? For example, by teaching displaced workers to build with AI while they search for work.

### What I do

This paper takes the first question in its simplest measurable form: after AI tools spread, were layoffs in a state followed by more new business applications in that state than before?

The timing is interesting because two trends rose together in 2025–26. Firms began to say they were cutting jobs because of AI. In 2026, 17.0% of SEC restructuring filings gave AI as a reason, up from 3.9% in 2025 and under 1% before 2024. At the same time, applications to start a business rose. In 2026 they ran 8–26% above their 2023 level. It is tempting to connect the two, with displaced workers using AI to start firms. The data in this paper are a way to check that story.

I measure layoffs with WARN notices: the advance warnings that larger employers must file with the state before a mass layoff or plant closing. I measure new businesses with the Census Bureau's count of applications for an employer identification number (EIN), the tax ID a new business requests. I date the start of the "AI era" to January 2026, using Google search interest in AI coding tools. I fixed that date, and the main model, in a written plan before running any regression.

### What I find

The answer depends on how the comparison is set up, and that sensitivity is the main result.

My pre-registered model finds that in the AI era, more layoffs in a state went with *fewer* new applications, not more. But this negative result comes from differences between states. The states where layoffs rose most in 2026, led by DC and Washington, also saw smaller increases in applications. When I instead compare months within the same state and period, the relationship is close to zero. Its uncertainty range still allows a modest positive effect.

So the honest conclusion is narrow. Across 34 states, layoffs were not followed by detectably more business applications after January 2026, once each state's overall shift between periods is taken out. That does not show AI fails to help laid-off workers start businesses. State totals cannot show what individual workers did. More founding by laid-off workers could be hidden by less founding by everyone else.

### What else the paper contributes

Beyond that result, the paper offers three things:

1. **A combined dataset.** It links a state-by-month panel of WARN layoff notices to Census business applications, unemployment claims and job-openings data. It also includes 8,484 SEC restructuring filings since 2004, with automated extraction of headcounts and AI reasons for the 2,217 filed since 2019, and Claude usage by state. Everything is rebuilt from public sources by scripts.
2. **A measure of AI-attributed job cuts.** The share of restructuring filings that cite AI is small but rising fast. About a third of the 2026 cases say AI will do the work itself; the rest describe moving money into AI or an AI strategy. A blind audit supports the labels.
3. **An open account of a surprising result.** The plan, the changes to it and the checks added later are all documented, so a reader can see how a pre-registered negative estimate depends on the setup.

Figure 1 maps each data source to the analyses that use it. Readers may find it useful to refer back to it.

## 2. What we already know

Economists have long found that people who lose their jobs are more likely than employed peers to become self-employed (von Greiff 2009; Røed and Skogstrøm 2014). Business starts driven by necessity rise when unemployment rises (Fairlie 2013). Policy matters too. In France, letting unemployed people keep their benefits while starting a firm increased business creation (Hombert et al. 2020).

The Census business-application data I use count EIN filings (Bayard et al. 2018). Their surge during the pandemic has been read as a shift toward new, often online, business models (Decker and Haltiwanger 2023).

On AI, early-career workers in AI-exposed jobs have seen employment fall since late 2022 (Brynjolfsson, Chandar and Chen 2025). The closest study of AI and new firms is Cai et al. (2025). They find that areas in China with more AI-skilled workers saw more small firms start after ChatGPT launched. That design asks *where* AI skills raise business creation. This paper asks about a specific group of potential founders, laid-off workers, using US data and companies' own stated reasons for cutting jobs. To measure AI adoption before the AI era, I use state-level Claude usage from the Anthropic Economic Index for August 2025 (Handa et al. 2025; Appel et al. 2025).

## 3. Data

The paper uses eight sources. Figure 1 shows which analyses each one feeds. All series are monthly and run through September 2026.

<figure>
<img src="/papers/new-ai-businesses/data_map.png" alt="Diagram mapping each data source to the analyses that use it" width="1500" height="1300" loading="lazy">
<figcaption>Figure 1. Data sources (left) and the analyses that use them (right). Line colors follow the data source; heavier boxes are main-text results. Dashed lines: the claims data also supply the covered-jobs count used to scale WARN layoffs. The AI-era date from Google Trends sets the January 2026 start for every before/after comparison.</figcaption>
</figure>

| Source | What it is | What I use it for | Coverage |
|---|---|---|---|
| Census business applications | Applications for an EIN | The outcome: new businesses | By state and month, and by industry nationally, from July 2004 |
| WARN notices | Advance notices of plant closings and mass layoffs | The main layoff measure | 55,009 notices from 47 states; 34 in the main sample |
| UI claims | Initial unemployment-insurance claims per 1,000 covered workers | The original pre-registered layoff measure; scales WARN | All 51 states and DC, from 2005 |
| SEC 8-K filings | Item 2.05 reports of restructuring or layoff plans | Companies' stated reasons for cuts, including AI | 8,484 filings, 2004 to 2026; 2,217 since 2019 with details |
| Anthropic Economic Index | Claude usage per person, by state | Splitting states into higher and lower AI use | One week in August 2025 |
| JOLTS | National layoffs by industry | A control in the industry analysis | National |
| Google Trends | Weekly US search interest in AI terms | Dating the AI era (Section 4.1) | Weekly, US |
| Published statistics | BLS, Department of Labor and CPS figures on displaced workers | The back-of-envelope in Appendix C only | National |

The outcome is the number of applications for an employer identification number (EIN), the tax ID a new business requests. "All applications" counts every filing. "High-propensity applications" counts those Census judges likely to become employers. Since January 2026, Census leaves applications tied to internet sales out of the high-propensity series, so part of any gap between the two is just this definition.

WARN notices measure announced mass layoffs and plant closings. A state with no notices would look like zero layoffs, even if it was not reporting. So the main sample is the 34 states with consistent coverage, which together hold 75% of covered jobs. A notice is a plan, filed about two months before the job losses.

A restructuring filing counts as citing AI when it says AI will do the work the cut roles did, that money or roles are moving into AI, or that the cut is part of an AI strategy. Boilerplate mentions of AI do not count. I checked the labels by hand, blind to the model's output, and confirmed 23 of 24 AI-cited 2026 filings. All AI figures use these audited labels, which put the 2026 share at 17.0%.

Appendix D has the full details.

## 4. How the analysis works

### 4.1 Dating the AI era

I needed a start date for the "AI era" before looking at outcomes. Search interest seemed the best available signal of when AI building tools went mainstream. To be clear, it measures attention, not a measured drop in what it costs to start a business.

The rule was a statistical search for jumps in weekly Google interest in "Claude Code" and "vibe coding". I chose, by judgment, to look for two jumps per term. The first marks each term's arrival: March 2025 for "vibe coding" and June 2025 for "Claude Code". I kept both as alternative start dates. The second is a jump both terms share, in the week of 4 January 2026. That became the start of the AI era: January to September 2026, nine months of data.

Later, to see how fragile that choice was, I repeated the search with 12 AI terms (Figure A5). They show two waves:

- **Broad AI tools** such as "AI agents", "AI workflows", "AI business", n8n and Cursor stepped up in the first half of 2025, with a common jump around June 2025. A combined index of all terms reached half its current level by March–May 2025.
- **Coding agents** ("Claude Code", "vibe coding", Codex) jumped in January–February 2026.

So January 2026 marks the arrival of coding agents, not general AI adoption. That fits this paper's question, which is about non-programmers building products. Because the date is a judgment call, Table 1 also reports results with a June 2025 start. The statistical rule for choosing the number of jumps does not settle on one for these steadily rising series.

Pulls on two different days (15 and 16 October 2026) agree: the dates move by two weeks at most. Nine terms also drop 30–60% in a single week in mid-July 2026, while ChatGPT stays flat. The drop shows up on both days, so it is either real or a change on Google's side. It comes after every date used here.

### 4.2 The main comparison

The core question is whether layoffs in a state are followed by more business applications in that state, and whether that link got stronger in the AI era.

For each state and month, I relate the number of applications to WARN layoffs in the same month and the six months before, scaled per 1,000 jobs. Two sets of controls do most of the work:

- **State fixed effects** remove permanent differences between states. Wyoming will always have fewer applications than California.
- **Month fixed effects** remove anything that hits the whole country at once: interest rates, seasons, national policy, and the national rise in applications itself.

What is left asks a narrow question: in a month when a state had more layoff notices than usual, did more applications follow than in a typical month? And was that link different after January 2026?

For readers who want the equation, for state *s* and month *t*:

<p class="equation">log Y<sub>st</sub> = α<sub>s</sub> + γ<sub>t</sub> + Σ<sub>l=0…6</sub> β<sub>l</sub> W<sub>s,t−l</sub> + Σ<sub>l=0…6</sub> δ<sub>l</sub> (W<sub>s,t−l</sub> × AI<sub>t</sub>) + ε<sub>st</sub></p>

Here *Y* is applications (not seasonally adjusted) and *W* is WARN workers per 1,000 covered jobs. AI<sub>t</sub> equals 1 from January 2026. The sum of the β's is the link before the AI era, the sum of the δ's is how much it changed, and β + δ is the link in the AI era. I use six lags because the AI era is only nine months long. Since notices come about two months before job losses, lags 0–1 mostly cover the notice period, and lags 2–6 the months after workers lose their jobs. The sample is the 34 states from January 2023 to September 2026 (1,506 state-months). Standard errors allow for correlation within each state.

**One added check matters a lot.** After seeing the main result, I added a version with *state-by-era* fixed effects. It gives each state its own average for before and after January 2026, so it compares only months within the same state and period. That removes any shift in a state's average layoffs and applications between the two periods. It can remove confounding, such as a state hit by an unrelated shock in 2026. But it can also remove a real effect, if layoffs raised applications persistently.

**Reading the numbers.** A coefficient sum of −0.176 does not mean 17.6% fewer applications. The sums add up monthly effects of a one-month layoff shock. For a typical AI-era shock (0.31 workers per 1,000 jobs in one month), the change in total applications over the next seven months is about the sum × 0.31 ÷ 7. Only a shock repeated every month would change monthly applications by the sum × 0.31.

### 4.3 Supporting analyses

Four other analyses come at the question from different angles:

1. **The claims model.** The same comparison using unemployment claims instead of WARN, for all 51 jurisdictions from 2005, skipping the pandemic months (March 2020 – June 2021). This was the pre-registered version.
2. **AI usage.** If AI drives the effect, it should be stronger in states that used Claude more before the AI era. I compare states above and below the median.
3. **Large layoffs that cite AI.** For large restructuring plans (1,000+ workers or 10%+ of staff), I track applications in the company's home state from three months before the filing to eight months after, comparing filings that cite AI with those that do not. This is descriptive.
4. **Industries.** Whether applications shifted toward industries where AI makes building easiest (professional services, information, retail including online stores), controlling for each industry's layoffs.

### 4.4 The plan and what changed

On 14 October 2026, I wrote down the AI-era start, the alternative start dates (March, June and December 2025), placebo dates (January 2019 and 2023), the outcomes and the expected signs, in a version-controlled plan (commit [`29da103`](https://github.com/tanner-k/new-ai-businesses-research/commit/29da103)). I expected layoffs to be followed by more applications in the AI era, with little response in the first two months and more after.

Before running any regression, I recorded four changes to that plan (commit [`b378e0e`](https://github.com/tanner-k/new-ai-businesses-research/commit/b378e0e) on 15 October, before the first results commit [`151b9f3`](https://github.com/tanner-k/new-ai-businesses-research/commit/151b9f3)):

1. **WARN replaced unemployment claims as the main layoff measure.** Claims fell 3–15% year over year in every AI-era month, leaving only three state-level claims spikes, and I judged that too little to identify the AI-era change. WARN also measures the event of interest, announced mass layoffs. The claims model is still reported in full.
2. **The sample became the 34 states with consistent WARN coverage** from 2023, instead of all states from 2004, so gaps in coverage would not count as zero layoffs.
3. **The 10% undated-notice rule was kept**, so Indiana stays out.
4. **The SEC analysis was added**, because WARN misses remote layoffs.

I also looked at the outcome data once before switching. On 14 October, before WARN was merged with any outcome, I traced applications around spikes in unemployment claims of 25% or more year over year. Before the AI era, across 164 such events, applications rose about 0.5–1.3% relative to the nation over eight months. The AI era had only three events, too few to say anything. I decided on the switch to WARN after that look.

Looking back, my reason for the switch does not hold up well. Counting spikes above a cutoff says little about a regression that uses every month of claims. In fact, the claims model turned out to be precisely estimated (Table 1). The better reason is measurement. WARN records announced closings and mass layoffs, with dates and sizes, though it includes some long temporary layoffs. Claims also pick up short temporary layoffs, furloughs and differences in state eligibility rules.

Several checks were not in the plan. A test for effects that appear *before* the layoffs was specified before I saw any result. Everything else was added after I saw the main result, and is marked "post hoc" wherever it appears:

- state-by-era fixed effects, including at the alternative start dates;
- state trends, and dropping DC or Washington;
- dating WARN by the layoff month instead of the notice month;
- the AI-usage split with state-by-era effects;
- a common follow-up window for the SEC analysis;
- the location-free checks (Appendix B);
- the 12-term search check;
- the label corrections from the audit.

## 5. Results

### 5.1 Two trends that rose together

**Applications rose; layoffs did not surge.** In the 34 states, WARN notices in January–September 2026 named 16,000–33,000 workers a month, inside the range seen in 2025 (Figure 2). Seasonally adjusted applications in 2026 were 8–26% above their 2023 average, and most of that rise came in the second half of 2025, before the AI era began. High-propensity applications, the ones likely to hire, ran a few percent *below* their 2023 level.

<figure>
<img src="/papers/new-ai-businesses/national_trends.png" alt="Line charts of monthly WARN layoffs and national business applications, 2023 to 2026" width="1386" height="946" loading="lazy">
<figcaption>Figure 2. WARN layoffs (34 states) and national business applications, January 2023 – September 2026. Shaded: AI era.</figcaption>
</figure>

**More companies say AI is a reason for cuts.** Among SEC restructuring filings, the share citing AI went from under 1% in 2019–2023 to 2.1% in 2024, 3.9% in 2025 and 17.0% in January–September 2026 (26 of 153 filings; Figure 3). Among large filings, 14 of 62 cited AI in 2026. Direct substitution, where AI takes over the work, appears in 8 of the 153 filings.

<figure>
<img src="/papers/new-ai-businesses/ai_reason_share.png" alt="Bar chart of the share of SEC restructuring filings that cite AI, by year" width="926" height="582" loading="lazy">
<figcaption>Figure 3. Share of SEC Item 2.05 restructuring filings (originals) that give AI as a reason for the cut, by year, using audited labels. Labels: AI-cited / all filings.</figcaption>
</figure>

### 5.2 The main result depends on the setup

Before the AI era, WARN notices did not predict applications. The summed link is near zero in every version of the model: −0.008 (standard error 0.008) for all applications. At most, that allows about 3 extra applications per 100 workers named in notices over seven months.

In the AI era, the sign depends on what the model holds fixed (Figure 4, Table 1):

- **With the pre-registered setup** (state and month effects), the AI-era change is −0.176 for all applications and −0.134 for high-propensity ones. For a typical one-month layoff shock, that is about 0.8% fewer applications over the next seven months in total, about 580 per state. Only a shock repeated every month would cut monthly applications by about 5%. The claims model has the same sign.
- **With state-by-era effects** (post hoc), the change is +0.069 for all applications and −0.001 for high-propensity ones. The claims model also moves to zero. The uncertainty range for all applications runs up to about +0.8% over seven months for a one-month shock, or about +5% for a repeated one.
- **With a June 2025 start**, at the broad AI-tools wave, the pattern is the same: negative with state effects, near zero with state-by-era effects.

<figure>
<img src="/papers/new-ai-businesses/main_sensitivity.png" alt="Estimated AI-era change in the layoff-applications link under different model setups, with 95% intervals" width="1386" height="659" loading="lazy">
<figcaption>Figure 4. How much the link between WARN layoffs and log business applications changed in the AI era, summed over lags 0–6. Blue: pre-registered model. Orange: with state-by-era fixed effects (post hoc). Bands are 95% confidence intervals. 34 states, January 2023 – September 2026.</figcaption>
</figure>

**Table 1. How the AI-era link depends on the model.** Summed over lags 0–6, in log points per worker per 1,000 jobs (claims rows: per claim per 1,000 workers). Σδ is the change in the AI era, with its 95% interval; Σ(β+δ) is the link in the AI era itself.

| Version | All applications: Σδ [95% CI] | Σ(β+δ) | High-propensity: Σδ [95% CI] | Σ(β+δ) |
|---|---|---|---|---|
| Pre-registered (Jan 2026) | −0.176 [−0.264, −0.088] | −0.184 | −0.134 [−0.265, −0.004] | −0.134 |
| + state × era effects* | +0.069 [−0.033, +0.171] | +0.059 | −0.001 [−0.064, +0.062] | +0.001 |
| + state trends* | −0.172 [−0.308, −0.036] | −0.179 | −0.109 [−0.204, −0.014] | −0.105 |
| Drop DC* | −0.172 [−0.272, −0.072] | −0.179 | −0.170 [−0.328, −0.011] | −0.171 |
| Drop Washington* | −0.211 [−0.352, −0.071] | −0.213 | −0.204 [−0.371, −0.038] | −0.204 |
| WARN dated by layoff month* | −0.178 [−0.292, −0.065] | −0.188 | −0.108 [−0.239, +0.024] | −0.107 |
| … + state × era effects* | +0.074 [−0.048, +0.195] | +0.062 | +0.014 [−0.063, +0.091] | +0.016 |
| AI era starts June 2025 | −0.088 [−0.158, −0.018] | −0.093 | −0.032 [−0.102, +0.038] | −0.033 |
| … + state × era effects* | +0.017 [−0.045, +0.080] | +0.005 | +0.001 [−0.043, +0.045] | −0.001 |
| Claims, pre-registered (51 states) | −0.025 [−0.039, −0.011] | −0.025 | −0.022 [−0.038, −0.006] | −0.021 |
| Claims + state × era effects* | −0.008 [−0.031, +0.014] | −0.008 | +0.002 [−0.017, +0.021] | +0.003 |

*\* Post hoc. WARN rows use 1,506 state-months in 34 states (1,461 and 33 when a state is dropped); claims rows use 12,495 and 51. The pre-AI link Σβ ranges from −0.012 to +0.005 across rows. Full results: `output/tables/sensitivity.md`.*

### 5.3 Why the negative result appears

Because the AI era starts at the same time everywhere, the pre-registered estimate mixes two comparisons. One is timing within a state: did months with more layoff notices see more applications? The other is a comparison across states: did states where layoffs *rose* in 2026 see less growth in applications?

The cross-state comparison is negative. Across the 34 states, the change in each state's average layoff rate between the two periods is negatively correlated (−0.24) with its change in applications. DC (federal cuts) and Washington (large tech layoffs) had the biggest increases in layoffs and among the smallest gains in applications. The pattern is not just those two, though: dropping either one leaves the estimate negative. Adding state trends leaves it negative too, so it is not a trend that was already under way.

The within-state comparison, which the state-by-era effects isolate, is close to zero. In other words, the negative estimate disappears once each state gets its own AI-era average, so it depends on how state averages changed between the periods. That tells us the result is sensitive, not why. The state-by-era effects could be removing unrelated shocks, such as DC's federal cuts, or a real and lasting effect of layoffs on applications. Either way, neither comparison shows layoffs turning into new applications at a higher rate in the AI era. And the within-state estimates are too imprecise to rule out a modest positive effect.

### 5.4 Did AI usage make a difference?

If AI is what helps laid-off workers start businesses, the effect should be larger in states that used Claude more. With the pre-registered setup, it looks that way at first: for high-propensity applications, high-usage states show a link 0.307 higher than low-usage states (standard error 0.135, p = 0.03). For all applications the gap is 0.095 (0.127).

With state-by-era effects (post hoc), the high-propensity gap shrinks to 0.051 (0.093, p = 0.59), and the gap for all applications turns negative, −0.131 (0.148). The first result depends on the same between-period state differences as the main estimate, so it does not support the AI mechanism.

### 5.5 Large layoffs that cite AI

There are 554 large new restructuring plans from 2019 to September 2026, after removing duplicates and plans whose window overlaps the pandemic. Twenty-five cite AI: 11 before the AI era and 14 during it. Follow-up for the AI era is short. Of the 14 AI-cited plans, 10 have three months of data afterward and only one has eight.

To compare like with like, I use the first four months after filing for plans that have all four (10 AI-cited and 28 others in the AI era). In the companies' home states, applications after AI-cited plans averaged 2.3 log points below those after other plans (standard error 1.0, p = 0.09). But the same plans already showed a gap of about the same size *before* filing: −2.4 points (1.1). The difference between the two periods is −3.2 (1.7) points, and for high-propensity applications the AI-era gap is −1.0 (1.4).

These comparisons rest on five to seven home states, mostly California, and a company's home state is not where its laid-off workers live. They show neither a rise nor a fall that we can attribute to AI-cited layoffs (Figure 5). The audit corrections swap Etsy out and Rapid7 in, which leaves these results unchanged.

<figure>
<img src="/papers/new-ai-businesses/sec_event_study.png" alt="Home-state business applications around large restructuring plans, AI-cited versus other" width="1265" height="628" loading="lazy">
<figcaption>Figure 5. Business applications in a company’s home state around large restructuring plans (1,000+ workers or 10%+ of staff), as a log share of national applications (SA), relative to the month before filing. Orange: filings that cite AI. Months with fewer than five plans are not drawn.</figcaption>
</figure>

### 5.6 Industries, and checks that do not depend on location

**Industries.** New businesses did shift toward the kinds AI makes easier to build. Comparing January–September 2025 with the same months of 2026, professional services rose from 13.2% to 14.8% of applications, and information from 2.0% to 2.4%. Industry-level regressions put the AI-era shifts at +2.4 percentage points (standard error 0.4) and +0.46 (0.06). But a placebo test starting in January 2025 also shows shifts, so the move began before 2026 (Figure A3).

**Location-free checks** (post hoc, Appendix B). A laid-off remote worker can start a business anywhere, and founders sometimes register in states with friendly business laws. Two checks avoid the location problem, and neither finds a response:

- National applications grew no faster after AI-cited large layoffs than after other large layoffs in the same period: the gap is +1.0 log point, and a test that shuffles the AI labels gives p = 0.41. That test treats the labels as interchangeable across plans, so it is descriptive.
- The share of applications filed in business-friendly states (Delaware, Wyoming, Nevada, South Dakota) fell slightly in 2026.

## 6. Robustness

With the pre-registered setup, the AI-era estimate of −0.176 for all applications barely moves under the standard checks, such as dropping large states, adding Indiana or using a longer sample. Those checks all keep the cross-state comparison that produces the negative sign, so they do not change the reading in Section 5.3. Placebo dates give changes near zero, and one lead check suggests some anticipation. Appendix E has the checks and full results.

## 7. What this means and what comes next

What the evidence supports is fairly simple:

- More companies now say AI is a reason they are cutting jobs.
- Business applications rose nationally, shifting toward professional services and information, beginning before 2026.
- States where layoffs rose in 2026 saw smaller gains in applications.
- Within a state, months with more layoff notices were not followed by detectably more applications in the AI era.

What it does *not* support is the conclusion that AI fails to help laid-off workers start businesses. The estimates allow a modest positive effect, and state totals cannot follow individual people.

**Limitations.**

- **The AI era is short.** Nine months of data leave at most nine months after a layoff. If founding a business takes a year, for example as savings and severance run down, it would not show up yet.
- **Location is blurry.** WARN's geography is uncertain for remote workers, SEC filings place cuts at headquarters, and the Census data place a new business wherever its EIN application says. A remote founder can register anywhere.
- **Applications are not businesses.** Many EIN applications never become operating firms. Part of the gap between all and high-propensity applications is the Census definition, which excludes internet sales.
- **State shocks.** Shocks specific to a state in 2026, like DC's federal cuts, are removed only by the post-hoc state-by-era effects.
- **The label audit is limited.** I did it myself rather than an independent labeler, and it checked few filings without AI terms.

**Next steps.**

1. **Keep watching.** Add 2026–27 data as they arrive, have a second person label filings, and check more filings without AI terms.
2. **Follow workers, not places.** Data linking workers to employers, or unemployment records linked to later self-employment, would measure directly whether laid-off people start firms.
3. **Model the individual decision.** Starting a business after a layoff is a personal choice between searching for a job and trying to build something, and it comes down to money and risk. Appendix C puts rough numbers on that choice. Wages are lost during a job search either way, so a short attempt at a business costs effort and savings more than salary, though it can slow the search. Each month beyond an assumed three-month search costs a professional-services worker about $11,300 in pay. If AI shortens the time it takes to build and test an idea, more attempts fit inside the search. The January 2028 Displaced Worker Survey will be the first to cover AI-era job losses.
4. **Test the policy idea.** If AI lowers the cost of building but laid-off workers do not use it, the barrier may be know-how rather than tools. A randomized offer of AI-building training to people on unemployment insurance would test that directly.

## References

- Appel, R., et al. (2025). *Anthropic Economic Index report: Uneven geographic and enterprise AI adoption.* Anthropic.
- Bayard, K., Dinlersoz, E., Dunne, T., Haltiwanger, J., Miranda, J., and Stevens, J. (2018). Early-stage business formation: An analysis of applications for employer identification numbers. NBER Working Paper 24364.
- Brynjolfsson, E., Chandar, B., and Chen, R. (2025). Canaries in the coal mine? Six facts about the recent employment effects of artificial intelligence. Stanford Digital Economy Lab working paper.
- Bureau of Labor Statistics (2026). Worker displacement: 2023–2025. News release USDL-26-1423, 27 August 2026.
- Cai, J. J., Gu, X., Sheng, L., Xia, M., Zhao, L., and Zhu, W. (2025). AI as "co-founder": GenAI for entrepreneurship. arXiv:2512.06506.
- Census Bureau (2026). Business Formation Statistics: notice of revised high-propensity and corporate application definitions, January 2026 release. census.gov/econ/bfs.
- Challenger, Gray & Christmas (2025). Benchmarking severance in 2025: What competitive really looks like. Company blog, 30 December 2025 (secondary source).
- Davis, S. J., and von Wachter, T. (2011). Recessions and the costs of job loss. *Brookings Papers on Economic Activity*, Fall.
- Decker, R. A., and Haltiwanger, J. (2023). Surging business formation in the pandemic: Causes and consequences? *Brookings Papers on Economic Activity*.
- Fairlie, R. W. (2013). Entrepreneurship, economic conditions, and the Great Recession. *Journal of Economics & Management Strategy* 22(2).
- Hamilton, B. H. (2000). Does entrepreneurship pay? An empirical analysis of the returns to self-employment. *Journal of Political Economy* 108(3).
- Handa, K., et al. (2025). Which economic tasks are performed with AI? Evidence from millions of Claude conversations. Anthropic.
- Hombert, J., Schoar, A., Sraer, D., and Thesmar, D. (2020). Can unemployment insurance spur entrepreneurial activity? Evidence from France. *Journal of Finance* 75(3).
- Jacobson, L. S., LaLonde, R. J., and Sullivan, D. G. (1993). Earnings losses of displaced workers. *American Economic Review* 83(4).
- Levine, R., and Rubinstein, Y. (2017). Smart and illicit: Who becomes an entrepreneur and do they earn more? *Quarterly Journal of Economics* 132(2).
- Røed, K., and Skogstrøm, J. F. (2014). Job loss and entrepreneurship. *Oxford Bulletin of Economics and Statistics* 76(5).
- von Greiff, J. (2009). Displacement and self-employment entry. *Labour Economics* 16(5).

## Appendix A. Additional figures

<figure>
<img src="/papers/new-ai-businesses/main_cumulative.png" alt="Pre-registered model: layoff-applications link before the AI era and its change in the AI era" width="1386" height="654" loading="lazy">
<figcaption>Figure A1. Pre-registered model: the link between WARN layoffs and log applications before the AI era (Σβ, blue) and its change in the AI era (Σδ, orange), summed over lags 0–6.</figcaption>
</figure>

<figure>
<img src="/papers/new-ai-businesses/claims_cumulative.png" alt="The same estimates using unemployment claims instead of WARN notices" width="1386" height="654" loading="lazy">
<figcaption>Figure A2. Pre-registered claims model: the same, using initial unemployment claims per 1,000 covered workers. 51 states, 2005 – September 2026, excluding March 2020 – June 2021.</figcaption>
</figure>

<figure>
<img src="/papers/new-ai-businesses/sector_shares.png" alt="Industry shares of business applications, 2019 to 2026" width="1385" height="636" loading="lazy">
<figcaption>Figure A3. Industry shares of business applications (SA), 2019 – September 2026. Shaded: AI era.</figcaption>
</figure>

<figure>
<img src="/papers/new-ai-businesses/haven_share.png" alt="Share of national business applications filed in business-friendly states and New Jersey" width="1281" height="553" loading="lazy">
<figcaption>Figure A4. Share of national business applications (SA) filed in business-friendly states (DE, WY, NV, SD) and in New Jersey, 2019 – September 2026. Shaded: AI era.</figcaption>
</figure>

<figure>
<img src="/papers/new-ai-businesses/ai_adoption_terms.png" alt="Weekly Google search interest in 12 AI terms with detected jumps and a combined index" width="2423" height="1803" loading="lazy">
<figcaption>Figure A5. Weekly US Google search interest in 12 AI terms, each on its own 0–100 scale, with detected jumps (dotted lines), and a combined index (bottom). Shaded: the pre-registered AI era. Post hoc.</figcaption>
</figure>

## Appendix B. Checks that do not depend on location (post hoc)

A laid-off remote worker can start a business anywhere, and founders sometimes register in states with friendly business laws. I ran two checks that do not depend on where a layoff is recorded. Both were added after I saw the main results.

**National applications after each large layoff.** I reuse the 554 SEC restructuring plans but follow *national* applications around each filing. Plans filed in the same month share the same national outcome, so these comparisons are descriptive.

- National applications rose after both kinds of AI-era plans, about 3–4 log points over the following eight months (Figure B1). That is the national upswing, not a response to the layoffs.
- Comparing AI-cited plans with others in the same period, the gap is +1.0 log point for all applications and +0.4 for high-propensity ones. Shuffling the AI labels gives p = 0.41 and 0.75. Using the first four months only, the gap is +0.8 log points (p = 0.61).
- The change in that gap between periods is −0.3 (1.8) log points.

<figure>
<img src="/papers/new-ai-businesses/national_event.png" alt="National business applications around large restructuring plans, AI-cited versus other" width="1265" height="616" loading="lazy">
<figcaption>Figure B1. National business applications (SA, log) around large restructuring plans, relative to the month before filing. Orange: filings that cite AI. 95% bands, clustered by filing month. Months with fewer than five plans are not drawn.</figcaption>
</figure>

**Business-friendly states.** I group Delaware (known for its corporate law), Wyoming, Nevada and South Dakota (no corporate or personal income tax, and popular for LLCs). New Jersey is shown for contrast: it ranks near the bottom of the Tax Foundation's 2026 State Tax Competitiveness Index.

- The business-friendly group's share of national applications rose from about 2.7% in 2019 to 3.9% in late 2024, then fell (Figure A4).
- Comparing January–September, it went from 3.82% in 2025 to 3.66% in 2026. A time-series model puts the AI-era shift at −0.18 percentage points (standard error 0.09, p = 0.06), and a January 2025 placebo shows nothing.
- These states' shares do not move after AI-cited layoffs compared with other layoffs (−0.2 log points, p = 0.50).
- New Jersey's share stays flat at about 2.9%.

If laid-off founders are registering out of state, it does not show up as a shift toward the usual business-friendly states.

## Appendix C. A laid-off worker's choice, in numbers

Whether a layoff turns into a business comes down to an individual choice between looking for a job and trying to build something. Table C1 puts rough numbers on that choice. They are context for future work, not estimates from this paper.

**Table C1. Inputs for a laid-off worker's choice, latest available**

| Input | Value | Source |
|---|---|---|
| Long-tenured workers displaced 2023–25 | 3.3 million; 66% reemployed by January 2026 | BLS Displaced Worker Survey, Jan 2026 |
| Reemployed full-time workers earning as much as before | about 49% (about 62% in the January 2024 survey) | same |
| Reemployed workers who had lost full-time wage jobs and are now self-employed or unpaid family workers | 7.8% (152,000 of 1.94 million) | same, Table 7 (share derived) |
| Median / mean time unemployed so far, for people *currently* unemployed | 11.5 / 24.8 weeks in Sep 2026 (8.9 / 20.6 in 2023) | CPS via FRED |
| Unemployed 27 weeks or more | 27% of the unemployed, Sep 2026 | CPS via FRED |
| Average annual pay, 2025 | $79,094 private; $135,280 professional services; $190,981 information | BLS QCEW |
| Average weekly unemployment benefit | $501 (Q2 2026), for up to 26 weeks in most states (12–24 weeks in 14 states) | Department of Labor |
| Average severance | 19.3 weeks of pay (under 10 weeks for individual contributors; secondary source) | Challenger, Gray & Christmas, 2025 |
| Applications that become employer businesses within 2 years | about 10 per 100 (2015–2021 applications) | Census BFS |

The CPS figures measure how long people who are unemployed *now* have been looking, not how long a completed search takes. So the search length below is an assumption for illustration.

- **An example.** Take a professional-services worker at the 2025 average pay of $135,280, about $11,300 a month. Unemployment insurance replaces less than a fifth of that ($501 a week against $2,602). Assume the job search takes three months.
- **A short attempt is cheap, but not free.** The wages lost during the search are lost either way. Trying to build a business during that window costs effort and savings, and it can slow the search, which has its own cost. Severance near the reported average would cover a three-month search on its own.
- **Time past the window is expensive.** Each month beyond the search costs about $11,300 in pay. A six-month attempt gives up roughly $34,000 beyond the assumed search. Losing a job already carries lasting costs: about 25% lower earnings a year (Jacobson, LaLonde and Sullivan 1993), or about 1.4 years of pre-layoff earnings in present value when unemployment is low (Davis and von Wachter 2011).
- **The risk is real.** About 10 of every 100 applications become an employer business within two years. Median self-employment earnings run about 35% below paid work after ten years (Hamilton 2000), though people who incorporate earn more than salaried workers (Levine and Rubinstein 2017).
- **Unemployment rules matter.** US unemployment insurance generally requires claimants to be available for work. In France, letting benefits continue while a claimant starts a firm raised business creation (Hombert et al. 2020).
- **Where AI might come in.** If AI shortens the time it takes to build and test an idea, more attempts fit inside a job search. That predicts more small attempts that never hire. This paper does not test it.

Testing these ideas needs data on individual workers: what they earned, how long they searched, their severance, and whether they later worked for themselves. The Displaced Worker Survey records lost-job earnings, weeks without work and the current job. Its January 2026 round (job losses in 2023–25) is the pre-AI baseline, and the January 2028 round will be the first to cover AI-era job losses. A survey could also ask laid-off workers directly how much a business would need to earn before they would try it, which would measure their tolerance for risk.

## Appendix D. Data details

Section 3 gives the short version. This appendix has the full description of each source.

**New businesses: Census Business Formation Statistics.** The outcome is the number of applications for an EIN, by state and month and by industry nationally, from July 2004. I use two versions. "All applications" counts every filing. "High-propensity applications" counts those Census judges likely to become employers. Since January 2026, Census leaves applications tied to internet sales out of the high-propensity series across its whole history. That matters here, because online stores are among the businesses AI makes easiest to start. Part of any gap between the two series is just this definition.

**Layoffs: WARN notices.** Under the federal WARN Act, employers with 100 or more workers must give 60 days' notice before a plant closing or mass layoff (90 days in some states). I use 55,009 notices from 47 states, collected by the Kadoa tracker, and measure layoffs as workers named in notices per 1,000 jobs covered by unemployment insurance.

A state-year with no notices would look like zero layoffs, even when the state simply was not reporting. So the main sample is the 34 states with notices in every year from 2023 to 2026 and few undated notices. Together they hold 75% of covered jobs. Indiana just misses the undated-notice rule (12% undated against a 10% limit). I keep it out, and adding it back is a robustness check.

WARN has limits worth knowing:

- It misses small employers and small cuts.
- A notice is a plan, filed about two months ahead. In my sample, half of the workers named in notices lose their jobs two calendar months after the notice month.
- It covers plant closings and mass layoffs, including temporary layoffs longer than six months, and I do not separate these.
- Notices are tied to a "single site of employment". For remote workers, that can be the office they are assigned to or report to, so WARN's geography is uncertain. Block's February 2026 cut of about 4,000 people shows up as only 144 workers in WARN.

**Unemployment claims (Department of Labor).** Initial unemployment-insurance claims per 1,000 covered workers, for all 51 states and DC. This was my original pre-registered layoff measure. The same files supply the covered-jobs count I use to scale WARN layoffs.

**Restructuring filings: SEC Form 8-K, Item 2.05.** A public company must file an Item 2.05 report within four business days of committing to a restructuring or layoff plan. A filing marks the decision, not the cuts. When filings give an expected completion date, the median is three months later. I collected 8,484 of these filings from 2004 to 2026.

For the 2,217 filed since 2019, I extracted the number of workers affected, costs, locations and timing. I also labeled whether the company gives AI as a reason for the cut. Python finds every candidate number, amount, place and date in the text, and a classification model (TypeSafe Jev) only labels what each one refers to. A filing counts as citing AI when it says one of three things:

| What the filing says | 2026 filings |
|---|---|
| AI will do the work the cut roles did | 8 |
| Money or roles are moving into AI | 9 |
| The cut is part of an AI strategy | 9 |

Boilerplate mentions of AI in legal disclaimers do not count. Claude Haiku labeled the 69 filings the first model could not settle, working blind and quoting its evidence.

**Checking the AI labels.** I labeled 60 filings myself, in shuffled order, from a sheet that showed no model labels. The sample was all 25 AI-cited 2026 filings, 10 earlier AI-cited filings and 25 filings labeled as not citing AI. The audit is blind to the model output but not independent: I wrote the rubric, and I had earlier seen summaries naming some AI-cited filings.

The labels held up well. I confirmed 23 of 24 AI-cited 2026 filings (one was ambiguous) and 8 of 10 earlier ones. The clearest error was Etsy, whose release says its cuts "weren't driven by AI". Among 8 sampled 2026 filings that mention AI but were labeled as not citing it, I found 2 that do cite it; among the 17 other negatives, none. Overall agreement was 92% (Cohen's κ = 0.83), and 74% on the type of reason.

For the 60 audited filings, my label replaces the model's (C3.ai, which I marked ambiguous, keeps its label). That drops Etsy, Assurant and Pegasystems and adds Rapid7 and Commerce.com. All AI figures in the paper use these audited labels; the model-only labels are kept as a robustness check. Weighting by the audit design gives an estimated AI-cited share of 17.5% in 2026 (16.3% by the model alone) and 1.1% in 2019–2025 (1.4%). Only 10 filings without any AI terms were checked, so misses among them are not tightly bounded.

**AI usage: Anthropic Economic Index.** Claude usage per person by state, from one week in August 2025, before the AI era. I use it to split states into higher and lower AI use.

**Industry layoffs: JOLTS.** National layoffs by industry from the Job Openings and Labor Turnover Survey, used as a control in the industry analysis.

**Search interest: Google Trends.** Weekly US search interest in AI terms, used only to date the AI era (Section 4.1).

**Published statistics.** Figures from BLS, the Department of Labor and the Current Population Survey on displaced workers' pay, job search, benefits and severance. They are used only for the back-of-envelope in Appendix C.

## Appendix E. Robustness

Full results are in `output/tables/robust_warn.md` and `sensitivity.md`. With the pre-registered setup, the AI-era estimate of −0.176 for all applications barely moves under these checks:

- dropping each of the five largest states one at a time (−0.168 to −0.182);
- adding Indiana (−0.176);
- capping extreme layoff months (−0.228);
- using seasonally adjusted applications (−0.184);
- using a longer 2019–2026 sample of 25 states (−0.200, standard error 0.059).

That stability does not change the reading in Section 5.3, because every one of these checks keeps the cross-state comparison that produces the negative sign. Three other notes:

1. **Notices that come later.** Adding layoff notices from the following three months as extra terms (leads) cuts the estimate to −0.154 (0.080). Before the AI era, those future notices have a small but significant link to high-propensity applications (−0.009, standard error 0.003). That suggests some anticipation or reverse timing.
2. **Placebo dates.** All four placebo "AI eras" give changes near zero, though the early WARN years are noisy.
3. **Earlier start dates.** Starting the AI era earlier shrinks the negative estimate (Table 1).

## Reproducibility

Code, analysis-ready data and the full commit history are at [github.com/tanner-k/new-ai-businesses-research](https://github.com/tanner-k/new-ai-businesses-research). Run each script from the repository root with `uv run <script>`:

| Script | Produces |
|---|---|
| `models.py` | Main and claims models, AI-usage split, figures |
| `robustness.py` | Robustness and sensitivity tables |
| `sec_event_study.py` | AI-reason shares, large-layoff analysis |
| `sector_addon.py` | Industry shares |
| `location_checks.py` | Appendix B (post hoc) |
| `context_stats.py` | WARN and SEC timing, formation rates, unemployment duration |
| `ai_adoption_terms.py` | 12-term search check (post hoc) |
| `build_blind_audit.py`, `score_blind_audit.py` | Label audit sheet and scores |
| `data_map.py` | Figure 1 |

Data construction, sources and access dates are in `DATA.md`. The plan and the dated changes to it are in `PLAN.md`.
