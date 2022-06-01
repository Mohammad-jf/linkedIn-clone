import React from 'react'
import styled from 'styled-components'
import InfoIcon from '@mui/icons-material/Info';
import NewsArticle from './NewsArticle';



const Widget = () => {
  return (
    <WidgetStyle>
        <div className="widget-header">
            <h2>LinkedIn news</h2>
            <InfoIcon/>
        </div>
        <NewsArticle heading='I am Back' subtitle='900 readers'/>
        <NewsArticle heading='Frontend Roadmap' subtitle='346 readers'/>
        <NewsArticle heading='How to land your first job' subtitle='1002 readers'/>
        <NewsArticle heading='is React js still the king?' subtitle='730 readers'/>
        <NewsArticle heading='React native or Flutter?' subtitle='267 readers'/>
        <NewsArticle heading='5 ways to make money as a developer' subtitle='500 readers'/>
        <NewsArticle heading='do you need a degree to land a job as developer?' subtitle='730 readers'/>
    </WidgetStyle>
  )
}

export default Widget




const WidgetStyle = styled.div`
    flex: 0.2;
    position: sticky;
    top: 80px;
    background-color: white;
    border-radius: 10px;
    border:1px solid lightgray;
    height:fit-content;
   

    .widget-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;

        h2{
            font-size: 16;
            font-weight: 400;
        }

    }

`