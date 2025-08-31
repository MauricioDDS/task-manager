import { Box } from "@mui/material";
import { Task } from "./Task";
import { CreateTask } from "./CreateTask";
import { useEffect, useState } from "react";
import { getTasks } from "../services/taskService";

export function SuperTask() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  const handleTaskUpdated = (updatedTask) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === updatedTask.id ? updatedTask : t))
    );
  };

  const handleTaskDeleted = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        maxWidth: 500,
        gap: 3,
        p: 2,
      }}
    >
      <CreateTask onTaskCreated={fetchTasks} />
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onTaskUpdated={handleTaskUpdated}
          onTaskDeleted={handleTaskDeleted}
        />
      ))}
    </Box>
  );
}
