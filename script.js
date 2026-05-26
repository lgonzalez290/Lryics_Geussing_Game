const proxy = "https://images.weserv.nl/?url=https://";

const gameData = {
    artists: [
        { id: "kanye", name: "Kanye West", pic: "upload.wikimedia.org/wikipedia/commons/5/5c/Kanye_West_at_the_2009_Tribeca_Film_Festival_%28crop%29.jpg" },
        { id: "drake", name: "Drake", pic: "upload.wikimedia.org/wikipedia/commons/2/28/Drake_at_The_Come_Up_Show_2011_%28cropped%29.jpg" },
        { id: "kendrick", name: "Kendrick Lamar", pic: "upload.wikimedia.org/wikipedia/commons/3/32/Kendrick_Lamar_2018.jpg" },
        { id: "travis", name: "Travis Scott", pic: "upload.wikimedia.org/wikipedia/commons/1/14/Travis_Scott_-_Openair_Frausenfeld_2019_08_%28cropped%29.jpg" },
        { id: "eminem", name: "Eminem", pic: "upload.wikimedia.org/wikipedia/commons/4/4a/Eminem_-_Openair_Frauenfeld_2018_03.jpg" },
        { id: "cardi", name: "Cardi B", pic: "upload.wikimedia.org/wikipedia/commons/b/b3/Cardi_B_-_Grammy_Awards_2019.png" },
        { id: "nicki", name: "Nicki Minaj", pic: "upload.wikimedia.org/wikipedia/commons/1/1b/Nicki_Minaj_2024.jpg" }
    ],
    albums: [
        { id: "cd", artist: "kanye", name: "The College Dropout" },
        { id: "lr", artist: "kanye", name: "Late Registration" },
        { id: "grad", artist: "kanye", name: "Graduation" },
        { id: "808", artist: "kanye", name: "808s & Heartbreak" },
        { id: "mbdtf", artist: "kanye", name: "My Beautiful Dark Twisted Fantasy", cover: "images/mbdtf.jpg" },
        { id: "wtt", artist: "kanye", name: "Watch The Throne" },
        { id: "yeezus", artist: "kanye", name: "Yeezus", cover: "images/Yeezus_album_cover.png" },
        { id: "tlop", artist: "kanye", name: "The Life of Pablo" },
        { id: "ye", artist: "kanye", name: "Ye" },
        { id: "ksg", artist: "kanye", name: "Kids See Ghosts" },
        { id: "jik", artist: "kanye", name: "Jesus Is King" },
        { id: "donda", artist: "kanye", name: "Donda" },
        { id: "v1", artist: "kanye", name: "Vultures 1", cover: "images/vultures1.jpg" },
        { id: "v2", artist: "kanye", name: "Vultures 2", cover: "images/vultures2.jpg" },
        { id: "tml", artist: "drake", name: "Thank Me Later" },
        { id: "tc", artist: "drake", name: "Take Care" },
        { id: "nwts", artist: "drake", name: "Nothing Was the Same" },
        { id: "iyrtitl", artist: "drake", name: "If You're Reading This It's Too Late" },
        { id: "views", artist: "drake", name: "Views" },
        { id: "ml", artist: "drake", name: "More Life" },
        { id: "scorp", artist: "drake", name: "Scorpion" },
        { id: "clb", artist: "drake", name: "Certified Lover Boy" },
        { id: "hnm", artist: "drake", name: "Honestly, Nevermind" },
        { id: "hl", artist: "drake", name: "Her Loss" },
        { id: "fatd", artist: "drake", name: "For All the Dogs" },
        { id: "sec80", artist: "kendrick", name: "Section.80" },
        { id: "gkmc", artist: "kendrick", name: "Good Kid, M.A.A.D City" },
        { id: "tpab", artist: "kendrick", name: "To Pimp a Butterfly" },
        { id: "damn", artist: "kendrick", name: "DAMN." },
        { id: "mrsm", artist: "kendrick", name: "Mr. Morale & the Big Steppers" },
        { id: "rodeo", artist: "travis", name: "Rodeo" },
        { id: "birds", artist: "travis", name: "Birds in the Trap Sing McKnight" },
        { id: "astro", artist: "travis", name: "Astroworld" },
        { id: "utopia", artist: "travis", name: "Utopia" },
        { id: "sslp", artist: "eminem", name: "The Slim Shady LP" },
        { id: "mmlp", artist: "eminem", name: "The Marshall Mathers LP" },
        { id: "tes", artist: "eminem", name: "The Eminem Show" },
        { id: "encore", artist: "eminem", name: "Encore" },
        { id: "relapse", artist: "eminem", name: "Relapse" },
        { id: "recovery", artist: "eminem", name: "Recovery" },
        { id: "mmlp2", artist: "eminem", name: "The Marshall Mathers LP 2" },
        { id: "revival", artist: "eminem", name: "Revival" },
        { id: "kamikaze", artist: "eminem", name: "Kamikaze" },
        { id: "mtbmb", artist: "eminem", name: "Music to Be Murdered By" },
        { id: "tdoss", artist: "eminem", name: "The Death of Slim Shady (Coup de Grâce)" },
        { id: "gbm1", artist: "cardi", name: "Gangsta Bitch Music, Vol. 1" },
        { id: "gbm2", artist: "cardi", name: "Gangsta Bitch Music, Vol. 2" },
        { id: "iop", artist: "cardi", name: "Invasion of Privacy" },
        { id: "pf", artist: "nicki", name: "Pink Friday" },
        { id: "rr", artist: "nicki", name: "Pink Friday: Roman Reloaded" },
        { id: "pp", artist: "nicki", name: "The Pinkprint" },
        { id: "queen", artist: "nicki", name: "Queen" },
        { id: "pf2", artist: "nicki", name: "Pink Friday 2" }
    ],
    songs: [
        { albumId: "cd", name: "Jesus Walks", lyrics: "You know what the Midwest is? / Young and restless" },
        { albumId: "lr", name: "Gold Digger", lyrics: "She take my money when I'm in need / Yeah, she's a triflin' friend indeed" },
        { albumId: "grad", name: "Stronger", lyrics: "N-n-now th-th-that don't kill me / Can only make me stronger" },
        { albumId: "808", name: "Heartless", lyrics: "In the night, I hear 'em talk / The coldest story ever told" },
        { albumId: "mbdtf", name: "Dark Fantasy", lyrics: "You might think you've peeped the scene / You haven't, the Xanadu has merely been" },
        { albumId: "mbdtf", name: "Power", lyrics: "I living in the 21st century / Doing something mean to it" },
        { albumId: "mbdtf", name: "Monster", lyrics: "I do it for the culture, to let 'em know what a nigga look like / A nigga can look like a monster" },
        { albumId: "mbdtf", name: "All of the Lights", lyrics: "Turn up the lights in here, baby / Extra bright, I want y'all to see this" },
        { albumId: "mbdtf", name: "Runaway", lyrics: "And I always find, yeah, I always find something wrong / You been putting up with my shit just way too long" },
        { albumId: "wtt", name: "Otis", lyrics: "Luxury rap, the Hermes of verses / Sophisticated ignorance, write my curses in cursive" },
        { albumId: "yeezus", name: "On Sight", lyrics: "Yeezus season-approaching / Fuck whatever y'all been hearing" },
        { albumId: "yeezus", name: "Black Skinhead", lyrics: "For my theme song (Black) / My leather black jeans on (Black)" },
        { albumId: "yeezus", name: "New Slaves", lyrics: "My mama was raised in the era when / Clean water was only served to the fairer skin" },
        { albumId: "yeezus", name: "Blood on the Leaves", lyrics: "Strange fruit hanging from the poplar trees / Blood on the leaves" },
        { albumId: "yeezus", name: "Bound 2", lyrics: "Bound to fall in love / Bound to fall in love (Uh-huh, honey)" },
        { albumId: "tlop", name: "Famous", lyrics: "I feel like me and Taylor might still have sex / Why? I made that bitch famous" },
        { albumId: "ye", name: "Yikes", lyrics: "Shit could get menacin', frightenin', find help" },
        { albumId: "ksg", name: "Freeee", lyrics: "I don't feel pain anymore / Guess what, baby? I feel free" },
        { albumId: "jik", name: "Closed on Sunday", lyrics: "Closed on Sunday, you're my Chick-fil-A" },
        { albumId: "donda", name: "Off The Grid", lyrics: "We off the grid, grid, grid / This for my kid, kid, kid" },
        { albumId: "v1", name: "Carnival", lyrics: "Now I'm Ye-Kelly, bitch, now I'm Bill Cosby, bitch" },
        { albumId: "v2", name: "530", lyrics: "Fifty-thirty, the car missing / No text, no calls, no texts missing" },
        { albumId: "tml", name: "Over", lyrics: "I know they say the first love is the sweetest / But that first cut is the deepest" },
        { albumId: "tc", name: "Marvins Room", lyrics: "I'm just saying you could do better / Tell me have you heard that lately" },
        { albumId: "nwts", name: "Started From the Bottom", lyrics: "Started from the bottom now we're here / Started from the bottom now my whole team here" },
        { albumId: "iyrtitl", name: "Energy", lyrics: "I got enemies, got a lot of enemies / Got a lot of people tryin' to drain me of this energy" },
        { albumId: "views", name: "Hotline Bling", lyrics: "You used to call me on my cell phone / Late night when you need my love" },
        { albumId: "ml", name: "Fake Love", lyrics: "I've been feelin' so alone / I've got fake people showin' fake love to me" },
        { albumId: "scorp", name: "God's Plan", lyrics: "I hold back, sometimes I won't, yuh / I feel good, sometimes I don't" },
        { albumId: "clb", name: "Way 2 Sexy", lyrics: "I'm too sexy for this syrup, too sexy for your girl" },
        { albumId: "hnm", name: "Sticky", lyrics: "Ayy, switch on the camera flash / Put on your sneakers, we runnin' a track" },
        { albumId: "hl", name: "Rich Flex", lyrics: "Go and do your 21-pack / Do your thing, let them know who you are" },
        { albumId: "fatd", name: "First Person Shooter", lyrics: "Big as the Super Bowl / But the lines are too long to get in" },
        { albumId: "sec80", name: "A.D.H.D", lyrics: "No, crack open another rolling rock / Crack open another rolling rock" },
        { albumId: "gkmc", name: "Swimming Pools", lyrics: "Pour up, head shot, sit down, stand up / Pass out, wake up, faded" },
        { albumId: "tpab", name: "Alright", lyrics: "Alls my life I has to fight, nigga / Alls my life I... Hard times like God" },
        { albumId: "damn", name: "HUMBLE.", lyrics: "Nobody pray for me / It's been that day for me" },
        { albumId: "mrsm", name: "N95", lyrics: "Hello new world, all the boys and girls / I got some true stories to tell" },
        { albumId: "rodeo", name: "Antidote", lyrics: "Don't you open up that window / Don't you let out that antidote" },
        { albumId: "birds", name: "Goosebumps", lyrics: "I get those goosebumps every time, yeah, you come around" },
        { albumId: "astro", name: "SICKO MODE", lyrics: "Made this here with all the ice on in the booth" },
        { albumId: "utopia", name: "FE!N", lyrics: "The career's more at stake when you in your prime / Career's more at stake up in Utopia" },
        { albumId: "sslp", name: "My Name Is", lyrics: "Hi! My name is... (what?) My name is... (who?) My name is... Slim Shady" },
        { albumId: "mmlp", name: "The Real Slim Shady", lyrics: "May I have your attention, please? / Will the real Slim Shady please stand up?" },
        { albumId: "tes", name: "Without Me", lyrics: "Now this looks like a job for me / So everybody, just follow me" },
        { albumId: "encore", name: "Mockingbird", lyrics: "Hailie, I know you miss your mom, and I know you miss your dad" },
        { albumId: "relapse", name: "Beautiful", lyrics: "Lately I've been hard to reach / I've been awfully alone" },
        { albumId: "recovery", name: "Not Afraid", lyrics: "I'm not afraid to take a stand / Everybody, come take my hand" },
        { albumId: "mmlp2", name: "Rap God", lyrics: "Look, I was gonna go easy on you not to hurt your feelings" },
        { albumId: "revival", name: "River", lyrics: "I've been a liar, been a thief / Been a lover, been a cheat" },
        { albumId: "kamikaze", name: "Venom", lyrics: "With the venom and the momentum, I'm thinking of knocking 'em" },
        { albumId: "mtbmb", name: "Godzilla", lyrics: "I can swallow a bottle of alcohol and I'll feel like Godzilla" },
        { albumId: "tdoss", name: "Houdini", lyrics: "Abra-abracadabra / I'm 'bout to reach into my bag, bruh" },
        { albumId: "gbm1", name: "Foreva", lyrics: "If you got a problem with me, say it now / 'Cause I'll beat your ass, foreva" },
        { albumId: "gbm2", name: "Lick", lyrics: "Lookin' like I caught a lick / Run up on me, you get hit" },
        { albumId: "iop", name: "Bodak Yellow", lyrics: "Said little bitch, you can't fuck with me / If you wanted to" },
        { albumId: "pf", name: "Super Bass", lyrics: "This one is for the boys with the booming system" },
        { albumId: "rr", name: "Starships", lyrics: "Starships were meant to fly / Hands up and touch the sky" },
        { albumId: "pp", name: "Anaconda", lyrics: "My anaconda don't want none / Unless you got buns, hun" },
        { albumId: "queen", name: "Chun-Li", lyrics: "Ayy, yo, I been off in the office workin' on my wardrobe" },
        { albumId: "pf2", name: "FTCU", lyrics: "High-class bitch, but I'm robust / Fuck the club up" }
    ]
};

