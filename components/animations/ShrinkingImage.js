import React, { useEffect, useLayoutEffect, useRef } from "react";
import ImageWithFade from "../general/ImageWithFade";
import theme from "../../styles/themes/theme";
import { gsap } from "gsap";
import { Box } from "@mui/material";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

const ShrinkingImage = () => {
    gsap.registerPlugin(ScrollTrigger);
    const comp = useRef(); // create a ref for the root level element (for scoping)
    const imageRef = useRef(null);

    // useLayoutEffect(() => {
    //     const element = imageRef.current;

    //     gsap.fromTo(
    //         element,
    //         { width: "15rem" },
    //         {
    //             width: "10rem",

    //             scrollTrigger: {
    //                 trigger: element,
    //                 scrub: true,
    //                 start: "top 40%",
    //                 end: "bottom 60%",
    //                 markers: true,
    //             },
    //         }
    //     );
    // }, []);

    useLayoutEffect(() => {
        const element = imageRef.current;
        const ctx = gsap.context(() => {
            const animation1 = gsap.from(element, {
                scrollTrigger: {
                    trigger: ".orange",
                    scrub: true,
                    pin: true,
                    start: "top top",
                    end: "+=100%",
                },
                scaleX: 0,
                transformOrigin: "left center",
                ease: "none",
            });
            // const animation1 = gsap.fromTo(
            //     element,
            //     { width: "15rem" },
            //     {
            //         width: "10rem",

            //         scrollTrigger: {
            //             trigger: element,
            //             scrub: true,
            //             pin: true,
            //             start: "top 40%",
            //             end: "bottom 60%",
            //             markers: true,
            //         },
            //     }
            // );
        }, element);

        // cleanup function will be called when component is removed
        return () => {
            ctx.revert(); // animation cleanup!!
        };
    }, []);
    return (
        <Box ref={imageRef}>
            <ImageWithFade
                src="/images/profile-river5.jpg"
                alt="Dave Sorensen sitting on a rock"
                maxSize={800}
                filter={theme.palette.primary.overlay}
            />
        </Box>
    );
};

export default ShrinkingImage;
