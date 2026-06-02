# Lyrics Guesser - Test Plan

## Purpose
This test plan validates the Lyrics Guesser browser game behavior and ensures Kendrick Lamar and Travis Scott support work correctly using the JSON files in `json/`.

## Test Environment
- Browser: latest Chromium-based browser or Firefox
- Files: `website.html`, `script.js`, `style.css`, `json/kendrick_lyrics.json`, `json/travis_scott_lyrics.json`
- Local environment: `file://` or served by a simple HTTP server

## Test Cases

### 1. App Launch
- Open `website.html`.
- Expected: start screen is visible with artist dropdown and search input.
- Expected: `Kendrick Lamar` is selected by default.
- Expected: Kendrick avatar loads from `artists/kdotpfp.avif`.

### 2. Artist Selection
- Search for `Kendrick` in the search field.
- Expected: dropdown filters to show Kendrick only.
- Select a different artist, then reselect Kendrick.
- Expected: avatar updates correctly.

### 3. Load Kendrick Lyrics
- Start the game with Kendrick selected.
- Expected: lyrics and albums load from `json/kendrick_lyrics.json`.
- Expected: album grid contains Kendrick albums like `Section.80`, `Good Kid, M.A.A.D City`, `To Pimp a Butterfly`, `DAMN.`, `Mr. Morale & the Big Steppers`, `untitled unmastered.`, and `Black Panther: The Album`.

### 4. Load Travis Scott Lyrics
- Select Travis Scott from the artist dropdown.
- Expected: lyrics and albums load from `json/travis_scott_lyrics.json`.
- Expected: album grid contains Travis albums like `Rodeo`, `Birds in the Trap Sing McKnight`, `Astroworld`, and `Utopia`.

### 5. Load Nicki Minaj Lyrics
- Select Nicki Minaj from the artist dropdown.
- Expected: lyrics and albums load from `json/nicki_minaj.json`.
- Expected: album grid contains Nicki albums like `Pink Friday`, `Pink Friday: Roman Reloaded`, `The Pinkprint`, `Queen`, and `Pink Friday 2`.

### 6. Load Rod Wave Lyrics
- Select Rod Wave from the artist dropdown.
- Expected: lyrics and albums load from `json/rod_wave_lyrics.json`.
- Expected: album grid contains Rod Wave albums like `Ghetto Gospel`, `Pray 4 Love`, `SoulFly`, `Beautiful Mind`, `Nostalgia`, and `Legend`.

### 5. Load Eminem Lyrics
- Select Eminem from the artist dropdown.
- Expected: lyrics and albums load from `json/eminem_lyrics.json`.
- Expected: album grid contains Eminem albums like `The Slim Shady LP`, `The Marshall Mathers LP`, `The Eminem Show`, `Encore`, `Relapse`, `Recovery`, `The Marshall Mathers LP 2`, `Revival`, `Kamikaze`, `Music to Be Murdered By`, `The Death of Slim Shady (Coup de Grâce)`, and `8 Mile Soundtrack`.

### 6. Load Cardi B Lyrics
- Select Cardi B from the artist dropdown.
- Expected: lyrics and albums load from `json/cardi_B_lyrics.json`.
- Expected: album grid contains Cardi albums like `Invasion of Privacy` and `Single`.

### 5. Album Cover Display
- On the album grid, verify covers appear.
- Expected: Kendrick albums with mapped cover URLs display correctly.
- Expected: if a cover is unavailable, the fallback placeholder or iTunes fetch returns an image.

### 5. Correct Guess Flow
- Start a round and identify the lyric's correct album and song.
- Expected: correct selection increments `Points` by 1.
- Expected: positive feedback message appears.

### 6. Incorrect Guess Flow
- Make an incorrect guess on album or song.
- Expected: feedback shows the correct song and album.
- Expected: points do not increment.

### 7. Cancel Song Selection
- Select an album and then click `← Choose a different album`.
- Expected: return to album selection view.

### 8. Multiplayer Room Creation
- Enable multiplayer mode and add at least two player names.
- Click `Create shared room`.
- Expected: a room link is generated.
- Expected: `Players in lobby` shows the current player count.
- Expected: the room creator sees a host note and is prompted to start multiplayer.

### 9. Multiplayer Join Flow
- Paste the generated room link into the join field.
- Click `Join room`.
- Expected: the lobby rehydrates the player list and selected artist.
- Expected: joiners do not see the start button and instead see a waiting panel.
- Expected: joiners cannot start the game.
- Expected: the host can start the game and go first.

### 10. End Game & Leaderboard
- End the game after scoring points.
- Enter a player name when prompted.
- Expected: score is saved to localStorage.
- Expected: leaderboard shows the saved score.

### 11. Local Storage Persistence
- Reload the page and view the leaderboard.
- Expected: saved scores persist across page refresh.

### 12. Error Handling
- Temporarily remove or rename `json/kendrick_lyrics.json` or `json/travis_scott_lyrics.json` and reload.
- Expected: the game logs an error but remains functional for other available data sources.

## Acceptance Criteria
- All Kendrick-specific albums and songs load as expected.
- Avatar and UI selection behavior match the existing app flow.
- Leaderboard saves and displays scores properly.
- The game can still fetch cover art when no local cover exists.

## Notes
- Use browser dev tools console to confirm actual JSON file loads.
- Use the search filter to validate the artist dropdown behavior.
