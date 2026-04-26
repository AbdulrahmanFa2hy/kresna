# Kresna Footer Design — Full Component Specification

Create a single-page footer section with a two-box layout, large typographical background watermark, and handwritten accent details. Use React + Vite + Tailwind CSS v4 + TypeScript. No additional UI library required.

---

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/vite` plugin, `@import "tailwindcss"` in CSS)
- **Animation**: Motion (Framer Motion) v12
- **Icons**: Lucide React + inline SVGs
- **No shadcn/ui** — all components are hand-crafted

---

## Fonts

Import from Google Fonts: Inter (weights 400, 500, 600, 700, 800, 900) and Caveat (weights 500, 600).

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Caveat:wght@500;600&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-handwriting: "Caveat", cursive;
}
```

- `font-sans` (Inter) for all body text, labels, buttons, and navigation links
- `font-handwriting` (Caveat) for handwritten accent phrases like "Stay in touch!" and "Feeling lucky?"
- Apply `font-handwriting` class wherever handwriting style is needed

---

## Color Palette

**Not using CSS variables or shadcn HSL tokens** — all colors are applied as direct hex values via Tailwind arbitrary values:

| Token | Hex | Usage |
|---|---|---|
| Dark text | `#1a1a1a` | Primary text, headings, active links |
| Background | `#fdfdfd` | Footer background (`bg-[#fdfdfd]`) |
| Light box bg | `#f5f5f5` | Right box background |
| Muted text | `#8c8c8c` | Section labels ("Navigation", "Company"), copyright |
| Subtle text | `#a0a0a0` | Email placeholder, "Feeling lucky?" text |
| Faint text | `#b0b0b0` | Decorative SVG stroke color |
| Watermark | `#f0f0f0` | Large background "Kresna" text |
| Button text | `#f0f0f0` | Subscribe button text |
| Gradient top | `#1349a6` | Blue box gradient start |
| Gradient mid | `#1f73d3` | Blue box gradient middle |
| Gradient bottom | `#4ea0e9` | Blue box gradient end |
| Hover blue | `#3b82f6` | Link hover state |
| Hover blue dark | `#2563eb` | App icon gradient end |
| Icon blue light | `#60a5f8` | App icon gradient start |
| Social bg | `#1a1a1a` / `black` (hover) | Social icon buttons |
| Subscribe bg | `#1a1a1a` / `black` (hover) | Subscribe button |
| White | `#ffffff` | Social icons, input wrapper, inner shadow highlight |

---

## Logo & Assets

- **Logo URL**: `https://res.cloudinary.com/deplilexq/image/upload/v1777209164/logoipsum-383_s9n6s1.svg`
- Logo in blue box: `brightness-0 invert` filter to make it white on the gradient background
- Logo in floating icon: `brightness-0 invert` + `drop-shadow-[0_4px_4px_rgba(0,0,0,0.15)]`
- Brand name "Kresna" next to logo: white, `text-3xl`, `font-bold`, `tracking-tight`

---

## Component Structure

```
App.tsx
└── <div className="min-h-screen bg-white flex flex-col font-sans">
    └── <Footer />
```

### Footer.tsx — Main Component

**SocialIcon** sub-component:
```tsx
const SocialIcon = ({ children, href = "#" }: { children: React.ReactNode; href?: string }) => (
  <a href={href} className="w-9 h-9 md:w-11 md:h-11 bg-[#1a1a1a] rounded-[0.6rem] md:rounded-xl flex items-center justify-center text-white hover:bg-black transition-colors focus:outline-none focus:ring-2 focus:ring-white/50">
    {children}
  </a>
);
```

---

## Footer Layout

Root `<footer>` element:
```
relative w-full min-h-screen bg-[#fdfdfd] flex flex-col justify-end
py-20 md:py-24 lg:py-28 pb-20 md:pb-24 lg:pb-32 overflow-hidden
```

### Main Content Wrapper

```
w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8
```

