const io = require('socket.io-client');

function rand() { return Math.random().toString(36).substring(2,8); }
const hostToken = 'testroom_' + rand();
const hostClientToken = 'host_' + rand();
const joinerClientToken = 'joiner_' + rand();

const serverUrl = 'http://localhost:3000';

let hostStarted = false;
let joinerStarted = false;
let turnChanged = false;

const host = io(serverUrl);
const joiner = io(serverUrl);

host.on('connect', () => {
    console.log('[host] connected', host.id);
    host.emit('create_room', {
        hostToken,
        artistId: 'kendrick',
        playerNames: ['Host','Joiner'],
        playerClientTokens: [hostClientToken, joinerClientToken],
        hostClientToken
    });
});

host.on('room_state', (state) => {
    console.log('[host] room_state', state.hostToken, 'isStarted=', state.isStarted);
});

host.on('lobby_updated', (state) => {
    console.log('[host] lobby_updated players=', state.playerNames);
});

host.on('game_started', (state) => {
    console.log('[host] game_started', state.currentPlayerIndex);
    hostStarted = true;
});

host.on('turn_changed', (state) => {
    console.log('[host] turn_changed ->', state.currentPlayerIndex);
    turnChanged = true;
});

joiner.on('connect', () => {
    console.log('[joiner] connected', joiner.id);
    // delay join slightly to simulate real-world
    setTimeout(() => {
        joiner.emit('join_room', { hostToken, clientToken: joinerClientToken, requestedName: 'Joiner' });
    }, 200);
});

joiner.on('room_state', (state) => {
    console.log('[joiner] room_state', state.hostToken, 'isStarted=', state.isStarted);
    if (state && !state.isStarted) {
        // ask host to start after a short delay
        setTimeout(() => {
            console.log('[host] emitting start_game');
            host.emit('start_game', { hostToken, clientToken: hostClientToken });
        }, 500);
    }
});

joiner.on('game_started', (state) => {
    console.log('[joiner] game_started', state.currentPlayerIndex);
    joinerStarted = true;
});

joiner.on('turn_changed', (state) => {
    console.log('[joiner] turn_changed ->', state.currentPlayerIndex);
    turnChanged = true;
});

// After game_started, host will advance turn after brief pause
setTimeout(() => {
    setTimeout(() => {
        console.log('[host] emitting next_turn');
        host.emit('next_turn', { hostToken, clientToken: hostClientToken });
    }, 1200);
}, 2000);

// Observe and finish
setTimeout(() => {
    const ok = hostStarted && joinerStarted && turnChanged;
    console.log('TEST RESULT ok=', ok);
    process.exit(ok ? 0 : 1);
}, 5000);
