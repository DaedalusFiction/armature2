import {
    Button,
    Grid,
    IconButton,
    Menu,
    MenuItem,
    Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import Link from "next/link";
import { pages, header, siteName, leftPages, rightPages } from "../../siteInfo";
import MenuIcon from "@mui/icons-material/Menu";
import theme from "../../styles/themes/theme";
import NavBarLinkAnimation from "../general/NavBarLinkAnimation";
import TextJustify from "../general/TextJustify";
import { useEffect, useState } from "react";
import HamburgerNav from "./HamburgerNav";

const Header = ({ light }) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Box
            sx={{
                position: "fixed",
                display: "flex",
                justifyContent: "center",
                width: "100%",
                top: "0",
                left: "0",
                zIndex: "2",
                padding: "1rem 0",
                transition: "400ms",
                background:
                    scrollPosition > 30
                        ? theme.palette.custom.dark
                        : "transparent",
            }}
        >
            <Container maxWidth="xl">
                <Grid container>
                    <Grid item xs={3}>
                        <HamburgerNav />
                    </Grid>
                    <Grid item xs={9}>
                        <Box
                            sx={{
                                display: { xs: "flex", lg: "none" },
                                alignItems: "center",
                                justifyContent: "end",
                                paddingRight: "1em",
                                height: "100%",
                            }}
                        >
                            <Typography
                                variant="h1"
                                sx={{
                                    margin: "0",
                                    transition: "150ms",
                                    textAlign: "center",
                                    cursor: "pointer",
                                    fontSize: "2rem",
                                    color: theme.palette.primary.main,
                                }}
                            >
                                <Link href="/">BASILINDA</Link>

                                <TextJustify>
                                    A Queer & Feminist Journal
                                </TextJustify>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                {/* desktop view */}
                <Box sx={{ display: { xs: "none", lg: "inherit" } }}>
                    <Grid container>
                        <Grid item xs={4.25}>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-evenly",
                                    width: "100%",
                                    height: "100%",
                                    gap: "1.5em",
                                }}
                            >
                                {leftPages.map((page, index) => (
                                    <Link href={page.href} key={index}>
                                        <Typography
                                            className="link"
                                            sx={{
                                                textAlign: "center",
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            {page.name}
                                        </Typography>
                                    </Link>
                                ))}
                            </Box>
                        </Grid>
                        <Grid item xs={3.5}>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "100%",
                                    gap: ".5em",
                                }}
                            >
                                {/* <Box sx={{ height: "100%" }}>
                                            <NativeImage
                                                image={navbar.image}
                                                maxSize={85}
                                            />
                                        </Box> */}
                                <Box>
                                    <Link href="/">
                                        <Typography
                                            // className="nav-link"
                                            variant="h1"
                                            sx={{
                                                margin: "0",
                                                transition: "300ms",
                                                textAlign: "center",
                                                cursor: "pointer",
                                                letterSpacing: ".1em",
                                                fontSize: "2.5rem",
                                                color: theme.palette.primary
                                                    .main,
                                                "&:hover": {
                                                    color: theme.palette.primary
                                                        .off,
                                                },
                                            }}
                                        >
                                            BASILINDA
                                        </Typography>
                                    </Link>
                                    <TextJustify>
                                        A Queer & Feminist Journal
                                    </TextJustify>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={4.25}>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-evenly",
                                    width: "100%",
                                    height: "100%",
                                    gap: "1.25em",
                                }}
                            >
                                {rightPages.map((page, index) => (
                                    <Link href={page.href} key={index}>
                                        <Typography
                                            className="link"
                                            sx={{
                                                textAlign: "center",
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            {page.name}
                                        </Typography>
                                    </Link>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Header;
