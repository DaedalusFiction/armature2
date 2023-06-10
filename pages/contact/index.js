import { Box, Divider, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import PageLayout from "../../components/layout/PageLayout";
import ContactForm from "../../components/contact/ContactForm";
import { contactConfig } from "../../siteInfo";
import TextHighlight from "../../components/general/TextHighlight";

const index = () => {
    return (
        <PageLayout name="Contact Form">
            <Container maxWidth="lg" className="section">
                <Grid container spacing={6}>
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h4"
                            sx={{
                                textAlign: "center",
                                fontWeight: "600",
                            }}
                        >
                            <TextHighlight>Inquiries</TextHighlight>
                        </Typography>
                        <Divider sx={{ margin: "1rem" }} />
                        <Typography>Tell us what you are thinking.</Typography>
                        <br />
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <Typography sx={{ fontStyle: "italic" }}>
                                    Email:
                                </Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography>
                                    inquiries@sparrowhawk.club
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography sx={{ fontStyle: "italic" }}>
                                    Address:
                                </Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Box>
                                    <Typography>
                                        Provided on Acceptance
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ContactForm config={contactConfig} />
                    </Grid>
                </Grid>
            </Container>
        </PageLayout>
    );
};

export default index;
