import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import theme from "../../styles/themes/theme";
import Meta from "../home/Meta";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <Box sx={{ position: "relative", zIndex: "0" }}>
            <Meta />
            {/* <Navbar /> */}
            {/* <Header /> */}

            {children}

            {/* <Footer /> */}
        </Box>
    );
};

export default Layout;
