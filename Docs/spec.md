# Lyrics Guesser - Specification

## Overview
Lyrics Guesser is a browser-based music trivia game that challenges players to identify a song from a lyric snippet by first choosing the correct album and then the correct song.

## Goals
- Provide a fun quiz experience for fans of hip hop artists.
- Support artist selection and album-based guessing.
- Show lyrics from an artist-specific JSON source.
- Maintain a simple leaderboard using browser localStorage.

## Key Features
- Start screen with artist picker, search, and selected artist avatar.
- Album selection stage for the current artist.
- Song selection stage from the chosen album.
- Correct/incorrect feedback and point tracking.
- End game flow, score save prompt, leaderboard display.

## Data Sources
- `gameData.artists`: configured artist metadata, including the start-page avatar image.
- `gameData.albums`: all supported albums, grouped by artist.
- `gameData.songs`: lyrics song entries loaded dynamically from JSON.
- Primary JSON sources in `json/`:
  - `json/kanye_lyrics.json`
  - `json/drake_lyrics.json`
  - `json/kendrick_lyrics.json`
  - `json/travis_scott_lyrics.json`
  - `json/csvjson.json`
- `albumCoverMap`: explicit cover art URLs for many albums.
- iTunes API fallback: dynamic album cover fetch when a cover art entry is missing.

## User Flow
1. User opens `website.html`.
2. The app loads existing JSON lyrics data and populates the artist dropdown.
3. The user selects an artist; the avatar updates immediately.
4. The user starts the game.
5. The game chooses a random lyric from the selected artist's songs.
6. The user guesses the album first.
7. The game shows a song list for the selected album.
8. The user guesses the song.
9. The app displays feedback and either increments points or reveals the answer.
10. After the round, the game loads another lyric.
11. When the user ends the game, the app prompts for a name and saves the top-10 leaderboard.

## Requirements
### Functional Requirements
- [ ] Load the correct artist-specific JSON when available.
- [ ] Support Kendrick Lamar by reading `json/kendrick_lyrics.json`.
- [ ] Support Travis Scott by reading `json/travis_scott_lyrics.json`.
- [ ] Use the provided Kendrick avatar on the start page.
- [ ] Use the provided Travis avatar on the start page.
- [ ] Display album covers using local map data or iTunes fallback.
- [ ] Only show albums and songs for the selected artist.
- [ ] Save and display a top-10 leaderboard.

### Non-functional Requirements
- [ ] Operate entirely in the browser with no server backend.
- [ ] Provide immediate visual feedback for guesses.
- [ ] Handle missing or malformed JSON gracefully.

## Component Behavior
### `loadSongsFromJSON()`
- Attempts to load known JSON sources in priority order.
- Converts raw JSON entries into normalized song objects.
- Stores results in `gameData.songs`.

### `loadSongsForArtist(artistId)`
- Attempts to fetch `artistId_lyrics.json` when the user changes the selected artist.
- Updates `currentSongsSourceArtist` to avoid unnecessary reloading.

### `renderAlbumGrid(artistAlbums)`
- Displays album cards for the selected artist.
- Uses `album.cover` if available.
- Fetches cover art from the iTunes API when an album cover is not already defined.

### `selectAlbum(albumId, albumName)`
- Hides the album grid and shows song options.
- Builds song choices from the selected album.
- Fills in extra choices from the same artist or global song pool if needed.

### `submitGuess()`
- Checks album and song correctness.
- Increments score on correct answers.
- Shows feedback and moves to the next round.

## Files
- `website.html`
- `style.css`
- `script.js`
- `json/kanye_lyrics.json`
- `json/drake_lyrics.json`
- `json/kendrick_lyrics.json`
- `json/travis_scott_lyrics.json`
- `images/`
- `artists/`

## Constraints
- Album and artist matching uses normalized text comparisons.
- Lyrics JSON entries must include `artist`, `album`, `song`, and `lyric` fields.
- The game requires at least one valid song per selected artist.
