# Meta Leads App

This is a React Native app that shows leads from Meta Lead Ads. When a new test lead comes in, the app gets the details right away. No need to refresh the screen.

## How it works

1. A test lead is made using the Meta Lead Ads Testing Tool.

2. Meta sends a webhook message to the backend.

3. The backend uses the Meta Graph API to get the details.

4. The backend sends the details to the mobile app using Socket.IO.

5. The new lead shows up in the app automatically.

## Tech Stack

- **Frontend:** React Native, Expo

- **Backend:** Node.js, Express

- **Real-time communication:** Socket.IO

- **API:** Meta Graph API

- **Testing:** Meta Lead Ads Testing Tool,

## Project Structure

```text

Meta-leads-app/

├── src/              # Mobile application screens

|   └──app

|      └──index.tsx

├── assets/           # Images and other assets

├── backend/          # Backend server and webhook handling

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

Run this command to install everything needed for the app and backend.

```bash

npm install

```

### 3. Configure environment variables

Create a `.env` file inside the backend folder and add these lines:

```env

PORT=3000

VERIFY_TOKEN=your_verify_token

PAGE_ACCESS_TOKEN=your_page_access_token

```

Replace the placeholder values with your tokens. Do not commit this file to GitHub.

### 4. Start the backend

Go to the backend folder and run:

```bash

cd backend

node server.js

```

### 5. Start the Expo app

Open another window in the project folder and run:

```bash

npx expo start

```

Then scan the QR code using the Expo Go app.

## Testing

1. Start both the backend and the mobile app.

2. Use ngrok to expose the backend webhook.

3. Set the webhook callback URL in the Meta Developer Dashboard.

4. Use the Meta Lead Ads Testing Tool to create a test lead.

5. Check if the new lead appears in the app without refreshing.

## Assumptions

- The Meta Lead Ads Testing Tool is used for testing, not ads.

- The Meta Page and Lead Form are already set up.

- The backend has a Page Access Token with the right permissions.

- The mobile device and backend can talk to each other over the network.

## Limitations

- This app is meant to show how real-time lead retrieval works.

- There’s no storage for leads unless a database is added.

- You need a working internet connection. Correct Meta credentials.

## Author

**Meera Fareena**

GitHub: [Meera2906](https://github.com/Meera2906)