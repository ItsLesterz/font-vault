# FontVault — Font Resource Directory

Internal font website directory for artists. GitHub-inspired dark UI built with React + Bootstrap.

## Setup

```bash
# Install dependencies
npm install

# Start dev server
npm start
```

Opens at **http://localhost:3000**

---

## Adding / Editing Font Sites

All data lives in one file:

```
src/data/fontSites.js
```

### Add a new site

Copy an existing entry in the `FONT_SITES` array and fill in:

| Field         | Type      | Description                                      |
|---------------|-----------|--------------------------------------------------|
| `id`          | number    | Unique ID (increment from last)                  |
| `name`        | string    | Website name                                     |
| `url`         | string    | Full URL (include `https://`)                    |
| `category`    | string    | One of: `serif`, `sans-serif`, `display`, `script`, `monospace`, `variable` |
| `pricing`     | string    | `"Free"`, `"Paid"`, or `"Free + Paid"`          |
| `description` | string    | Short description (1–2 sentences)               |
| `tags`        | string[]  | Search keywords                                  |
| `featured`    | boolean   | Show the ⭐ Featured badge                       |

### Add a new category

In the `CATEGORIES` array, add:
```js
{ id: "your-id", label: "Display Name", icon: "bi-icon-name" }
```

Pick icons from [Bootstrap Icons](https://icons.getbootstrap.com/).

---

## Project Structure

```
font-vault/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js       ← top search bar
│   │   ├── Sidebar.js      ← category & filter panel
│   │   ├── SiteCard.js     ← individual site card
│   │   ├── StatsBar.js     ← results count header
│   │   └── EmptyState.js   ← no results message
│   ├── data/
│   │   └── fontSites.js    ← ⭐ ALL SITE DATA LIVES HERE
│   ├── App.js
│   ├── App.css
│   └── index.js
└── package.json
```
