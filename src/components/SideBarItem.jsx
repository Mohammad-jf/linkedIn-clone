import React from 'react'
import styled from 'styled-components';

const SideBarItem = ({topic}) => {
  return (
    <SidebarItemStyle>
      <span className='sidebar-hash'>#</span>
      <p>{topic}</p>
  </SidebarItemStyle>
  )
}

export default SideBarItem

const SidebarItemStyle = styled.div`
  display: flex;
  font-size: 13px;
  color: gray;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 5px;
  padding: 5px;

  :hover{
    background-color: whitesmoke;
    border-radius: 10px;
    cursor: pointer;
    color: black;
    }

    .sidebar-hash{
      margin-right: 5px;
    }
`