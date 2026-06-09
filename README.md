# Bar Chart Creator

A small React + Vite app to create and preview simple bar charts.

Features

- Add chart data (label + numeric value) from the sidebar.
- Edit existing rows inline via an Edit action (prompt-based currently).
- Clear all data with the `Clear All` button.
- Data persists across browser refresh using `localStorage` (key: `bar_chart_items_v1`).
- Responsive chart rendering with Chakra UI styling and a simple color palette.

Quick start

Prerequisites: Node.js (16+ recommended)

Install and run the dev server:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Notes

- The main state lives in `src/App.tsx` and is persisted to `localStorage`.
- Sidebar components: `src/components/layout/AddData.tsx`, `AddedData.tsx`, `SideBar.tsx`.
- Chart rendering: `src/components/layout/Main.tsx`.
- Colors: `src/data/colorsData.ts`.
- To reset stored data manually remove the `bar_chart_items_v1` key from browser `localStorage` or use the `Clear All` button.

Possible improvements

- Replace `prompt`-based editing with inline input controls for a better UX.
- Add delete per-row and confirmation dialogs.

License

- MIT (or choose your preferred license)
