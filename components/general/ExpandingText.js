import { Box } from "@mui/system";
import React, { useRef, useState } from "react";
import theme from "../../styles/themes/theme";

const ExpandingText = ({ children, color }) => {
    const [letterSpacing, setLetterSpacing] = useState(false);
    const handleOnMouseOver = () => {
        setLetterSpacing(".3em");
        // setShadow("5px 5px 5px rgba(0, 0, 0, 0.25)");
    };
    const handleOnMouseLeave = () => {
        setLetterSpacing("inherit");
        // setShadow("none");
    };
    return (
        <Box
            sx={{
                "& > *": {
                    letterSpacing: letterSpacing,
                    transition: "300ms",
                    display: "inline-block",
                    position: "relative",
                    zIndex: "10",
                    color: color,
                    padding: "0 .5em",
                    cursor: "pointer",
                    // fontWeight: "600",
                    textTransform: "uppercase",
                    // boxShadow: shadow,
                },
            }}
            onMouseOver={handleOnMouseOver}
            onMouseLeave={handleOnMouseLeave}
        >
            {children}
        </Box>
    );
};

export default ExpandingText;
