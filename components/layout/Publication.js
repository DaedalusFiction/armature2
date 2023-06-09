import { Box, Container, Grid, Typography } from "@mui/material";
import ShareIcons from "../general/ShareIcons";
import PublicationBody from "../publications/PublicationBody";

const Publication = ({ publication, sidebarItems, sidebarCategory }) => {
    return (
        <Box>
            <Box
                sx={{
                    backgroundImage:
                        "linear-gradient(rgba(39, 45, 45, 0.65), rgba(39, 45, 45, 1)), url(/images/collage-background.webp)",
                    // "linear-gradient(rgba(233, 214, 214, 0.8), rgba(233, 224, 214, 0.8)), url(/images/collage-background.webp)",
                    backgroundSize: "cover",
                    // backgroundAttachment: "fixed",
                    padding: "12rem 0 4rem 0",
                }}
            >
                <Typography
                    sx={{
                        margin: ".25em 0",
                        fontSize: "3rem",
                        textAlign: "center",
                    }}
                    variant="h1"
                >
                    {publication.fields[0].value}
                </Typography>
                <Typography
                    sx={{
                        fontStyle: "italic",
                        margin: ".25em 0",
                        fontSize: ".75rem",
                        textAlign: "center",
                    }}
                >
                    by
                </Typography>
                <Typography
                    sx={{
                        margin: ".25em 0",
                        fontSize: "1.25rem",
                        textAlign: "center",
                    }}
                >
                    {publication.fields[1].value}
                </Typography>
            </Box>
            <Container>
                <Grid container>
                    <Grid item xs={12}>
                        <Box>
                            <PublicationBody
                                sidebarCategory={sidebarCategory}
                                sidebarItems={sidebarItems}
                                story={publication}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Publication;
