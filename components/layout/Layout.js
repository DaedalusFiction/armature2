import { Box } from "@mui/system";
import React from "react";
import Meta from "../home/Meta";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <Box>
            <Meta />
            {/* <Navbar /> */}
            {/* <Header /> */}

            {children}

            <Footer />
        </Box>
    );
};

export default Layout;