let points = 0;
let selectedArtistId = "kanye";
let currentRound = { albumId: "", songName: "", lyrics: "" };
let currentGuessAlbumId = "";

const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const leaderboardScreen = document.getElementById("leaderboard-screen");
const artistDropdown = document.getElementById("artist-dropdown");
const artistAvatar = document.getElementById("artist-view-avatar");
const lyricDisplay = document.getElementById("lyric-display");
const guessAreaTitle = document.getElementById("guess-area-title");
const albumGrid = document.getElementById("album-select-grid");
const songList = document.getElementById("song-select-list");
const selectedAlbumNameDisplay = document.getElementById("selected-album-name");
const songOptionsContainer = document.getElementById("song-options-container");
const pointsDisplay = document.getElementById("current-points");
const feedbackDisplay = document.getElementById("feedback");
const leaderboardBody = document.getElementById("leaderboard-body");
const emptyLeaderboardText = document.getElementById("empty-leaderboard");

document.getElementById("start-button").onclick = startGame;
document.getElementById("view-leaderboard-btn").onclick = showLeaderboard;
document.getElementById("end-game-btn").onclick = endGame;
document.getElementById("back-to-start-btn").onclick = () => {
    leaderboardScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
};
document.getElementById("clear-leaderboard-btn").onclick = clearLeaderboard;
document.getElementById("cancel-song-select").onclick = resetGuessArea;

