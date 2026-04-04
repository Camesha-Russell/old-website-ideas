# Competitor Gap — itsmomapproved.com

You are identifying content gaps: topics that competitors rank for in the baby/toddler product space that itsmomapproved.com has not yet covered or planned. The output is a prioritized list of post opportunities to add to the Content Cluster Map.

This is a strategic planning skill. It runs monthly or at the start of a new content sprint — not per post. The goal is to make sure the cluster map is always growing toward full coverage of what Maya is actually searching for, not just what we've already thought of.

## The competitive landscape

The three primary competitors to benchmark against:

**BabyGearLab** — Clinical authority. Buys and tests every product. Strong on methodology transparency. Weakness: reads like a lab report. No warmth. No voice. No negative recommendations on the homepage. Maya trusts them for the data, not for the relationship.

**Lucie's List** — Founder credibility (industrial engineer, certified car seat tech). Dense, well-organized. Reader-supported, no ads. Weakness: textbook-heavy, long-form to the point of exhaustion. Little Skip This content. Strong on certain categories (car seats, strollers), thin on others.

**Babylist** — Registry platform that doubled as editorial. Broad product coverage, gifting-focused. Weakness: no clear voice, heavily commercial, recommendations feel inventory-driven rather than curated.

**The gap itsmomapproved.com owns:** Research-backed warmth + honest negative recommendations. No competitor does both consistently. Every gap we identify should be evaluated for how we fill it *differently* — not just whether we cover the same topic.

## The six pillars

Every gap should be assigned to one:
- Sleep
- Feeding
- Carriers and Strollers
- Play and Development
- Just for Mama
- Safety

## Before you start

Confirm with the user:
- **Scope:** Analyze all six pillars, or focus on specific ones?
- **Depth:** Quick scan (top 3 gaps per pillar) or full audit (comprehensive per pillar)?
- **Cluster map:** Read the current `the content-cluster-map.md file in the itsmomapproved.com workspace folder (use Glob tool with pattern **/content-cluster-map.md to locate it)` to establish what's already planned or live before searching. Never flag a gap that's already on the map.

If the user says "just run it," default to all six pillars, quick scan mode, and read the cluster map first.

## The process

### Step 1: Read the cluster map

Read the content cluster map in full. Note every post that is Live, In Progress, or Planned. You will not flag these as gaps — they are already covered or in the pipeline.

### Step 2: Run competitor searches — all in parallel

For each pillar, run two searches simultaneously:

**Search A — Competitor coverage:**
`best [pillar topic] site:babygearlab.com OR site:lucieslist.com OR babylist.com 2025 OR 2026`

This shows what the primary competitors are currently ranking for in this pillar.

**Search B — Broad pillar search:**
`best [pillar topic] baby [current year]`

This shows the full landscape of what's ranking in this pillar — including mid-size blogs, newer sites, and topics the big players may have missed.

Run all twelve searches (two per pillar × six pillars) in the same turn if analyzing all pillars. This is much faster than running them sequentially.

**Pillar search terms to use:**
- Sleep: "best baby sleep products" / "baby white noise machines monitors sleep training"
- Feeding: "best baby feeding products" / "baby bottles high chairs breast pumps weaning"
- Carriers and Strollers: "best baby carriers strollers" / "baby wearing stroller comparisons"
- Play and Development: "best baby play development toys" / "play mats activity centers sensory"
- Just for Mama: "best postpartum recovery products" / "new mom essentials self care"
- Safety: "best baby safety products" / "baby monitors recalls safety gear"

### Step 3: Identify gaps

For each pillar, compare the competitor search results against the cluster map. Flag a topic as a gap when:

1. **Missing entirely** — competitors rank for it, it's not on the cluster map at all
2. **Coverage is thin or dated** — competitors have a post on it but it's more than 18 months old, clearly not updated, generic without a clear verdict, or doesn't have a Skip This angle
3. **Format gap** — the topic exists on the cluster map as one type (e.g., comparison post) but would also benefit from another format (e.g., a Skip This post for the most overhyped product in that category)
4. **Skip This opportunity** — a product that is heavily featured by competitors but has known issues, recalls, or is consistently outperformed by alternatives

Do not flag a gap just because we haven't written about it yet — only flag it if there's search demand and the topic would genuinely help Maya.

### Step 4: Score each gap

Use this scoring system, consistent with /research-brief, so gaps can be compared to in-session research briefs:

- **Commercial value (0-3):** Is this a high-ticket product category? Strong affiliate programs? 0 = low/no commercial value, 3 = high-ticket with strong Tier 1 affiliate programs
- **Keyword winnability for a new site (0-3):** Can we realistically rank here? 0 = dominated by Consumer Reports/NYT/major publications, 3 = mid-size blogs competing, we have a real shot
- **Content gap/differentiation (0-3):** How weak is the existing coverage? 0 = BabyGearLab already has a definitive post, 3 = thin or dated coverage, our angle doesn't exist yet
- **Pillar completeness (0-3):** Does this fill a meaningful hole in the pillar's structure? 0 = nice-to-have, 3 = missing post type that weakens the whole pillar (e.g., no Skip This post in a pillar yet)

**Total: 12 points max.** Gaps scoring 9+ are high priority. Gaps scoring 6-8 are worth adding to the cluster map. Gaps scoring below 6 go on a watch list.

---

## Output format

Use this exact format every time.

---

### Competitor Gap Report — [Date]
**Pillars analyzed:** [list]
**Cluster map last read:** [version or date from the file]

---

#### [PILLAR NAME]

**Gap 1: [Proposed Post Title]**
Content type: [Comparison / Best-of / Skip This / Registry Reality / Problem-Solution / Safety]
Score: [X]/12 — Commercial [X] + Winnability [X] + Gap [X] + Pillar [X]
Who ranks for this now: [BabyGearLab / Lucie's List / mid-size blogs / none]
Why their coverage is weak: [specific reason — dated, no verdict, no Skip This angle, generic]
Our differentiation angle: [one sentence on how we cover this differently]
Recommended writing skill: [/product-post / /pillar-post / /skip-this]

**Gap 2: [Proposed Post Title]**
[same format]

---

#### Summary

After all pillars:

**Add to cluster map now (score 9+):**
- [Post title] — [Pillar] — [Content type] — [Score]/12

**Add to cluster map this sprint (score 6-8):**
- [Post title] — [Pillar] — [Content type] — [Score]/12

**Watch list (score below 6, worth revisiting):**
- [Post title] — [brief note on why it's a watch rather than an add]

**Pillar most in need of attention:** [Pillar name] — [one sentence on why]

---

## What to do with the output

The gap report is an input to the cluster map, not a replacement for it. After the report is produced:

1. Review the "Add now" list with the user — confirm which gaps to officially add
2. Add confirmed gaps to `the content-cluster-map.md file in the itsmomapproved.com workspace folder (use Glob tool with pattern **/content-cluster-map.md to locate it)` using the existing format (Planned status, content type label, pillar)
3. If the next /research-brief session is coming up soon, flag the high-scoring gaps so they can be prioritized in that session's recommendations

The cluster map is the source of truth. The gap report feeds it. Nothing in the gap report becomes "real" until it's added to the cluster map.

## Frequency

Run this skill:
- **Monthly** — as part of a regular content sprint review
- **When starting a new pillar** — before writing the first posts in a category, to understand the full competitive landscape
- **When traffic data shows a competitor outranking on a topic we should own** — targeted single-pillar run
- **Every 3-4 months** — full six-pillar audit to catch topics that have grown in search demand since the last run

Do not run this skill per-post. It is a planning tool, not a production tool.
