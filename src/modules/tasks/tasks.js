let tasks = [];

export function getTasks() {
  return tasks;
}

export function addTask(task) {
  tasks.push({
    id: Date.now(),
    title: task.title,
    completed: false,
    points: 1
  });
}

export function completeTask(id) {
  const t = tasks.find(t => t.id === id);
  if (t) t.completed = true;
}

export function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
}

export function getTotalPoints() {
  return tasks.filter(t => t.completed).reduce((s, t) => s + t.points, 0);
}