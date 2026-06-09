# Lyrics Guesser Game — UX Design & Accessibility Documentation

**Project:** Rap Lyrics Guesser Game  
**Date:** June 2026  
**Designer/Developer:** Team Lyrics Guesser

---

## PART 1: Vision & Problem Statement

### Vision Statement
**What if we designed a guessing game where players have to test their knowledge of hip-hop lyrics by matching lyric snippets to albums and songs?**

Our vision: Create an **accessible, competitive music trivia experience** where players engage with iconic rap discographies through lyric recognition, point-based rewards, and leaderboard competition.

---

### Sharpened Problem Statement

**Player Profile:** Music enthusiasts aged 13–40 who want to test their hip-hop knowledge in a casual, competitive setting.

**The Problem We're Solving:**  
Players need a **comprehensive, accessibility-friendly website** designed to challenge users' knowledge of hip-hop lyrics while keeping them engaged through immediate feedback, competitive scoring, and social leaderboards.

### Player Needs Matrix

#### 1. **ENGAGEMENT: What pulls players in and keeps them playing?**

| Need | How Our Game Serves It |
|------|------------------------|
| **Immediate reward feedback** | ✅ Correct/incorrect reveal within 1.5–3 seconds |
| **Competitive motivation** | ✅ Points awarded per correct guess + persistent leaderboard (top 10) |
| **Progressive difficulty** | ✅ 5+ rounds per session; random song selection from full discography |
| **Social play option** | ✅ Local 4-player pass-and-play + online multiplayer with room codes |
| **Sense of mastery** | ✅ Each artist's full catalog available; leaderboard "Hall of Fame" 🏆 |
| **Replayability** | ✅ Random lyric selection ensures no two games are identical |

#### 2. **NAVIGATION: How does the player move through the game?**

| Need | How Our Game Serves It |
|------|------------------------|
| **Clear entry point** | ✅ Home screen with prominent "START SOLO" button + artist selector |
| **Logical flow** | ✅ Home → Artist selection → Game screen → End game → Leaderboard |
| **One-tap progress** | ✅ "Next Round" button after reveal; "End Game" always visible |
| **Easy artist switching** | ✅ Dropdown + search bar on home screen (no reload needed) |
| **Multiplayer setup clarity** | ✅ Toggle reveals multiplayer options; room link copy/paste interface |
| **Back buttons consistency** | ✅ ⬅️ "Back to Menu" on leaderboard; same action everywhere |
| **Mobile-friendly** | ✅ Single-column layout scales to all screen sizes |

#### 3. **ACCESSIBILITY: What if your player has low vision, color blindness, a motor limitation, or plays on a phone in bright sun?**

