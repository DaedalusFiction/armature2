import { HouseOutlined, MailOutline } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import theme from "../../styles/themes/theme";
import ExpandingText from "../general/ExpandingText";
import SocialMediaIcons from "../general/SocialMediaIcons";

const Footer = () => {
    return (
        <Box sx={{ background: theme.palette.primary.main, padding: "4rem 0" }}>
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    gap: "1rem",
                                    alignItems: "center",
                                }}
                            >
                                <HouseOutlined
                                    sx={{
                                        color: theme.palette.custom.lightMuted,
                                    }}
                                />
                                <Box>
                                    <Typography
                                        sx={{
                                            color: theme.palette.custom.light,
                                            marginLeft: ".5rem",
                                        }}
                                    >
                                        Charlottesville, Virginia, United States
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    gap: "1rem",
                                    marginTop: ".5rem",
                                }}
                            >
                                <MailOutline
                                    sx={{
                                        color: theme.palette.custom.lightMuted,
                                    }}
                                />
                                <ExpandingText>
                                    <a
                                        style={{
                                            color: theme.palette.custom.light,
                                        }}
                                        href="mailto:hello@armature.studio"
                                    >
                                        hello@armature.studio
                                    </a>
                                </ExpandingText>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: { xs: "start", md: "end" },
                            }}
                        >
                            <SocialMediaIcons
                                color={theme.palette.custom.light}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