window.onload = () => {
    populateDropdown(gameData.artists);
};

function populateDropdown(list) {
    artistDropdown.innerHTML = "";
    list.forEach(artist => {
        const opt = document.createElement("option");
        opt.value = artist.id;
        opt.innerText = artist.name;
        artistDropdown.appendChild(opt);
    });
    if(list.length > 0) {
        artistDropdown.value = list[0].id;
        updateAvatarImage(list[0].id);
    }
}

function onSearchChange() {
    const query = document.getElementById("search-artist-input").value.toLowerCase().trim();
    const filtered = gameData.artists.filter(a => a.name.toLowerCase().includes(query));
    populateDropdown(filtered);
}

function onDropdownSelect() {
    updateAvatarImage(artistDropdown.value);
}

function updateAvatarImage(artistId) {
    selectedArtistId = artistId;
    const target = gameData.artists.find(a => a.id === artistId);
    if(target) {
        artistAvatar.src = proxy + target.pic;
        artistAvatar.onerror = () => {
            artistAvatar.src = "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png";
        };
    }
}

function startGame() {
    if(!selectedArtistId) return;
    startScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    points = 0;
    pointsDisplay.innerText = points;
    loadNewRound();
}

function loadNewRound() {
    feedbackDisplay.classList.add("hidden");
    currentGuessAlbumId = "";
    resetGuessArea();

    const artistAlbums = gameData.albums.filter(a => a.artist === selectedArtistId);
    const artistAlbumIds = artistAlbums.map(a => a.id);
    const artistSongs = gameData.songs.filter(s => artistAlbumIds.includes(s.albumId));

    const randomSong = artistSongs[Math.floor(Math.random() * artistSongs.length)];
    currentRound.albumId = randomSong.albumId;
    currentRound.songName = randomSong.name;
    currentRound.lyrics = randomSong.lyrics;

    lyricDisplay.innerText = `"${currentRound.lyrics}"`;
    renderAlbumGrid(artistAlbums);
}

