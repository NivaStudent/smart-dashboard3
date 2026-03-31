import {
  getTasks,
  addTask,
  completeTask,
  deleteTask,
  getTotalPoints
} from "./tasks.js";

import { getMainContainer } from "../../core/uiContainer.js";

export function renderTasksUI() {
  const container = getMainContainer();
  const tasks = getTasks();

  container.innerHTML = `
    <h2>📝 Tasks</h2>

    <form id="task-form">
      <input id="task-input" placeholder="Enter task..." required />
      <button type="submit">Add</button>
    </form>

    <ul>
      ${tasks
        .map(
          (t) => `
        <li>
          <span style="${
            t.completed ? "text-decoration: line-through; opacity: 0.6;" : ""
          }">
            ${t.title}
          </span>
          <div>
            <button data-complete="${t.id}">✔</button>
            <button data-delete="${t.id}">✖</button>
          </div>
        </li>
      `
        )
        .join("")}
    </ul>

    <p>⭐ Points: ${getTotalPoints()}</p>
  `;

  // ===== ДОБАВЛЕНИЕ ЗАДАЧИ =====
  const form = document.getElementById("task-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const input = document.getElementById("task-input");
    const value = input.value.trim();

    if (!value) return;

    addTask({ title: value });
    input.value = "";

    renderTasksUI(); // перерендер
  });

  // ===== КНОПКИ (делегирование) =====
  container.addEventListener("click", (e) => {
    const completeId = e.target.dataset.complete;
    const deleteId = e.target.dataset.delete;

    if (completeId) {
      completeTask(Number(completeId));
      renderTasksUI();
    }

    if (deleteId) {
      deleteTask(Number(deleteId));
      renderTasksUI();
    }
  });
}