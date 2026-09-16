---
title: "Stories Restored"
tagline: "AI photo restoration for families with a shoebox of damaged photos."
summary: "A production web app that restores old and damaged family photographs. Two paths: a free guide for people who want to do one photo themselves, and paid bulk processing for people with an album."
year: "2026"
role: "Solo — product, design, engineering, deployment"
status: "Live in production"
stack: ["Next.js 15", "TypeScript", "Supabase", "Google Gemini", "Stripe", "Vercel", "Sentry"]
liveUrl: "https://storiesrestored.com"
featured: true
order: 1
---

## The problem

Most people have a box of photographs that are fading, creased, or water damaged. The tools that can fix them exist, but they assume you already know what a mask is. The people who care most about these photos are the least likely to get through a professional editing tool.

## What I built

Two entry points, aimed at two different levels of willingness to do work:

- **A free DIY guide** that walks you through restoring a single photo yourself using a free AI chat interface. No account, no payment. It is genuinely useful on its own.
- **Bulk processing** for people who have an album rather than a photo. Upload, pay a per-photo price, receive the restored images by email.

Pricing is a flat fee plus a tiered per-photo cost. No subscription and no credit packs — both of which punish exactly the person who wants to restore thirty photos once and never return.

## Engineering decisions worth naming

**Tiered model routing.** Restoration requests route to a faster or a more capable model depending on the mode selected. Most photos do not need the expensive path, and routing by mode rather than by guesswork keeps per-photo cost predictable enough to price against.

**A multi-step pipeline, not one call.** Restoration is staged rather than handed to a single prompt, so a failure at one stage does not cost the whole job.

**Realtime social proof.** A live counter of total photos restored, backed by Supabase Realtime. It is a trust signal, and trust is the whole conversion problem for a site asking strangers to upload family photographs.

**Accessibility as a requirement, not a pass.** WCAG 2.1 AA, large tap targets, semantic HTML. The median user here is older than the median user of most web apps and may be on a phone they do not love.

**Observability from the start.** Sentry across client, server, and edge. A silent failure on someone's only photo of their grandmother is not an acceptable failure mode.

## Outcome

<!-- TODO: replace with real numbers once you pull them.
     Photos restored, conversion rate, revenue, cost per photo,
     or a customer quote. One concrete number beats three paragraphs. -->

*Metrics in progress — this section gets the real numbers before the site goes live.*

## What I would do differently

<!-- TODO: your call. Two or three sentences, honest.
     Hiring managers and clients both read this section first, because it is
     the only one that is hard to fake. -->
