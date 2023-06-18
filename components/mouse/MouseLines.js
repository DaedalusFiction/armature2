import React, { useEffect, useState } from "react";
import theme from "../../styles/themes/theme";

const lines = [
    { top: "20%", left: "6%", origin: "left", rotation: -35 },
    { top: "20%", left: "22%", origin: "left", rotation: 0 },
    { top: "20%", left: "41%", origin: "left", rotation: -180 },
];

const MouseLines = ({ x, y }) => {
    const [rotation, setRotation] = useState(1);
    const [windowWidth, setWindowWidth] = useState(1);
    const [windowHeight, setWindowHeight] = useState(1);
    useEffect(() => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
    }, []);
    return (
        <>
            {lines.map((line, index) => {
                const rotation = 7;
                return (
                    <div
                        key={index}
                        style={{
                            content: "''",
                            height: "4px",
                            width: "1500px",
                            transition: "100ms",
                            left: `${x - 4}px`,
                            top: `${y + 2}px`,

                            transform:
                                line.rotation < -90
                                    ? `rotate(${
                                          line.rotation +
                                          (y / windowHeight) * 50
                                      }deg)`
                                    : `rotate(${
                                          line.rotation -
                                          (y / windowHeight) * 50
                                      }deg)`,
                            transformOrigin: "0 0",
                            position: "fixed",
                            // transformOrigin: line.origin,
                            backgroundColor: theme.palette.background.default,
                            // backgroundColor:
                            //     theme.palette.background.default,
                            zIndex: "99",
                        }}
                    />
                );
            })}
        </>
    );
};

export default MouseLines;
