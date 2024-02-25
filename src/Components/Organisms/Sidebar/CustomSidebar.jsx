import React, { useState } from 'react';
import CustomButton from '../../Atoms/CustomButton';
import { CiMenuBurger } from "react-icons/ci";
import NavLinks from '../../Molecules/SidebarMolecules/NavLinks';

const CustomSidebar = () => {

    return (
        <>
            <div className="sidebar">
                    <NavLinks />
            </div>
        </>
    )
}

export default CustomSidebar;

