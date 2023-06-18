import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import theme from "../../styles/themes/theme";

const menuStyles = {
    fontSize: { xs: "1.5rem", md: "1.5rem" },
    color: theme.palette.background.default,
    // fontWeight: "600",
};

const Sitemap = () => {
    return (
        <Box>
            <Typography className="link" sx={menuStyles}>
                <Link href="/#about">about us</Link>
            </Typography>
            <Typography className="link" sx={menuStyles}>
                <Link href="/#portfolio">portfolio</Link>
            </Typography>
            <Typography className="link" sx={menuStyles}>
                <Link href="/blog">blog</Link>
            </Typography>
            <Typography className="link" sx={menuStyles}>
                <Link href="/#contact">contact</Link>
            </Typography>
        </Box>
    );
};

export default Sitemap;