function resetGuessArea() {
    guessAreaTitle.innerText = "Step 1: Guess the Album";
    albumGrid.classList.remove("hidden");
    songList.classList.add("hidden");
    feedbackDisplay.classList.add("hidden");
}

function renderAlbumGrid(artistAlbums) {
    albumGrid.innerHTML = "";
    
    artistAlbums.forEach(album => {
        const card = document.createElement("div");
        card.className = "album-card";
        card.onclick = () => selectAlbum(album.id, album.name);

        const fallbackPlaceholder = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';
        const initialSrc = album.cover ? album.cover : fallbackPlaceholder;

        card.innerHTML = `
            <img 
                class="album-cover" 
                id="cover-img-${album.id}"
                src="${initialSrc}" 
                alt="${album.name} cover"
                loading="lazy"
                onerror="this.onerror=null; this.src='${fallbackPlaceholder}';"
            >
            <div class="album-title">${album.name}</div>
        `;
        albumGrid.appendChild(card);

        if (!album.cover) {
            const artistObj = gameData.artists.find(a => a.id === album.artist);
            const artistName = artistObj ? artistObj.name : "";
            const apiQueryTerm = encodeURIComponent(`${artistName} ${album.name}`);

            fetch(`https://itunes.apple.com/search?term=${apiQueryTerm}&entity=album&limit=1`)
                .then(response => response.json())
                .then(data => {
                    const targetImageElement = document.getElementById(`cover-img-${album.id}`);
                    if (targetImageElement && data.results && data.results.length > 0) {
                        let structuralArtworkUrl = data.results[0].artworkUrl100;
                        let highResArtworkUrl = structuralArtworkUrl.replace("100x100bb", "500x500bb");
                        targetImageElement.src = highResArtworkUrl;
                    }
                })
                .catch(err => {
                    console.error("iTunes cover fetching failed for album: " + album.name, err);
                });
        }
    });
}

