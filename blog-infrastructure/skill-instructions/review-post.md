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

## After a READY TO PUBLISH verdict — MDX creation

When the verdict is **READY TO PUBLISH**, immediately write the MDX file. No browser, no Codex, no handoff files — all backend.

### Step 1: Read the correct MDX template

Use the Glob tool with pattern `**/blog-infrastructure/templates/[post-type]-template.mdx` to locate the right template. Read it in full. Post types: `product-post`, `pillar-post`, `skip-this`.

### Step 2: Write the completed MDX file

Fill every `{{PLACEHOLDER}}` with the post's content and frontmatter values. Save to:
`[workspace-root]/src/content/posts/[slug].mdx`

To find the workspace root: Glob `**/blog-infrastructure/END-TO-END-WORKFLOW.md` and derive root from the path.

Rules:
- `status` is always `"draft"`
- `<AffiliateDisclosure />` must be the first element in the post body
- `SourceReviewQuote` blocks must be present (from the writing phase)
- `CommentsSection` is auto-rendered by the app — do NOT add it to the MDX
- `PillarLink` uses `to` + `label` props: `<PillarLink to="/sleep" label="Sleep" />`
- No `{{` remaining in the file — verify before saving

### Step 3: Run /pinterest skill and append to queue files

Immediately after writing the MDX file, do two things:

**A. Run the pinterest skill** to generate 3 pins for this post. Then append the output to `blog-infrastructure/pinterest-queue.md` using this format:

```
---
## [Post Title]
**Slug:** [slug]
**Pillar board:** [pillar name]
**Post URL:** https://itsmomapproved.com/blog/[slug]

**Pin 1**
Headline: [headline]
Description: [full pin description]
Text overlay: [short text for image overlay]

**Pin 2**
Headline: [headline]
Description: [full pin description]
Text overlay: [short text for image overlay]

**Pin 3**
Headline: [headline]
Description: [full pin description]
Text overlay: [short text for image overlay]

*Image file: /images/posts/[slug].jpg (create in Canva — see image-prompts.md)*
```

**B. Append a Canva image prompt** to `blog-infrastructure/image-prompts.md` using this format:

```
---
## [Post Title]
**Slug:** [slug]
**File to save as:** /images/posts/[slug].jpg

**Featured image prompt (1200x630px):**
[Write a specific Canva AI / Magic Media prompt for this post. Be concrete: describe the scene, lighting, mood, and subject. Example: "Soft natural light, white nursery shelf with a cream-colored Hatch Rest white noise machine glowing softly, newborn sleeping in background, warm tones, lifestyle photo style, no text"]

**Pinterest pin background prompt (1000x1500px):**
[Same scene but vertical crop — describe what should be visible in a tall format]
```

### Step 4: If this is a multi-post session

If more posts are queued for this session, tell the user: "Post [N] done — MDX file written. Moving to the next post." Do NOT push to GitHub yet. Wait until all posts for the session are complete, then push everything in one commit.

If this is the last post (or only post), proceed to the GitHub push below.

### Step 4: GitHub push (end of session)

```bash
cd /tmp
git clone https://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@github.com/Camesha-Russell/old-website-ideas.git itsma-session-push
cd itsma-session-push
git config user.email "camesha.russell03@gmail.com"
git config user.name "Camesha Russell"
```

Copy each new MDX file from the workspace into the cloned repo:
```bash
cp [workspace]/src/content/posts/[slug].mdx src/content/posts/[slug].mdx
```

Then commit and push all at once:
```bash
git add src/content/posts/
git commit -m "Add [N] draft posts: [comma-separated titles]"
git push https://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@github.com/Camesha-Russell/old-website-ideas.git HEAD:main
```

### Step 6: Tell Camesha

"[N] posts written and pushed to GitHub as drafts:
- [Post title 1]
- [Post title 2]
- [Post title 3]

**To do when you're ready:**
1. Approve in Lovable — flip each post from draft to published
2. Images — open `blog-infrastructure/image-prompts.md`, paste each prompt into Canva Magic Media, save as `/images/posts/[slug].jpg`
3. Pinterest — open `blog-infrastructure/pinterest-queue.md`, all 3 pins per post are ready to copy-paste when you're posting"
