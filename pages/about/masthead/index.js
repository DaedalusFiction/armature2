import { Box, Divider, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import SizedImage from "../../../components/general/SizedImage";
import { leadProfile, secondaryProfiles } from "../../../siteInfo";
import PageLayout from "../../../components/layout/PageLayout";
import AboutNavbar from "../../../components/about/AboutNavbar";
import Profile from "../../../components/about/Profile";

const index = () => {
    return (
        <PageLayout name="MASTHEAD">
            <Box className="section">
                <Grid container spacing={6}>
                    <Grid item xs={12} md={4}>
                        <Profile profile={secondaryProfiles[0]}>
                            <Typography>
                                Sydney writes wicked poetry about autism,
                                women&rsquo;s rights, body parts, and
                                photographers. Do not mess with her.
                            </Typography>
                        </Profile>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Profile profile={secondaryProfiles[1]}>
                            <Typography>
                                Anthony keeps it real with her music and killer
                                fashion sense. She enjoys hanging out with
                                friends and discussing deep shit.
                            </Typography>
                        </Profile>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Profile profile={secondaryProfiles[2]}>
                            <Typography>
                                Dave is an ancillary part of both Basilinda and
                                the Charlottesville poetry scene. If you have
                                any comments, suggestions, or deep concerns
                                relating to the design or functionality of this
                                website, please contact him posthaste.
                            </Typography>
                        </Profile>
                    </Grid>
                </Grid>
            </Box>
        </PageLayout>
    );
};

export default index;
