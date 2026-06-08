# Lryics_Geussing_Game
# Rap Lyrics Guesser Game 🎤

Welcome to the **Rap Lyrics Guesser Game**, an interactive web-based music trivia game where players test their knowledge of iconic hip-hop and R&B discographies. Read snippets of lyrics from your favorite artists and race against your friends to guess the correct album and song title!

---

## 🎮 Game Description

The Rap Lyrics Guesser extracts raw song and lyric data dynamically from centralized databases. Players are presented with random, context-stripped lyric blocks and must navigate an interactive visual grid of album artwork to pin down exactly where those bars came from. 

### Featured Artists & Discographies
The game dynamically maps lyrics across full studio catalogs, including:
* **Kanye West** (From *The College Dropout* to *Bully*)
* **Drake** (From *Thank Me Later* to *For All the Dogs*)
* **Kendrick Lamar** (From *Section.80* to *Mr. Morale & the Big Steppers*)
* **Travis Scott** (From *Rodeo* to *Utopia*)
* **Eminem** (From *The Slim Shady LP* to *The Death of Slim Shady*)
* **Cardi B**, **Nicki Minaj**, and **Rod Wave**

---

## 🕹️ How to Play

### 1. Game Setup
1. **Choose Your Mode:** Toggle between **Single Player** or **Multiplayer Mode** on the home screen.
2. **Select an Artist:** Use the search bar or the dropdown menu to pick the rapper whose lyrics you want to guess. The interface will automatically update with their custom avatar.
3. **Start Game:** Click **Start Game** (or **Start Multiplayer Game**) to load your first round.

### 2. Gameplay Mechanics
* **Analyze the Lyrics:** A block of lyrics will appear in the central display area. 
* **Step 1: Select the Album:** Browse the visual grid of album covers. Clicking an album cover locks in your album guess and reveals that specific album's tracklist.
* **Step 2: Select the Song:** Browse the song list for your chosen album. Clicking the correct song title submits your final answer.
* **Earn Points:** Guessing correctly awards you points and advances you to the next round. If you guess incorrectly, click **Cancel** to reset your guess area and try a different album/song combination.

### 3. Multiplayer Modes
The game features two distinct multiplayer implementations:
* **Local Pass-and-Play:** Add up to 4 custom player names directly on your screen to track competitive scores locally.
* **Online Rooms (WebSockets):** Generate an online lobby, copy the shareable room link, and send it to your friends. The **Host** controls the artist selection and starts the game, while **Joiners** wait in a synchronized virtual lobby. Turns switch automatically over the server connections!

---

## 🛠️ Technical Overview for Developers

### Data Architecture
The engine compiles game data into a central tracking object:
* `gameData.artists`: Tracks artist IDs, display names, and profile avatars.
* `gameData.albums`: Cross-references specific album IDs back to their respective artists.
* `albumCoverMap`: An optimized object linking unique IDs directly to high-resolution asset images pulled through an external proxy layer (`images.weserv.nl`).

### Dynamic Parsing
The script utilizes a smart normalization function (`normalizeAlbumName`) to strip punctuation, spacing inconsistencies, and casing anomalies from raw text files (`.json`), linking lyrics flawlessly to the internal map:
