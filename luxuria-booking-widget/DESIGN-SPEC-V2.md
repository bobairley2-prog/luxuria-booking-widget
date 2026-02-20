# Search Page V2: Edge-to-Edge Imagery

**Design Direction:** Confident Minimalism (Apple-inspired)

---

## Visual Hierarchy

```
┌─────────────────────────────────────────────────────────┐
│ [Full-bleed hero image: infinity pool, sharp, high-res]│
│ [Dark gradient overlay: transparent → rgba(0,0,0,0.4)]  │
│                                                         │
│  LUXURIA                        [Search] [Sign In]     │ ← Top nav, white text
│                                                         │
│                                                         │
│  The world's finest hotels,                            │ ← Hero headline (48px)
│  at your fingertips                                    │   White, bold, left-aligned
│                                                         │
│  ┌─────────────────────────────────────────────────┐  │
│  │ [Search Card - White, Clean, Minimal Shadow]    │  │
│  │                                                 │  │
│  │ Where to?                                       │  │ ← Single search input
│  │ [Hotel name or destination _________________]   │  │
│  │                                                 │  │
│  │ Check-in          Check-out         Guests     │  │ ← Inline inputs
│  │ [Mar 15 ▼]        [Mar 20 ▼]        [2 ▼]     │  │   Minimal styling
│  │                                                 │  │
│  │                   [→ Search Hotels]             │  │ ← Right-aligned CTA
│  └─────────────────────────────────────────────────┘  │
│                                                         │
│  50+ five-star properties  •  Secure booking  •  24/7  │ ← Trust badges (small)
└─────────────────────────────────────────────────────────┘
```

---

## Color System

### Core Palette
```css
--white: #FFFFFF
--black: #000000
--gray-50: #FAFAFA
--gray-600: #64748B
--gray-900: #0F172A
--accent: #0EA5E9 (teal) or #000000 (black CTA)
```

### Usage
- **Background:** Full-bleed image
- **Overlay:** Linear gradient (top: transparent, bottom: rgba(0,0,0,0.4))
- **Text on image:** White (#FFFFFF)
- **Search card:** White (#FFFFFF) with subtle shadow
- **Input borders:** Gray-200 (#E5E7EB)
- **CTA button:** Black background, white text

---

## Typography

### Fonts
- **Display:** SF Pro Display / Inter Display
- **Body:** SF Pro Text / Inter

### Scale
```css
/* Hero headline */
font-size: 48px (desktop), 32px (mobile)
font-weight: 700 (bold)
line-height: 1.1
letter-spacing: -1%
color: white

/* Section labels */
font-size: 14px
font-weight: 500
color: gray-600

/* Input text */
font-size: 16px
font-weight: 400
color: black

/* Trust badges */
font-size: 14px
font-weight: 400
color: white with 80% opacity
```

---

## Layout

### Grid
- **12-column grid** (desktop)
- **Hero image:** Edge-to-edge, 100vw × 100vh
- **Search card:** Max-width 800px, centered horizontally, positioned 60% from top
- **Side padding:** 24px (mobile), 48px (tablet), 80px (desktop)

### Spacing
- **Card padding:** 48px (desktop), 32px (mobile)
- **Input spacing:** 24px between fields
- **Section margins:** 64px (desktop), 40px (mobile)

---

## Components

### 1. Hero Image
- **Source:** Unsplash/Pexels (infinity pool, luxury resort)
- **Treatment:** 
  - High-res (min 1920px wide)
  - Sharp, not soft
  - Dark gradient overlay (top: transparent, bottom: 40% black)
  - `object-fit: cover`
  - `object-position: center`

### 2. Search Card
```css
background: white
border-radius: 16px
box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15)
padding: 48px (desktop), 32px (mobile)
max-width: 800px
```

### 3. Input Fields
**Style:**
- Border: 1px solid #E5E7EB
- Border-radius: 8px
- Padding: 12px 16px
- Font-size: 16px
- Focus: Border becomes black, no outline

**Layout:**
- Desktop: 3 columns (check-in, check-out, guests)
- Mobile: Stack vertically

### 4. CTA Button
```css
background: black
color: white
padding: 14px 32px
border-radius: 8px
font-size: 16px
font-weight: 600
transition: 150ms ease
hover: background #1F2937
```

---

## Motion

### Page Load
```css
Hero image: Fade in (0.6s ease-out)
Search card: Fade in + slide up 20px (0.8s ease-out, delay 0.2s)
Trust badges: Fade in (1s ease-out, delay 0.4s)
```

### Interactions
```css
Input focus: Border color transition (150ms)
Button hover: Background color transition (150ms)
```

### Scroll
- Hero image: Subtle parallax (scroll 0.5x speed)
- Search card: Fixed position until scroll past hero

---

## Responsive Breakpoints

### Desktop (1024px+)
- Full hero image
- Search card centered, 800px max-width
- Inline date/guest inputs

### Tablet (768px - 1023px)
- Hero image (slightly cropped height)
- Search card 90% width
- Inline inputs (tighter spacing)

### Mobile (< 768px)
- Hero image (portrait crop)
- Search card full-width with side padding
- Stacked inputs (vertical)
- Headline 32px

---

## Image Selection

### Primary Hero Image
**Requirements:**
- Infinity pool or luxury resort
- High contrast (works with white text)
- No people (timeless)
- Sharp, professional photography
- Aspect ratio: 16:9 or wider

**Sources:**
1. Unsplash: "luxury infinity pool"
2. Pexels: "five star resort pool"
3. Stock: Getty Images (if budget allows)

**Recommended image:**
```
https://images.unsplash.com/photo-1582719478250-c89cae4dc85b
(Infinity pool overlooking ocean, Maldives-style)
```

---

## Accessibility

- **Contrast ratio:** 7:1 (white text on dark overlay)
- **Focus indicators:** Visible on all inputs
- **Alt text:** "Luxury infinity pool overlooking the ocean"
- **Keyboard navigation:** Tab through all inputs
- **Screen reader:** Proper labels on all form fields

---

## Performance

### Optimization
- Hero image: WebP format, 1920px wide, ~150KB
- Lazy load: None (above-the-fold)
- Fonts: Preload SF Pro or use system fonts
- No video (faster load)

### Target Metrics
- **FCP:** < 1.5s
- **LCP:** < 2.5s (hero image)
- **CLS:** 0 (no layout shift)

---

## Implementation Notes

### Tech Stack
- Next.js 16 + TypeScript
- Tailwind CSS (custom config)
- No external UI libraries
- Native HTML5 form elements

### File Structure
```
app/
  page.tsx               → Main search page
components/
  search/
    HeroImage.tsx        → Full-bleed image with overlay
    SearchCard.tsx       → White card with inputs
    InlineSearch.tsx     → Unified search bar
  ui/
    Input.tsx            → Minimal input component
    Button.tsx           → Black CTA button
```

---

## Success Criteria

**Visual:**
- [ ] Looks like Apple designed it
- [ ] High contrast, readable
- [ ] Clean, not cluttered
- [ ] Timeless aesthetic

**Functional:**
- [ ] Fast load (< 2s LCP)
- [ ] Smooth interactions
- [ ] Mobile-first responsive
- [ ] Accessible (WCAG AA)

**Emotional:**
- [ ] Feels confident
- [ ] Inspires trust
- [ ] Effortless to use
- [ ] Premium, not pretentious

---

**Next Step:** Build this design, deploy to Vercel, get approval.
