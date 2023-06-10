import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import PageLayout from "../../components/layout/PageLayout";
import AboutNavbar from "../../components/about/AboutNavbar";
import Profile from "../../components/about/Profile";
import { secondaryProfiles } from "../../siteInfo";

const index = () => {
    return (
        <PageLayout name="">
            <Container maxWidth="md">
                <Box className="section">
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <Typography
                                variant="h3"
                                sx={{
                                    textAlign: {
                                        xs: "start",
                                        md: "center",
                                    },
                                }}
                            >
                                Our Mission
                            </Typography>
                            <br />
                            <Typography
                                variant="body2"
                                sx={{
                                    textAlign: {
                                        xs: "start",
                                        md: "center",
                                    },
                                }}
                            >
                                We may be named after the 19th-century board
                                game consisting of men and cannons, but we play
                                a different game. Our board incorporates players
                                and canons that have been historically
                                overlooked, invalidated, and silenced. Through
                                publishing, we seek to uplift and encourage the
                                exploration of identities that are constantly
                                evolving and thinking, shifting and persisting.
                            </Typography>
                            <br />
                            <br />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography
                                variant="h3"
                                sx={{
                                    textAlign: {
                                        xs: "start",
                                        md: "center",
                                    },
                                }}
                            >
                                About Us
                            </Typography>
                            <br />
                            <Typography
                                variant="body2"
                                sx={{
                                    textAlign: {
                                        xs: "start",
                                        md: "center",
                                    },
                                }}
                            >
                                Founded by a team of poets, writers, artists,
                                and musicians, <em>Basilinda</em> is an
                                experimental journal for queer artists. We
                                coalesced in Charlottesville, Virginia through a
                                shared love of inclusivity, community,
                                collaboration, and activism. Our creative
                                interests lie in the deeply personal and
                                cutting-edge: we want boundary-pushing art
                                exploring individual, interpersonal, and
                                collective experiences.
                            </Typography>
                            <br />
                            <br />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography
                                variant="h3"
                                sx={{
                                    textAlign: {
                                        xs: "start",
                                        md: "center",
                                    },
                                }}
                            >
                                Curators
                            </Typography>
                            <br />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Profile profile={secondaryProfiles[0]}>
                                <Typography variant="body2">
                                    Sydney writes wicked poetry about autism,
                                    women&rsquo;s rights, body parts, and
                                    photographers. Do not mess with her.
                                </Typography>
                            </Profile>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Profile profile={secondaryProfiles[1]}>
                                <Typography variant="body2">
                                    Anthony keeps it real with her music and
                                    killer fashion sense. She enjoys hanging out
                                    with friends and discussing deep shit.
                                </Typography>
                            </Profile>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Profile profile={secondaryProfiles[2]}>
                                <Typography variant="body2">
                                    Dave is an ancillary part of both Basilinda
                                    and the Charlottesville poetry scene. If you
                                    have any comments, suggestions, or deep
                                    concerns relating to the design or
                                    functionality of this website, please
                                    contact him posthaste.
                                </Typography>
                            </Profile>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </PageLayout>
    );
};

export default index;
