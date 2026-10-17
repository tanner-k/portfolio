---
title: "Stories Restored"
tagline: "AI photo restoration for families with a shoebox of damaged photos."
summary: "A production web app that restores old family photographs and separates scanned album pages into individual restored images, with clear restoration levels and delivery by email."
year: "2026"
role: "Solo — product, design, engineering, deployment"
status: "Live in production"
stack: ["Next.js 15", "TypeScript", "Supabase", "Google Gemini", "OpenAI", "Lemon Squeezy", "Vercel", "Sentry"]
liveUrl: "https://storiesrestored.com"
featured: true
order: 1
---

## The problem

Most people have a box of photographs that are fading, creased, or water damaged. The tools that can fix them exist, but they assume you already know what a mask is. The people who care most about these photos are the least likely to get through a professional editing tool.

## What I built

The current site offers two restoration paths: individual photographs and whole album or scrapbook pages. Customers choose a restoration level, upload their files, and receive the restored images by email. A free DIY guide remains available for people who want to restore a photo themselves.

The screenshots below were captured from the live website in October 2026. Select an image to view it at full size.

<figure>
  <a href="/images/projects/stories-restored/homepage.jpg" aria-label="View the Stories Restored homepage screenshot at full size">
    <img src="/images/projects/stories-restored/homepage.jpg" alt="Stories Restored homepage with before-and-after family photographs and entry points for photo and album-page restoration." width="1440" height="1000" decoding="async" class="rounded-xl border border-line" />
  </a>
  <figcaption class="mt-3 text-sm text-ink-muted">The updated homepage pairs restoration examples with two clear paths: loose photos or whole album pages.</figcaption>
</figure>

## From an album page to separate photographs

Photos do not always arrive as individual files. The album workflow accepts whole-page scans, including scanner PDFs, detects the photographs on each page, and crops and restores them separately. The customer receives individual images rather than a restored picture of the album page.

Album orders use a flat price per page, covering up to ten detected photos. The site explains the limits upfront: there is no crop preview before payment, and a page with no detected photographs is restored whole.

<figure>
  <a href="/images/projects/stories-restored/album-pages.jpg" aria-label="View the album-page restoration screenshot at full size">
    <img src="/images/projects/stories-restored/album-pages.jpg" alt="A scanned album page containing six black-and-white snapshots beside the six separate restored color photographs." width="1440" height="1000" loading="lazy" decoding="async" class="rounded-xl border border-line" />
  </a>
  <figcaption class="mt-3 text-sm text-ink-muted">One page in, separate photos out: the live example makes the album workflow tangible before upload.</figcaption>
</figure>

## Choosing the right restoration level

The photo order form offers Enhance for damage repair, Full Restore for repair and colorization, and Premium for more complex scenes. Per-photo prices decrease with larger orders. There are no additional fees or subscriptions, and the order summary shows the selected mode and price before payment.

The form keeps email delivery, restoration choices, upload requirements, and the order summary together. Checkout uses Lemon Squeezy.

<figure>
  <a href="/images/projects/stories-restored/order.jpg" aria-label="View the photo restoration order screenshot at full size">
    <img src="/images/projects/stories-restored/order.jpg" alt="Photo restoration order form with email delivery, Enhance, Full Restore and Premium choices, file upload, and an order summary." width="1440" height="1200" loading="lazy" decoding="async" class="rounded-xl border border-line" />
  </a>
  <figcaption class="mt-3 text-sm text-ink-muted">Restoration levels and pricing sit alongside the order summary, with file requirements shown at the upload step.</figcaption>
</figure>

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
