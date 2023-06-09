import { doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";

import { marked } from "marked";
import { Box, Container, Grid, StepContext, Typography } from "@mui/material";
import PreviewsSidebar from "./PreviewsSidebar";
import theme from "../../styles/themes/theme";

const PublicationBody = ({ story }) => {
    useEffect(() => {
        async function getStory() {
            if (story) {
                const xhr = new XMLHttpRequest();
                xhr.responseType = "text";
                xhr.onload = (event) => {
                    let markdowntext = xhr.response;
                    if (markdowntext.charAt(0) === `"`) {
                        markdowntext = markdowntext.substring(1);
                    }
                    const newBody = marked.parse(markdowntext);
                    document.getElementById("storyBody").innerHTML = newBody;
                };
                xhr.open("GET", story.markdownURL);
                xhr.send();
            } else {
                // doc.data() will be undefined in this case
            }
        }
        getStory();
    }, [story]);
    return (
        <Container maxWidth="md">
            <Grid container className="publication-body" spacing={8}>
                <Grid item xs={12}>
                    <div
                        style={{
                            whiteSpace: "pre-wrap",
                            fontFamily: theme.fonts.body,
                        }}
                        id="storyBody"
                        className="storyBody"
                    ></div>
                    <Typography
                        sx={{
                            marginTop: "3em",
                            fontStyle: "italic",
                        }}
                    >
                        Published{" "}
                        {new Date(story.dateUploaded).toLocaleDateString(
                            "en-us",
                            {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                            }
                        )}
                    </Typography>
                </Grid>
                {/* <Grid item xs={12} md={4}>
                    <Box className="sticky">
                        <PreviewsSidebar
                            sidebarCategory={sidebarCategory}
                            sidebarItems={sidebarItems}
                        />
                    </Box>
                </Grid> */}
            </Grid>
        </Container>
    );
};

export default PublicationBody;
