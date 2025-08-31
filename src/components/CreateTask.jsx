import { Box, Typography, Button } from "@mui/material";
import SearchAppBar from "./SearchAppBar";

export function CreateTask() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        px: 2,
      }}>
        <Button variant="contained" color="primary">New Task</Button>
      <SearchAppBar/>
    </Box>
  );
}
