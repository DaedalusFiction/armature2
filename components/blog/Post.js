import { Box, Container, Grid, Typography } from "@mui/material";
import PostBody from "./PostBody";
import theme from "../../styles/themes/theme";
import ImageWithFade from "../general/ImageWithFade";
import PreviewsSidebar from "./PreviewsSidebar";

const Post = ({ post, sidebarItems, sidebarCategory }) => {
    return (
        <Container>
            <Box
                sx={{
                    padding: "12rem 0 4rem 0",
                }}
            >
                <Typography
                    sx={{
                        margin: ".25em 0",
                        fontSize: "3rem",
                        textAlign: "center",
                        color: theme.palette.custom.dark,
                    }}
                    variant="h1"
                >
                    {post.fields[0].value}
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
                    {post.fields[1].value}
                </Typography>
            </Box>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={8}>
                        <ImageWithFade
                            maxSize={1200}
                            src={post.URLs[0]}
                            alt="Jorge Luis Borges sitting at his desk"
                        />
                        <PostBody
                            sidebarCategory={sidebarCategory}
                            sidebarItems={sidebarItems}
                            post={post}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <PreviewsSidebar
                            sidebarCategory={sidebarCategory}
                            sidebarItems={sidebarItems}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Container>
    );
};

export default Post;