Inside: a flex container with two boxes side by side:
```
w-full z-10 flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 mb-4
```

---

## Left Box — Blue Gradient Card

Container:
```
w-full md:w-[45%] lg:w-[40%] xl:w-[35%]
aspect-[1/0.85] md:aspect-auto md:h-[400px] lg:h-[480px]
rounded-[2rem] lg:rounded-[2.5rem]
bg-gradient-to-b from-[#1349a6] via-[#1f73d3] to-[#4ea0e9]
shadow-inner p-8 lg:p-10
flex flex-col justify-between overflow-hidden relative
```

### Top Area — Logo
- Flex row with `items-center gap-3 relative z-10`
- `<img>` with logo URL, `h-8 md:h-9 w-auto filter brightness-0 invert`
- `<span>` "Kresna" — `text-white text-3xl font-bold tracking-tight`

### Bottom Area
- `<div className="relative z-10 mt-auto pt-8">`

**Heading**:
```
text-white text-[28px] md:text-[32px] lg:text-[36px] font-medium leading-[1.1] mb-8
```
Content:
```
Smarter sales automation,
powered by AI.
```
"powered by AI." wrapped in `<span className="text-white/60">` for muted contrast.

**Bottom Row**: flex row, `items-center justify-between mt-auto`
- Left: Handwritten text "Stay in touch!" — `font-handwriting text-white/80 text-[1.4rem] md:text-[1.75rem] tracking-wide rotate-[-3deg] inline-block -mt-2`
- Right: Social icon row — flex with `gap-2`, four SocialIcon components:
  - Discord (viewBox `0 0 24 24`, path starts with `M20.317 4.3698...`)
  - X/Twitter (viewBox `0 0 24 24`, path starts with `M18.244 2.25h3.308...`)
  - LinkedIn (viewBox `0 0 24 24`, path starts with `M20.447 20.452...`)
  - GitHub (viewBox `0 0 24 24`, path starts with `M12 0c-6.626...`)

---

## Right Box — Light Gray Card

Container:
```
w-full md:flex-1
aspect-[1/0.85] md:aspect-auto md:h-[400px] lg:h-[480px]
rounded-[2rem] lg:rounded-[2.5rem]
bg-[#f5f5f5] p-8 lg:p-10
flex flex-col justify-between relative
```

### Top Section
`flex flex-row justify-between items-start`

**Navigation columns** — `flex gap-12 lg:gap-20`:

Column 1 — "Navigation":
- Label: `font-handwriting text-[#8c8c8c] text-xl lg:text-2xl mb-4`
- Links: `text-[#1a1a1a] text-[15px] font-medium hover:text-blue-600 transition-colors`
  - How it works
  - Features
  - Pricing
  - Testimonials
  - FAQ

Column 2 — "Company":
- Same label style
- Links (same style):
  - Blog
  - About
  - Terms and Condition
  - Privacy Policy

### Floating App Icon
Positioned absolutely at `absolute -top-12 -right-2 md:-top-16 md:-right-4 lg:-top-20 lg:-right-6 z-20`

Icon container:
```
w-[100px] h-[100px] md:w-[130px] md:h-[130px] lg:w-[160px] lg:h-[160px]
bg-gradient-to-br from-[#60a5f8] via-[#3b82f6] to-[#2563eb]
rounded-[1.75rem] md:rounded-[2.25rem] lg:rounded-[3rem]
shadow-[15px_25px_30px_-5px_rgba(37,99,235,0.3),inset_0px_5px_15px_rgba(255,255,255,0.4)]
flex items-center justify-center
transform -rotate-[12deg] transition-transform hover:-rotate-[8deg]
```
Contains the logo image with `brightness-0 invert drop-shadow-[0_4px_4px_rgba(0,0,0,0.15)]`, sized `h-12 md:h-16 lg:h-20`.

