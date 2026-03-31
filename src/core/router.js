let routes = {};

export function initRouter() {
  routes = {
    "/tasks": () => import("../modules/tasks/tasksUI.js").then(m => m.renderTasksUI()),
    "/notes": () => import("../modules/notes/notesUI.js").then(m => m.renderNotesUI()),
    "/tracker": () => import("../modules/tracker/trackerUI.js").then(m => m.renderTrackerUI())
  };

  window.addEventListener("popstate", handleRoute);
  handleRoute();
}

export function navigate(path) {
  history.pushState({}, "", path);
  handleRoute();
}

function handleRoute() {
  const path = window.location.pathname;
  (routes[path] || routes["/tasks"])();
}