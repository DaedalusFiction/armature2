import { Box } from "@mui/material";
import theme from "../../styles/themes/theme";

const NavBarLinkAnimation = ({ children, page }) => {
    return (
        <Box
            sx={{
                height: "1.75rem",
                overflow: "hidden",
            }}
        >
            <Box
                sx={{
                    transition: "500ms",
                    animationTimingFunction: "ease-in-out",
                    animationDelay: "1000ms",
                    "&:hover": {
                        transform: "translateY(-25px)",
                    },
                    "& *": {
                        color: theme.palette.custom.light + " !important",
                        cursor: "pointer",
                    },
                }}
            >
                {children}
            </Box>
        </Box>
    );
};

export default NavBarLinkAnimation;
