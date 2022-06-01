import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';




const NewsArticle = ({heading,subtitle}) => {
  return (
    <NewsArticleStyle>
        <div className="widget-article-left">
            <FiberManualRecordIcon/>
        </div>


        <div className="widget-article-right">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    </NewsArticleStyle>
  )
}

export default NewsArticle



const NewsArticleStyle = styled.div`
    display: flex;
    padding: 10px;
    margin: 10px 5px;
    cursor: pointer;

    :hover{
        background-color: whitesmoke;
        border-radius: 10px;
    }

    .widget-article-left{
        color:#0a66c2;
        margin-right:6px;

        .MuiSvgIcon-root{
            font-size:15;
        }
    }

    .widget-article-right{
        h4{
            font-size: 15px;
            margin-bottom:5px;
        }

        P{
            color: gray;
            font-family: 12px;
        }
    }


`