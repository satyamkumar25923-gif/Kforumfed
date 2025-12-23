# K-Forum Student Community Platform

Welcome to **K-Forum**, the secure community platform designed for KIIT students to share, discuss, and connect.

## 🚀 Tech Stack

- **Frontend:** React.js, Vite, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Real-time:** Socket.io
- **Authentication:** JWT (JSON Web Tokens)

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- MongoDB instance (local or Atlas)

### Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <repository-url>
   cd K-Forum
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Setup**:
   Ensure you have a `.env` file in the root directory with the necessary variables (e.g., `VITE_BACKEND_API`, `MONGO_URI`, `JWT_SECRET`).

### Running the Application

The project is set up to run both the client and server concurrently.

```bash
npm run dev
```

- **Frontend:** [http://localhost:5174](http://localhost:5174)
- **Backend:** [http://localhost:5001](http://localhost:5001)

## 📁 Project Structure

- `src/`: Frontend React application source code.
  - `components/`: Reusable UI components.
  - `contexts/`: React contexts (Auth, Socket).
  - `pages/`: Main application pages (Home, Login, Profile, etc.).
- `server/`: Backend Node.js/Express application.

## ✨ Scripts

- `npm run dev`: Starts both client and server in development mode.
- `npm run client`: Starts only the Vite frontend.
- `npm run server`: Starts only the Express backend.
- `npm run build`: Builds the frontend for production.
