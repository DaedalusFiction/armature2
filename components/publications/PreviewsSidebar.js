import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PublicationPreview from "../previews/PublicationPreview";

const PreviewsSidebar = ({ sidebarItems, sidebarCategory }) => {
    return (
        <Box sx={{ position: "relative" }}>
            <Typography variant="h5">Suggested {sidebarCategory}</Typography>
            <Divider sx={{ margin: ".5rem 0 1rem 0" }} />
            {sidebarItems &&
                sidebarItems.map((item, index) => {
                    return (
                        <PublicationPreview
                            category={sidebarCategory}
                            item={item.data}
                            id={item.id}
                            key={index}
                        />
                    );
                })}
        </Box>
    );
};

export default PreviewsSidebar;
