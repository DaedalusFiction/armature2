import {
    Box,
    Grid,
    List,
    ListItem,
    ListItemText,
    Typography,
} from "@mui/material";
import ImageWithFade from "../general/ImageWithFade";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import { useLayoutEffect, useRef } from "react";
import theme from "../../styles/themes/theme";

const ServicePreview = ({ service, reversed }) => {
    gsap.registerPlugin(ScrollTrigger);
    const imageContainerRef = useRef(null);
    const imageRef = useRef(null);

    useLayoutEffect(() => {
        const imageContainer = imageContainerRef.current;
        const image = imageRef.current;
        const ctx = gsap.context(() => {
            const animation1 = gsap.to(image, {
                scrollTrigger: {
                    trigger: imageContainer,
                    scrub: true,
                    start: "top 100%",
                    end: "bottom 0%",
                },
                y: "-=30%",
                transformOrigin: "left center",
                ease: "none",
            });
        }, image);

        return () => {
            ctx.revert();
        };
    }, []);
    return (
        <Box>
            <Box>
                <Grid container direction={reversed ? "row-reverse" : "row"}>
                    <Grid item xs={12} md={6}>
                        <Grid
                            container
                            columnSpacing={4}
                            sx={{ height: "100%", padding: "4rem 2rem" }}
                        >
                            <Grid item xs={6}>
                                <Box
                                    sx={{
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            // textTransform: "uppercase",
                                            fontSize: "1.25rem",
                                        }}
                                    >
                                        {service.flavor}
                                    </Typography>
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            color: theme.palette.background
                                                .default,
                                            // textTransform: "uppercase",
                                        }}
                                    >
                                        {service.header}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        height: "100%",
                                        alignItems: "end",
                                    }}
                                >
                                    <List>
                                        {service.points.map((point, index) => {
                                            return (
                                                <ListItem key={index}>
                                                    <ListItemText
                                                        primary={point}
                                                        primaryTypographyProps={{
                                                            fontSize: "1.25rem",
                                                        }}
                                                        secondary={
                                                            service.secondaryPoint ||
                                                            ""
                                                        }
                                                    />
                                                </ListItem>
                                            );
                                        })}
                                    </List>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                            ref={imageContainerRef}
                            sx={{
                                height: "clamp(20rem, 75vh, 35rem)",
                                overflow: "hidden",
                            }}
                        >
                            <Box ref={imageRef}>
                                <ImageWithFade
                                    maxSize={1000}
                                    src={service.src}
                                    alt="Gustav Dore Print"
                                />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default ServicePreview;
