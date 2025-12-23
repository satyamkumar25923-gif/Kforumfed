# AI Moderation System Setup

We have integrated Google Gemini AI to automatically moderate posts for abusive content in real-time.

## Features
1.  **Multilingual Abuse Detection**: Checks posts in any language using Gemini AI.
2.  **Strike System**:
    - **1st & 2nd Violation**: User receives a strike and a warning. Post is blocked.
    - **3rd Violation**: User is **banned for 3 months** from posting.
3.  **Automatic Unbanning**: Bans expire automatically after 3 months.

## Setup Requirements

### 1. Environment Variable
You MUST add your Gemini API Key to the `.env` file in the `K-Forum` directory:

```env
GEMINI_API_KEY=your_api_key_here
```

If you don't have a key, get one from [Google AI Studio](https://aistudio.google.com/).

### 2. Restart Server
Since the backend code has changed and doesn't use auto-reload:
**Please stop and restart your `npm run dev` server.**

## How it works (Code Overview)
- **`server/utils/gemini.js`**: Initialized Gemini client and exports `checkAbusiveContent(text)`.
- **`server/models/User.js`**: Added `strikes`, `lastStrikeDate`, `isBanned`, `banExpiresAt` fields.
- **`server/routes/posts.js`**:
    - Before creating a post, checks `user.isBanned`.
    - Calls `checkAbusiveContent` with title + content + tags.
    - If abusive -> increments strikes -> blocks post -> bans if strikes >= 3.
