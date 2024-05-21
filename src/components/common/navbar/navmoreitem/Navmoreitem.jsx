import React from 'react';
import Navmoreitemstyle from '../navmoreitem/Navmoreitem.module.css';
import { NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Navmoreitem = ({moretitle, linkto, linkname, linktosecond, linktosecondname, handleMoreToggleClose }) => {
    return (
        <NavDropdown className = {`['dropdown_menu] ${Navmoreitemstyle.dropdownMenu}`} title={moretitle}>
        <NavDropdown.Item as='div' onClick={handleMoreToggleClose}>
        <NavLink to={linkto} className={Navmoreitemstyle.dropItems}>{linkname}</NavLink>
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as='div' onClick={handleMoreToggleClose}>
        <NavLink to={linktosecond} className={Navmoreitemstyle.dropItems}>{linktosecondname}</NavLink>
        </NavDropdown.Item>
        </NavDropdown>
    );
}

export default Navmoreitem;
