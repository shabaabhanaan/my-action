# Hello World JS GitHub Action

This repository contains a **JavaScript-based GitHub Action** that prints a greeting message. It demonstrates how to create a custom GitHub Action using Node.js and YAML workflows.

---

## Project Structure
my-action/
├─ action.yml # Metadata for the GitHub Action
├─ index.js # JavaScript code for the action
├─ package.json # Node dependencies
└─ .github/
└─ workflows/
└─ main.yml # Workflow to run the action

## Features

- Uses **Node.js** to execute JavaScript code.
- Accepts **inputs** from the workflow.
- Sets **outputs** to be used in later steps.
- Logs a greeting message to the console.

---

## Inputs

| Input | Description          | Required | Default   |
|-------|--------------------|----------|-----------|
| name  | Name to greet       | No       | World     |

---

## Outputs

| Output   | Description         |
|----------|-------------------|
| greeting | The greeting message |

---

## Usage

Create a workflow file in `.github/workflows/main.yml` and include your action:

```yaml
name: JS Action Workflow

on:
  push:
    branches:
      - main
  workflow_dispatch: # optional manual trigger

jobs:
  run-js-action:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Use Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      - name: Run JS Action
        uses: ./               # Runs your action from the repo
        with:
          name: "Gaviru"
When the workflow runs, it will output:

Hello, Gaviru!
Setup

Initialize npm in your project folder:

npm init -y

Install required packages:

npm install @actions/core

Make sure action.yml and index.js are in the root of your repository.

License

MIT License
