import React,{forwardRef} from 'react'
import  styled  from 'styled-components';
import { Avatar } from '@mui/material';
import InputOption from './InputOption';

// icons
import ThumbUpAltOutLinedIcon from '@mui/icons-material/ThumbUpAltOutlined'
import ChatOutLinedIcon from '@mui/icons-material/ChatOutlined'
import ShareOutLinedIcon from '@mui/icons-material/ShareOutlined'
import SendOutLinedIcon from '@mui/icons-material/SendOutlined'


const Post = forwardRef(({name,discription,message,photo},ref) => {
  return (
    <PostStyle ref={ref}>
        <div className="post-header">
            <Avatar src={photo ? photo : ''}/>
            
            <div className="post-info">
                <h2>{name}</h2>
                <p>{discription}</p>
            </div>
        </div>

        <div className="post-body">
            <p>{message}</p>
        </div>

        {/* post buttons */}
        <div className="post-buttons">
            <InputOption Icon={ThumbUpAltOutLinedIcon} title="Like" color='gray'/>
            <InputOption Icon={ChatOutLinedIcon} title="Comment" color='gray'/>  
            <InputOption Icon={ShareOutLinedIcon} title="Share" color='gray'/>
            <InputOption Icon={SendOutLinedIcon} title="Send" color='gray'/>
        </div>
    </PostStyle>
  )
})

export default Post

const PostStyle = styled.div`
    background-color: white;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 10px;


    /* header */
    .post-header{
        display: flex;
        margin-bottom: 10px;
        align-items: center;

        .post-info{
            margin-left: 10px;

            P{
                font-size: 12px;
                color: gray;
            }

            h2{
            font-size: 16px;
        }
        }
    }


    .post-body{
        overflow-wrap: anywhere;

        
    }

    .post-buttons{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
`