import React, { useEffect, useLayoutEffect, useRef } from "react";
import ImageWithFade from "../general/ImageWithFade";
import theme from "../../styles/themes/theme";
import { gsap } from "gsap";
import { Box } from "@mui/material";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

const ImageFadingIn = ({ src, alt }) => {
    gsap.registerPlugin(ScrollTrigger);
    const imageRef = useRef(null);

    useLayoutEffect(() => {
        const element = imageRef.current;
        const ctx = gsap.context(() => {
            const animation1 = gsap.from(element, {
                scrollTrigger: {
                    trigger: element,
                    scrub: true,
                    // pin: true,
                    start: "top 90%",
                    end: "top 20%",
                },
                opacity: 0,
                transformOrigin: "left center",
                ease: "none",
            });
        }, element);

        return () => {
            ctx.revert();
        };
    }, []);
    return (
        <Box ref={imageRef}>
            <ImageWithFade
                src={src}
                alt={alt}
                maxSize={800}
                filter={theme.palette.primary.overlay}
            />
        </Box>
    );
};

export default ImageFadingIn;
