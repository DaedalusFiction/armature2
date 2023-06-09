import { Box } from "@mui/system";
import React, { useRef, useState } from "react";
import theme from "../../styles/themes/theme";
import { Typography } from "@mui/material";

const ExpandingText = ({ children }) => {
    const [letterSpacing, setLetterSpacing] = useState(false);
    const [background, setBackground] = useState("inherit");
    const [color, setColor] = useState("inherit");
    const [border, setBorder] = useState(
        "1px solid " + theme.palette.primary.main
    );
    const handleOnMouseOver = () => {
        setLetterSpacing(".3em");
        setBackground(theme.palette.secondary.main);
        setColor(theme.palette.custom.light);
        setBorder("1px solid " + theme.palette.secondary.main);
        // setShadow("5px 5px 5px rgba(0, 0, 0, 0.25)");
    };
    const handleOnMouseLeave = () => {
        setLetterSpacing("inherit");
        setBackground("transparent");
        setColor("inherit");
        setBorder("1px solid " + theme.palette.primary.main);
        // setShadow("none");
    };
    return (
        <Box
            sx={{
                background: background,
                position: "relative",
                zIndex: "10",
                display: "inline-block",
                padding: ".5em 1em",
                transition: "300ms",
                border: border,
                cursor: "pointer",
            }}
            onMouseOver={handleOnMouseOver}
            onMouseLeave={handleOnMouseLeave}
        >
            <Typography
                sx={{
                    transition: "300ms",
                    color: color,
                    letterSpacing: letterSpacing,
                    textTransform: "uppercase",
                }}
            >
                {children}
            </Typography>
        </Box>
    );
};

export default ExpandingText;
