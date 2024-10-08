"use client";
import React, { useState } from 'react';
import { NavBarBox, CustomList, ListItem } from '../style/Navbar.style'; // Adjust the import path as needed
/* MUI ICONS IMPORT */
import ListAltIcon from '@mui/icons-material/ListAlt';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import Link from 'next/link';
const Navbar = () => {
    const [activeItemId, setActiveItemId] = useState(null);

    const listInfo = [
        { id: 1, name: "All task", icon: ListAltIcon, link: "/" },
        { id: 2, name: "Completed task", icon: FactCheckIcon, link: "/completed-task" },
        { id: 3, name: "Pending task", icon: PendingActionsIcon, link: "#" },
        { id: 4, name: "Analytics", icon: InsertChartIcon, link: "#" },
    ];

    const clickedItem = (id) => {
        console.log("clicked", id);
        setActiveItemId(id);
    };

    return (
        <NavBarBox>
            "App name"
            <CustomList>
                {listInfo.map((item) => (

                    <ListItem
                        key={item.id}
                        onClick={() => clickedItem(item.id)}
                        isActive={activeItemId === item.id}
                    // className='font-edu'
                    >
                        {/* <div className="containers"> */}
                        <Link href={item.link}>
                            <item.icon className='icon' />
                            {item.name}
                        </Link>

                        {/* </div> */}
                    </ListItem>
                ))}
            </CustomList>
            All @copyright 2024
        </NavBarBox>
    );
};

export default Navbar;
