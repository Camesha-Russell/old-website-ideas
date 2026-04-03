---
name: review-post
description: "Review a draft post for itsmomapproved.com against the pre-publish checklist. Use this skill whenever the user wants to check, review, audit, or QA a draft post before publishing. Triggers on requests like 'review this draft', 'check this post', 'run the checklist on this', 'is this ready to publish', or any request to evaluate a piece of content against the brand standards."
---

# Post Review — itsmomapproved.com

You are reviewing a draft post for itsmomapproved.com. Your job is to check the draft against every item on the pre-publish checklist and return a clear, actionable report.

## What to look for

Run the draft against every item below. Do not skip any item. Do not give vague feedback.

## The Pre-Publish Checklist

1. **Clear verdict in the first two sentences.** Does the post open with the recommendation and the strongest reason? Maya should know what to buy before she scrolls.

2. **Specific data point as evidence.** Does every recommendation cite a concrete number — a star rating with review count, a review pattern, a longevity observation, or an expert endorsement? "Moms love this" fails. "4.7 stars across 30,000+ Amazon reviews" passes.

3. **All four content pillars present.** Are safety, budget, longevity, and a link placeholder all in the post? If any one is missing, the draft is incomplete.

4. **Price named as an actual number.** Is every product price a dollar amount? No "affordable", "budget-friendly", or "an investment." Name the number.

5. **Budget alternative included.** Is there a lower-cost option named with its actual price and a clear trade-off statement?

6. **Hedge spiral removed.** Is there any sentence that qualifies itself to death? One caveat per point is honest. Two or three on the same point is cowardice. Flag any sentence that stacks qualifications.

7. **Post ends with something useful.** Does the post end with a practical tip, a direct action, or a warm one-line close that drives the click? A summary or a restatement of the verdict fails.

8. **No AI-sounding sentences.** Does any sentence sound like it was generated rather than written by a real person? Flag anything that reads like a press release, a content machine, or generic affiliate copy.

9. **No hard rule violations.** Check every sentence, header, and title for:
   - Em dashes (—). Not one. Anywhere — including in the post title and all headers.
   - Question openers ("Looking for...?", "Wondering if...?")
   - Passive voice recommendations ("This product is loved by moms")
   - The words "actually," "finally," or "it's worth noting" — including in the post title
   - Hedge stacking on a single point

10. **The Maya Test.** Would Maya send this to her mom group chat? If the post is useful, specific, and trustworthy enough to share, it passes. If it reads like a sponsored post or generic content, it fails.

11. **FTC disclosure present.** Is the exact FTC disclosure at the very top of the post, before any content? Required language: "Heads up: this post contains affiliate links. If you buy through our links, we may earn a small commission at no extra cost to you. As an Amazon Associate, we earn from qualifying purchases. We research every product we recommend. We only share what we'd tell a friend." Missing or shortened disclosure is a FLAG.

12. **Internal link to pillar page present.** Does the post include at least one link back to its pillar page? A cluster post with no internal link to its pillar page is incomplete and fails this item.

13. **Closing line check.** Does the post end with something useful — a practical tip, a direct action, or a warm closing line that drives the click? A summary or restatement of the verdict fails. Flag anything that ends with "In conclusion..." or wraps up what was already said.

14. **Voice register correct.** Is the voice register right for this content type? Product and comparison posts should sound like The Skinny Confidential: punchy, short sentences, verdict first, no warmup. Pillar pages, safety posts, and emotional content should sound like Dr. Jazmine: warm, steady, meets Maya where she is. Flag any post that uses the wrong register for its content type.

15. **Three Pinterest pins ready.** Are three distinct Pinterest pin captions included with the post? Each must have a unique headline, one concrete detail, and a call to action. Missing pins are a FLAG — they are a required deliverable, not an afterthought.

## How to return your report

List each checklist item by number. Mark it PASS or FLAG.

For every FLAG:
- Quote the specific line causing the issue (use quotation marks)
- Write one sentence explaining the fix

For every PASS: one word is enough. No need to explain a pass.

End the report with one of two verdicts:

**READY TO PUBLISH** — all 15 items pass.

**NOT READY — [X] flags to resolve** — list the number of flags and confirm the draft needs revision before publishing.

## Tone of the report

Be direct. This is a quality control tool, not a pep talk. Flag what needs fixing without softening it. One clear sentence per flag. No lengthy explanations.

---

## After a READY TO PUBLISH verdict — automatic Codex handoff

When the verdict is **READY TO PUBLISH**, immediately take these steps without waiting for the user to ask:

1. **Create the handoff file.** Format the post content using the spec in `blog-infrastructure/COWORK-HANDOFF-FORMAT.md`. Save it to `blog-infrastructure/handoffs/[slug]-handoff.md` with status `READY FOR CODEX`.

2. **Deliver to Codex via Chrome.** Use the Chrome MCP to:
   - Navigate to: `https://chatgpt.com/codex/tasks/task_e_69d02a9ca120832dbf824b4f19d17d11`
   - Paste the full handoff file content into the Codex message input
   - Send the message

3. **Confirm delivery.** Tell Camesha: "Handoff delivered to Codex. File saved at `blog-infrastructure/handoffs/[slug]-handoff.md`. Codex will create the MDX file — check back in a few minutes."

If the Chrome MCP is unavailable or the paste fails, save the handoff file and tell Camesha: "Handoff file is ready at `blog-infrastructure/handoffs/[slug]-handoff.md` — Chrome delivery failed. Open Codex manually and paste the file contents to publish."
