import React from 'react';
import DropdownStyle from '../navdropdown/Navdropdown.module.css';
import { NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Navdropdown = ({firsttitle, firstlinkto, firstlinkname,
     secondlinkto, secondlinkname, thirdlinkto, thirdlinkname, handleToggleClose}) => {
       
    return (
        <>
 <NavDropdown 
 id={DropdownStyle.dropdownMenu} title={firsttitle}>
<NavDropdown.Item as="div" onClick={handleToggleClose}>
<NavLink to={firstlinkto} className={DropdownStyle.dropItems}>{firstlinkname}</NavLink>
</NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item as="div" onClick={handleToggleClose}>
<NavLink to={secondlinkto} className={DropdownStyle.dropItems} >{secondlinkname}</NavLink>
</NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item as="div" onClick={handleToggleClose}>
<NavLink to={thirdlinkto} className={DropdownStyle.dropItems}>{thirdlinkname}</NavLink>
</NavDropdown.Item>
</NavDropdown>
        </>
    );
}

export default Navdropdown;
