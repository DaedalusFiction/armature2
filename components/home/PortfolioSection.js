import { Box, Grid, Typography } from "@mui/material";
import PortfolioProject from "../portfolio/PortfolioProject";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import theme from "../../styles/themes/theme";
import { useLayoutEffect, useRef } from "react";

const PortfolioSection = () => {
    gsap.registerPlugin(ScrollTrigger);
    const sectionRef = useRef(null);
    const projectsRef = useRef(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const projects = projectsRef.current;
        const ctx = gsap.context(() => {
            const animation1 = gsap.to(projects, {
                scrollTrigger: {
                    trigger: section,
                    scrub: true,
                    pin: true,
                    start: "top top",
                    end: "+=250%",
                },
                x: "-=120%",
                transformOrigin: "left center",
                ease: "none",
            });
        }, projects);

        return () => {
            ctx.revert();
        };
    }, []);
    return (
        <Box id="portfolio">
            <Box
                ref={sectionRef}
                sx={{
                    overflow: "hidden",
                    height: "100vh",
                    display: { xs: "none", md: "block" },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        textAlign: "end",
                        margin: "1em 0 1rem 0",
                        color: theme.palette.background.default,
                    }}
                >
                    Behold: Our Work!
                </Typography>
                <Box
                    ref={projectsRef}
                    sx={{
                        display: "flex",
                        gap: "6rem",
                        padding: "0 10rem",
                    }}
                >
                    {portfolioProjects.map((project, index) => {
                        return (
                            <Box
                                key={index}
                                sx={{
                                    minWidth: "60vw",
                                }}
                            >
                                <PortfolioProject
                                    project={project}
                                    index={index}
                                />
                            </Box>
                        );
                    })}
                </Box>
            </Box>
            <Box
                className="section"
                sx={{
                    backgroundColor: theme.palette.primary.main,
                    display: { xs: "block", md: "none" },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: theme.palette.background.default,
                        textAlign: "end",
                        marginBottom: ".5em",
                    }}
                >
                    OUR WORK
                </Typography>
                <Grid container columnSpacing={6} rowSpacing={2}>
                    {portfolioProjects.map((project, index) => {
                        return (
                            <Grid item key={index} xs={12}>
                                <PortfolioProject
                                    project={project}
                                    index={index}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </Box>
    );
};

const portfolioProjects = [
    {
        name: "Flavor",
        src: "/images/flavorScreencap.webp",
        description:
            "Flavor Exceptional Catering works closely with the UVA sports departments, and they came to us looking for a website that would show visitors their commitment to their craft. We opted for a simple, elegant design, one that highlighted the beauty of their presentation and the friendliness of their characters.",
        created: "2023",
        href: "https://flavorcville.com",
    },
    {
        name: "The Rumen",
        src: "/images/rumenScreencap.webp",
        description:
            "The Rumen is an online literary journal that publishes poetry, short fiction, and creative non-fiction. For their website we favored a more traditional design inspired by Harper's and The New Yorker. Publications are stored on Firebase and are managed through a custom admin panel powered by OAuth 2.0.",
        created: "2022",
        href: "https://therumen.com",
    },
    {
        name: "Nettle Shirts",
        src: "/images/nettleScreencap.webp",
        description:
            "Nettle Shirts Puppet Works wanted a website that was as minimalist as they get: One font family (Times New Roman), two colors (brown and black), and zero animations. We built for them a website that captures the simplicity of their work and the austerity of their brand, and focuses the user's attention on the content itself.",
        created: "2023",
        href: "https://nettleshirts.net",
    },
];

export default PortfolioSection;

//old section
