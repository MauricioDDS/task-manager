import * as React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

export default function EditTaskForm({ open, onClose, task, onSubmit }) {
  const [form, setForm] = React.useState({
    title: "",
    due_date: "",
    description: "",
  });

  const [dateError, setDateError] = React.useState("");

  React.useEffect(() => {
    if (task) {
      setForm({
        title: task.title || "",
        due_date: task.due_date || "",
        description: task.description || "",
      });
      setDateError("");
    }
  }, [task]);

  const validateDate = (date) => {
    if (!date) return;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selected = new Date(date);

    if (selected < today) {
      setDateError("La fecha debe ser hoy o en el futuro");
    } else {
      setDateError("");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === "due_date") {
      validateDate(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dateError) return;
    if (onSubmit) onSubmit(form);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      PaperProps={{
        sx: {
          bgcolor: "#003366",
          color: "white",
        },
      }}
    >
      <DialogTitle>Edit Task</DialogTitle>
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
            name="due_date"
            label="Fecha Límite"
            type="date"
            InputLabelProps={{ shrink: true, style: { color: "white" } }}
            value={form.due_date}
            onChange={handleChange}
            required
            InputProps={{ style: { color: "white" } }}
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
          <Button onClick={onClose} sx={{ color: "white" }}>
            Cancelar
          </Button>
          <Button
            type="submit"
            variant="contained"
            disabled={Boolean(dateError)}
          >
            Guardar
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}