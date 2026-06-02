# Lyrics Guesser - Implementation Plan

## Objective
Document the current implementation and next steps for completing Kendrick Lamar, Eminem, and Cardi B support in the Lyrics Guesser app.

## Current State
- The app already supports multiple artists with an artist picker, album and song guessing flow, and a leaderboard.
- `script.js` loads JSON song data and maps albums to cover art.
- Kendrick is configured in `gameData.artists` and `gameData.albums`, and `json/kendrick_lyrics.json` is available.
- Cardi B and Eminem are now added as artists, with `json/cardi_B_lyrics.json` and `json/eminem_lyrics.json` available.
- Nicki Minaj and Rod Wave are being added with `json/nicki_minaj.json` and `json/rod_wave_lyrics.json`.
- Travis Scott is configured in `gameData.albums` and now needs support from `json/travis_scott_lyrics.json`.
- The default selected artist has been updated to Kendrick.

## Work Items
1. Validate `json/kendrick_lyrics.json`
   - Populate the file with real lyric entries for Kendrick Lamar songs.
   - Ensure each entry includes `artist`, `album`, `song`, and `lyric`.

2. Add Cardi B support
   - Populate `json/cardi_B_lyrics.json` with Cardi B lyrics.
   - Add Cardi B album entries such as `Invasion of Privacy` and `Single` to `gameData.albums`.
   - Ensure Cardi B album cards display using the same album flow.

3. Add Eminem support
   - Populate `json/eminem_lyrics.json` with Eminem lyrics.
   - Add Eminem album entries such as `8 Mile Soundtrack` to `gameData.albums`.
   - Ensure Eminem lyrics load correctly when the artist is selected.

4. Add Travis Scott support
   - Populate `json/travis_scott_lyrics.json` with Travis lyrics.
   - Use the local avatar `artists/travispfp.webp`.
   - Ensure Travis albums are displayed with cover art.

3. Confirm Kendrick album coverage
   - Add missing Kendrick albums to `gameData.albums`.
   - Add `albumCoverMap` entries for Kendrick albums where possible.

3. Artist avatar update
   - Use the provided local start-page Kendrick photo: `artists/kdotpfp.avif`.

4. Load flow verification
   - Ensure `loadSongsFromJSON()` tries `kendrick_lyrics.json` as a known source.
   - Ensure `loadSongsForArtist()` loads artist-specific JSON when switching artists.

5. Gameplay validation
   - Verify rounds only use songs from the current artist.
   - Confirm guess selection and feedback logic works.
   - Display one active player at a time during multiplayer.
   - Show the current player's turn at the top of the game screen.

6. Multiplayer room support
   - Add room creation that generates a shareable link only.
   - Display how many players are in the lobby before starting.
   - Support joining by pasting a shared room link.
   - Ensure only the room creator can start the game.
   - Show joiners a simplified waiting UI until the host starts.

7. Documentation
   - Store the feature specification in `Docs/spec.md`.
   - Store the test plan in `Docs/test-plan.md`.
   - Store the implementation plan in `Docs/plan.md`.

## Milestones
- [ ] Kendrick lyric source file populated
- [ ] Kendrick album covers displayed correctly
- [ ] Game start defaults to Kendrick Lamar
- [ ] Artist dropdown and search filter validated
- [ ] Leaderboard behavior verified
- [ ] Documentation created in `Docs/`

## Future Enhancements
- Add additional artists and JSON sources for easy expansion.
- Improve album cover caching and fallback behavior.
- Add automated unit tests or browser-based integration tests.
