import { createTheme } from "@mui/material/styles";

let theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#c35747", //reddish
            // off: "#f58d4d",
            off: "#8f4033",
        },
        secondary: {
            // main: "#dcd930", //yellowish
            main: "#e4b363", //yellowish
            main: "#FED766", //yellowish
            main: "#CAFE48", //yellowish
        },
        background: {
            default: "#272D2D", //dark
            accent: "#ffeccd",
            dark: "#ffeccd",
        },
        custom: {
            dark: "#272D2D",
            darkMuted: "#757575",
            light: "#F6F8FF",
            lightMuted: "#cacaca",
        },
        text: {
            // primary: "#272D2D", //dark
            primary: "#F6F8FF", //dark
            primaryMuted: "#757575",
            secondary: "#F6F8FF",
            secondaryMuted: "#cacaca",
        },
    },
    fonts: {
        primary: "LibreBaskerville",
        secondary: "Bostonia",
        body: "LibreBaskerville",
    },
});

theme = createTheme(theme, {
    border: `1px solid ${theme.palette.custom.dark}`,
    custom: {
        spacing: {
            paragraph: "2rem",
            quote: "3rem",
        },
    },
    typography: {
        h1: {
            // fontFamily: "Raleway",
            // fontFamily: theme.fonts.secondary,
            fontFamily: theme.fonts.secondary,
            color: theme.palette.custom.primary,
            // color: theme.palette.primary.off,
            fontWeight: "400",
            // lineHeight: ".85em",
            fontSize: "3.5rem",
            letterSpacing: ".025em",
        },
        h2: {
            color: theme.palette.custom.primary,
            fontFamily: theme.fonts.primary,
            fontWeight: "300",
            // color: darkTheme.palette.custom.dark,
            fontSize: "clamp(2.5rem, 2vw, 10rem)",
            letterSpacing: ".025em",
        },
        h3: {
            color: theme.palette.custom.primary,
            fontFamily: theme.fonts.secondary,
            letterSpacing: ".025em",
            fontSize: "1.75rem",
        },
        h4: {
            color: theme.palette.custom.light,
            fontFamily: theme.fonts.primary,
            fontSize: "1rem",
            fontWeight: "400",
            lineHeight: "1.75rem",
            // color: darkTheme.palette.custom.dark,
        },
        h5: {
            // color: theme.palette.custom.primary,
            fontFamily: theme.fonts.primary,
            fontSize: "1rem",
            fontWeight: "600",
            // color: darkTheme.palette.custom.dark,
        },
        h6: {
            fontWeight: "500",
            fontSize: "1rem",
            fontFamily: "EB Garamond Italic",
            // fontFamily: theme.fonts.secondary,
        },

        subtitle1: {
            fontFamily: "Raleway",
            fontWeight: "400",
            color: theme.palette.custom.primaryMuted,
            fontSize: "1.25rem",
        },
        subtitle2: {
            fontFamily: "Raleway",
            fontWeight: "400",
            fontSize: "1.25rem",
            color: theme.palette.custom.primaryMuted,
        },
        body1: {
            fontFamily: theme.fonts.body,
            fontWeight: "400",
            fontSize: "1rem",
            // lineHeight: "1.25rem",
            color: theme.palette.custom.light,
            // fontFamily: darkTheme.typography.darkTheme.main,
        },
        body2: {
            fontSize: "1.15rem",
            fontFamily: theme.fonts.body,
            // lineHeight: "1.5rem",
            color: theme.palette.custom.lightMuted,
            // fontFamily: darkTheme.typography.darkTheme.decorative,
        },
        caption: {
            color: theme.palette.custom.darkMuted,
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
                    backgroundColor: theme.palette.custom.dark,
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
                    listStyleType: "disc",
                    display: "list-item",
                    marginLeft: "2rem",
                },
            },
        },
    },
});

export default theme;
