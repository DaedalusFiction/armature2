import { Box, Typography } from "@mui/material";
import React from "react";
import theme from "../../styles/themes/theme";

const text = "FRAME // WORK //*";

const TextMarquee = () => {
    return (
        <Box
            sx={{
                overflow: "hidden",
                background: theme.palette.custom.dark,
                padding: "1rem 0",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    width: "fit-content",
                    gap: "1rem",

                    justifyContent: "space-between",
                    animation: "marquee 30s linear infinite",
                    "&:hover": {
                        animationPlayState: "paused",
                    },
                    "@keyframes marquee": {
                        "0%": {
                            transform: "translateX(0%)",
                        },
                        "100%": {
                            transform: "translateX(-50%)",
                        },
                    },
                }}
            >
                {text
                    .repeat(8)
                    .split("*")
                    .map((item, index) => {
                        return (
                            <Typography
                                variant="h2"
                                key={index}
                                sx={{
                                    whiteSpace: "nowrap",
                                    color: theme.palette.background.default,
                                }}
                            >
                                {item}
                            </Typography>
                        );
                    })}
            </Box>
        </Box>
    );
};

const textStyles = {
    whiteSpace: "nowrap",
    animation: "marquee 5s linear infinite",
    width: "100%",

    // transform: "translateX(100%)",
    "@keyframes marquee": {
        "0%": {
            transform: "translateX(0%)",
        },
        "100%": {
            transform: "translateX(-100%)",
        },
    },
};

export default TextMarquee;
