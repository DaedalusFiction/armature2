import React, { useEffect, useState } from "react";
import theme from "../../styles/themes/theme";

const lines = [
    { top: "20%", left: "6%", origin: "left", rotation: -85 },
    { top: "20%", left: "22%", origin: "left", rotation: -40 },
    { top: "20%", left: "41%", origin: "left", rotation: -190 },
];

const MouseLines = ({ x, y }) => {
    const [rotation, setRotation] = useState(0);
    return (
        <>
            {lines.map((line, index) => {
                return (
                    <div
                        key={index}
                        style={{
                            content: "''",
                            height: "4px",
                            width: "1500px",
                            left: `${x}px`,
                            top: `${y}px`,

                            transform: `translateX(-3px) rotate(clamp(-160deg, ${
                                (line.rotation * ((x + y) / 2)) /
                                window.innerHeight
                            }deg, -25deg ))`,
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
