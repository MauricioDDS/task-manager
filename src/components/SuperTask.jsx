import { Box, Typography } from "@mui/material";
import { Task } from "./Task";
import { CreateTask } from "./CreateTask";

export function SuperTask() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        gap: 3,
        p: 2,
      }}>
      <Box sx={{ width: "100%", maxWidth: 370 }}>
        <CreateTask />
      </Box>
        <Task />
        <Task />
    </Box>
  );
}