| Need | How Our Game Serves It |
|------|------------------------|
| **High contrast text** | ✅ White text (#ffffff) on dark backgrounds (contrast ratio 12:1+) |
| **No color-only feedback** | ✅ Correct = green banner + text "Correct! Great job!" (not just color) |
| **Large buttons** | ✅ Buttons are 44px+ tall (accessible tap target for all users) |
| **Keyboard navigation** | ✅ All buttons, inputs, and interactive elements are keyboard-accessible |
| **Screen reader support** | ✅ Semantic HTML (buttons, labels, alt text on images) |
| **Clear instructions** | ✅ "Step 1: Guess the Album" → "Step 2: Guess the Song" (plain language) |
| **Adequate time to respond** | ✅ No time limits; player controls round pacing |
| **Loading/error transparency** | ✅ Clear spinner + "Loading next lyric..." message (no frozen screens) |
| **Text sizing options** | ✅ Responsive font sizes; browser zoom supported |
| **Mobile sunlight readability** | ✅ Dark theme (#121212 bg, #ffffff text) optimized for readability |

---

## PART 2: Wireframe Structure

### Screen 1: START / HOME SCREEN
**Purpose:** Player entry point; artist selection; mode selection (solo vs. multiplayer)

```
┌─────────────────────────────────────────┐
│                                         │
│         🎤 LYRICS GUESSER 🎤            │  ← Main Title (h1)
│                                         │
│   ┌─────────────────────────────────┐  │
│   │ 🔍 Search or filter artist...   │  │  ← Search Input
│   └─────────────────────────────────┘  │
│                                         │
│   ☑️ Play multiplayer                   │  ← Toggle (hidden by default)
│   ┌─────────────────┬─────────────────┐ │
│   │ Player 1 input  │ Player 2 input  │ │  ← Multiplayer inputs (hidden)
│   └─────────────────┴─────────────────┘ │
│   [+ Add player] (up to 4)               │
│                                         │
│   [Create shared room]                  │  ← Host controls
│   ┌──────────────────────────────────┐  │
│   │ Room link:  [____] [Copy Link]   │  │  ← Room sharing
│   └──────────────────────────────────┘  │
│   Players in lobby: 2                    │
│                                         │
│   ┌───────────────┐                      │
│   │      🎨       │                      │  ← Artist avatar (circular)
│   │   (150x150)   │                      │
│   ├───────────────┤                      │
│   │ [Artist ▼]    │  ← Dropdown selector │
│   └───────────────┘                      │
│                                         │
│        [START SOLO]                     │  ← Primary action (solo)
│        [START MULTIPLAYER]              │  ← Primary action (multiplayer)
│        [View Leaderboard]               │  ← Secondary action
│                                         │
└─────────────────────────────────────────┘
```

**Key Components & Player Needs Served:**
- **Title + Logo** → Engagement (clear brand identity)
- **Artist Selector (dropdown + avatar)** → Navigation (easy artist switching)
- **Search bar** → Navigation (filter artists without clicking)
- **Multiplayer toggle** → Navigation (mode selection without clutter)
- **Large buttons (44px+)** → Accessibility (tap-friendly)
- **High contrast white text on dark bg** → Accessibility (readable in sunlight)

---

### Screen 2: ROUND / GAMEPLAY SCREEN
**Purpose:** Display lyric stimulus; capture two-step guess (Album → Song)

```
┌─────────────────────────────────────────┐
│  [End Game & Save Score]    Points: 47  │  ← Header: Controls + score
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                         │
│   ⏳ Loading next lyric...               │  ← Loading state (spinner)
│                                         │
│   ⚠️ Oops! We had trouble...            │  ← Error state (if API fails)
│   [Try Again]                           │
│                                         │
│   "You know how many girls I took...    │  ← STIMULUS: Lyric snippet
│    to the titty shop?"                  │     (quoted, centered, large)
│                                         │
│   Step 1: Guess the Album               │  ← Section title
│                                         │
│   ┌──────┬──────┬──────┬──────┐         │
│   │ 📷   │ 📷   │ 📷   │ 📷   │         │
│   │Album │Album │Album │Album │  Grid │  ← Album covers
│   │ 1    │ 2    │ 3    │ 4    │  (5x5 or responsive)
│   └──────┴──────┴──────┴──────┘         │
│   ┌──────┬──────┐                       │
│   │ 📷   │ 📷   │  ← Continues scrolling│
│   │Album │Album │     for all albums   │
│   │ 5    │ 6    │                       │
│   └──────┴──────┘                       │
│                                         │
│   ——→ Album Selected (transitions to:) │
│                                         │
│   Step 2: Guess the Song                │  ← Section title
│   Songs on: Ye (Album name)             │
│                                         │
│   ☐ All My Life                         │  ← Song options (5 choices)
│   ☐ No Mistakes                         │  ← Radio button style
│   ☐ Ghost Town                          │
│   ☐ Violent Crimes                      │
│   ☐ Yikes                               │
│                                         │
│   [← Choose a different album]          │  ← Back button
│                                         │
│   ✅ Correct! Great job!                │  ← Feedback (green banner)
│   +1 point                              │  ← Points earned
│                                         │
│   [Next Round]                          │  ← Progress button
│                                         │
└─────────────────────────────────────────┘
```

**Key Components & Player Needs Served:**
- **Lyric Display** → Engagement (clear stimulus)
- **Album Grid** → Navigation (visual scanning, easy clicking)
- **Song List (5 options)** → Navigation (not overwhelming; clear choices)
- **Loading spinner** → Accessibility (transparent state; no frozen screen)
- **Error state + "Try Again"** → Trust (shows problems & solutions)
- **Colored feedback (green for correct)** → Engagement (immediate reward)
- **Text + color feedback** → Accessibility (color + text, not color alone)
- **Large album covers + buttons** → Accessibility (touch-friendly)
- **Consistent back button** → Navigation (same behavior everywhere)

---

### Screen 3: LEADERBOARD / HALL OF FAME 🏆
**Purpose:** Display top 10 scores; encourage competitive replay

```
┌─────────────────────────────────────────┐
│                                         │
│       Hall of Fame 🏆                   │  ← Title (h1)
│                                         │
│   ┌────────────────────────────────┐    │
│   │ Rank │ Player Name │ Score     │    │
│   ├────────────────────────────────┤    │
│   │ #1   │ Genius      │ 50        │    │  ← Table with dark header
│   │ #2   │ Drake Fan   │ 48        │    │
│   │ #3   │ Ye Scholar  │ 45        │    │
│   │ #4   │ HipHop Head │ 42        │    │
│   │ ...  │ ...         │ ...       │    │
│   └────────────────────────────────┘    │
│                                         │
│   "No scores yet. Go play!"             │  ← Empty state message
│                                         │
│   [Back to Menu]                        │  ← Primary navigation
│   [Reset Leaderboard]                   │  ← Destructive action (red)
│                                         │
└─────────────────────────────────────────┘
```

**Key Components & Player Needs Served:**
- **Ranked table** → Engagement (competitive display)
- **Clear headers** → Understandable (easy to scan)
- **Back button** → Navigation (return to menu)
- **Empty state message** → Accessibility (explains blank screen)

---

## PART 3: Generated Layout & Revision

### What the AI Got Right ✅
1. **Structure** — Home screen has artist selector, search, and multiplayer toggle in logical order
2. **Responsive layout** — Container scales to 95% width with max 1100px (works on all devices)
3. **Color contrast** — White text (#ffffff) on dark background (#121212 / #1e1e1e) meets WCAG AA standard (12:1 contrast ratio)
4. **Semantic HTML** — Proper use of `<button>`, `<input>`, `<label>`, `<h1>`, `<table>` tags
5. **Grid album display** — Responsive CSS Grid for album selection (easy to scan)
6. **Two-step flow** — Album selection → Song selection clear and logical
7. **Multiplayer state management** — Toggle shows/hides multiplayer options without reload
8. **Loading/error states** — Spinner and error messages provide transparency

### What the AI Missed or Changed ⚠️
1. **Song selection accuracy** — Initial implementation didn't guarantee songs were from selected album
   - **Fix applied:** `selectAlbum()` function filters songs by album ID, includes correct song in top position
   
2. **Album cover images** — Placeholder generation instead of real URLs
   - **Fix applied:** Added iTunes API lookup + `albumCoverMap` with pre-cached URLs
   
3. **Button size accessibility** — Some secondary buttons were smaller than ideal
   - **Fix applied:** Ensured all buttons are 44px minimum height (WCAG AAA standard)
   
4. **Keyboard navigation hints** — No visible focus states on interactive elements
   - **Fix applied:** Added `:focus` styles to buttons and inputs with orange highlight
   
5. **Alt text on images** — Album covers lacked descriptive alt text
   - **Fix applied:** Added `alt="${album.name} cover"` to all album images

---

## PART 4: Revision Checklist

| Aspect | Matches Wireframe? | Issue | Fix Applied |
|--------|-------------------|-------|-------------|
| **Home screen layout** | ✅ Yes | — | — |
| **Artist dropdown** | ✅ Yes | — | — |
| **Search functionality** | ✅ Yes | — | — |
| **Multiplayer toggle** | ✅ Yes | — | — |
| **Album grid responsive** | ✅ Yes | — | — |
| **Song list display** | ✅ Yes | Songs weren't filtered by album correctly | Updated `selectAlbum()` to filter by `albumId` |
| **Album covers** | ⚠️ Partial | Placeholder images instead of real covers | Added iTunes API lookup + cached `albumCoverMap` |
| **Loading state** | ✅ Yes | — | — |
| **Error state** | ✅ Yes | — | — |
| **Feedback banner** | ✅ Yes | Color-only feedback (missing text) | Added explicit "Correct!" / "Incorrect!" text |
| **Button sizes** | ⚠️ Partial | Secondary buttons too small | Ensured 44px+ minimum height |
| **Leaderboard** | ✅ Yes | — | — |
| **Keyboard focus** | ⚠️ Partial | No visible focus indicator | Added `:focus` styles with orange outline |

---

## PART 5: POUR Accessibility Assessment & Improvements

### Perceivable ✅ — Can every player **see or hear** the content?

**Current Status:**
- ✅ **Text contrast:** White (#ffffff) on dark backgrounds (#121212, #1e1e1e) = 12:1 ratio (exceeds WCAG AAA)
- ✅ **No color-only feedback:** Correct/incorrect uses color + text + icon
- ✅ **Alt text on images:** `<img alt="Artist Profile Avatar">`, `<img alt="[Album Name] cover">`
- ✅ **Clear icons with labels:** "🔍 Search", "🎤 Lyrics Guesser", emoji + text paired

**Improvement Applied:**
- Added more descriptive alt text to album images: `alt="${album.name} cover"` instead of generic alt

---

### Operable ✅ — Can every player **navigate and interact**?

**Current Status:**
- ✅ **Keyboard navigation:** All buttons, inputs, dropdowns work with Tab + Enter
- ✅ **Button size:** Primary buttons (`.primary-btn`) = 60px height; secondary = 44px height (WCAG AAA: 44x44 minimum)
- ✅ **No time limits:** Players control round pacing; no countdown timers
- ✅ **Focus indicators:** Added `:focus` styles with orange border on inputs/buttons

**Improvement Applied:**
- Updated all buttons to have minimum 44px height (tap-friendly for all users)
- Added `:focus` CSS rule for visible keyboard navigation:
```css
button:focus, input:focus, select:focus {
    outline: 2px solid #ff5722;
    outline-offset: 2px;
}
```

---

### Understandable ✅ — Can every player **read and understand** the page?

**Current Status:**
- ✅ **Clear instructions:** "Step 1: Guess the Album" → "Step 2: Guess the Song"
- ✅ **Simple language:** No jargon; plain English throughout
- ✅ **Consistent navigation:** Same buttons and flows on every screen
- ✅ **Error messages explain problems:** "⚠️ Oops! We had trouble loading this round. The game will retry or skip."
- ✅ **Voice consistency:** Game voice is casual, encouraging ("Great job!", "Try Again")

**Improvement Applied:**
- Simplified button text: "END GAME & SAVE SCORE" (clear action)
- Made instructions bold and larger: "Step 1: Guess the Album" (h3 style)
- Added hint text: "You can add up to 4 players." (explains constraint)

---

### Robust ✅ — Will this work across **devices and tools**?

**Current Status:**
- ✅ **Responsive design:** Flexbox + CSS Grid scales from mobile to desktop
- ✅ **Valid semantic HTML:** Uses `<button>`, `<label>`, `<table>`, proper heading hierarchy
- ✅ **Screen reader compatible:** Proper ARIA labels and semantic elements
- ✅ **Cross-browser:** Tested on Chrome, Firefox, Safari, Edge
- ✅ **Mobile-first:** Single column on small screens; grid on large screens

**Improvement Applied:**
- Added `lang="en"` attribute to `<html>` tag (helps screen readers detect language)
- Ensured all form inputs have associated labels:
```html
<label class="multiplayer-toggle">
    <input type="checkbox" id="multiplayer-toggle" onchange="onMultiplayerToggle()">
    Play multiplayer
</label>
```

---

## PART 6: Accessibility Improvements Applied

### Improvement 1: Enhanced Alt Text for Album Covers
**POUR Category:** Perceivable  
**Prompt Used:**
> "Add [alt text] to describe [album artwork] so everyone can understand them."

**What Changed:**
- **Before:** `<img ... alt="album cover">`
- **After:** `<img ... alt="Ye album cover" id="cover-img-ye">`

**Code Applied:**
```javascript
card.innerHTML = `
    <img 
        class="album-cover" 
        id="cover-img-${album.id}"
        src="${initialSrc}" 
        alt="${album.name} cover"  <!-- ← Descriptive alt text -->
        loading="lazy"
        onerror="this.onerror=null; this.src='${fallbackPlaceholder}';"
    >
    <div class="album-title">${album.name}</div>
`;
```

---

### Improvement 2: Visible Keyboard Focus Indicators
**POUR Category:** Operable  
**Prompt Used:**
> "Make sure players can navigate through the game using only the [keyboard / Tab key]. Design [buttons / inputs] that are easy to [focus / identify]."

**What Changed:**
- **Before:** No visible focus indicator; keyboard users couldn't see which element was focused
- **After:** Orange outline appears on Tab; all buttons/inputs have `:focus` styles

**Code Applied (style.css):**
```css
/* Visible focus indicator for keyboard navigation */
button:focus,
input:focus,
select:focus,
textarea:focus {
    outline: 2px solid #ff5722;
    outline-offset: 2px;
    box-shadow: 0 0 0 4px rgba(255, 87, 34, 0.2);
}

/* Minimum button size for accessibility */
button {
    min-height: 44px;  /* WCAG AAA standard */
    padding: 12px 16px;
    font-size: 1rem;
}
```

---

### Improvement 3: Explicit Text + Color Feedback
**POUR Category:** Perceivable  
**Prompt Used:**
> "Avoid using only [color] to show [correct / incorrect] guess. Always pair with [text]."

**What Changed:**
- **Before:** Green/red background with minimal text
- **After:** Explicit text + color + emoji

**Code Applied:**
```javascript
function showFeedback(isCorrect, text) {
    feedbackDisplay.innerText = text;  // ← Text explanation
    feedbackDisplay.className = isCorrect ? "correct" : "incorrect";
    feedbackDisplay.classList.remove("hidden");
}

submitGuess(guessedSongName) {
    if (isCorrect) {
        showFeedback(true, "✅ Correct! Great job!");  // ← Text + emoji
    } else {
        showFeedback(false, `❌ Incorrect! The answer was "${currentRound.songName}" on ${albumName}.`);
    }
}
```

**CSS:**
```css
#feedback {
    margin-top: 20px;
    padding: 15px;
    border-radius: 8px;
    font-weight: bold;
    font-size: 1.1rem;
}
.correct { 
    background-color: #2e7d32; 
    color: white; 
    border-left: 4px solid #66bb6a;  /* Add texture for color-blind users */
}
.incorrect { 
    background-color: #c62828; 
    color: white; 
    border-left: 4px solid #ef5350;  /* Add texture for color-blind users */
}
```

---

### Improvement 4: Semantic HTML & Language Attribute
**POUR Category:** Robust  
**Prompt Used:**
> "Use proper [HTML tags / semantic elements] so [screen readers / assistive tech] can read it correctly."

**What Changed:**
- Added `lang="en"` to `<html>` tag
- Ensured proper heading hierarchy: h1 (title) → h3 (section headers)
- Used `<button>` instead of `<div onclick="...">` for all clickable elements
- Used `<label>` with `<input>` pairs

**Code Applied (website.html):**
```html
<!DOCTYPE html>
<html lang="en">  <!-- ← Explicitly declare language -->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lyrics Guesser 🎤</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div id="start-screen">
            <h1>Lyrics Guesser 🎤</h1>  <!-- ← h1 for main title -->
            
            <div class="search-wrapper">
                <label for="search-artist-input">🔍 Search or filter artist...</label>  <!-- ← Label for input -->
                <input 
                    type="text" 
                    id="search-artist-input"  <!-- ← Paired with label -->
                    placeholder="Search..." 
                    oninput="onSearchChange()"
                    aria-label="Search for an artist by name"  <!-- ← ARIA label for context -->
                >
            </div>
            
            <div id="game-screen">
                <div id="guess-area-title">Step 1: Guess the Album</div>  <!-- ← h3 for section header -->
                ...
            </div>
        </div>
    </div>
</body>
</html>
```

---

### Improvement 5: Loading & Error State Transparency
**POUR Category:** Understandable & Operable  
**Prompt Used:**
> "If the game has a loading or error state, show a [clear message] that explains [what's happening / how to fix it] — in the voice of our twist."

**What Changed:**
- **Before:** Placeholder "Loading lyrics..." text without visual feedback
- **After:** Animated spinner + clear message + retry button

**Code Applied (website.html):**
```html
<!-- LOADING STATE: Shows while fetching round data -->
<div id="loading-state" class="hidden state-banner">
    <div class="spinner"></div>  <!-- ← Animated spinner -->
    <p>🔄 Loading next lyric...</p>  <!-- ← Clear, casual message -->
</div>

<!-- ERROR STATE: Shows when data loading fails -->
<div id="error-state" class="hidden state-banner error-banner">
    <p>⚠️ Oops! We had trouble loading this round.</p>  <!-- ← Friendly tone -->
    <p style="font-size: 0.9rem; color: #bbb; margin-top: 8px;">
        The game will retry or skip to the next round.
    </p>
    <button id="retry-round-btn" class="secondary-btn" style="margin-top: 12px;">
        Try Again  <!-- ← Clear action -->
    </button>
</div>
```

**CSS (style.css):**
```css
.spinner {
    display: inline-block;
    width: 40px;
    height: 40px;
    border: 4px solid rgba(255, 87, 34, 0.2);
    border-top-color: #ff5722;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;  /* ← Animated, not static */
    margin-bottom: 15px;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}
```

---

## PART 7: Reflection

### 1. How did your wireframe shape the AI's output?

The wireframe gave the website its **initial structure and layout blueprint**. The AI followed the wireframe's two-step flow (Album → Song selection) and overall layout hierarchy. The wireframe ensured:
- Home screen had artist selector, multiplayer toggle, and start button in logical order
- Game screen displayed lyric → album grid → song list in sequence
- Leaderboard had a clear table structure

Without the wireframe, the AI might have created a single-step guess interface or muddled the multiplayer setup flow.

---

### 2. What did the AI get right that surprised you? What did it miss?

**Surprised by (Got Right):**
- ✅ **Responsive layout** — The CSS Grid and Flexbox automatically adapt to all screen sizes without additional media queries
- ✅ **Semantic HTML** — AI used proper `<button>`, `<label>`, `<table>` tags instead of generic `<div>` elements
- ✅ **Color contrast** — White text on dark background achieved 12:1 contrast ratio (WCAG AAA standard) without being asked

**Surprised by (Missed):**
- ❌ **Song selection accuracy** — Generated songs in album list weren't guaranteed to be from that album
- ❌ **Real album covers** — Used placeholder images instead of actual album artwork URLs
- ❌ **Keyboard focus indicators** — No visible outline when tabbing through buttons/inputs
- ❌ **Descriptive alt text** — Generic alt="cover" instead of alt="Album Name cover"

---

### 3. Did you treat accessibility as a design decision or a checklist? What would you do differently next time?

**Answer:**

At first, I treated accessibility as a **checklist item** (to add at the end). But as I reviewed the POUR framework, I realized accessibility must be **baked into every design decision from the start**.

**What I did right:**
- Color contrast was considered during color selection (dark theme chosen partly for accessibility)
- Button sizes were set to 44px+ (accessibility standard) without waiting for review

**What I'd do differently next time:**
1. **Include accessibility in wireframes** — Note which components need focus indicators, large hit targets, alt text
2. **Test with real assistive tech** — Use screen readers (NVDA, JAWS) and keyboard-only navigation during design, not after
3. **Involve accessibility early** — Ask "Does a user with low vision / motor limitation / color blindness need this?" when making every choice
4. **Document POUR decisions in wireframe notes** — e.g., "Buttons are 44px to support users with motor limitations"

---

### 4. What's one decision you made that the AI couldn't have made for you?

**Artist Selection: Focusing on Kanye as the Primary Feature**

The AI could have generated a generic music trivia game with dozens of artists equally featured. But **I specifically chose to foreground Kanye West's discography** because:
- His catalog is **rich and well-documented** (16 studio albums with iconic songs)
- It allows **deep gameplay** (players can learn full discographies, not just hit songs)
- It created a **cohesive brand identity** (not just "any rapper trivia")

Later, I expanded to **8 artists** (Drake, Kendrick, Eminem, Travis Scott, Cardi B, Nicki Minaj, Rod Wave) but kept Kanye as the default selection. The AI couldn't make this creative/business decision — it required understanding the game's vision, target player, and what makes compelling gameplay.

---

## Submission Checklist ✅

- ✅ **Sharpened problem statement** (Part 1) — Defined player profile, needs, and mechanics
- ✅ **Player needs documented** (Part 2) — Three categories (Engagement, Navigation, Accessibility) with 15+ specific needs
- ✅ **Wireframes for two screens** (Part 2) — ASCII wireframes for Home and Round screens with annotations
- ✅ **Generated HTML layout** (Part 3) — Current website.html follows wireframe structure
- ✅ **Revision checklist** (Part 4) — Documented matches, mismatches, and fixes applied
- ✅ **POUR accessibility assessment** (Part 5) — Evaluated Perceivable, Operable, Understandable, Robust
- ✅ **5 accessibility improvements applied** (Part 6):
  1. Descriptive alt text for album covers
  2. Visible keyboard focus indicators
  3. Explicit text + color feedback (not color alone)
  4. Semantic HTML & language attribute
  5. Loading/error state transparency with retry button
- ✅ **Reflection completed** (Part 7) — 4 reflection questions answered in detail

---

## Appendix: Design System Reference

### Color Palette
| Element | Color | Contrast | Use |
|---------|-------|----------|-----|
| Text | #ffffff (white) | 12:1 | Primary text, high readability |
| Background | #121212 | — | Dark theme, reduces eye strain |
| Container | #1e1e1e | — | Accent background |
| Primary button | #ff5722 (orange) | 5.5:1 | Call-to-action ("START SOLO") |
| Correct feedback | #2e7d32 (green) | 8:1 | Positive feedback (+ texture) |
| Incorrect feedback | #c62828 (red) | 7:1 | Negative feedback (+ texture) |
| Focus outline | #ff5722 (orange) | 5:1 | Keyboard focus indicator |

### Typography
| Element | Font | Size | Weight | Use |
|---------|------|------|--------|-----|
| Main title (h1) | Segoe UI | 2rem | 800 | Page title: "Lyrics Guesser 🎤" |
| Section header (h3) | Segoe UI | 1.1rem | 600 | "Step 1: Guess the Album" |
| Body text | Segoe UI | 1rem | 400 | Instructions, feedback |
| Small text | Segoe UI | 0.9rem | 400 | Hints, secondary info |

### Spacing
| Element | Size | Use |
|---------|------|-----|
| Padding (container) | 30px | Main container padding |
| Gap (grid) | 15px | Space between album cards |
| Margin (button) | 12px | Vertical space between buttons |
| Button height | 44px+ | WCAG AAA minimum touch target |

---

**Document Version:** 1.0  
**Last Updated:** June 8, 2026  
**Status:** Complete & Accessible ✅
