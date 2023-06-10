import { Box } from "@mui/system";
import React from "react";
import Meta from "../home/Meta";

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
