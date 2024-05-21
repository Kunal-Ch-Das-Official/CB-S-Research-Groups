import React, { Suspense, memo, useCallback, useEffect, useMemo, useState } from 'react';
import NavStyle from '../navbar/Header.module.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import crossIcon from '../../../assets/icon/cross-icon.svg';
import BrandLogo from '../../../assets/images/brandlogo/Research-Group-Logo.webp';
import Navdropdown from './navdropdown/Navdropdown';
import Navmoreitem from './navmoreitem/Navmoreitem';
import SmallSkeleton from '../skeleton/SmallSkeleton';



const Header = () => {
 const [expanded, setExpanded] = useState(false);

  useEffect(()=>{
    if(window.innerWidth > 991){
      setExpanded(false);
    }
  })
    const handleToggle = useCallback(()=>{
      setExpanded((prevExpanded) => !prevExpanded);
    }, [])
    

    const menuData =  useMemo(() => [
        {   
            id: 1,
            path: '/',
            name: 'Home'
        },
        {     
            id: 2,
            path: '/professor',
            name: 'Professor'
        },
        {
            id: 3,
            path: '/research',
            name: 'Research'
        },
        {
            id: 4,
            path: '/publication',
            name: 'Publication'
        }
    ],[]);

    return (
      
        <Navbar sticky="top" className={NavStyle.navbar} expand='lg'expanded={expanded}>
        <Container className={NavStyle.Container}>
          <Navbar.Brand className={NavStyle.brand}>
          <Suspense fallback = {<SmallSkeleton/>}>
            <img rel="preload" src={BrandLogo} width={80} height={50}
             alt="CB'S Research Group" />
            </Suspense> 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' className={NavStyle.togglebtn}
          onClick={handleToggle}>
          {expanded && <img rel="preload" src={crossIcon} className={NavStyle.replacement}/>}
          </Navbar.Toggle>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
           
          {
            menuData.map((item) => (
             <NavLink onClick={handleToggle} id={item.id} to={item.path} key={item.name}>
                    <div className={`${({isActive}) => isActive && 'active'}`}
                     id={NavStyle.listItems}>{item.name}</div>
                </NavLink> 
            ))
          }


<Navdropdown firsttitle={'Group'} handleToggleClose={handleToggle}
          firstlinkto={'Members'} firstlinkname={'Current Members'}
          secondlinkto={'Groupnews'} secondlinkname={'Group News'} 
          thirdlinkto={'Alumni'} thirdlinkname={'Alumni'}
          />
         
            
<Navmoreitem moretitle={'More Info'} linkto={'Instument'} 
linkname={'Lab Instuments'} handleMoreToggleClose={handleToggle}
linktosecond={'Contact'} linktosecondname={'Contact Us'}/>  
</Nav>
</Navbar.Collapse>
</Container>
 </Navbar>
    );
}

export default memo(Header);
