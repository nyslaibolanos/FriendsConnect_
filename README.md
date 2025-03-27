# FriendsConnect

FriendsConnect is a React Native application that allows users to connect with friends, share updates, and view friends' activities in real-time. The app integrates with Firebase for authentication, data storage, and media handling.

## Features

- **Authentication**: Sign up and log in using Firebase Authentication.
- **Real-time Updates**: View and post real-time updates.
- **Media Sharing**: Share images and locations with updates.
- **User Profiles**: View and edit user profiles.
- **Settings**: Customize app settings.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/FriendsConnect.git
    cd FriendsConnect
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up Firebase:
    - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
    - Add a web app to your Firebase project and copy the Firebase config.
    - Create a `firebaseInit.js` file in the project root and paste your Firebase config:
        ```js
        import { initializeApp } from 'firebase/app';
        import { getAuth } from 'firebase/auth';
        import { getFirestore } from 'firebase/firestore';
        import { getStorage } from 'firebase/storage';

        const firebaseConfig = {
        apiKey: "AIzaSyAa8W8JkZkobL_NNUXAZquT6YM31sL74EE",
        authDomain: "wfriendsconnect.firebaseapp.com",
        projectId: "wfriendsconnect",
        storageBucket: "wfriendsconnect.appspot.com",
        messagingSenderId: "185460169600",
        appId: "1:185460169600:web:a61db9fdebad1449d73f65"
        };

        const app = initializeApp(firebaseConfig);
        export const auth = getAuth(app);
        export const db = getFirestore(app);
        export const storage = getStorage(app);
        ```

4. Run the app:
    ```sh
    npm start
    ```

## Usage

### Welcome Screen
- **Purpose**: The entry point of the app that greets users and provides a way to get started.
- **Features**:
  - A welcome message.
  - A "Get Started" button that navigates to the Updates screen.
  - The button is disabled if the user is not signed in or their email is not verified.

### Updates Screen
- **Purpose**: Display a list of updates from the user and their friends.
- **Features**:
  - Shows updates in real-time using Firebase Firestore.
  - Each update displays the author, timestamp, status, text content, optional image, and location.
  - Provides a button to navigate to the Compose Message screen for posting new updates.

### Compose Message Screen
- **Purpose**: Allows users to compose and post new updates.
- **Features**:
  - A text input area for the update content.
  - Options to add an image from the user's library.
  - A toggle switch to include the user's current location.
  - A picker to select the status (e.g., happy, sad, tired).
  - Buttons to cancel the message, add an image, and post the update.
  - Uses Firebase Storage to upload images and Firestore to store update details.

### Profile Screen
- **Purpose**: Display and allow editing of the user's profile information.
- **Features**:
  - Shows the user's display name, email, and profile picture.
  - Provides options to update profile information.
  - Allows the user to log out.
  - Shows the user's past updates.

### Settings Page
- **Purpose**: Allows users to customize app settings.
- **Features**:
  - Options to change notification preferences.
  - Privacy settings.
  - Other customizable app behaviors.


## Acknowledgments

- [React Native](https://reactnative.dev/)
- [Firebase](https://firebase.google.com/)
- [Expo](https://expo.io/)
- [Ionicons](https://ionicons.com/)
