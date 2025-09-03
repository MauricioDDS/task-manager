
const STORAGE_KEY = "tasks";

function loadTasks() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

export const getTasks = () => {
  return Promise.resolve({ data: loadTasks() });
};

export const createTask = (data) => {
  const tasks = loadTasks();
  const newTask = { ...data, id: Date.now() }; // generate id
  tasks.push(newTask);
  saveTasks(tasks);
  return Promise.resolve({ data: newTask });
};

export const updateTask = (id, data) => {
  let tasks = loadTasks();
  tasks = tasks.map((t) => (t.id === id ? { ...t, ...data } : t));
  saveTasks(tasks);
  const updated = tasks.find((t) => t.id === id);
  return Promise.resolve({ data: updated });
};

export const deleteTask = (id) => {
  let tasks = loadTasks();
  tasks = tasks.filter((t) => t.id !== id);
  saveTasks(tasks);
  return Promise.resolve({ data: true });
};
