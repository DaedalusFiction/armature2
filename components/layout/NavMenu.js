import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { useState } from "react";
import theme from "../../styles/themes/theme";

const NavMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <IconButton onClick={handleClick}>
                <MenuIcon
                    sx={{
                        color: theme.palette.background.default,
                        fontSize: "2.5rem",
                    }}
                />
            </IconButton>
            <Menu
                // disableScrollLock={true}
                id="navigation-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "menu-button",
                }}
            >
                <Link href="/#about">
                    <MenuItem
                        onClick={handleClose}
                        sx={{ color: theme.palette.primary.main }}
                    >
                        about
                    </MenuItem>
                </Link>
                <Link href="/#portfolio">
                    <MenuItem
                        onClick={handleClose}
                        sx={{ color: theme.palette.primary.main }}
                    >
                        portfolio
                    </MenuItem>
                </Link>
                <Link href="/blog">
                    <MenuItem
                        onClick={handleClose}
                        sx={{ color: theme.palette.primary.main }}
                    >
                        blog
                    </MenuItem>
                </Link>
                <Link href="/#contact">
                    <MenuItem
                        onClick={handleClose}
                        sx={{ color: theme.palette.primary.main }}
                    >
                        contact
                    </MenuItem>
                </Link>
            </Menu>
        </Box>
    );
};

export default NavMenu;
