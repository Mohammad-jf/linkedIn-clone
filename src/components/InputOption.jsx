import React from 'react'
import styled from 'styled-components'


const InputOption = ({title,Icon,color}) => {
  return (
    <OptionStyle>
       <Icon style={{color:color}}/>
       <h4>{title}</h4>
    </OptionStyle>
  )
}

export default InputOption;


const  OptionStyle = styled.div`
  display:flex;
  align-items: center;
  margin-top: 15px;
  cursor: pointer;
  color: #333;
  padding: 10px;
  transition: all 0.3s ease;

  :hover{
    background-color: whitesmoke;
    border-radius: 5px;
    transform:scale(1.1);
  }

  h4{
    margin-left: 5px;
  }

`