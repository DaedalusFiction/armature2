import { doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";

import { marked } from "marked";
import { Box, Container, Grid, StepContext, Typography } from "@mui/material";
import PreviewsSidebar from "./PreviewsSidebar";
import theme from "../../styles/themes/theme";

const PostBody = ({ post }) => {
    useEffect(() => {
        async function getPost() {
            if (post) {
                const xhr = new XMLHttpRequest();
                xhr.responseType = "text";
                xhr.onload = (event) => {
                    let markdowntext = xhr.response;
                    if (markdowntext.charAt(0) === `"`) {
                        markdowntext = markdowntext.substring(1);
                    }
                    const newBody = marked.parse(markdowntext);
                    document.getElementById("postBody").innerHTML = newBody;
                };
                xhr.open("GET", post.markdownURL);
                xhr.send();
            } else {
                // doc.data() will be undefined in this case
            }
        }
        getPost();
    }, [post]);
    return (
        <Container maxWidth="md">
            <Grid container className="publication-body" spacing={8}>
                <Grid item xs={12}>
                    <div
                        style={{
                            whiteSpace: "pre-wrap",
                            fontFamily: theme.font.body,
                        }}
                        id="postBody"
                        className="postBody"
                    ></div>
                    <Typography
                        sx={{
                            marginTop: "3em",
                            fontStyle: "italic",
                        }}
                    >
                        Published{" "}
                        {new Date(post.dateUploaded).toLocaleDateString(
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

export default PostBody;
