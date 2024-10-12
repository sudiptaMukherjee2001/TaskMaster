import React from 'react';
import {
    NavBarBox,

    NavBarBoxForMobile
} from '../style/Navbar.style'; // Adjust the import path as needed
/* mui icons */
import ListAltIcon from '@mui/icons-material/ListAlt';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import InsertChartIcon from '@mui/icons-material/InsertChart';

import Link from 'next/link';
import { useTheme } from '@mui/material/styles';

const Navbar = ({ islaptop }) => {
    const listInfo = [
        { id: 1, name: "All task", icon: ListAltIcon, link: "/" },
        { id: 2, name: "Completed task", icon: FactCheckIcon, link: "/completed-task" },
        { id: 3, name: "Pending task", icon: PendingActionsIcon, link: "/pending-task" },
        { id: 4, name: "Analytics", icon: InsertChartIcon, link: "/analysis" },
    ];
    return (

        <>
            <NavBarBoxForMobile islaptop={islaptop}>
                {listInfo.map((item) => (
                    <Link href={item.link}>
                        <item.icon className='icon' />
                    </Link>
                ))}

            </NavBarBoxForMobile >




        </>
    );
};

export default Navbar;
