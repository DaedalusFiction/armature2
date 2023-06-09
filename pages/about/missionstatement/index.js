import { Box, Container, Grid, Typography } from "@mui/material";
import ImageFadeIn from "../../../components/general/ImageFadeIn";
import PageLayout from "../../../components/layout/PageLayout";
import AboutNavbar from "../../../components/about/AboutNavbar";
import NativeImage from "../../../components/general/NativeImage";

const index = () => {
    return (
        <PageLayout name="MISSION STATEMENT">
            <Container maxWidth="md">
                <AboutNavbar />
                <Box className="section">
                    <Grid container>
                        <Grid item xs={12}>
                            {/* <NativeImage
                                src="/images/womanWithCannon.svg"
                                maxSize={800}
                            /> */}
                            <Typography
                                sx={{
                                    whiteSpace: "pre-wrap",
                                    textAlign: "center",
                                    marginTop: "1rem",
                                }}
                            >
                                Basilinda is an online multimedia literary
                                journal for queer, non-binary, and
                                women-identifying artists. We may be named after
                                the 19th-century board game consisting of men
                                and cannons, but we play a different game. Our
                                board incorporates players and canons that have
                                been historically overlooked, invalidated, and
                                silenced. Through publishing, we seek to uplift
                                and encourage the exploration of identities that
                                are constantly evolving and thinking, shifting
                                and persisting.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </PageLayout>
    );
};

export default index;
