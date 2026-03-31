import { getMainContainer } from "../../core/uiContainer.js";
import { getTasks, addTask, completeTask, deleteTask, getTotalPoints } from "./tasks.js";

export function renderTasksUI() {
  const container = getMainContainer();

  function render() {
    const tasks = getTasks();

    container.innerHTML = `
      <h2>Tasks</h2>
      <form id="form">
        <input id="input" required />
        <button>Add</button>
      </form>

      <ul>
        ${tasks.map(t => `
          <li>
            ${t.title}
            <button data-c="${t.id}">✔</button>
            <button data-d="${t.id}">✖</button>
          </li>
        `).join("")}
      </ul>

      <p>Points: ${getTotalPoints()}</p>
    `;

    document.getElementById("form").onsubmit = e => {
      e.preventDefault();
      addTask({ title: input.value });
      input.value = "";
      render();
    };

    document.querySelectorAll("[data-c]").forEach(b => {
      b.onclick = () => { completeTask(Number(b.dataset.c)); render(); };
    });

    document.querySelectorAll("[data-d]").forEach(b => {
      b.onclick = () => { deleteTask(Number(b.dataset.d)); render(); };
    });
  }

  render();
}