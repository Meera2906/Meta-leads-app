# Meta Leads App

This is a React Native app that shows leads from Meta Lead Ads. When a new test lead comes in, the app gets the details right away. No need to refresh the screen.

## How it works

1. A test lead is created using the Meta Lead Ads Testing Tool.
2. Meta sends a webhook notification to the backend.
3. The backend uses the Meta Graph API to get the lead details.
4. The backend sends the details to the mobile app using Socket.IO.
5. The new lead shows up in the app automatically.

## Tech Stack

- **Frontend:** React Native, Expo
- **Backend:** Node.js, Express
- **Real-time communication:** Socket.IO
- **API:** Meta Graph API
- **Testing:** Meta Lead Ads Testing Tool

## Project Structure

```text
Meta-leads-app/
├── src/
│   └── app/
│       └── index.tsx
├── assets/
├── backend/
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js and npm
- Expo Go on an Android or iOS device
- Meta Developer account
- ngrok

### 1. Clone the repository

```bash
git clone https://github.com/Meera2906/Meta-leads-app.git
cd Meta-leads-app
```

### 2. Install dependencies

Run this command to install the project dependencies:

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file inside the backend folder and add:

```env
PORT=3000
VERIFY_TOKEN=your_verify_token
PAGE_ACCESS_TOKEN=your_page_access_token
```

Replace the placeholder values with your own tokens. Do not commit this file to GitHub.

### 4. Start the backend

Go to the backend folder and run:

```bash
cd backend
node server.js
```

### 5. Start the Expo app

Open another terminal in the project folder and run:

```bash
npx expo start
```

Scan the QR code using the Expo Go app.

## Testing

1. Start both the backend and the mobile app.
2. Use ngrok to expose the backend webhook.
3. Set the webhook callback URL in the Meta Developer Dashboard.
4. Use the Meta Lead Ads Testing Tool to create a test lead.
5. Check if the new lead appears in the app without refreshing.

## Demo Videos

### Working Demonstration

[![Working Demonstration](https://cdn.loom.com/sessions/thumbnails/a0f729a6553245f2b15b1eb6dd66f077-with-play.gif)](https://www.loom.com/share/a0f729a6553245f2b15b1eb6dd66f077)

### Code Walkthrough

[![Code Walkthrough](https://cdn.loom.com/sessions/thumbnails/bdf2a43bd0804280823e30b4f102eec8-with-play.gif)](https://www.loom.com/share/bdf2a43bd0804280823e30b4f102eec8)

## Assumptions

- The Meta Lead Ads Testing Tool is used for testing, not actual advertisements.
- The Meta Page and Lead Form are already set up.
- The backend has a Page Access Token with the required permissions.
- The mobile device and backend can communicate over the network.

## Limitations

- This app demonstrates real-time lead retrieval.
- Lead storage is not implemented.
- A working internet connection and valid Meta credentials are required.

## Author

**Meera Fareena**

GitHub: [Meera2906](https://github.com/Meera2906)
