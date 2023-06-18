import { Container, Grid, Typography } from "@mui/material";
import { contactConfig } from "../../siteInfo";
import ContactForm from "./ContactForm";

const ContactPanel = () => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={6} className="section">
                <Grid item xs={12} md={6}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: "600",
                        }}
                    >
                        CONTACT
                    </Typography>
                    <Typography>
                        you likely only have one life to live. why wait? fill
                        out this form and we will be in touch.
                    </Typography>
                    <br />
                    <Grid container columnSpacing={4} rowSpacing={1}>
                        <Grid item xs={12} sm={3}>
                            <Typography
                                sx={{ textAlign: { xs: "start", sm: "end" } }}
                            >
                                address
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <Typography
                                sx={{ marginBottom: { xs: "1rem", md: "0" } }}
                            >
                                Charlottesville, Virginia, United States
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Typography
                                sx={{ textAlign: { xs: "start", sm: "end" } }}
                            >
                                email
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <Typography>hello@armature.studio</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ContactForm config={contactConfig} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default ContactPanel;
