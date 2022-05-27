import React from 'react'
import styled from 'styled-components';
import profile from '../images/Screenshot.png'
// icons
import { Avatar } from '@mui/material';


  

function SideBar() {
  return (
    <Sidebar>
        <div className="sidebar-top">
            <img src="" alt="" />
            <Avatar src={profile}/>
            <h2>Mohammad jalifathi</h2>
            <h4>FrontEnd Developer</h4>
        </div>

        <div className="sidebar-stats">
            <div className="sidebar-stat">
                <p>who viewed you</p>
                <p className="sidebar-statNumber">3,534</p>
            </div>

            <div className="sidebar-stat">
                <p>Views on post</p>
                <p className="sidebar-statNumber">3,230</p>
            </div>
        </div>

        <div className="sidebar-buttom">
            <p>Recent</p>
            
        </div>
    </Sidebar>
  )
}

export default SideBar


const Sidebar = styled.div`
    
`