import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { leftPages, rightPages } from "../../siteInfo";
import theme from "../../styles/themes/theme";

const HamburgerNav = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (e) => {
        setAnchorElNav(null);
    };
    return (
        <Box
            sx={{
                display: { xs: "flex", lg: "none" },
                height: "100%",
                alignItems: "center",
            }}
        >
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: "block", lg: "none" },
                }}
            >
                {leftPages.map((page, index) => {
                    return (
                        <MenuItem
                            onClick={() => {
                                handleCloseNavMenu();
                            }}
                            key={index}
                        >
                            <Typography
                                sx={{ color: theme.palette.custom.dark }}
                            >
                                <Link href={page.href}>{page.name}</Link>
                            </Typography>
                        </MenuItem>
                    );
                })}
                {rightPages.map((page, index) => {
                    return (
                        <MenuItem
                            onClick={() => {
                                handleCloseNavMenu();
                            }}
                            key={index}
                        >
                            <Typography
                                sx={{ color: theme.palette.custom.dark }}
                            >
                                <Link href={page.href}>{page.name}</Link>
                            </Typography>
                        </MenuItem>
                    );
                })}
            </Menu>
        </Box>
    );
};

export default HamburgerNav;
