import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ITEM_HEIGHT = 48;

export default function LongMenu({ onEdit, onDelete }) {   // 👈 recibe props
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>

      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "20ch",
            },
            sx: {
              bgcolor: "white",
              color: "#000000",
            },
          },
          list: {
            "aria-labelledby": "long-button",
          },
        }}>
        <MenuItem
          onClick={() => {
            handleClose();
            if (onEdit) onEdit();
          }}>
          Editar
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            if (onDelete) onDelete();
          }}>
          Eliminar
        </MenuItem>
      </Menu>
    </div>
  );
}
