import React, { useEffect, useRef, useState } from "react";

const TextHighlight = ({ children }) => {
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
            ref.current.classList.add("bg-text");
        } else {
            ref.current.classList.remove("bg-text");
        }
    }, [isIntersecting]);
    return <span ref={ref}>{children}</span>;
};

export default TextHighlight;
