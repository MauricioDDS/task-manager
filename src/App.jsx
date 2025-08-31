import { Box, Typography } from "@mui/material";
import { SuperTask } from "./components/SuperTask";

function App() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 1,
          minHeight: "100vh",
          bgcolor : '#101316'
        }}>
        <Typography variant="h1" sx={{ my: 4, textAlign: "center", color: "white" }}>
          ⚡ Task Manager ⚡
        </Typography>
        <SuperTask />
      </Box>
    </>
  );
}

export default App;
