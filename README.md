# 📝 My Todo List

A simple, responsive todo list web app built with **vanilla HTML, CSS and JavaScript** — no frameworks, no dependencies, no build step. Tasks are saved in your browser, so they are still there when you come back.

## ✨ Features

- **Add** a task with the `+` button (top-right corner)
- **Edit** a task's text with the `E` button
- **Delete** a task (with a confirmation prompt) using the trash icon
- **Toggle status** between `KO` (not done) and `OK` (done) — unfinished tasks appear dimmed
- **Persistent storage** using the browser's `localStorage`
- **Responsive layout** that works on desktop and mobile
- Hover and click animations on buttons and tasks

## 📁 Project Structure

```
TODO_list/
├── index.html   # Page structure
├── todo.css     # Styling and layout
├── todo.js      # Application logic
└── README.md
```

| File | Role |
|------|------|
| `index.html` | Defines the main container, the add button, the title and the empty `#taskes` list where tasks are injected. Loads the Google *Material Symbols* font for the delete icon. |
| `todo.css` | Dark card layout on a purple background, flexbox-based task rows, round action buttons (delete / edit / status) and responsive font sizes using `clamp()`. |
| `todo.js` | Handles adding, editing, deleting and toggling tasks, and saves/restores the task list from `localStorage`. |

## 🚀 Getting Started

### Run locally

1. Clone the repository:
   ```bash
   git clone https://github.com/oussama-fa/TODO-list.git
   cd TODO-list
   ```
2. Open `index.html` in your browser:
   ```bash
   xdg-open index.html     # Linux
   open index.html         # macOS
   ```
   Or simply double-click the file.

> An internet connection is only needed to load the delete icon font from Google Fonts.

## ⚙️ How It Works

- Tasks are rendered as HTML blocks inserted into the `#taskes` container.
- After every change (add, edit, delete, toggle), the container's HTML is stored in `localStorage` under the key `tasks`.
- On page load, the saved HTML is restored.
- **Event delegation** is used: a single click listener on `#taskes` handles the delete, edit and status buttons for all tasks, including those added later.

## 🛠️ Technologies

- HTML5
- CSS3 (Flexbox, transitions, `clamp()`)
- JavaScript (ES6, DOM API, `localStorage`)

## 👤 Author

Student at **1337 KH (42 Network)** — built as a front-end learning project.

## 📄 License

This project is open source and available for educational use.
