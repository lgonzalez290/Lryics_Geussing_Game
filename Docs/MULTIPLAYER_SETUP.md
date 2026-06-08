# Multiplayer Setup & Troubleshooting

## Quick Start (Local Testing on Same Machine)

### Option A: Serve from Socket Server (Recommended)

1. Start the socket.io server:
```bash
cd server
npm install
npm start
```
You should see: `Server listening on port 3000`

2. Open the site in a new browser window:
```
http://localhost:3000/website.html
```

3. In a second browser window/tab, open the same URL:
```
http://localhost:3000/website.html
```

4. Enable multiplayer on both, create a room, and test start/turns.

### Option B: Use Live Server (Port 5502) + Socket Server (Port 3000)

If you prefer using VS Code's Live Server extension:

1. Start the socket server in the terminal:
```bash
cd server
npm install
npm start
```

2. In VS Code, right-click `website.html` → **Open with Live Server** (or press Alt+L+O)
   - This opens the page on `http://localhost:5502/website.html`

3. The page will automatically detect and connect to the socket server on port 3000
   - Console will log: `[Socket] Auto-detected localhost. Connecting to socket server on port 3000.`

4. Open another browser/tab with the same Live Server URL to test multiplayer

This way: **page on 5502, sockets on 3000, both on localhost** — works perfectly!

---

## Multi-Device Testing (Different Machines / Phones)

**This is the most common issue**: if the host's machine is running the server on `localhost`, the room link will contain `http://localhost:3000/...` which doesn't work for other devices.

### Solution: Use Your Machine's IP Address Instead

1. Find your machine's IP:
   - On Windows: Open Command Prompt, run `ipconfig`, find IPv4 Address (e.g., `192.168.1.100`)
   - On Mac/Linux: Open Terminal, run `ifconfig` or `hostname -I`, find IP (e.g., `192.168.1.100`)

2. Start the server normally:
```bash
cd server
npm install
npm start
```

3. **Host** opens the site using their **machine IP** (NOT localhost):
```
http://192.168.1.100:3000/website.html
```
(Replace `192.168.1.100` with your actual IP from step 1)

4. **Host** creates a room and copies the link. The link should now contain the IP, not localhost.

5. **Joiner** (on a different device) opens the link in their browser.

6. Both pages should now see `[Socket] Connected successfully` in the browser console.

---

## Debugging Checklist

If it's still not working, open **Developer Tools** (F12 or right-click → Inspect) → **Console** tab and check:

1. **Host Console**:
   - Look for: `[Socket] Connected successfully <socket-id>`
   - If you see errors like `Failed to load resource: ...socket.io...`, the client can't reach the server.

2. **Server Terminal** (where `npm start` runs):
   - Look for lines like:
     ```
     socket connected <id>
     room created <token>
     player joined <name>
     game started for <token>
     turn advanced for <token>
     ```
   - If no lines appear, the client never connected to the server.

3. **Joiner Console**:
   - Look for: `[Socket] Connected successfully <socket-id>`
   - If missing, the joiner is not reaching the server.
   - Check the URL: does it have the IP or `localhost`?

---

## Common Issues & Fixes

| Issue | Cause | Fix |
|-------|-------|-----|
| "Failed to load resource: :5502/socket.io" | Page served from Live Server, not the socket server | Open from http://localhost:3000 or your IP:3000 |
| Host sees "connected" but joiner doesn't | Joiner opened a localhost URL from a different machine | Use machine IP instead of localhost in the room link |
| Both see connected but game doesn't start | Room state not syncing | Check that both clicked START MULTIPLAYER / are waiting. Check server console for `game started` log |
| Socket connects then disconnects | Server not running, or connection lost | Keep `npm start` running in the server folder |
| "It's not your turn" error when you should be able to click | Turn system enforced correctly | Wait for your turn, or check `currentPlayerIndex` in console |

---

## If You're Still Stuck

1. Paste **all console logs** from host and joiner (F12 → Console, right-click → Save As)
2. Paste **server terminal output** (from the `npm start` window)
3. Tell me the **exact URL** each client opened
4. Tell me if host and joiner are on the **same machine or different machines**

I can then pinpoint the issue and push a fix.

---

## Architecture Notes

- **Server**: Node.js (Express + Socket.io) runs on port 3000, serves website.html and handles multiplayer logic
- **Client**: Connects to server via WebSocket (socket.io), gets authoritative room state, start/turn events
- **Room State**: Persisted to `server/rooms.json` for basic reconnection support
- **Hosting**: For production, deploy the server to a cloud host (Heroku, AWS, etc.) so anyone can access it via URL



