import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import { green } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import Menu from "./Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditTaskForm from "./EditTaskForm";
import { updateTask, deleteTask } from "../services/taskService";

export function Task({ task, onToggleComplete, onTaskUpdated, onTaskDeleted }) {
  const [checked, setChecked] = React.useState(task.completed);
  const [setAnchorEl] = React.useState(null);
  const [editOpen, setEditOpen] = React.useState(false);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    setEditOpen(true);
    handleMenuClose();
  };

  const handleDelete = async () => {
    await deleteTask(task.id);
    if (onTaskDeleted) onTaskDeleted(task.id);
    handleMenuClose();
  };

  const handleChange = async (event) => {
    const newChecked = event.target.checked;
    setChecked(newChecked);

    try {
      const updatedTask = { ...task, completed: newChecked }; // incluimos completed
      const res = await updateTask(task.id, updatedTask);

      if (onToggleComplete) {
        onToggleComplete(task.id, res.data.completed); // opcional, si quieres informar al padre
      }
    } catch (error) {
      console.error("Error updating task:", error);
      setChecked(!newChecked);
    }
  };

  const handleEditSubmit = async (data) => {
    const res = await updateTask(task.id, data);
    if (onTaskUpdated) onTaskUpdated(res.data);
  };

  return (
    <>
      <Card
        sx={{
          minWidth: 340,
          bgcolor: checked ? "#009026ff" : "secondary.main",
        }}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <Typography
              variant="h6"
              sx={{
                color: checked ? "#000000" : "white",
              }}>
              {task.title}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Menu onEdit={handleEdit} onDelete={handleDelete} />
              <Checkbox
                checked={checked}
                onChange={handleChange}
                sx={{ "&.Mui-checked": { color: green[600] } }}
              />
            </Box>
          </Box>
          <Typography sx={{ mb: 1.5, color: checked ? "#000000" : "white" }}>
            {task.due_date ? `Due: ${task.due_date}` : "No due date"}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: checked ? "#000000" : "white" }}>
            {task.description || "No description"}
          </Typography>
        </CardContent>
      </Card>

      <EditTaskForm
        open={editOpen}
        onClose={() => setEditOpen(false)}
        task={task}
        onSubmit={handleEditSubmit}
      />
    </>
  );
}
