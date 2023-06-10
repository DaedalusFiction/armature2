import React from "react";
import { Container, Grid } from "@mui/material";
import PostPreview from "./PostPreview";
import PageLayout from "../layout/PageLayout";

const PostsIndex = ({ category, posts, isGrid }) => {
    return (
        <PageLayout name={category}>
            <Container maxWidth={isGrid ? "lg" : "md"}>
                <Grid className="section" container>
                    {posts.map((post, index) => {
                        return (
                            <Grid key={index} item xs={isGrid ? 4 : 12}>
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
        </PageLayout>
    );
};

export default PostsIndex;