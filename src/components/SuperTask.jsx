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
        maxWidth: 500,
        gap: 3,
        p: 2,
      }}>
        <CreateTask />
        <Task />
        <Task />
    </Box>
  );
}
