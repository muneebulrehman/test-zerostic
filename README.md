## Project Documentation

### Overview

This project is a React application that uses Firebase for backend services. It's set up with Vite for a faster and leaner development experience. The project structure is organized and modular, with separate directories for components and assets.

### Getting Started

#### Prerequisites

- Node.js and npm installed on your machine
- A Firebase account

#### Installation

1. Clone the repository to your local machine.
2. Run `npm install` to install all the dependencies.
3. Create a Firebase project and replace the `firebaseConfig` in `src/firebase.js` with your own Firebase project details.

### Deployment

Visit your deployed project at [https://test-zerostic.web.app/](https://test-zerostic.web.app/).

To deploy on your own Firebase project, run `npm run build` to build the project Make sure you have the Firebase CLI installed and are logged in to your Firebase account.

1. Run `firebase init` to initialize your Firebase project.
2. Run `firebase deploy` to deploy the project to Firebase.

### Project Structure

- `src/` - This is where the main application lives.
  - `App.jsx` - The main React component.
  - `main.jsx` - The entry point of the application.
  - `firebase.js` - This file contains the Firebase configuration and initialization.
- `components/` - This directory contains all the React components used in the application.
  - `Dropdown.jsx` - A dropdown component.
  - `Table.jsx` - A table component.
- `assets/` - This directory contains static files like images.
- `public/` - This directory contains public assets and the main `index.html` file.
- `package.json` - This file contains the list of project dependencies and scripts.
- `vite.config.js` - This file contains the configuration for Vite.

### Usage

To start the development server, run `npm run dev`. This will start the Vite development server.

### License

This project is licensed under the terms of the MIT license.
