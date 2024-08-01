"use client";
import React, { useState } from 'react';
import { NavBarBox, CustomList, ListItem } from '../style/Navbar.style'; // Adjust the import path as needed
/* MUI ICONS IMPORT */
import ListAltIcon from '@mui/icons-material/ListAlt';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import InsertChartIcon from '@mui/icons-material/InsertChart';
const Navbar = () => {
    const [activeItemId, setActiveItemId] = useState(null);

    const listInfo = [
        { id: 1, name: "All task", icon: ListAltIcon },
        { id: 2, name: "Completed task", icon: FactCheckIcon },
        { id: 3, name: "Pending task", icon: PendingActionsIcon },
        { id: 4, name: "Analytics", icon: InsertChartIcon },
    ];

    const clickedItem = (id) => {
        console.log(id);
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
                        <a href="#">
                            <item.icon className='icon' />
                            {item.name}
                        </a>

                        {/* </div> */}
                    </ListItem>
                ))}
            </CustomList>
            All @copyright 2024
        </NavBarBox>
    );
};

export default Navbar;
