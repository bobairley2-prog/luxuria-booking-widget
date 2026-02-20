# Luxuria Booking Widget

A luxury hotel booking experience - curated, elegant, and focused on 100 exceptional properties.

## Design Philosophy

**Less is more.**
- No complex filters (curated collection = browse/scroll)
- No multi-room booking (single room MVP)
- No user accounts (guest checkout)
- Focus on imagery, whitespace, and luxury feel

**Inspired by:** Apple product pages, luxury magazine layouts, high-end hospitality sites

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS (custom luxury design system)
- **API:** UJV Staging API (tested & documented)
- **Deployment:** Vercel
- **Payments:** Stripe (test mode)

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.local.template .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Environment Variables

See `.env.local.template` - credentials are already configured for UJV staging API.

## Project Structure

```
luxuria-booking-widget/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Landing page
│   ├── browse/                   # Browse collection
│   ├── property/                 # Property detail
│   ├── availability/             # Availability results
│   ├── checkout/                 # Checkout flow
│   └── confirmation/             # Booking confirmation
├── components/
│   ├── ui/                       # Base components (Button, Card, Input)
│   ├── property/                 # Property-specific components
│   └── layout/                   # Layout components
├── lib/
│   ├── api/                      # UJV API client
│   ├── types/                    # TypeScript types
│   └── utils/                    # Helper functions
├── public/                       # Static assets
└── styles/                       # Global styles
```

## Design System

### Typography
- **Headings:** Playfair Display (serif)
- **Body:** Inter (sans-serif)

### Colors
- **Primary:** Black & White
- **Accent:** Gold (#D4AF37)
- **Grays:** 50-900 scale

### Spacing
- Generous vertical rhythm (2-4rem)
- Large padding for luxury feel
- Max-width constraints for readability

### Components
- Button (primary, secondary, ghost)
- Card (with image, content sections)
- Input (with validation)
- Modal, Calendar, Gallery (coming soon)

## Development Workflow

### Using Antfarm

This project uses Antfarm for feature development:

```bash
# List available workflows
~/.openclaw/workspace/antfarm/bin/antfarm workflow list

# Run feature-dev workflow
~/.openclaw/workspace/antfarm/bin/antfarm workflow run feature-dev "Build landing page"

# Check status
~/.openclaw/workspace/antfarm/bin/antfarm workflow status "landing"

# View dashboard
~/.openclaw/workspace/antfarm/bin/antfarm dashboard
```

### User Stories

See `user-stories.md` for detailed UAC and acceptance criteria for all 6 core features.

### Sprint Plan

- **Week 1:** Landing, Browse, Property Detail
- **Week 2:** Availability, Checkout
- **Week 3:** Confirmation + Polish

## API Integration

All API calls use `lib/api/ujv-client.ts` wrapper:
- Handles authentication (password grant + refresh token)
- Auto-refreshes tokens before expiry
- Server-side only (no client exposure)

**Tested endpoints:**
- Content: properties summary, property details
- Availability: real-time pricing with basket creation
- Booking: add to basket, confirm booking
- Trips: get trip details

See `api-testing-progress.md` for full API documentation.

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Environment Variables (Vercel)

Add these in Vercel dashboard:
- `UJV_API_BASE_URL`
- `UJV_CLIENT_ID`
- `UJV_CLIENT_SECRET`
- `UJV_USERNAME`
- `UJV_PASSWORD`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_SECRET_KEY`

## Performance Targets

- Lighthouse score: >85
- First Contentful Paint: <1.5s
- Time to Interactive: <3s

## MVP Scope

**In Scope:**
- Browse 100 properties
- Property detail pages
- Date/occupancy selection
- Availability search
- Checkout (guest info + payment)
- Booking confirmation

**Out of Scope (v2):**
- Search/filters
- Multi-room booking
- User accounts
- Saved quotes
- Trip management

**Rationale:** Ship lean, validate with users, add complexity only when needed.

## Resources

- **Design Reference:** [Web Documents Preview](https://web-documents-frontend.vercel.app/documents/itinerary/demo-preview)
- **API Docs:** [UJV Swagger](https://api-staging.ujv.app/v1/ta/swagger/index.html)
- **User Stories:** `user-stories.md`
- **MVP Plan:** `luxuria-mvp-plan.md`

## Support

For questions or issues, contact the dev team via Slack: #all-clawdbot-for-lux

---

**Built with ⚡ by LuxClawd**
