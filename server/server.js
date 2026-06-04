const express = require('express');
const path = require('path');
const http = require('http');
const { Server } = require('socket.io');

const cors = require('cors');
const app = express();

// Allow requests from your frontend Codespace URL
app.use(cors({
    origin: 'https://special-winner-694v6qgw6jjpf5j9-3001.app.github.dev',
    credentials: true
}));

fetch('https://github.dev')

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

// Serve the project root static files so website.html can be loaded
app.use(express.static(path.join(__dirname, '..')));

const PORT = process.env.PORT || 3000;

// In-memory rooms store
const rooms = {}; // hostToken -> { hostToken, hostSocketId, hostClientToken, playerNames:[], playerClientTokens:[], isStarted, currentPlayerIndex, artistId }
const fs = require('fs');
const PERSIST_PATH = path.join(__dirname, 'rooms.json');

function saveRoomsToDisk() {
    try {
        fs.writeFileSync(PERSIST_PATH, JSON.stringify(rooms, null, 2), 'utf8');
    } catch (e) {
        console.warn('Failed to persist rooms', e);
    }
}

function loadRoomsFromDisk() {
    try {
        if (fs.existsSync(PERSIST_PATH)) {
            const raw = fs.readFileSync(PERSIST_PATH, 'utf8');
            const parsed = JSON.parse(raw);
            Object.assign(rooms, parsed);
            console.log('Loaded persisted rooms');
        }
    } catch (e) {
        console.warn('Failed to load persisted rooms', e);
    }
}

loadRoomsFromDisk();

io.on('connection', (socket) => {
    console.log('socket connected', socket.id);

    socket.on('create_room', (payload) => {
        try {
            const hostToken = payload.hostToken || (Math.random().toString(36).slice(2,10) + Date.now().toString(36));
            rooms[hostToken] = {
                hostToken,
                hostSocketId: socket.id,
                hostClientToken: payload.hostClientToken || null,
                playerNames: payload.playerNames || [],
                playerClientTokens: payload.playerClientTokens || [],
                isStarted: false,
                currentPlayerIndex: 0,
                artistId: payload.artistId || null,
                createdAt: Date.now()
            };
            saveRoomsToDisk();
            socket.join(hostToken);
            socket.emit('room_state', rooms[hostToken]);
            io.to(hostToken).emit('lobby_updated', rooms[hostToken]);
            console.log('room created', hostToken);
        } catch (e) {
            console.error('create_room error', e);
            socket.emit('room_error', 'Failed to create room on server');
        }
    });

    socket.on('join_room', (payload) => {
        try {
            const hostToken = payload.hostToken;
            if (!hostToken || !rooms[hostToken]) {
                socket.emit('room_error', 'Room not found');
                return;
            }
            const room = rooms[hostToken];
            // Add player name
            const name = payload.requestedName || `Player ${room.playerNames.length + 1}`;
            room.playerNames.push(name);
            if (!room.playerClientTokens) room.playerClientTokens = [];
            room.playerClientTokens.push(payload.clientToken || null);
            saveRoomsToDisk();
            socket.join(hostToken);
            // Send updated state to everyone
            io.to(hostToken).emit('lobby_updated', room);
            socket.emit('room_state', room);
            console.log('player joined', name, 'to', hostToken);
        } catch (e) {
            console.error('join_room error', e);
            socket.emit('room_error', 'Failed to join room on server');
        }
    });

    socket.on('start_game', (payload) => {
        try {
            const hostToken = payload.hostToken;
            const room = rooms[hostToken];
            if (!room) {
                socket.emit('room_error', 'Room not found');
                return;
            }
            // only host socket may start
            if (socket.id !== room.hostSocketId && payload.clientToken !== room.hostClientToken) {
                socket.emit('room_error', 'Only host can start the game');
                return;
            }
            room.isStarted = true;
            room.currentPlayerIndex = 0;
            saveRoomsToDisk();
            io.to(hostToken).emit('game_started', room);
            console.log('game started for', hostToken);
        } catch (e) {
            console.error('start_game error', e);
            socket.emit('room_error', 'Failed to start game');
        }
    });

    socket.on('update_artist', (payload) => {
        try {
            const hostToken = payload.hostToken;
            const room = rooms[hostToken];
            if (!room) {
                socket.emit('room_error', 'Room not found');
                return;
            }
            // only host may change artist
            if (socket.id !== room.hostSocketId && payload.clientToken !== room.hostClientToken) {
                socket.emit('room_error', 'Only host can change artist');
                return;
            }
            room.artistId = payload.artistId || room.artistId;
            saveRoomsToDisk();
            io.to(hostToken).emit('room_state', room);
            io.to(hostToken).emit('lobby_updated', room);
            console.log('artist updated for', hostToken, room.artistId);
        } catch (e) {
            console.error('update_artist error', e);
            socket.emit('room_error', 'Failed to update artist');
        }
    });

    socket.on('register_client', (payload) => {
        try {
            const clientToken = payload.clientToken;
            const knownHost = payload.hostToken;
            // Map socket to any room containing this clientToken
            for (const token in rooms) {
                const room = rooms[token];
                if (Array.isArray(room.playerClientTokens) && room.playerClientTokens.indexOf(clientToken) !== -1) {
                    socket.join(token);
                    socket.emit('room_state', room);
                    console.log('re-associated client to room', token);
                    return;
                }
            }
            // If provided hostToken and room exists, join as observer
            if (knownHost && rooms[knownHost]) {
                socket.join(knownHost);
                socket.emit('room_state', rooms[knownHost]);
            }
        } catch (e) {
            console.warn('register_client error', e);
        }
    });

    socket.on('next_turn', (payload) => {
        try {
            const hostToken = payload.hostToken;
            const room = rooms[hostToken];
            if (!room) {
                socket.emit('room_error', 'Room not found');
                return;
            }
            // only host may advance
            if (socket.id !== room.hostSocketId && payload.clientToken !== room.hostClientToken) {
                socket.emit('room_error', 'Only host can advance turns');
                return;
            }
            if (!Array.isArray(room.playerNames) || room.playerNames.length === 0) return;
            room.currentPlayerIndex = (room.currentPlayerIndex + 1) % room.playerNames.length;
            saveRoomsToDisk();
            io.to(hostToken).emit('turn_changed', room);
            console.log('turn advanced for', hostToken, 'new index', room.currentPlayerIndex);
        } catch (e) {
            console.error('next_turn error', e);
            socket.emit('room_error', 'Failed to change turn');
        }
    });

    socket.on('disconnect', () => {
        console.log('socket disconnected', socket.id);
        // Note: For simplicity we do not auto-remove players on disconnect in this demo server.
    });
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
