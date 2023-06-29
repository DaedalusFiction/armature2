import { createTheme } from "@mui/material/styles";

let theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            // main: "#DD4B1D", //Big Orange
            // main: "#ef369d", //magenta 2
            // // main: "#ef3688", //magenta 1
            // main: "#f9822e", //creamsicle
            // main: "#36ef61", //spring green
            // main: "#CE37F0", //phlox (yes that's real)
            // main: "#49BB71", //jade
            // main: "#FF472B", //reddish
            // main: "#673147", //plum
            // overlay: "rgba(103, 49, 71, 0.5)", //plum?
            // main: "#8A1F4A", //murrey
            main: "#FF472B", //coquelicot (orange)
            overlay: "rgba(255, 71, 43, 0)", //coquelicot

            // overlay: "rgba(206, 55, 240, 0.5)",
            // overlay: "rgba(138, 31, 74, 0.5)",
        },
        secondary: {
            main: "#0098d8", //burnt orange
        },
        background: {
            // default: "#fef9f7", //lightbeige
            // default: "#f7f4e1", //lightbeige
            default: "#F6F7EB", //ivory
            accent: "#ffeccd",
            dark: "#484041",
        },
        custom: {
            dark: "#1c1c1c",
            darkMuted: "#757575",
            light: "#fffceb",
            lightMuted: "#e6e6e6",
            accent: "#d61919",
        },
        text: {
            primary: "#272D2D",
            primaryMuted: "#757575",
            secondary: "#F6F8FF",
            secondaryMuted: "#cacaca",
        },
    },
    font: {
        // body: "Kumbh",
        body: "IBMPlex",
        title: "AvantGarde",
        // title: "Bebas",
    },
});

theme = createTheme(theme, {
    border: `1px solid ${theme.palette.custom.accent}`,
    custom: {
        spacing: {
            small: "1rem",
            medium: "3rem",
            large: "4rem",
            xl: "8rem",
        },
    },
    typography: {
        h1: {
            fontFamily: theme.font.title,
            color: theme.palette.custom.dark,
            color: theme.palette.background.default,
            // color: theme.palette.primary.off,

            fontSize: "clamp(3.5rem, 7.5vw, 9rem)",
        },
        h2: {
            color: theme.palette.custom.dark,
            fontSize: "clamp(3.5rem, 6vw, 9rem)",
            fontFamily: theme.font.title,
        },
        h3: {
            color: theme.palette.custom.dark,
            fontFamily: theme.font.title,
            fontSize: "2.75rem",
        },
        h4: {
            color: theme.palette.custom.dark,
            fontFamily: theme.font.title,
            fontSize: "clamp(2rem, 2.3vw, 7rem)",
            // fontWeight: "600",
        },
        h5: {
            fontFamily: theme.font.title,
            fontSize: "1.75rem",
        },
        h6: {
            fontFamily: theme.font.title,
            fontSize: "1.5rem",
            // fontSize: "2.25rem", //Satisfy
        },

        subtitle1: {
            fontFamily: theme.font.body,
            color: theme.palette.custom.dark,
            fontSize: "1.25rem",
        },
        subtitle2: {
            fontFamily: theme.font.body,
            fontSize: "1.25rem",
            color: theme.palette.custom.dark,
        },
        body1: {
            fontFamily: theme.font.body,
            color: theme.palette.custom.dark,
            fontSize: "1.15rem",
            lineHeight: "1.25em",
        },
        body2: {
            fontFamily: theme.font.body,

            color: theme.palette.primary.main,
            fontSize: "1.15rem",
            lineHeight: "1.25em",
        },
        caption: {
            color: theme.palette.custom.darkMuted,
            fontSize: ".75rem",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "0",
                    whiteSpace: "nowrap",
                    minWidth: "max-content",
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.secondary.main,
                    color: theme.palette.background.default,
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    // fontFamily: theme.typography.theme.accent,
                    fontSize: "1rem",
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    // fontFamily: theme.typography.theme.accent,
                    color: theme.palette.secondary.main,
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    // fontFamily: theme.typography.theme.accent,
                    padding: "0",
                },
            },
        },

        MuiList: {
            styleOverrides: {
                root: {
                    // fontFamily: theme.typography.theme.accent,
                    padding: "0",
                },
            },
        },
    },
});

export default theme;
