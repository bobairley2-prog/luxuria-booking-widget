# Luxuria Booking Engine - Design Direction

**Date:** February 19, 2026  
**Goal:** Combine Figma OBE designs with luxuriavacations.com brand + modern simplicity

---

## Current Site Analysis (luxuriavacations.com)

### Brand Identity
- **Tagline:** "Personalized Hand-Crafted Luxury Experiences"
- **Positioning:** Luxury travel agency with real advisors + in-destination experts
- **Key Value Props:**
  1. Handpicked Collection (curated properties)
  2. Personalized Service (human touch)
  3. Exclusive Perks & Offers (VIP benefits)

### Current Design Language
- **Clean & Minimal** - No visual clutter
- **Hero Search** - Prominent "Where are you going?" search
- **White Space** - Generous padding, breathing room
- **Simple Forms** - Destination selector + date picker
- **Service-Oriented** - Hours listed, human contact emphasized

---

## Design Synthesis: What to Keep & What to Add

### ✅ Keep from Current Site
1. **Clean, minimal aesthetic** (not busy/cluttered)
2. **Hero search prominence** (primary CTA)
3. **White background** with strategic imagery
4. **Simple, clear typography** (readable, not overly decorative)
5. **Focus on service/humans** (not just properties)

### ✅ Add from Figma Designs
1. **Rich property imagery** (hero images, galleries)
2. **Structured booking flow** (search → list → detail → checkout)
3. **Pricing transparency** (show rates upfront)
4. **Modern UI components** (cards, modals, filters)
5. **Mobile-optimized layouts** (bottom nav, touch-friendly)

### ⚠️ Avoid
- Overly ornate/luxury clichés (gold accents, script fonts)
- Dense information architecture
- Aggressive sales tactics
- Generic stock photos
- Cluttered interfaces

---

## Updated Design Principles

