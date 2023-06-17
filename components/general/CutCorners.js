import { Box } from "@mui/material";
import React from "react";

const CutCorners = ({ children, background }) => {
    return (
        <Box sx={{ position: "relative" }}>
            <Box
                sx={{
                    "&:before": {
                        content: `""`,
                        position: "absolute",
                        top: "0",
                        left: "0",
                        borderRight: "7rem solid transparent",
                        borderTop: "7rem solid " + background,
                        width: "0",
                        zIndex: "2",
                    },
                    "&:after": {
                        content: `""`,
                        position: "absolute",
                        bottom: "0",
                        right: "0",
                        borderLeft: "7rem solid transparent",
                        borderBottom: "7rem solid " + background,
                        width: "0",
                    },
                }}
            >
                {children}
            </Box>
        </Box>
    );
};

export default CutCorners;
