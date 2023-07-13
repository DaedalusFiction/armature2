import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useState } from "react";
import Link from "next/link";
import theme from "../../styles/themes/theme";

const ImageAccordionPreviewSection = ({ title, content }) => {
    const [selected, setSelected] = useState(1);
    return (
        <Box
            className="section"
            sx={{
                backgroundColor: theme.palette.primary.main,
                padding: "6rem 0",
            }}
        >
            <Container maxWidth="xl">
                <Typography
                    variant="h3"
                    sx={{
                        textAlign: "center",
                        color: theme.palette.custom.light,
                    }}
                >
                    {title}
                </Typography>

                <br />
                <Grid container>
                    <Grid item xs={12} md={4} order={{ xs: 1, md: 0 }}>
                        <Box
                            className="flex flex-middle"
                            sx={{ height: "100%" }}
                        >
                            <Box
                                className="flex"
                                sx={{
                                    padding: "3rem 0",
                                    flexDirection: "column",
                                    gap: "1rem",
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    sx={{
                                        color: theme.palette.custom.light,
                                    }}
                                >
                                    {content[selected].title}
                                </Typography>
                                <Typography
                                    sx={{
                                        color: theme.palette.custom.lightMuted,
                                    }}
                                >
                                    {content[selected].text}
                                </Typography>
                                <Box>
                                    <Link
                                        href={content[selected].button.href}
                                        passHref
                                    >
                                        <Button
                                            variant="outlined"
                                            color="secondary"
                                            sx={{
                                                marginTop: "1rem",
                                            }}
                                        >
                                            {content[selected].button.text}
                                        </Button>
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8} order={{ xs: 0, md: 1 }}>
                        <Box className="flex" sx={{ gap: "1rem" }}>
                            {content.map((item, index) => {
                                return (
                                    <Box
                                        key={index}
                                        sx={{
                                            backgroundImage: {
                                                xs: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${item.src})`,
                                            },
                                            flexGrow:
                                                selected === index ? "3" : "1",
                                            backgroundSize: "cover",
                                            height: {
                                                xs: "15rem",
                                                md: "30rem",
                                            },
                                            cursor: "pointer",
                                            transition: "300ms",
                                            filter:
                                                selected === index
                                                    ? "brightness(100%) grayscale(100%)"
                                                    : "brightness(50%) grayscale(100%)",
                                            "&:hover": {
                                                filter: "brightness(100%) grayscale(100%)",
                                            },
                                        }}
                                        onClick={() => {
                                            setSelected(index);
                                        }}
                                    />
                                );
                            })}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ImageAccordionPreviewSection;
