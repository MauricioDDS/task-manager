import { Box } from "@mui/material";
import NewTaskForm from "./NewTaskForm";

export function CreateTask({ onTaskCreated }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        px: 2,
      }}
    >
      <NewTaskForm onTaskCreated={onTaskCreated} />
    </Box>
  );
}
