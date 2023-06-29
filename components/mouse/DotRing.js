import { Box } from "@mui/material";
import useMousePosition from "../../hooks/useMousePosition";
import MouseLines from "./MouseLines";
import theme from "../../styles/themes/theme";
import { useEffect, useState } from "react";

const DotRing = () => {
    const { x, y } = useMousePosition();
    const [colors, setColors] = useState({
        lines: theme.palette.primary.main,
        innerDot: theme.palette.background.default,
    });
    const handleScroll = () => {
        const position = window.scrollY;
        if (position > 2400 && position < 3800) {
            setColors({
                lines: theme.palette.background.default,
                innerDot: theme.palette.primary.main,
            });
        } else {
            setColors({
                lines: theme.palette.primary.main,
                innerDot: theme.palette.background.default,
            });
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            {/* <MouseLines x={x} y={y} colors={colors} /> */}
            <div
                className={"ring"}
                style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    // border: "10px solid " + colors.lines,
                }}
            >
                {/* position of y is {y / window.innerHeight} */}
            </div>
            <div
                className={"dot"}
                style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    backgroundColor: colors.innerDot,
                    transition: "background-color 300ms",
                }}
            ></div>
        </>
    );
};

export default DotRing;
