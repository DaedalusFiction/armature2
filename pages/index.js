import { Box, Button, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Hero from "../components/home/Hero";

import Meta from "../components/home/Meta";
import theme from "../styles/themes/theme";
import ContactPanel from "../components/contact/ContactPanel";
import PortfolioProject from "../components/portfolio/PortfolioProject";
import ImageWithFade from "../components/general/ImageWithFade";
import Header from "../components/layout/Header";
import Line from "../components/animations/Line";
import TextMarquee from "../components/animations/TextMarquee";
import ImageFadingIn from "../components/animations/ImageFadingIn";
import PortfolioSection from "../components/home/PortfolioSection";
import ServicesSection from "../components/home/ServicesSection";
import CutCorners from "../components/general/CutCorners";
import MouseLines from "../components/mouse/MouseLines";
import DotRing from "../components/mouse/DotRing";

export default function Home() {
    return (
        <Box className="cursor-hidden">
            <Meta />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <DotRing />
            </Box>
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
                                    sx={{
                                        fontSize: "1.75rem",
                                        maxWidth: "45ch",
                                        padding: {
                                            xs: "0",
                                            md: "6.5rem 0 6.5rem 3rem",
                                        },
                                    }}
                                >
                                    ARMATURE is a narrative-driven digital
                                    marketing agency for the arts. Our passion
                                    for quality content and clean design forms
                                    the core structure of your brand&rsquo;s
                                    growth.
                                </Typography>
                                {/* <Typography
                                    variant="body2"
                                    className="sticky"
                                    sx={{ maxWidth: "45ch" }}
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
                                </Typography> */}
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <CutCorners
                                background={theme.palette.background.default}
                            >
                                <ImageFadingIn
                                    src="/images/jonathan.webp"
                                    alt="Jonathan Clark on a farm"
                                />
                            </CutCorners>
                        </Grid>

                        <Grid item xs={12} md={5}>
                            <CutCorners
                                background={theme.palette.background.default}
                            >
                                <ImageFadingIn
                                    src="/images/profile-river5.jpg"
                                    alt="Dave sitting on a rock in a river"
                                />
                            </CutCorners>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography
                                variant="body2"
                                className="sticky"
                                sx={{
                                    maxWidth: "35ch",
                                    fontSize: "1.75rem",
                                    padding: {
                                        xs: "0",
                                        md: "6.5rem 0 6.5rem 3rem",
                                    },
                                }}
                            >
                                With more than a decade of experience creating
                                content for the arts and culture field, we know
                                what gets people talking and coming back for
                                more.
                            </Typography>
                            {/* <Typography
                                variant="body2"
                                className="sticky"
                                sx={{
                                    maxWidth: "35ch",
                                    padding: { xs: "0", md: "6.5rem 0 0 3rem" },
                                }}
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
                            </Typography> */}
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <ServicesSection />
            <TextMarquee />

            {/* <Box sx={{ backgroundColor: theme.palette.primary.main }}>
                <Container maxWidth="xl">
                    <PortfolioSection />
                </Container>
            </Box> */}
            <Box id="contact">
                <ContactPanel />
            </Box>
        </Box>
    );
}
