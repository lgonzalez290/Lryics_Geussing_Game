Run the Socket.io server for the Lyrics Guesser multiplayer demo.

Install dependencies and start:

```bash

```

The server serves static files from the project root (one level up), and listens on port 3000 by default. Open http://localhost:3000/website.html to use the site connected to the socket server.

Notes:
- This is a simple in-memory server for demo/testing only. Rooms are not persisted.
- For production, host the server and enable appropriate CORS/HTTPS and persistence.
