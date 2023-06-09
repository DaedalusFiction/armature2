import { Fade, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useState } from "react";
import { useEffect } from "react";
import theme from "../../styles/themes/theme";
import NavMenu from "./NavMenu";
import Link from "next/link";
import HeaderLines from "../animations/HeaderLines";

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(66);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
        // console.log(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        setScrollPosition(window.pageYOffset);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Box
            sx={{
                position: "fixed",
                top: "0",
                left: "0",
                zIndex: "100",
                width: "100%",
                padding: ".75rem 0",
                transition: "1000ms",
                // boxShadow:
                //     scrollPosition > 65
                //         ? "0px 5px 5px rgba(0, 0, 0, 0.2)"
                //         : "transparent",
                backgroundColor:
                    scrollPosition > 67
                        ? theme.palette.primary.main
                        : "transparent",
            }}
        >
            <Container maxWidth="xl">
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        transition: "1650ms",
                        transform:
                            scrollPosition > 65
                                ? "translateY(0) rotate(0)"
                                : "translateY(35vh) rotate(-25deg)",
                    }}
                >
                    <Box>
                        <Box sx={{ position: "relative" }}>
                            <Box
                                sx={{
                                    transition: "1650ms",
                                    opacity: scrollPosition > 65 ? "0" : "100%",
                                }}
                            >
                                <HeaderLines />
                            </Box>
                            <Typography
                                variant="h1"
                                sx={{
                                    color: theme.palette.background.default,
                                    transition: "1650ms",
                                    paddingTop: "4px",
                                    fontSize: {
                                        xs:
                                            scrollPosition > 450
                                                ? "2.5rem"
                                                : "4.5rem",
                                        md:
                                            scrollPosition > 450
                                                ? "3rem"
                                                : "12rem",
                                    },
                                }}
                            >
                                <Link href="/">ARMATURE</Link>
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            position: "absolute",

                            top: "0",
                            right: "0",
                        }}
                    >
                        <Fade in={scrollPosition > 650}>
                            <div>
                                <NavMenu />
                            </div>
                        </Fade>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Header;

// function buildThresholdList() {
//     let thresholds = [];
//     let numSteps = 20;

//     for (let i = 1.0; i <= numSteps; i++) {
//         let ratio = i / numSteps;
//         thresholds.push(ratio);
//     }

//     thresholds.push(0);
//     return thresholds;
// }
// const [titleAngle, setTitleAngle] = useState(0);
// const [prevRatio, setPrevRatio] = useState(0.0);
// let increasingColor = "rgba(40, 40, 190, ratio)";
// let decreasingColor = "rgba(190, 40, 40, ratio)";
// const titleRef = useRef(null);
// useEffect(() => {
//     let observer = new IntersectionObserver(rotateTitle, options);
//     let options = {
//         // root: document.querySelector("#scrollArea"),
//         rootMargin: "0px",
//         thresholds: buildThresholdList(),
//     };
//     const setObservation = () => {
//         observer.observe(titleRef.current);
//     };
//     setObservation();
//     return observer.unobserve(titleRef.current);
// }, []);
//old version
{
    /* <Box sx={{ display: "flex", justifyContent: "center" }}>
    <Box
    //hacky shit to animate scroll effect
    sx={{
        transform: `rotate(clamp(-27deg, calc(-27deg * ${
                -scrollPosition / 365
            } - 27deg), 0deg)) translateY(clamp(0rem, calc(15rem * ${
                -scrollPosition / 365
            } + 15rem) , 15rem ))`,
            
            position: "relative",
            outline: "2px solid white",
            width: "fit-content",
        }}
        >
        <Box sx={{ position: "fixed", top: "0", left: "0" }}></Box>
        <Typography variant="h1" sx={{ color: "#ee8012" }}>
            ARMATURE
        </Typography>
    </Box>
</Box>; */
}
