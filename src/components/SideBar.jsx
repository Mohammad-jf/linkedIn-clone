import React from 'react'
import styled from 'styled-components';
import profile from '../images/Screenshot.png'
// icons
import { Avatar } from '@mui/material';


  

function SideBar() {
  return (
    <Sidebar>
        <div className="sidebar-top">
            <div className="background"></div>
            <Avatar src={profile} className='sidebar-avatar'/>
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
position: sticky;
top: 80px;
flex: 0.2;
border-radius:10px;
text-align:center;
height: fit-content;

/* sidebar top */
.sidebar-top{
    display: flex;
    flex-direction: column;
    align-items: center;
    border:1px solid lightgray;
    border-bottom: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: white;
    padding-bottom: 10px;

  .background{
      background: rgb(135,185,236);
      background: linear-gradient(327deg, rgba(135,185,236,1) 11%, rgba(221,80,244,1) 39%, rgba(255,97,144,1) 63%, rgba(238,251,5,1) 98%);
      height: 60px;
      width: 100%;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
      margin-bottom: -15px;
    }

    .sidebar-avatar{
        margin-bottom:10px;
    
    }
}


/* sidebar stats */
.sidebar-stats{
    padding: 10px;

 .sidebar-stat{
   margin-top:10px;
   display: flex;
   justify-content: space-between;

  p{
    color:gray;
    font-size:13px;
    font-weight: 600;
    }

   .sidebar-statNumber{
        color:#0a66c2 !important;
        font-weight: bold;
    }
  }
}



    
`