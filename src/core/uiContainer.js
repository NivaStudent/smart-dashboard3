import { navigate } from "./router.js";

export function initUI() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <h1>Dashboard</h1>
    <button data-path="/tasks">Tasks</button>
    <button data-path="/notes">Notes</button>
    <button data-path="/tracker">Tracker</button>
    <div id="content"></div>
  `;

  document.querySelectorAll("button").forEach(btn => {
    btn.onclick = () => navigate(btn.dataset.path);
  });
}

export function getMainContainer() {
  return document.getElementById("content");
}