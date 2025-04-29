# 📊 Stock Treemap Visualizer

A simple web app that allows users to input multiple stock ticker symbols along with investment amounts and generate an interactive treemap visualization using [Google Charts Treemap](https://developers.google.com/chart/interactive/docs/gallery/treemap).

## 🚀 Features

- Add multiple stock ticker and dollar amount entries
- Remove individual entries before visualization
- Generate a dynamic, interactive treemap
- No backend — just pure HTML, JavaScript, and Google Charts

## 🔧 How It Works

1. User inputs a **stock ticker** (e.g., `AAPL`) and a **dollar amount** (e.g., `$1000`)
2. Inputs are stored in a local array
3. When ready, the user clicks "Generate Treemap" to visualize their inputs
4. The app uses Google Charts to render a treemap showing relative allocation

## 📂 File Structure
/project-root │ ├── index.html # Main HTML structure ├── app.js # JavaScript logic for form, state, and treemap rendering


## 📦 Setup

No installation required — just open `index.html` in a browser.

Or serve locally with:

```bash
npx serve .



