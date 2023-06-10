import { Box, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Hero from "../components/home/Hero";

import Meta from "../components/home/Meta";
import theme from "../styles/themes/theme";
import ContactPanel from "../components/contact/ContactPanel";
import PortfolioProject from "../components/portfolio/PortfolioProject";
import ImageWithFade from "../components/general/ImageWithFade";
import Header from "../components/layout/Header";
import { useEffect } from "react";

const HighlightedText = ({ children }) => {
    return <span style={{ color: theme.palette.custom.dark }}>{children}</span>;
};

const portfolioProjects = [
    {
        name: "Flavor Exceptional Catering",
        src: "/images/flavorScreencap.webp",
        description:
            "Flavor Exceptional Catering works closely with the UVA sports departments as well as a dozen or so sororities and fraternities, and they came to us looking for a website that would show visitors their commitment to their craft. We opted for a simple, elegant design, one that highlighted the beauty of their presentation and the friendliness of their characters.",
        created: "2023",
        href: "https://flavorcville.com",
    },
    {
        name: "The Rumen",
        src: "/images/rumenScreencap.webp",
        description:
            "The Rumen is an online literary journal that publishes poetry, short fiction, and creative non-fiction. For their website we favored a more traditional design inspired by Harper's and The New Yorker. Publications are stored on Firebase and are managed through a custom admin panel, powered by OAuth 2.0, directly in the browser.",
        created: "2022",
        href: "https://therumen.com",
    },
    {
        name: "Nettle Shirts Puppet Works",
        src: "/images/nettleScreencap.webp",
        description:
            "Nettle Shirts Puppet Works wanted a website that was as minimalist as they get: One font family (Times New Roman), two colors (brown and black), and zero animations. We built for them a website that captures the simplicity of their work and the austerity of their brand, and focuses the user's attention on the content itself.",
        created: "2023",
        href: "https://nettleshirts.net",
    },
];

export default function Home() {
    return (
        <Box sx={{ position: "relative" }}>
            <Meta />
            <Header />
            <Hero />
            <Container maxWidth="xl">
                <Box className="section" id="about">
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={7}>
                            <Box sx={{ position: "relative", height: "100%" }}>
                                <Typography
                                    variant="body2"
                                    className="sticky"
                                    // sx={{ textTransform: "uppercase" }}
                                >
                                    we are a narrative-driven{" "}
                                    <HighlightedText>
                                        digital marketing agency
                                    </HighlightedText>{" "}
                                    founded in 2023 by friends jonathan clark
                                    and dave sorensen. with a passion for
                                    quality content and clean design, we provide
                                    the{" "}
                                    <HighlightedText>structure</HighlightedText>{" "}
                                    you need to grow your brand the way you
                                    want. we craft{" "}
                                    <HighlightedText>
                                        bespoke websites
                                    </HighlightedText>{" "}
                                    and create{" "}
                                    <HighlightedText>
                                        narration through content
                                    </HighlightedText>{" "}
                                    to help you establish your voice as one of
                                    authority and insight.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Box sx={{ transform: "translateY(1rem)" }}>
                                <ImageWithFade
                                    src="/images/profile-river5.jpg"
                                    alt="Dave Sorensen sitting on a rock"
                                    maxSize={800}
                                    filter={theme.palette.primary.overlay}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Box sx={{ transform: "translateY(1rem)" }}>
                                <ImageWithFade
                                    src="/images/jonathan.webp"
                                    alt="Jonathan Clark on a farm"
                                    maxSize={800}
                                    filter={theme.palette.primary.overlay}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography
                                variant="body2"
                                // sx={{ textTransform: "uppercase" }}
                            >
                                with more than{" "}
                                <HighlightedText>
                                    ten years of experience
                                </HighlightedText>{" "}
                                writing for arts & culture, we understand that
                                what gets readers talking, what keeps them
                                coming back for more, is unique,{" "}
                                <HighlightedText>
                                    high-quality content
                                </HighlightedText>{" "}
                                that they can&rsquo;t get anywhere else.
                                that&rsquo;s why we take our time and labor over
                                each piece of content we produce, so that{" "}
                                <HighlightedText>
                                    you can feel proud
                                </HighlightedText>{" "}
                                sharing it with the world.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Container maxWidth="xl" disableGutters>
                <Box
                    className="section"
                    id="portfolio"
                    sx={{ backgroundColor: theme.palette.primary.main }}
                >
                    <Container>
                        {/* <Line /> */}
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
                    </Container>
                </Box>
            </Container>
            <Box id="contact">
                <ContactPanel />
            </Box>
        </Box>
    );
}
