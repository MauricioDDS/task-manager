import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Menu from "./Menu";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import { green } from '@mui/material/colors';

export function Task() {
  const [setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Card sx={{ minWidth: 340, bgcolor: "secondary.main" }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Typography variant="h6">Task Name</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 1,
            }}>
            <Menu />
            <Checkbox
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
              sx={{
                "&.Mui-checked": {
                  color: green[600],
                },
              }}
            />
          </Box>
        </Box>
        <Typography sx={{ mb: 1.5 }}>Due Date</Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
  );
}
