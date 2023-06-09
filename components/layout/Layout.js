import { Box } from "@mui/system";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <Box sx={{ position: "relative" }}>
            <Header />
            {children}
            <Footer />
        </Box>
    );
};

export default Layout;
