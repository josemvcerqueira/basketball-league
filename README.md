# basketball-league

This is a single web application that leverages the power of React-router to allow the visitor to
access information dynamically. It has three main pages.

-   Home
    -   Specific Team's Page
-   Players
-   Teams

## TL;DR

To run the project right away:

-   clone the repo with `git clone https://github.com/josemvcerqueira/basketball-league.git`
-   install all project dependencies with `npm install`
-   start the development server with `npm start`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## What You're Getting

```bash
├── public
│   ├── favicon.ico # React Icon.
│   ├── index.html # DO NOT MODIFY
│	└── manifest.json # DO NOT MODIFY
├── src
│   ├── components
    │   ├── App.js # File responsible to manage routes
    │   ├── Article.js # Component responsible to render team's article
    │   ├── Articles.js # Stateful component that fetches articles
    │   ├── DynamicImport.js # Stateful component to dynamically import components
    │   ├── Home.js # Stateful component that renders the home page
    │   ├── Loading.js # Component responsible to display a loading bar on api calls
    │   ├── Navbar.js # Simple Navbar with Link components from react-router-dom
    │   ├── Players.js # Stateful component with Transition Group that displays the players
    │   ├── Sidebar.js # Stateless sidebar component
    │   ├── Team.js # Stateful component responsible to fetch team's data
    │   ├── TeamLogo.js # File that contains the team logos - SVG
    │   ├── TeamPage.js # Stateful component responsible to render the team's page
    │   ├── Teams.js # Stateful component responsible to render team cards
│   ├── api.js # File to simulate promises/api calls
│   ├── dummy-data.js # File to simulate a database
│   ├── index.css # Global styles.
│   ├── index.js # This file is used for DOM rendering only.
│	└── serviceWorker.js
├── .eslintrc.json # Configuration for the format used in this app.
├── .gitignore # Simple file to prevent unnedded files to be stored on GitHub.
├── README.md - This file.
├── package-lock.json # npm package manager file.
└── package.json # npm package manager file.

```

## Backend Server

The provided file [`api.js`](src/api.js) contains the methods you will need to perform necessary operations on the backend:

-   [`getPlayers`]
-   [`getTeam`]
-   [`getTeamNames`]
-   [`getArticle`]
-   [`getTeamsArticles`]

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## Purpose

This repository is the final project for the React Fundamentals section of the Udacity Nanodegree program for React.
