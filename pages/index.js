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
import ImageAccordionPreviewSection from "../components/home/ImageAccordionPreviewSection";

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
            <Box id="portfolio">
                <ImageAccordionPreviewSection
                    title="Portfolio"
                    images={accordionOneImages}
                    // button={{ text: "Visit Site", href: "/products" }}
                />
            </Box>
            <Box id="contact">
                <ContactPanel />
            </Box>
        </Box>
    );
}

const accordionOneImages = [
    {
        src: "/images/charleneScreencap.webp",
        alt: "charlene morris' website screencap",
        href: "https://charlenemorris.com",
        title: "Charlene Morris",
        text: "Charlene is a Licenses Insurance Broker who has been visiting homes and helping people navigate the field of Medicare and Medicaid options since 2006.",
    },
    {
        src: "/images/flavorScreencap.webp",
        alt: "screenshot of Flavor Exceptional Catering website",
        href: "https://flavorcville.com",
        title: "Flavor Exceptional Catering",
        text: "Flavor Exceptional Catering is run by chefs Sandy Archer and Danny Niedermeyer. They work closely with UVA Sports and with several sororities and fraternities.",
    },
    {
        src: "/images/pfddScreencap.webp",
        alt: "screenshot of 2022 KDA PFDD",
        href: "https://kdapfdd.net",
        title: "2022 KDA PFDD",
        text: "The Kennedy's Disease Association put on a Patient-Focused Drug Development event in 2022 and needed a dedicated website to convey information and pertinent documentation to participants. ",
    },
    {
        src: "/images/fictionalScreencap.webp",
        alt: "Fictional Web Screenshot",
        href: "https://fictionalweb.com",
        title: "Fictional Web",
        text: "Fictional Web is Dave Sorensen's web development and desgin portfolio website. His focus is on working with individuals in the arts to create stunning personal websites.",
    },
    {
        src: "/images/rumenScreencap.webp",
        alt: "screenshot of The Rumen website",
        href: "https://therumen.com",
        title: "The rumen",
        text: "The Rumen is a literary journal run by Dave Sorensen and poet James Cole. It utilizes Google Cloud as a database and has a custom-built submissions portal to allow contributors to submit directly in their browser.",
    },
];
