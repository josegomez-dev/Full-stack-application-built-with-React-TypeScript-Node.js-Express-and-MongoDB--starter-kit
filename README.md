My Full-Stack Application

Overview
This is a full-stack application built with React, TypeScript, Node.js, Express, and MongoDB. The project is structured with a monolithic architecture, integrating a React frontend with a TypeScript-based Express backend. Mongoose is used for managing MongoDB connections.

Table of Contents

* Features
* Project Structure
* Installation
* Usage
* API Endpoints
* Tools Used

Features

React Frontend: Built with React and TypeScript for a robust and scalable user interface.
Express Backend: Node.js and Express for handling backend logic and API routes.
MongoDB Integration: Mongoose for managing database connections and schemas.
Cross-Origin Resource Sharing: Configured with CORS for secure cross-origin requests.
API Testing: Postman and Axios for testing and consuming API endpoints.

Project Structure
```csharp
my-fullstack-app/
├── client/                 # React frontend application
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── App.tsx
│       ├── index.tsx
│       └── ...
├── server/                 # Express backend application
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── app.ts
│   │   └── index.ts
│   └── ...
├── .gitignore
├── README.md
└── ...
```

Installation

Backend (Server)
Navigate to the server directory:

```sh
cd server
```

Install dependencies:

```sh
npm install
```
or

```sh
yarn install
```

Frontend (Client)
Navigate to the client directory:

```sh
cd client
```
Install dependencies:

```sh
npm install
```
or

```sh
yarn install
```

Usage

Running the Backend Server

Navigate to the server directory:


```sh
cd server
```

Start the server:

```sh
npm run dev
```
or

```sh
yarn dev
```

Running the Frontend Client

Navigate to the client directory:

```sh
cd client
```

Start the client:

```sh
npm run dev
```
or

```sh
yarn dev
```

API Endpoints

Test Endpoint
* URL: /api/test

* Method: GET

* Response:

```json
{
  "message": "Test endpoint is working!"
}
```

Root Endpoint
* URL: /
* Method: GET
* Response: Server is up and running!

Tools Used

Frontend Tools
* React: JavaScript library for building user interfaces.
* TypeScript: Typed superset of JavaScript.
* Axios: Promise-based HTTP client for the browser and Node.js.

Backend Tools
* Node.js: JavaScript runtime built on Chrome's V8 engine.
* Express: Minimal and flexible Node.js web application framework.
* TypeScript: Provides static type definitions.
* Mongoose: ODM library for MongoDB and Node.js.
* Nodemon: Utility that monitors for changes and automatically restarts the server.
* Body-parser: Middleware for parsing incoming request bodies.
* Cors: Middleware for enabling CORS.
* Database Tools
* MongoDB: NoSQL database for storing application data.

Development Tools
* Visual Studio Code (VSCode): Source-code editor.
* Postman: API development and testing tool.

Version Control
* Git: Distributed version control system.
* GitHub: Web-based platform for hosting and collaborating on code.

Continuous Integration/Continuous Deployment (CI/CD)
* GitHub Actions: Automates workflows directly from the GitHub repository.
* Jenkins: Open-source automation server.
* Travis CI: CI service for building and testing software projects.
