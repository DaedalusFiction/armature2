import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import PageHeader from "../layout/PageHeader";
const PageLayout = ({ name, children }) => {
    return (
        <Box sx={{ padding: "0 0 6rem 0", position: "relative" }}>
            <PageHeader />
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundAttachment: { xs: "initial", md: "fixed" },
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    gap: "1rem",
                    padding: "8rem 0 2rem 0",
                }}
            >
                <Typography
                    // className="header-fade-in"
                    variant="h2"
                    sx={{ textAlign: "center" }}
                >
                    {name}
                </Typography>
            </Box>
            {children}
        </Box>
    );
};

export default PageLayout;
