import React from 'react'
import styled from 'styled-components'
// components
import HeaderOption from './HeaderOption';
// icons
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import profile from '../images/Screenshot.png'
  
function Header() {
  return (
    <HeaderStyle>

       <div className="header-left">

            <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" alt="LinkedIn" />

            <div className="header-search">
                 <SearchIcon/>
                 <input type="text" />
            </div>
            
       </div>



       <div className="header-right">

         <HeaderOption title='Home' Icon={HomeIcon}/>
         <HeaderOption title='My NetWork' Icon={SupervisorAccountIcon}/>
         <HeaderOption title='Jobs' Icon={ BusinessCenterIcon}/>
         <HeaderOption title='Messaging' Icon={ChatIcon}/>
         <HeaderOption title='Notifications' Icon={NotificationsIcon}/>
         <HeaderOption avatar={profile} title='Me'/>

       </div>

    </HeaderStyle>
  )
}



export default Header


const HeaderStyle = styled.div`

position: sticky;
top: 0;
height: 70px;
width: 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
border-bottom: 0.1px solid lightgray;
z-index: 10;

.header-left{
display: flex;
align-items: center;

  img{
    object-fit: contain;
    width:40px;
    height:40px;
    margin-right: 12px;
  }

  .header-search{
    padding: 20px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    height: 22px;
    color: gray;
    background-color:#eef3f8;

    input{
      outline: none;
      border: none;
      background: none;
    }
  }
}

.header-right{
  display: flex; 
}

`