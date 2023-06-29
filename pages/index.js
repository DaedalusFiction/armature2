import { Box, Button, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Hero from "../components/home/Hero";

import Meta from "../components/home/Meta";
import theme from "../styles/themes/theme";
import ContactPanel from "../components/contact/ContactPanel";
import Header from "../components/layout/Header";
import TextMarquee from "../components/animations/TextMarquee";
import ImageFadingIn from "../components/animations/ImageFadingIn";
import ServicesSection from "../components/home/ServicesSection";
import CutCorners from "../components/general/CutCorners";

export default function Home() {
    return (
        <Box>
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
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <ServicesSection />
            <TextMarquee />

            <Box id="contact">
                <ContactPanel />
            </Box>
        </Box>
    );
}
