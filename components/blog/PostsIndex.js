import React from "react";
import { Container, Grid } from "@mui/material";
import PostPreview from "./PostPreview";
import PageLayout from "../layout/PageLayout";

const PostsIndex = ({ category, posts, isGrid }) => {
    return (
        <Container maxWidth={isGrid ? "lg" : "md"}>
            <Grid container spacing={4}>
                {posts.map((post, index) => {
                    return (
                        <Grid key={index} item xs={12} md={isGrid ? 4 : 12}>
                            <PostPreview
                                post={post.data}
                                id={post.id}
                                category={category}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </Container>
    );
};

export default PostsIndex;
