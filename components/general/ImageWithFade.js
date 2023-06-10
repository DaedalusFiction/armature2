import { Box } from "@mui/system";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "@mui/material";

const ImageWithFade = ({ maxSize, src, alt, filter }) => {
    const [ratio, setRatio] = useState(1 / 1); // default to 16:9
    const [fade, setFade] = useState(false);

    const handleLoad = (naturalWidth, naturalHeight) => {
        setRatio(naturalWidth / naturalHeight);
        setFade(true);
    };

    return (
        <Fade in={fade}>
            <div style={{ position: "relative", fontSize: "0" }}>
                <Image
                    src={src}
                    // blurDataURL={blur ? blur : image}
                    // placeholder="blur"
                    //has to be unoptimized to work with firebase storage, apparently
                    unoptimized
                    width={maxSize}
                    height={maxSize / ratio}
                    onLoadingComplete={({ naturalWidth, naturalHeight }) =>
                        handleLoad(naturalWidth, naturalHeight)
                    }
                    objectFit="cover"
                    alt={alt}
                />
                {filter && (
                    <Box
                        sx={{
                            position: "absolute",
                            backgroundColor: filter,
                            top: "0",
                            left: "0",
                            height: "calc(100% - .85rem)",
                            width: "100%",
                            zIndex: "5",
                        }}
                    />
                )}
            </div>
        </Fade>
    );
};

export default ImageWithFade;
