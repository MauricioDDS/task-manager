import * as React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import { createTask } from "../services/taskService";

export default function NewTaskForm({ onTaskCreated }) {
  const [open, setOpen] = React.useState(false);
  const [form, setForm] = React.useState({
    title: "",
    dueDate: "",
    description: "",
  });
  const [dateError, setDateError] = React.useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === "dueDate") {
      validateDate(e.target.value);
    }
  };

  const validateDate = (date) => {
    if (!date) return;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selected = new Date(date);

    if (selected < today) {
      setDateError("La fecha debe ser en el futuro");
    } else {
      setDateError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (dateError) return;

    await createTask({
      title: form.title,
      due_date: form.dueDate,
      description: form.description,
    });

    setForm({ title: "", dueDate: "", description: "" });
    setOpen(false);
    if (onTaskCreated) onTaskCreated();
  };

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        New Task
      </Button>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        PaperProps={{
          sx: { bgcolor: "#003366", color: "white" },
        }}
      >
        <DialogTitle>Crear Nueva Tarea</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              name="title"
              label="Nombre de la Tarea"
              value={form.title}
              onChange={handleChange}
              required
              InputLabelProps={{ style: { color: "white" } }}
              InputProps={{ style: { color: "white" } }}
            />
            <TextField
              name="dueDate"
              label="Fecha Limite"
              type="date"
              InputLabelProps={{ shrink: true, style: { color: "white" } }}
              InputProps={{ style: { color: "white" } }}
              value={form.dueDate}
              onChange={handleChange}
              required
              error={Boolean(dateError)}
              helperText={dateError}
            />
            <TextField
              name="description"
              label="Descripción"
              multiline
              rows={3}
              value={form.description}
              onChange={handleChange}
              InputLabelProps={{ style: { color: "white" } }}
              InputProps={{ style: { color: "white" } }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)} sx={{ color: "white" }}>
              Cancelar
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{ bgcolor: "primary.main" }}
              disabled={Boolean(dateError)}
            >
              Guardar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
