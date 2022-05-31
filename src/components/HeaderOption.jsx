import { Avatar } from '@mui/material';
import React from 'react'
import styled from 'styled-components'




function HeaderOption({avatar,Icon,title,onclick}) {
  return (
    <HeaderOpStyle onClick={onclick}>
       {Icon && <Icon className="headerOption-icon" />}
       {avatar && <Avatar src={avatar} className="headerOption-icon"/>}
       <h3 className='headerOption-title'>{title}</h3>
    </HeaderOpStyle>
  )
}


export default HeaderOption;



const HeaderOpStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 30px;
    color: gray;
    cursor: pointer;
    transition:all 0.3s ease;

:hover{
    color:black;
    transform: scale(1.1);
}

.headerOption-icon{
    object-fit: contain;
    height: 25px !important;
    width: 25px !important;
}

.headerOption-title{
    font-weight: 400;
}
`
