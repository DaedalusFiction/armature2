import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

const TextFadeIn = ({ children }) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            { rootMargin: "0px" }
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isIntersecting) {
            ref.current.classList.add("fade-and-slide-up");
        } else {
            ref.current.classList.remove("fade-and-slide-up");
        }
    }, [isIntersecting]);
    return <Box ref={ref}>{children}</Box>;
};

export default TextFadeIn;
