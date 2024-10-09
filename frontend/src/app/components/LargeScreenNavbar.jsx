import React, { useState } from 'react';

import {

    CustomList,
    ListItem,
    NavBarBoxForLargeScreen,
} from '../style/Navbar.style.js';
/* MUI ICONS IMPORT */
import ListAltIcon from '@mui/icons-material/ListAlt';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import Link from 'next/link';
import { Box } from '@mui/material';

const LargeScreenNavbar = () => {
    const [activeItemId, setActiveItemId] = useState(null);

    const listInfo = [
        { id: 1, name: "All task", icon: ListAltIcon, link: "/" },
        { id: 2, name: "Completed task", icon: FactCheckIcon, link: "/completed-task" },
        { id: 3, name: "Pending task", icon: PendingActionsIcon, link: "/pending-task" },
        { id: 4, name: "Analytics", icon: InsertChartIcon, link: "/analysis" },
    ];

    const clickedItem = (id) => {
        console.log("clicked", id);
        setActiveItemId(id);
    };
    return (
        <NavBarBoxForLargeScreen>
            <Box className="top_Box">
                TASKIFY

            </Box>
            <CustomList>
                {listInfo.map((item) => (

                    <ListItem
                        key={item.id}
                        onClick={() => clickedItem(item.id)}
                        isActive={activeItemId === item.id}

                    >

                        <Link href={item.link}>
                            <item.icon className='icon' />
                            {item.name}
                        </Link>


                    </ListItem>
                ))}
            </CustomList>
            All @copyright 2024
        </NavBarBoxForLargeScreen>
    )
}

export default LargeScreenNavbar