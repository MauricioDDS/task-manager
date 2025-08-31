import { Box, Typography, Button } from "@mui/material";
import SearchAppBar from "./SearchAppBar";

export function CreateTask() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <Button variant="contained" color="secondary">Create Task⚡</Button>
      <SearchAppBar />
    </Box>
  );
}
