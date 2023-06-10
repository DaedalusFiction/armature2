import { Box, Button, Link } from "@mui/material";
import React from "react";
import { rightPages } from "../../siteInfo";

const AboutNavbar = () => {
    return (
        <Box
            sx={{
                marginTop: "2em",
                display: "flex",
                justifyContent: "center",
                gap: "1em",
            }}
        >
            {/* pages[2] returns About subpages from /siteinfo */}
            {rightPages[1].subPages.map((subPage, index) => {
                return (
                    <Link
                        key={index}
                        style={{
                            textDecoration: "none",
                        }}
                        href={subPage.href}
                    >
                        <Button color="secondary">{subPage.name}</Button>
                    </Link>
                );
            })}
        </Box>
    );
};

export default AboutNavbar;
