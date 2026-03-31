import { getMainContainer } from "../../core/uiContainer.js";
import { getNotes, addNote, deleteNote } from "./notes.js";

export function renderNotesUI() {
  const container = getMainContainer();

  function render() {
    const notes = getNotes();

    container.innerHTML = `
      <h2>Notes</h2>
      <form id="form">
        <input id="input" required />
        <button>Add</button>
      </form>

      <ul>
        ${notes.map(n => `
          <li>
            ${n.text}
            <button data-id="${n.id}">X</button>
          </li>
        `).join("")}
      </ul>
    `;

    form.onsubmit = e => {
      e.preventDefault();
      addNote(input.value);
      input.value = "";
      render();
    };

    document.querySelectorAll("[data-id]").forEach(b => {
      b.onclick = () => { deleteNote(Number(b.dataset.id)); render(); };
    });
  }

  render();
}