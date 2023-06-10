import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import theme from "../../styles/themes/theme";
import NavMenu from "../layout/NavMenu";
import Link from "next/link";

const Header = () => {
    return (
        <Box
            sx={{
                position: "fixed",
                top: "0",
                left: "0",
                zIndex: "100",
                width: "100%",
                padding: ".75rem 0",
                transition: "1000ms",
                // boxShadow:
                //     scrollPosition > 65
                //         ? "0px 5px 5px rgba(0, 0, 0, 0.2)"
                //         : "transparent",
                backgroundColor: theme.palette.primary.main,
            }}
        >
            <Container maxWidth="xl">
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Box>
                        <Box sx={{ position: "relative" }}>
                            <Typography
                                variant="h1"
                                sx={{
                                    color: "white",
                                    fontSize: { xs: "1.75rem", md: "3rem" },
                                    cursor: "pointer",
                                    transition: "300ms",
                                    "&:hover": {
                                        color: "#1c1c1c",
                                    },
                                }}
                            >
                                <Link href="/">ARMATURE</Link>
                            </Typography>
                        </Box>
                    </Box>
                    <NavMenu />
                </Box>
            </Container>
        </Box>
    );
};

export default Header;
