export const authEndpoint = "https://accounts.spotify.com/authorize";

// Replace with your app's client ID, redirect URI and desired scopes
export const clientId = "004729cd11d94a2e942d64d585d2a019";
export const redirectUri = "http://localhost:3000/spotify-login";
export const scopes = [
    "user-top-read",
    "user-read-currently-playing",
    "user-read-playback-state",
];