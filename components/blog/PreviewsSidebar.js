import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import PostPreview from "./PostPreview";

const PreviewsSidebar = ({ sidebarItems, sidebarCategory }) => {
    return (
        <Box sx={{ position: "relative" }}>
            <Typography variant="h5">Suggested {sidebarCategory}</Typography>
            <Divider sx={{ margin: ".5rem 0 1rem 0" }} />
            {sidebarItems &&
                sidebarItems.map((post, index) => {
                    return (
                        <PostPreview
                            category={sidebarCategory}
                            post={post.data}
                            id={post.id}
                            key={index}
                        />
                    );
                })}
        </Box>
    );
};

export default PreviewsSidebar;
