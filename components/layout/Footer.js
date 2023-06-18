import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import theme from "../../styles/themes/theme";
import Sitemap from "../general/Sitemap";

const Footer = () => {
    return (
        <Box
            sx={{
                background: theme.palette.primary.main,
                padding: "2rem 0",
            }}
        >
            <Container maxWidth="xl">
                <Grid container>
                    <Grid item xs={12} md={4}>
                        <Sitemap />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography
                            sx={{ color: theme.palette.background.default }}
                        >
                            Charlottesville, Virginia, United States
                        </Typography>
                        <Typography
                            sx={{ color: theme.palette.background.default }}
                        >
                            +1 434 825 5038
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                height: "100%",
                                display: "flex",
                                alignItems: "end",
                                justifyContent: "end",
                            }}
                        >
                            <Typography
                                variant="caption"
                                sx={{ color: "white" }}
                            >
                                &copy; ARMATURE 2023, all rights reserved
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
