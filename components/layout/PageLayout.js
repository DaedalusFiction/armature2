import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Meta from "../home/Meta";
import Header from "./Header";

const PageLayout = ({ name, children }) => {
    return (
        <>
            {/* <Header /> */}
            <Box
                sx={{
                    backgroundImage:
                        "linear-gradient(rgba(39, 45, 45, 0.65), rgba(39, 45, 45, 1)), url(/images/collage-background.webp)",
                    // "linear-gradient(rgba(233, 214, 214, 0.8), rgba(233, 224, 214, 0.8)), url(/images/collage-background.webp)",
                    backgroundSize: "cover",
                    // backgroundAttachment: "fixed",
                    paddingTop: "8rem ",
                    position: "relative",
                    display: "flex",
                    // alignItems: "center",
                    justifyContent: "center",
                    // flexDirection: "column",
                }}
            >
                {/* <Meta siteName={name} /> */}
                <Container maxWidth="xl">
                    <Typography
                        variant="h1"
                        sx={{
                            textAlign: "center",
                            textTransform: "uppercase",
                        }}
                    >
                        {name}
                    </Typography>
                    {children}
                </Container>
            </Box>
        </>
    );
};

export default PageLayout;
