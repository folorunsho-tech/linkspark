import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Profile">
          <IconButton
            onClick={handleClick}
            size="small"
            className="rounded-sm space-x-2 hover:bg-transparent"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar className="bg-gray-900 p-3" children="FI" />
            <span className="text-base text-black">Folorunsho Ibrahim</span>
            <ArrowDropDownIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem className="space-x-6">
          <Avatar className="bg-gray-900 p-6" children="FI" />
          <div className="flex flex-col gap-1">
            <span className="text-gray-900">Folorunsho Ibrahim</span>
            <span className="text-gray-500 text-sm">
              folorunshoibr@gmail.com
            </span>
          </div>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <div className="flex flex-col gap-1">
            <span className="text-gray-900">o_1shfu7o9uj</span>
            <span className="text-gray-500 text-sm">Free account</span>
          </div>
        </MenuItem>
        <Divider />
        <MenuItem className="text-md text-gray-600" onClick={handleClose}>
          Support
        </MenuItem>
        <MenuItem className="text-md text-gray-600" onClick={handleClose}>
          API Documentation
        </MenuItem>
        <MenuItem className="text-md text-gray-600" onClick={handleClose}>
          Linkspark Terms
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
