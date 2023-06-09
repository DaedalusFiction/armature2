import { ArrowRightAlt } from "@mui/icons-material";
import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    Typography,
} from "@mui/material";
import Link from "next/link";
import theme from "../../styles/themes/theme";

const menuStyles = {
    fontSize: { xs: "1.5rem", md: "1.5rem" },
    color: theme.palette.background.default,
    // fontWeight: "600",
};

const Hero = () => {
    return (
        <Container maxWidth="xl" disableGutters>
            <Box
                sx={{
                    backgroundImage: {
                        xs: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(/images/cantoxHero.webp)",
                    },
                    display: "flex",
                    alignItems: "end",
                    justifyContent: "end",
                    backgroundAttachment: { xs: "initial", md: "fixed" },
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    gap: "1rem",
                    height: "100vh",
                    padding: "1rem",
                    position: "relative",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        backgroundColor: theme.palette.primary.overlay,
                        top: "0",
                        left: "0",
                        height: "100%",
                        width: "100%",
                        zIndex: "5",
                    }}
                />
                <Box
                    sx={{
                        marginLeft: "3rem",
                        display: "flex",
                        justifyContent: "end",
                        gap: { xs: "1.5rem", md: "2.5rem" },
                        marginBottom: { xs: "20vh", md: "15vh" },
                        marginRight: { xs: "15vw", md: "25vw" },
                        zIndex: "10",
                    }}
                >
                    <Box>
                        <Typography className="link" sx={menuStyles}>
                            <Link href="#about">about us</Link>
                        </Typography>
                        <Typography className="link" sx={menuStyles}>
                            <Link href="#portfolio">portfolio</Link>
                        </Typography>
                        <Typography className="link" sx={menuStyles}>
                            <Link href="/blog">blog</Link>
                        </Typography>
                        <Typography className="link" sx={menuStyles}>
                            <Link href="#contact">contact</Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default Hero;
