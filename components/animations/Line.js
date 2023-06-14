import { Box } from "@mui/material";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Line = ({ color, reversed }) => {
    const lineRef = useRef(null);
    useLayoutEffect(() => {
        const element = lineRef.current;

        gsap.fromTo(
            element,
            { scaleX: 0 },
            {
                scaleX: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: element,
                    scrub: 1,
                    start: "top 92%",
                    end: "top 60%",
                },
            }
        );
    }, []);
    return (
        <Box
            ref={lineRef}
            sx={{
                height: ".25rem",
                margin: "1.5rem 0",
                background: color,
                transformOrigin: reversed ? "right" : "left",
            }}
        />
    );
};

export default Line;
