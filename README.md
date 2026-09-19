# Simple Web App

A simple web application built with Node.js and Express.

## Demo
<img width="1915" height="952" alt="Screenshot 2026-09-19 125815" src="https://github.com/user-attachments/assets/dcd16257-0d5b-42f3-9aae-7a8f8817897c" />


## Technologies

* Node.js
* Express.js
* Jest
* Supertest
* Git & GitHub
* GitHub Actions

## Features

* Simple Express web application
* Automated application testing
* CI workflow using GitHub Actions
* Build stage
* Build artifact generation and upload

## CI Workflow

```text
Code
  ↓
Git Push
  ↓
GitHub Actions
  ↓
Test
  ↓
Build
  ↓
Artifact
```

## Run Locally

Install dependencies:

```bash
npm install
```

Start the application:

```bash
node app.js
```

Open:

```text
http://localhost:3000
```

## Run Tests

```bash
npm test
```

## Build

```bash
npm run build
```

The build output is created inside the `build/` directory.

## License

This project is for learning and practice.
