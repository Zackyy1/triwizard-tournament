# General info

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This repo is for a developer test task.

## Run locally in dev environment

In the project directory, run:

### `npm i`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Building for production

In real-life scenario a bundler would pack react code automatically. If this project is needed as a static html, run:

### `npm run build -p`

It will generate a "build" folder in project root with all necessary and minimized files.
"-p" stands for "Production".

You can then test production-ready version by running

### `serve -s build`

If you don't have `serve` then install it using npm:

### `npm i -g serve`
