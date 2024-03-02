import React, { useState, useEffect } from 'react';
import NavLinks from '../../Molecules/SidebarMolecules/NavLinks';

const CustomSidebar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`sidebar ${scrolled ? 'scrolled' : ''}`}>
                <NavLinks />
            </div>
        </>
    );
}

export default CustomSidebar;

