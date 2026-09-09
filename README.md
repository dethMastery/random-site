# mini random software :3 (Randomized Tool)

A nostalgic, Windows XP-themed web application designed for random number selection without replacement, built with vanilla web technologies and [`xp.css`](https://botoxparty.github.io/XP.css/).

---

## ✨ Features

- 🪟 **Windows XP Retro Aesthetic**: Styled using `xp.css` with authentic window frames, title bar controls, buttons, and progress bar elements.
- 🎲 **Randomization Without Replacement**: Randomly picks an item from the pool (`[1, 2, 3, 4, 5, 6]`) and removes it so numbers don't repeat until reset.
- ⏳ **Classic Progress Animation**: Simulates a retro Windows loading/calculating progress bar animation before revealing the drawn number.
- 💾 **State Persistence**: Uses browser `localStorage` (`res_list`) to preserve the remaining pool of numbers across browser refreshes.
- 🔄 **One-Click Reset**: Easily replenish the pool back to the initial set (`[1, 2, 3, 4, 5, 6]`).
- 🇹🇭 **Thai UI Support**: Beautifully rendered using Google Fonts' *IBM Plex Sans Thai*.

---

## 🖥️ UI & Controls

| Button / Element     | Thai Text                 | Description                                            |
| :------------------- | :------------------------ | :----------------------------------------------------- |
| **Header**           | `mini random software :3` | Application title bar                                  |
| **Result Area**      | `กดเพิ่มสุ่มเลข`              | Initial prompt / Current selected number display       |
| **List Area**        | `[ 1, 2, 3, 4, 5, 6 ]`    | Current remaining numbers in the pool                  |
| **Randomize Button** | `สุ่ม`                      | Triggers progress animation and draws a random number  |
| **Reset Button**     | `รีเซ็ต`                    | Restores pool to original numbers `[1, 2, 3, 4, 5, 6]` |

---

## 📁 Project Structure

```text
.
├── index.html              # Main HTML structure and inline application logic
├── README.md               # Project documentation
└── src
    ├── css
    │   └── main.css        # Layout, typography, and custom styling
    └── img
        └── background.jpeg # Nostalgic desktop wallpaper background
```

---

## 🚀 Getting Started

Since this is a lightweight static web application, no build steps or dependencies are required.

### Option 1: Using a Local HTTP Server (Recommended)

To ensure relative assets like images and styles load properly without file-origin restrictions:

```bash
# Using Python 3
python3 -m http.server 8000

# Or using Node (npx)
npx serve .
```

Then open `http://localhost:8000` in your web browser.

### Option 2: Open Directly

You can also simply open [`index.html`](index.html) directly in any modern web browser.

---

## 🛠️ Built With

- **HTML5 & CSS3**
- **Vanilla JavaScript (ES6+)**
- [**XP.css**](https://botoxparty.github.io/XP.css/) - CSS framework for nostalgic Windows XP interfaces
- [**IBM Plex Sans Thai**](https://fonts.google.com/specimen/IBM+Plex+Sans+Thai) - Modern typography via Google Fonts

---

## 📄 License

This project is open-source. Feel free to use, modify, and distribute as needed.
