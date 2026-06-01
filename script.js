const proxy = "https://images.weserv.nl/?url=https://";

let gameData = {
    artists: [
        { id: "kanye", name: "Kanye West", pic: "artists/kanyebully2024.jpg" },
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
        { id: "mbdtf", artist: "kanye", name: "My Beautiful Dark Twisted Fantasy", cover: "images/kanye_images/mbdtf.jpg" },
        { id: "wtt", artist: "kanye", name: "Watch The Throne" },
        { id: "yeezus", artist: "kanye", name: "Yeezus", cover: "images/kanye_images/Yeezus_album_cover.png" },
        { id: "tlop", artist: "kanye", name: "The Life of Pablo" },
        { id: "ye", artist: "kanye", name: "Ye" },
        { id: "ksg", artist: "kanye", name: "Kids See Ghosts" },
        { id: "jik", artist: "kanye", name: "Jesus Is King" },
        { id: "donda", artist: "kanye", name: "Donda" },
        { id: "v1", artist: "kanye", name: "Vultures 1", cover: "images/kanye_images/v1cover.jpeg" },
        { id: "v2", artist: "kanye", name: "Vultures 2", cover: "images/kanye_images/v2cover.png" },
        { id: "donda2", artist: "kanye", name: "Donda 2", cover: "images/kanye_images/donda2.jpg" },
        { id: "bully", artist: "kanye", name: "Bully", cover: "images/kanye_images/bully.jpg" },
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
        { id: "wattba", artist: "drake", name: "What a Time to Be Alive" },
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
    songs: []
};

const albumCoverMap = {
    cd: "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/15/05/09/15050911-a2f1-9ebc-0d16-6e8faad1cf80/00602567924326.rgb.jpg/500x500bb.jpg",
    lr: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0e/90/3c/0e903c43-9d81-f91b-90f1-727a58f7fb2c/00602498824030.rgb.jpg/500x500bb.jpg",
    grad: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/39/25/2d/39252d65-2d50-b991-0962-f7a98a761271/00602517483507.rgb.jpg/500x500bb.jpg",
    808: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/f3/61/19/f36119b9-4d88-05eb-4306-2ae0e7decf88/08UMGIM26559.rgb.jpg/500x500bb.jpg",
    wtt: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/18/f5/07/18f5070d-b5dc-796c-bce4-42badb41a762/00602527812526.rgb.jpg/500x500bb.jpg",
    tlop: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ec/fd/e0/ecfde04e-6db2-e55e-41fe-83c87a52b16e/00602547908339.rgb.jpg/500x500bb.jpg",
    ye: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f8/92/62/f892628e-bfd5-2437-c1f5-0ebbd366de09/00602577303098.rgb.jpg/500x500bb.jpg",
    ksg: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/3f/2e/d3/3f2ed3b1-d260-4e92-816b-4beac102c676/00602567794318.rgb.jpg/500x500bb.jpg",
    jik: "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/21/fd/d3/21fdd3d4-0c00-53ef-3903-d0569c49a812/19UMGIM89397.rgb.jpg/500x500bb.jpg",
    donda: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/cf/a7/f9/cfa7f9be-2d62-89a4-19bf-26276ab39f16/21UMGIM64738.rgb.jpg/500x500bb.jpg",
    tml: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/65/d3/f6/65d3f6e2-25d5-5890-afe5-526e7cb993ff/00602527458038.rgb.jpg/500x500bb.jpg",
    tc: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/d2/53/62/d2536245-b94c-b3fd-7168-9512f655f6d4/00602527899091.rgb.jpg/500x500bb.jpg",
    nwts: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/60/e8/d1/60e8d144-2b8e-cbdc-9ff8-beaf9f4868b1/00602537542345.rgb.jpg/500x500bb.jpg",
    iyrtitl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/f7/7d/bb/f77dbbb4-e8a2-855d-cc5c-79804a297599/00602547261908.rgb.jpg/500x500bb.jpg",
    views: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/95/f5/87/95f587f7-21c3-d5f9-d81a-4350f9caa020/16UMGIM27643.rgb.jpg/500x500bb.jpg",
    ml: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/18/9d/b8/189db80b-bfa8-89d1-1514-5fcb7e5cf8f4/00602557611526.rgb.jpg/500x500bb.jpg",
    scorp: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/bb/6d/8f/bb6d8f67-6d04-10b5-dd62-eb5809ac54fc/00602567879152.rgb.jpg/500x500bb.jpg",
    clb: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/cb/6b/5f/cb6b5fc3-8d35-908a-18e6-6f8eda46ce11/21UM1IM07521.rgb.jpg/500x500bb.jpg",
    hnm: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/6d/31/ab/6d31abaf-7a07-05f1-13ad-72ec520b6bfb/22UMGIM67374.rgb.jpg/500x500bb.jpg",
    hl: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/e1/6e/6a/e16e6a89-3e6d-1936-1a9c-b51680bcd4c1/22UM1IM29132.rgb.jpg/500x500bb.jpg",
    fatd: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/fa/9e/e6/fa9ee672-0880-2b5b-a69d-981e8fcb807e/23UM1IM09863.rgb.jpg/500x500bb.jpg",
    wattba: "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/d3/74/1d/d3741d09-5c9a-461b-aba3-fa345d306d5a/00602547616678.rgb.jpg/500x500bb.jpg",
    sec80: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/f3/61/19/f36119b9-4d88-05eb-4306-2ae0e7decf88/08UMGIM26559.rgb.jpg/500x500bb.jpg",
    gkmc: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/36/86/ec/3686ec99-dec4-0a01-8b74-2d8a9a0263a7/12UMGIM52988.rgb.jpg/500x500bb.jpg",
    tpab: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/b5/a6/91/b5a69171-5232-3d5b-9c15-8963802f83dd/15UMGIM15814.rgb.jpg/500x500bb.jpg",
    damn: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/ab/16/ef/ab16efe9-e7f1-66ec-021c-5592a23f0f9e/17UMGIM88793.rgb.jpg/500x500bb.jpg",
    mrsm: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/6b/17/e6/6b17e679-70e0-e00e-93e1-5af4d25ee8c8/22UMGIM52376.rgb.jpg/500x500bb.jpg",
    rodeo: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/6d/fb/f1/6dfbf17d-4032-f585-35ad-f3f9b6859cd9/886445460421.jpg/500x500bb.jpg",
    birds: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/b8/e5/27/b8e527c8-aaf4-c7b7-5562-c479458ed7d9/886446092645.jpg/500x500bb.jpg",
    astro: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/e7/49/8f/e7498f65-df8f-bead-d6e3-2a8d4d642a79/886447235317.jpg/500x500bb.jpg",
    utopia: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/7d/4f/94/7d4f9468-56e1-3a2d-7186-c8088170ef58/196871341899.jpg/500x500bb.jpg",
    sslp: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/ea/ac/03/eaac03e5-8e9d-847e-d5b9-af7dee6a970b/00606949063221.rgb.jpg/500x500bb.jpg",
    mmlp: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/ea/ac/03/eaac03e5-8e9d-847e-d5b9-af7dee6a970b/00606949063221.rgb.jpg/500x500bb.jpg",
    tes: "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/dd/5c/e6/dd5ce621-f7d2-f767-7a08-e7a7eaa7870b/00602537526994.rgb.jpg/500x500bb.jpg",
    encore: "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/f6/1c/ab/f61cabb0-9159-2a15-db37-09d8e77e971c/00602567834403.rgb.jpg/500x500bb.jpg",
    relapse: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/27/96/e3/2796e35a-484d-f1de-5098-dbde88d5fb56/00602527032139.rgb.jpg/500x500bb.jpg",
    recovery: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/95/a4/2c/95a42c0d-f3c8-c70d-3e3a-93cfa4a516d4/00602527394558.rgb.jpg/500x500bb.jpg",
    mmlp2: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/f4/ae/5c/f4ae5c21-bfe1-e99e-4732-a2b6cf006848/00602537542727.rgb.jpg/500x500bb.jpg",
    revival: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/78/07/35/78073533-a113-170d-bfab-acc3cec405d1/00602567238218.rgb.jpg/500x500bb.jpg",
    kamikaze: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/03/c2/54/03c2540d-b9f3-9807-b429-da23cbb854a2/00602577046421.rgb.jpg/500x500bb.jpg",
    mtbmb: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/c6/3f/7a/c63f7a28-4e53-1ae2-cfae-5d211e0c256c/20UMGIM02955.rgb.jpg/500x500bb.jpg",
    tdoss: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/d5/ae/23/d5ae23ed-c989-c297-c860-e07f51723001/24UMGIM99176.rgb.jpg/500x500bb.jpg",
    gbm1: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/a0/ca/05/a0ca057c-686e-8f24-e4da-43b39e5033f4/23UMGIM13549.rgb.jpg/500x500bb.jpg",
    gbm2: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/a0/ca/05/a0ca057c-686e-8f24-e4da-43b39e5033f4/23UMGIM13549.rgb.jpg/500x500bb.jpg",
    iop: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ca/58/e5/ca58e5e3-acb7-8ca3-6af9-ad63af3b71f1/075679873675.jpg/500x500bb.jpg",
    pf: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/3f/6a/dc/3f6adcfb-4d27-303e-b964-3710c56800e3/11UMGIM13385.rgb.jpg/500x500bb.jpg",
    rr: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/a5/c4/90/a5c490a1-d914-9943-7e02-32f8320e5840/12UMGIM12516.rgb.jpg/500x500bb.jpg",
    pp: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/6c/62/dc/6c62dcf4-b35c-f12e-28e6-d08b878bbeb5/14UMGIM59292.rgb.jpg/500x500bb.jpg",
    queen: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/8c/50/56/8c505623-89b6-1799-65dc-d03242cfe441/18UMGIM36519.rgb.jpg/500x500bb.jpg",
    pf2: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/83/f0/83/83f08337-954b-e616-b8d9-317d9def8190/23UM1IM08927.rgb.jpg/500x500bb.jpg"
};

Object.keys(albumCoverMap).forEach(id => {
    const album = gameData.albums.find(a => a.id === id);
    if (album && !album.cover) {
        album.cover = albumCoverMap[id];
    }
});

// Load songs from CSV JSON file
async function loadSongsFromJSON() {
    try {
        // Try known JSON filenames in order of preference
        const candidates = ['kanye_lyrics.json', 'csvjson.json'];
        let csvData = null;
        let loadedFrom = null;
        for (const fname of candidates) {
            try {
                const resp = await fetch(fname);
                if (!resp.ok) continue;
                const data = await resp.json();
                if (data && Array.isArray(data) && data.length > 0) {
                    csvData = data;
                    loadedFrom = fname;
                    break;
                }
            } catch (e) {
                // try next candidate
                continue;
            }
        }
        if (!csvData) throw new Error('No song JSON file found (tried: ' + candidates.join(', ') + ')');
        console.log(`Loading songs from ${loadedFrom}`);
        processCsvData(csvData);
    } catch (error) {
        console.error("Error loading songs from CSV JSON:", error);
    }
}

function normalizeAlbumName(name) {
    if (!name) return "";
    return name
        .toLowerCase()
        .replace(/['’]/g, "")
        .replace(/[.,!?:;]/g, "")
        .replace(/\s+/g, " ")
        .trim();
}

// Shared helper to convert raw CSV/JSON entries into gameData.songs
function processCsvData(csvData) {
    if (!csvData || !Array.isArray(csvData)) return;
    gameData.songs = csvData.map(entry => {
        const normalizedAlbumName = normalizeAlbumName(entry.album || '');
        const normalizedArtistName = normalizeAlbumName(entry.artist || '');

        const album = gameData.albums.find(a => {
            const normalizedAName = normalizeAlbumName(a.name);
            const artistMatch = gameData.artists.find(ar => ar.id === a.artist && (
                normalizeAlbumName(ar.name).includes(normalizedArtistName.split(' ')[0]) ||
                normalizedArtistName.includes(normalizeAlbumName(ar.name).split(' ')[0])
            ));
            return normalizedAName === normalizedAlbumName && artistMatch;
        });

        return {
            albumId: album ? album.id : null,
            name: entry.song,
            lyrics: entry.lyric
        };
    }).filter(song => song.albumId !== null);

    console.log(`Loaded ${gameData.songs.length} songs`);
}

// Try to load an artist-specific JSON file (e.g., drake_lyrics.json)
async function loadSongsForArtist(artistId) {
    if (!artistId) return;
    const fname = `${artistId}_lyrics.json`;
    try {
        const resp = await fetch(fname);
        if (!resp.ok) {
            console.log(`${fname} not found for artist ${artistId}`);
            return;
        }
        const data = await resp.json();
        if (data && Array.isArray(data) && data.length > 0) {
            processCsvData(data);
            currentSongsSourceArtist = artistId;
            console.log(`Loaded artist-specific songs from ${fname}`);
        }
    } catch (e) {
        console.log(`Failed to load ${fname}:`, e);
    }
}

let points = 0;
let selectedArtistId = "kanye";
let currentRound = { albumId: "", songName: "", lyrics: "" };
let currentGuessAlbumId = "";
let currentSongsSourceArtist = null;

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

window.onload = async () => {
    await loadSongsFromJSON();
    populateDropdown(gameData.artists);
    // Load artist-specific file for the initially selected artist, if available.
    await loadSongsForArtist(artistDropdown.value);
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
    // Attempt to load an artist-specific lyrics JSON (e.g., drake_lyrics.json)
    loadSongsForArtist(artistDropdown.value);
}

function updateAvatarImage(artistId) {
    selectedArtistId = artistId;
    const target = gameData.artists.find(a => a.id === artistId);
    if(target) {
        // Check if it's a local image or remote URL
        const isLocalImage = target.pic.startsWith("images/") || !target.pic.includes("://");
        const imageSrc = isLocalImage ? target.pic : proxy + target.pic;
        artistAvatar.src = imageSrc;
        artistAvatar.onerror = () => {
            artistAvatar.src = "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png";
        };
    }
}

async function startGame() {
    if(!selectedArtistId) return;
    if (currentSongsSourceArtist !== selectedArtistId) {
        await loadSongsForArtist(selectedArtistId);
    }
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

        // Only try to fetch from iTunes when a local cover isn't provided
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
        // For Drake, do not pull fillers — only show songs from the clicked album
        if (selectedArtistId === 'drake') {
            // leave finalOptions as-is (may be fewer than 5)
        } else {
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
    }

    // 4. Fallback filler step 2: If STILL less than 5 songs (e.g. Cardi B), pull random songs globally
    if (finalOptions.length < 5) {
        if (selectedArtistId === 'drake') {
            // keep fewer than 5 options for Drake rather than pulling global fillers
        } else {
        let allOtherSongs = gameData.songs.filter(s => 
            !finalOptions.some(f => f.name === s.name)
        );
        shuffleArray(allOtherSongs);
        for (let song of allOtherSongs) {
            if (finalOptions.length >= 5) break;
            finalOptions.push(song);
        }
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