// HELPER FUNCTION: Shuffles arrays randomly in-place
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function selectAlbum(albumId, albumName) {
    feedbackDisplay.classList.add("hidden");
    currentGuessAlbumId = albumId;

    guessAreaTitle.innerText = "STEP 2: GUESS THE SONG";
    albumGrid.classList.add("hidden");
    songList.classList.remove("hidden");
    selectedAlbumNameDisplay.innerText = albumName;

    songOptionsContainer.innerHTML = "";

    // 1. Gather starting pool from the clicked album
    let albumSongs = gameData.songs.filter(s => s.albumId === albumId);
    let finalOptions = [];

    // 2. If it is the correct album, inject the correct song into the choices pool first
    if (albumId === currentRound.albumId) {
        const correctSong = gameData.songs.find(s => s.name === currentRound.songName && s.albumId === albumId);
        if (correctSong) {
            finalOptions.push(correctSong);
            albumSongs = albumSongs.filter(s => s.name !== currentRound.songName); // Avoid duplicates
        }
    }

    // Add remaining songs from that exact album
    finalOptions = finalOptions.concat(albumSongs);

    // If album has MORE than 5 songs, shuffle and trim it down to exactly 5
    if (finalOptions.length > 5) {
        const standard = (albumId === currentRound.albumId) ? finalOptions.slice(0, 1) : [];
        const fillers = (albumId === currentRound.albumId) ? finalOptions.slice(1) : finalOptions;
        shuffleArray(fillers);
        finalOptions = standard.concat(fillers.slice(0, 5 - standard.length));
    }

    // 3. Fallback filler step 1: If less than 5 songs, pull extra unique songs from the SAME artist
    if (finalOptions.length < 5) {
        const albumObj = gameData.albums.find(a => a.id === albumId);
        const artistId = albumObj ? albumObj.artist : selectedArtistId;
        const artistAlbumIds = gameData.albums.filter(a => a.artist === artistId).map(a => a.id);
        
        let sameArtistSongs = gameData.songs.filter(s => 
            artistAlbumIds.includes(s.albumId) && 
            !finalOptions.some(f => f.name === s.name)
        );
        
        shuffleArray(sameArtistSongs);
        for (let song of sameArtistSongs) {
            if (finalOptions.length >= 5) break;
            finalOptions.push(song);
        }
    }

    // 4. Fallback filler step 2: If STILL less than 5 songs (e.g. Cardi B), pull random songs globally
    if (finalOptions.length < 5) {
        let allOtherSongs = gameData.songs.filter(s => 
            !finalOptions.some(f => f.name === s.name)
        );
        shuffleArray(allOtherSongs);
        for (let song of allOtherSongs) {
            if (finalOptions.length >= 5) break;
            finalOptions.push(song);
        }
    }

    // Final shuffle so the right answer isn't sitting predictably in the list
    shuffleArray(finalOptions);
    
    // Render the 5 options
    finalOptions.forEach(song => {
        const songBtn = document.createElement("div");
        songBtn.className = "song-option";
        songBtn.innerText = song.name;
        songBtn.onclick = () => submitGuess(song.name);
        songOptionsContainer.appendChild(songBtn);
    });
}