Below the icon, an absolute-positioned decorative element:
- SVG pen/arrow stroke icon (viewBox `0 0 40 40`, `w-5 h-5 text-[#b0b0b0] absolute -top-4 -left-3 -rotate-[20deg]`)
- "Feeling lucky?" text: `font-handwriting text-[#a0a0a0] text-lg md:text-[1.35rem] -rotate-6 whitespace-nowrap ml-4`
- Wrapper: `absolute -bottom-6 left-1/2 -translate-x-[60%] flex flex-col items-center`

### Bottom Section
`flex flex-col md:flex-row justify-between items-start md:items-end mt-16 md:mt-auto gap-8 md:gap-0`

**Copyright** (left):
```
text-[#8c8c8c] text-[12px] md:text-[13px] whitespace-nowrap
```
Content: `© 2025 Kresna. All rights reserved.`

**Newsletter** (right):
- Muted text: `text-[#8c8c8c] text-[16px] md:text-[17px] font-medium leading-tight` — "AI moves fast."
- Bold text: `text-[#1a1a1a] text-[18px] md:text-[20px] font-bold leading-tight mt-0.5 mb-3` — "Stay ahead with Kresna."

**Email Input Wrapper**:
```
flex items-center bg-white rounded-[1rem] md:rounded-[1.25rem]
p-1.5 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)]
w-full max-w-[320px]
```

Input:
```
flex-1 bg-transparent border-none outline-none
px-3 md:px-4 text-[13px] md:text-[14px] text-[#1a1a1a]
w-[130px] md:w-auto placeholder-[#a0a0a0] font-medium
```
Placeholder: "Enter email address"

Subscribe button:
```
bg-[#1a1a1a] hover:bg-black text-[#f0f0f0]
text-[13px] md:text-[14px] font-semibold
px-4 md:px-5 py-2.5
rounded-[0.75rem] md:rounded-[1rem]
transition-colors whitespace-nowrap
```

---

## Large Typographical Background Watermark

Below the two-box row, another wrapper with same max-width/padding:

Container: `w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8`

Watermark wrapper:
```
w-full flex justify-center items-end mt-4 md:mt-8
relative z-0 pointer-events-none select-none
style={{ marginBottom: '-6vw' }}
```

The watermark text:
```
text-[28vw] font-bold tracking-tighter leading-[0.7] text-[#f0f0f0]
```
Content: `Kresna`

This creates an oversized, semi-transparent brand name that sits behind/below the footer boxes, partially cropped by overflow-hidden on the parent.

---

## Responsive Breakpoints

| Breakpoint | Changes |
|---|---|
| **Base (mobile)** | Single column stack, aspect-ratio `[1/0.85]` for both boxes, smaller sizing |
| **md (768px)** | Side-by-side layout, fixed heights (400px), larger gaps, larger social icons (11x11), wider input |
| **lg (1024px)** | Taller boxes (480px), wider padding (p-10), larger gaps (gap-8), bigger floating icon (160x160), larger headings |
| **xl (1280px)** | Left box narrows to `w-[35%]` for better proportion |

---

## Interactions & Hover States

- **Navigation links**: `hover:text-blue-600 transition-colors`
- **Social icons**: `hover:bg-black transition-colors` (from `#1a1a1a`)
- **Subscribe button**: `hover:bg-black transition-colors` (from `#1a1a1a`)
- **Floating app icon**: `hover:-rotate-[8deg]` (from `-rotate-[12deg]`) with `transition-transform`
- **Social icons focus**: `focus:outline-none focus:ring-2 focus:ring-white/50`

---

## Design Notes

- **No decorative blobs, gradients, or overlays** beyond the two boxes and watermark
- **No scroll animations or parallax** — static, clean layout
- The large "Kresna" watermark provides all visual depth and brand presence
- The floating blue icon adds a playful, dimensional element that breaks out of the box boundary
- Handwritten Caveat text adds personality and human warmth to the tech brand
- The blue gradient box anchors the brand identity; the light gray box provides information density
- Overall aesthetic: modern, clean, professional SaaS/AI company footer
- Background color `#fdfdfd` is an off-white that's softer than pure white
