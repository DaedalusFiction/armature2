import { Box } from "@mui/material";
import useMousePosition from "../../hooks/useMousePosition";
import MouseLines from "./MouseLines";
import theme from "../../styles/themes/theme";

const DotRing = () => {
    const { x, y } = useMousePosition();
    return (
        <>
            <MouseLines x={x} y={y} />
            <div
                style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    border: "10px solid " + theme.palette.background.default,
                }}
                className={"ring"}
            >
                {/* position of y is {y / window.innerHeight} */}
            </div>
            <div
                className={"dot"}
                style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    backgroundColor: theme.palette.primary.main,
                }}
            ></div>
        </>
    );
};

export default DotRing;
