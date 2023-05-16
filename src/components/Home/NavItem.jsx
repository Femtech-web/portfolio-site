import React from "react";

const NavItem = ({title, size, animation }) => {
    return <li className={`${size} ${animation} text-2xl md:my-0 md:text-xl gt 
    cursor-pointer px-4 hover:text-3xl hover:md:text-2xl transition-all`}>{title}</li>
}

export default NavItem