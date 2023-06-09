import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

const TypingAnimation = ({ string, alternateString }) => {
    const stringArray = string.split("");
    const alternateStringArray = alternateString.split("");
    const [text, setText] = useState(string);
    const [isAlternate, setIsAlternate] = useState(false);
    const [isHovering, setIsHovering] = useState(true);

    const replaceAnimation = () => {
        if (isHovering && text.length > 0) {
            let newText = text.substring(0, text.length - 1);
            setText(newText);
        }
    };
    const restoreAnimation = () => {
        console.log("restoreAnimation");
    };

    return (
        <Box
            onMouseEnter={replaceAnimation}
            onMouseLeave={() => {
                // setIsHovering(false);
            }}
        >
            <Typography>{text}</Typography>
        </Box>
    );
};

export default TypingAnimation;
