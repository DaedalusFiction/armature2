import { Box, Divider, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

import Meta from "../components/home/Meta";
import theme from "../styles/themes/theme";
import Link from "next/link";
import NativeImage from "../components/general/NativeImage";
import { hero } from "../siteInfo";

export default function Home() {
    return (
        <Box>
            <Meta />
            <Box
                sx={{
                    backgroundImage:
                        "linear-gradient(rgba(39, 45, 45, 0.65), rgba(39, 45, 45, 1)), url(/images/collage-background.webp)",
                    // "linear-gradient(rgba(233, 214, 214, 0.8), rgba(233, 224, 214, 0.8)), url(/images/collage-background.webp)",
                    backgroundSize: "cover",
                    // backgroundAttachment: "fixed",
                    paddingTop: "5rem",
                    position: "relative",
                    // flexDirection: "column",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "end",
                        gap: "1.5rem",
                    }}
                >
                    {/* <NativeImage src={hero.image.src} maxSize={100} /> */}
                    {/* <Box
                        sx={{
                            padding: ".5em",
                            border:
                                "1px solid " + theme.palette.custom.lightMuted,
                        }}
                    >
                        <Typography
                            variant="h1"
                            component="p"
                            sx={{
                                fontSize: "1.25rem",
                                textAlign: "center",
                                color: theme.palette.custom.light,
                            }}
                        >
                            Est.
                        </Typography>
                        <Typography
                            variant="h1"
                            component="p"
                            sx={{
                                fontSize: "1.25rem",
                                textAlign: "center",
                                color: theme.palette.custom.light,
                            }}
                        >
                            2023
                        </Typography>
                    </Box> */}
                    {/* <Box sx={{ transform: "scaleX(-1)" }}>
                        <NativeImage src={hero.image.src} maxSize={100} />
                    </Box> */}
                </Box>
                <Container maxWidth="xl" disableGutters>
                    <Grid
                        container
                        spacing={0}
                        sx={{
                            marginTop: "3rem",
                        }}
                        wrap="wrap-reverse"
                    >
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    padding: "4rem 0",
                                    gap: ".25rem",
                                }}
                            >
                                <Link href="/publications/poetry">
                                    <Typography
                                        variant="h2"
                                        className="link"
                                        sx={{
                                            textAlign: "center",
                                        }}
                                    >
                                        poetry
                                    </Typography>
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Link href="/publications/poetry">
                                <Box
                                    sx={{
                                        backgroundImage:
                                            "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(/images/poetryHeader.webp)",
                                        backgroundSize: "cover",
                                        padding: "12rem 0",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer",
                                        transition: "300ms",
                                        "&:hover": {
                                            opacity: "60%",
                                        },
                                    }}
                                ></Box>
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={6}>
                            <Link href="/publications/letters">
                                <Box
                                    sx={{
                                        backgroundImage:
                                            "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(/images/lettersHeader.webp)",
                                        backgroundSize: "cover",

                                        padding: "12rem 0",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer",
                                        transition: "300ms",
                                        "&:hover": {
                                            opacity: "60%",
                                        },
                                    }}
                                ></Box>
                            </Link>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    height: "100%",
                                    // border:
                                    //     "1px solid " + theme.palette.custom.lightMuted,
                                    padding: "4rem 0",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    gap: ".25rem",
                                }}
                            >
                                <Link href="/publications/letters">
                                    <Typography
                                        variant="h2"
                                        className="link"
                                        sx={{
                                            textAlign: "center",
                                        }}
                                    >
                                        letters
                                    </Typography>
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} wrap="wrap-reverse">
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    height: "100%",
                                    // border:
                                    //     "1px solid " + theme.palette.custom.lightMuted,
                                    padding: "4rem 0",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    gap: ".25rem",
                                }}
                            >
                                <Link href="/publications/genrequeer">
                                    <Typography
                                        variant="h2"
                                        className="link"
                                        sx={{
                                            textAlign: "center",
                                        }}
                                    >
                                        genrequeer
                                    </Typography>
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Link href="/publications/genrequeer">
                                <Box
                                    sx={{
                                        backgroundImage:
                                            "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(/images/genrequeerHeader.webp)",
                                        backgroundSize: "cover",
                                        padding: "12rem 0",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer",
                                        transition: "300ms",
                                        "&:hover": {
                                            opacity: "60%",
                                        },
                                    }}
                                ></Box>
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={6}>
                            <Link href="/publications/mixedmedia">
                                <Box
                                    sx={{
                                        backgroundImage:
                                            "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(/images/creepyChildren.webp)",
                                        backgroundSize: "cover",

                                        padding: "12rem 0",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer",
                                        transition: "300ms",
                                        "&:hover": {
                                            opacity: "60%",
                                        },
                                    }}
                                ></Box>
                            </Link>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    height: "100%",
                                    // border:
                                    //     "1px solid " + theme.palette.custom.lightMuted,
                                    padding: "4rem 0",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    gap: ".25rem",
                                }}
                            >
                                <Link href="/publications/mixedmedia">
                                    <Typography
                                        variant="h2"
                                        className="link"
                                        sx={{
                                            textAlign: "center",
                                        }}
                                    >
                                        mixed media
                                    </Typography>
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}

// export const getServerSideProps = async (context) => {
//     const publicationsRef = collection(db, "publications");

//     const miscQuery = query(
//         publicationsRef,
//         where("categories", "array-contains", "misc"),
//         orderBy("dateUploaded", "desc"),
//         limit(1)
//     );
//     const outandaboutQuery = query(
//         collection(db, "outandabout"),
//         orderBy("dateUploaded", "desc"),
//         limit(2)
//     );
//     const adviceQuery = query(
//         publicationsRef,
//         where("categories", "array-contains", "advice"),

//         orderBy("dateUploaded", "desc"),
//         limit(5)
//     );
//     const bestofQuery = query(
//         publicationsRef,
//         where("categories", "array-contains", "bestof"),

//         orderBy("dateUploaded", "desc"),
//         limit(4)
//     );
//     const opinionsQuery = query(
//         publicationsRef,
//         where("categories", "array-contains", "opinions"),

//         orderBy("dateUploaded", "desc"),
//         limit(2)
//     );

//     const miscSnapshot = await getDocs(miscQuery);
//     const outandaboutSnapshot = await getDocs(outandaboutQuery);
//     const adviceSnapshot = await getDocs(adviceQuery);
//     const bestofSnapshot = await getDocs(bestofQuery);
//     const opinionsSnapshot = await getDocs(opinionsQuery);
//     let misc = [];
//     miscSnapshot.docs.forEach((doc, index) => {
//         misc = [...misc, doc.data()];
//     });
//     let outandabout = [];
//     outandaboutSnapshot.docs.forEach((doc, index) => {
//         outandabout = [...outandabout, doc.data()];
//     });
//     let advice = [];
//     adviceSnapshot.docs.forEach((doc, index) => {
//         advice = [...advice, doc.data()];
//     });
//     let bestof = [];
//     bestofSnapshot.docs.forEach((doc, index) => {
//         bestof = [...bestof, doc.data()];
//     });
//     let opinions = [];
//     opinionsSnapshot.docs.forEach((doc, index) => {
//         opinions = [...opinions, doc.data()];
//     });

//     return {
//         props: {
//             misc,
//             outandabout,
//             advice,
//             bestof,
//             opinions,
//         },
//     };
// };
