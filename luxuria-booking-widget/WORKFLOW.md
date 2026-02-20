# Luxuria Booking Widget - Development Workflow

## Overview
Structured product development with design approval gates and review checkpoints.

---

## Roles

**Founder (IMF):**
- Approve designs before implementation
- Review completed features
- Make final ship/iterate/scrap decisions

**CTO (LuxClawd):**
- Create feature specs with mockups
- Implement approved features
- Deploy preview URLs for review
- QA before handoff

---

## Workflow Steps

### 1. Feature Request (Founder Creates)
**Use:** [Feature Request Template](https://github.com/bobairley2-prog/luxuria-booking-widget/issues/new?template=feature.md)

- Describe what you want built
- Add design mockup or reference
- List acceptance criteria
- Set priority

**Label:** `feature, needs-approval`

---

### 2. Design Approval (Founder Reviews)
LuxClawd will:
- Ask clarifying questions (if needed)
- Create mockup/wireframe (if not provided)
- Wait for approval

**Founder:** Review and either:
- ✅ Approve → change label to `approved`
- 🔄 Request changes → comment with feedback
- ❌ Close → wrong direction

---

### 3. Implementation (LuxClawd Builds)
Once approved:
- Build feature on a branch
- Deploy Vercel preview URL
- Comment on issue with preview link
- Create Design Review issue

---

### 4. Design Review (Founder Tests)
**Use:** [Design Review Template](https://github.com/bobairley2-prog/luxuria-booking-widget/issues/new?template=design-review.md)

LuxClawd will:
- Deploy preview URL
- Add screenshots
- Complete QA checklist

**Founder:** Test the preview and decide:
- ✅ **Approved** → LuxClawd merges and deploys
- 🔄 **Changes requested** → LuxClawd iterates
- ❌ **Scrap** → Close and rethink

---

### 5. Ship
Once approved:
- LuxClawd merges to `main`
- Auto-deploys to production (Vercel)
- Close all related issues

---

## Issue Labels

| Label | Meaning |
|-------|---------|
| `needs-approval` | Waiting for founder approval |
| `approved` | Founder approved, ready to build |
| `in-progress` | LuxClawd actively working on it |
| `design-review` | Ready for founder to test preview |
| `changes-requested` | Founder wants changes |
| `bug` | Something broken |
| `feature` | New functionality |
| `enhancement` | Improvement to existing feature |

---

## Tools

- **GitHub Issues:** Feature specs, bug tracking, design reviews
- **Vercel:** Automatic preview deployments for every branch
- **Slack:** Quick discussions, notifications

---

## Quick Links

- **Repository:** https://github.com/bobairley2-prog/luxuria-booking-widget
- **Issues:** https://github.com/bobairley2-prog/luxuria-booking-widget/issues
- **New Feature:** https://github.com/bobairley2-prog/luxuria-booking-widget/issues/new?template=feature.md
- **New Bug:** https://github.com/bobairley2-prog/luxuria-booking-widget/issues/new?template=bug.md
- **New Design Review:** https://github.com/bobairley2-prog/luxuria-booking-widget/issues/new?template=design-review.md

---

## Example Flow

```
1. Founder creates issue: "Build property listing page"
   - Attaches wireframe
   - Lists acceptance criteria
   - Label: needs-approval

2. LuxClawd asks: "Should we show map view by default?"

3. Founder approves design
   - Changes label to: approved

4. LuxClawd builds feature
   - Deploys preview: https://luxuria-xyz123.vercel.app
   - Creates Design Review issue

5. Founder tests preview
   - Requests change: "Make property cards larger"

6. LuxClawd updates
   - Pushes new preview

7. Founder approves
   - LuxClawd merges to main
   - Auto-deploys to production

8. Done! Close all issues.
```

---

**Remember:** No surprises. Every feature gets approval before building and review before shipping.
