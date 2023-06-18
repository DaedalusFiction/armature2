import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import theme from "../../styles/themes/theme";

const lines = [
    { top: "20%", left: "6%", origin: "left", rotation: -100 },
    { top: "20%", left: "22%", origin: "left", rotation: -40 },
    { top: "20%", left: "41%", origin: "left", rotation: -125 },
    { top: "20%", left: "60%", origin: "left", rotation: -105 },
    { top: "20%", left: "75%", origin: "left", rotation: -57 },
    { top: "73%", left: "97%", origin: "left", rotation: -35 },
];

const HeaderLines = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
        // console.log(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            {lines.map((line, index) => {
                return (
                    <Box
                        key={index}
                        sx={{
                            "&::before": {
                                content: "''",
                                height: { xs: "4px", md: "8px" },
                                width: "1000px",
                                top: line.top,
                                left: line.left,
                                transition: "1450ms",
                                animation: "grow 2.5s ease-in-out",

                                transform:
                                    scrollPosition > 65
                                        ? `rotate(${line.rotation - 25}deg)`
                                        : `rotate(${line.rotation}deg)`,
                                transformOrigin: "0 0",
                                position: "absolute",
                                transformOrigin: line.origin,
                                backgroundColor:
                                    theme.palette.background.default,
                                zIndex: "2",
                                "@keyframes grow": {
                                    "0%": {
                                        scale: "0",
                                    },
                                    "80%": {
                                        scale: "0",
                                    },
                                    "100%": {
                                        scale: "1",
                                    },
                                },
                            },
                        }}
                    />
                );
            })}
        </>
    );
};

export default HeaderLines;