### 1. **Simplicity First**
- One clear action per screen
- Minimal form fields (only what's needed)
- Progressive disclosure (show more on demand)
- No unnecessary decoration

### 2. **Modern Luxury = Restraint**
- Clean typography (sans-serif primary, serif accents)
- Neutral color palette (white, black, warm grays)
- Strategic use of imagery (hero shots, not patterns)
- Generous white space

### 3. **Human-Centered**
- Emphasize advisor support (live chat, contact options)
- Personalization hints ("Our team can help...")
- Real property photos (not AI/stock unless temporary)
- Clear, conversational copy

### 4. **Performance Matters**
- Fast load times (luxury = effortless)
- Smooth interactions (no janky animations)
- Mobile-first (most bookings happen on phones)
- Accessible (WCAG AA minimum)

---

## Visual Design System

### Colors
```css
/* Primary Palette */
--white: #FFFFFF;
--black: #0A0A0A;
--gray-50: #FAFAFA;
--gray-100: #F5F5F5;
--gray-600: #6B6B6B;
--gray-900: #1A1A1A;

/* Accent (Minimal Use) */
--accent: #2C5F2D; /* Subtle green for CTAs */
--accent-hover: #234D23;

/* Feedback */
--success: #059669;
--error: #DC2626;
--warning: #F59E0B;
```

### Typography
```css
/* Primary Font: Inter (clean, modern) */
--font-sans: 'Inter', -apple-system, sans-serif;

/* Accent Font: Crimson Pro (subtle luxury) */
--font-serif: 'Crimson Pro', Georgia, serif;

/* Scale */
--text-xs: 12px;
--text-sm: 14px;
--text-base: 16px;
--text-lg: 18px;
--text-xl: 20px;
--text-2xl: 24px;
--text-3xl: 30px;
--text-4xl: 36px;
```

### Spacing
```css
/* Generous, but not excessive */
--space-2: 8px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
--space-12: 48px;
--space-16: 64px;
--space-24: 96px;
```

### Components

**Buttons**
- Primary: Black background, white text
- Secondary: White background, black border
- Ghost: Transparent, black text, underline on hover
- Size: Medium padding (12px 24px), comfortable touch target

**Cards**
- White background
- Subtle border (gray-100)
- Minimal shadow (0 2px 8px rgba(0,0,0,0.08))
- 8px border radius
- Hover: subtle lift (shadow increase)

**Forms**
- Clean borders (gray-300)
- Focus: black border, no heavy outlines
- Placeholder: gray-500
- Error: red border + message below
- Success: green checkmark (subtle)

**Images**
- 16:9 aspect ratio (standard)
- Lazy loading (below fold)
- Fade-in on load
- High quality (but optimized)

---

## Page-by-Page Design Brief

### 1. Search Page (Entry Point)

**Layout:**
```
┌─────────────────────────────────────┐
│  [Hero Background - Subtle Luxury]  │
│                                     │
│   "Where would you like to go?"     │
│                                     │
│  [Hotel Search Dropdown]            │
│  [Check-In Date] [Check-Out Date]   │
│  [Guests: 2 Adults]                 │
│                                     │
│         [Search Availability]       │
│                                     │
└─────────────────────────────────────┘
│  About Luxuria                      │
│  ✓ Handpicked Collection            │
│  ✓ Personalized Service             │
│  ✓ Exclusive Perks                  │
└─────────────────────────────────────┘
```

**Key Elements:**
- Hero image: Subtle (not overpowering text)
- Search form: Centered, clear hierarchy
- CTA button: Large, black, high contrast
- Below fold: Value props (current site content)

---

### 2. Listing Page (Search Results)

**Layout:**
```
┌─────────────────────────────────────┐
│  Search Summary + Modify Link       │
├─────────────────────────────────────┤
│  [Filters]  |  Property Cards Grid  │
│  - Price    |  ┌──────────────────┐ │
│  - Rating   |  │ Property Image   │ │
│  - Location |  │ Name + Location  │ │
│             |  │ From $590/night  │ │
│             |  │ [View Details]   │ │
│             |  └──────────────────┘ │
└─────────────────────────────────────┘
```

**Key Elements:**
- Sticky search bar (edit search inline)
- Left sidebar: Minimal filters (collapsible on mobile)
- Property cards: Clean, image-first, pricing clear
- Lazy load: Load 12 properties at a time
- Sort options: Price, Rating, Name

---

### 3. Property Detail Page

**Layout:**
```
┌─────────────────────────────────────┐
│  [Image Gallery - Large]            │
├─────────────────────────────────────┤
│  Property Name                      │
│  Location • Rating                  │
├─────────────────────────────────────┤
│  Description (2-3 paragraphs)       │
├─────────────────────────────────────┤
│  Room Options                       │
│  ┌──────────────────────────────┐   │
│  │ Room Type    | Rate | Select │   │
│  │ Garden View  | $590 | [Book] │   │
│  │ Ocean View   | $811 | [Book] │   │
│  └──────────────────────────────┘   │
└─────────────────────────────────────┘
```

**Key Elements:**
- Image gallery: Modal/lightbox on click
- Clear room comparison table
- Pricing breakdown on hover
- Cancellation policy visible (not hidden)
- "Need help?" live chat widget (bottom right)

---

### 4. Checkout Page

**Layout:**
```
┌──────────────────┬──────────────────┐
│  Guest Details   │  Booking Summary │
│                  │  ─────────────── │
│  [First Name]    │  Property: ...   │
│  [Last Name]     │  Room: ...       │
│  [Email]         │  Dates: ...      │
│  [Phone]         │  Guests: ...     │
│                  │                  │
│  Payment         │  Subtotal: $590  │
│  [Card Details]  │  Taxes: $118     │
│                  │  Total: $708     │
│  [Confirm Book]  │                  │
└──────────────────┴──────────────────┘
```

**Key Elements:**
- Two-column (desktop), stacked (mobile)
- Sticky summary sidebar (desktop)
- Stripe Elements (clean, no Stripe branding)
- Security badges (subtle)
- Terms checkbox (clear, not hidden)

---

## Implementation Strategy

### Phase 1: Core Booking Flow (Week 1)
1. **Search Page** - Hero + search form
2. **Listing Page** - Property grid with filters
3. **Detail Page** - Property info + room selection
4. **Checkout** - Guest info + payment

### Phase 2: Polish & Extras (Week 2)
5. **Confirmation Page** - Booking success
6. **Mobile Optimization** - Touch-friendly, bottom nav
7. **Error States** - Sold out, no results, payment failed
8. **Loading States** - Skeletons, spinners

### Phase 3: Advanced Features (Week 3+)
9. **Multi-room booking** - "Create A Trip"
10. **Save for later** - "Add to Quote"
11. **User accounts** - Sign in, view trips
12. **Live chat widget** - Real advisor support

---

## Success Criteria

**User Experience:**
- [ ] Search → Checkout in under 3 minutes
- [ ] Mobile-friendly (90% of bookings)
- [ ] Clear pricing (no surprises)
- [ ] Fast load times (<2s per page)

**Business Goals:**
- [ ] Increase conversion vs current process
- [ ] Reduce support tickets (self-serve)
- [ ] Showcase "handpicked collection" value
- [ ] Enable personalization touchpoints

**Technical:**
- [ ] Lighthouse score >90
- [ ] WCAG AA accessible
- [ ] Works with UJV API (once OAuth fixed)
- [ ] Deployable to production

---

**Next Step:** Build Search Page prototype using this design direction.
