// src/hooks/useTasks.js
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/tasks/";

export function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_URL);
      setTasks(res.data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
    setLoading(false);
  };

  const addTask = async (task) => {
    try {
      const res = await axios.post(API_URL, task);
      setTasks((prev) => [res.data, ...prev]);
    } catch (err) {
      console.error("Error adding task:", err);
    }
  };

  const toggleTask = async (id, completed) => {
    try {
      const res = await axios.patch(`${API_URL}${id}/`, { completed });
      setTasks((prev) =>
        prev.map((t) => (t.id === id ? res.data : t))
      );
    } catch (err) {
      console.error("Error toggling task:", err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}${id}/`);
      setTasks((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return { tasks, loading, addTask, toggleTask, deleteTask };
}
