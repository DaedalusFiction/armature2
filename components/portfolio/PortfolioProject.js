import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ImageWithFade from "../general/ImageWithFade";
import Link from "next/link";
import { ArrowRightAlt } from "@mui/icons-material";
import ExpandingText from "../general/ExpandingText";
import theme from "../../styles/themes/theme";

const PortfolioProject = ({ project, index }) => {
    return (
        <Box sx={{ marginBottom: "4rem" }}>
            <Grid container columnSpacing={7}>
                <Grid item xs={2.5} md={2} order={{ xs: 2, md: 1 }}>
                    <Typography
                        variant="h1"
                        component="p"
                        sx={{ marginTop: { xs: "3rem", md: "2.25rem" } }}
                    >
                        0{index + 1}
                    </Typography>
                </Grid>
                <Grid item xs={9.5} md={5} order={{ xs: 3, md: 2 }}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "100%",
                        }}
                    >
                        <Box>
                            <Typography
                                variant="h3"
                                sx={{
                                    color: theme.palette.background.default,
                                    marginBottom: ".25em",
                                    textTransform: "uppercase",
                                }}
                            >
                                {project.name}
                            </Typography>
                            <Typography
                                sx={{ color: theme.palette.background.default }}
                            >
                                {project.description}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "end",
                                marginTop: "2rem",
                            }}
                        >
                            <ExpandingText
                                color={theme.palette.background.default}
                            >
                                <Link href={project.href}>Visit Website</Link>
                            </ExpandingText>
                            <ArrowRightAlt
                                sx={{ color: theme.palette.background.default }}
                            />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5} order={{ xs: 1, md: 3 }}>
                    <Box
                        sx={{
                            position: "relative",
                        }}
                    >
                        <Box
                            className="screencap"
                            sx={{ position: "relative", marginBottom: "1rem" }}
                        >
                            <ImageWithFade
                                src={project.src}
                                maxSize={600}
                                alt="rumen screencap"
                            />
                            <Box
                                sx={{
                                    position: "absolute",
                                    backgroundColor:
                                        theme.palette.primary.overlay,
                                    top: "0",
                                    left: "0",
                                    height: "100%",
                                    width: "100%",
                                    zIndex: "5",
                                }}
                            />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PortfolioProject;
