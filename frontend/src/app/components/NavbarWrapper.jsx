// components/NavbarWrapper.js
"use client"; // Required to use client-side hooks

import { Grid } from "@mui/material";
import Navbar from "./Navbar.jsx";
import useResponsive from "@/lib/allMediaQuery.js";

export default function NavbarWrapper() {
    const { isMobile } = useResponsive();
    return (
        <>
            {/* Render different Navbars or handle visibility based on screen size */}
            {isMobile ? (
                <Navbar mobile /> /*  Optional prop to differentiate for mobile */
            ) : (
                <Navbar desktop />
            )}
        </>
    );
}