function submitGuess(guessedSongName) {
    const isCorrect = (guessedSongName === currentRound.songName) && (currentGuessAlbumId === currentRound.albumId);
    if (isCorrect) {
        points++;
        pointsDisplay.innerText = points;
        showFeedback(true, "Correct! Great job!");
        setTimeout(loadNewRound, 1500); 
    } else {
        showFeedback(false, `Incorrect! The answer was "${currentRound.songName}" on ${gameData.albums.find(a => a.id === currentRound.albumId).name}.`);
        setTimeout(loadNewRound, 3000); 
    }
}

function showFeedback(isCorrect, text) {
    feedbackDisplay.innerText = text;
    feedbackDisplay.className = isCorrect ? "correct" : "incorrect";
    feedbackDisplay.classList.remove("hidden");
}

function endGame() {
    gameScreen.classList.add("hidden");
    if (points > 0) {
        const playerName = prompt("Game Over! Enter your name to save your score:", "Player 1");
        if (playerName && playerName.trim() !== "") {
            saveScore(playerName.trim(), points);
        }
    }
    startScreen.classList.remove("hidden");
}

function saveScore(name, score) {
    let leaderboard = JSON.parse(localStorage.getItem("lyricsLeaderboard")) || [];
    leaderboard.push({ name, score });
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 10);
    localStorage.setItem("lyricsLeaderboard", JSON.stringify(leaderboard));
}

function showLeaderboard() {
    startScreen.classList.add("hidden");
    leaderboardScreen.classList.remove("hidden");
    const leaderboard = JSON.parse(localStorage.getItem("lyricsLeaderboard")) || [];
    leaderboardBody.innerHTML = "";
    if (leaderboard.length === 0) {
        emptyLeaderboardText.classList.remove("hidden");
        document.querySelector(".leaderboard-table").classList.add("hidden");
    } else {
        emptyLeaderboardText.classList.add("hidden");
        document.querySelector(".leaderboard-table").classList.remove("hidden");
        leaderboard.forEach((entry, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>#${index + 1}</td>
                <td>${entry.name}</td>
                <td>${entry.score}</td>
            `;
            leaderboardBody.appendChild(row);
        });
    }
}

function clearLeaderboard() {
    if (confirm("Are you sure you want to delete all saved scores?")) {
        localStorage.removeItem("lyricsLeaderboard");
        showLeaderboard();
    }
}
