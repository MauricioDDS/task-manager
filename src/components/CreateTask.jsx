import { Box } from "@mui/material";
import SearchAppBar from "./SearchAppBar";
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
      <SearchAppBar />
    </Box>
  );
}
