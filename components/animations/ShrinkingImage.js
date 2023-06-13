import React, { useEffect, useLayoutEffect, useRef } from "react";
import ImageWithFade from "../general/ImageWithFade";
import theme from "../../styles/themes/theme";
import gsap from "gsap";
import { Box } from "@mui/material";

const ShrinkingImage = () => {
    const comp = useRef(); // create a ref for the root level element (for scoping)
    const circleRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            "#thirdCircle",
            { x: 0 },
            {
                x: 100,
                duration: 5,
                scrollTrigger: {
                    trigger: "#thirdCircle",
                    markers: true,
                    start: "top center",
                    end: "bottom 80px",
                    scrub: true,
                },
            }
        );
    }, []);

    // useLayoutEffect(() => {
    //     // gsap.registerPlugin(ScrollTrigger);
    //     // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
    //     let ctx = gsap.context(() => {
    //         // gsap.to(imageWrapper.current, { rotation: 180 });
    //         gsap.to("#thirdCircle", {
    //             x: 100,
    //             duration: 5,
    //             scrollTrigger: {
    //                 trigger: "#thirdCircle",
    //                 markers: true,
    //                 start: "top center",
    //                 end: "bottom 80px",
    //                 scrub: true,
    //             },
    //         });
    //     }, comp); // <- IMPORTANT! Scopes selector text

    //     return () => ctx.revert(); // cleanup
    // }, []); // <- empty dependency Array so it doesn't re-run on every render
    return (
        <Box>
            <div ref={circleRef} id="thirdCircle"></div>
            {/* <ImageWithFade
                src="/images/profile-river5.jpg"
                alt="Dave Sorensen sitting on a rock"
                maxSize={800}
                filter={theme.palette.primary.overlay}
            /> */}
        </Box>
    );
};

export default ShrinkingImage;
