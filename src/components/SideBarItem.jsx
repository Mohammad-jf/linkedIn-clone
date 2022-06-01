import React from 'react'
import styled from 'styled-components';

const SideBarItem = ({topic}) => {
  return (
    <SidebarItemStyle>
      <p className='sidebar-hash'>#</p>
      <p>{topic}</p>
    </SidebarItemStyle>
  )
}

export default SideBarItem

const SidebarItemStyle = styled.div`
  .sidebar-hash{
    margin-right: 5px;
    color:#0a66c2
  }
  
  display: flex;
  font-size: 12px;
  color: gray;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 5px;
  padding: 5px;
  align-items: center;

  :hover{
    background-color: whitesmoke;
    border-radius: 10px;
    cursor: pointer;
    color: black;
    }

`