// components/NavbarWrapper.js
"use client"; // Required to use client-side hooks

import { Grid } from "@mui/material";
import Navbar from "./Navbar.jsx";
import useResponsive from "@/lib/allMediaQuery.js";
import LargeScreenNavbar from "./LargeScreenNavbar.jsx";

export default function NavbarWrapper() {
    const { isMobile, isSmallDevice, islaptop } = useResponsive();
    console.log('====================================');
    console.log("islaptop viewport==>", islaptop);
    console.log('====================================');

    return (
        <>
            {/* Render different Navbars or handle visibility based on screen size */}
            {
                (!islaptop || islaptop)
                &&
                <LargeScreenNavbar />
            }
            {(!isSmallDevice || isSmallDevice) && <Navbar />}
        </>
    );
}
