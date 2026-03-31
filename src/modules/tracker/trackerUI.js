import { getMainContainer } from "../../core/uiContainer.js";
import { getStats } from "./tracker.js";

export function renderTrackerUI() {
  const container = getMainContainer();
  const stats = getStats();

  container.innerHTML = `
    <h2>Tracker</h2>
    <p>Total points: ${stats.points}</p>
  `;
}