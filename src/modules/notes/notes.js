let notes = [];

export function getNotes() {
  return notes;
}

export function addNote(text) {
  notes.push({ id: Date.now(), text });
}

export function deleteNote(id) {
  notes = notes.filter(n => n.id !== id);
}