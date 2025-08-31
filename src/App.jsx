import { Box, Typography } from "@mui/material";
import { Task } from "./components/Task";
import { CreateTask } from "./components/CreateTask";

function App() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Typography variant="h1" sx={{ my: 4, textAlign: "center" }}>
          ⚡ Task Manager ⚡
        </Typography>
      </Box>
      <Box>
        <CreateTask />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1,
        }}>
        <Task />
        <Task />
      </Box>
    </>
  );
}

export default App;
