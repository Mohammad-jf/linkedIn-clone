import React, { useState,useEffect } from 'react'
import  styled  from 'styled-components';
import { useSelector } from 'react-redux';
import { selectUser } from '../reducers/userSlice';
import FlipMove from 'react-flip-move';

// firebase
import { db } from '../firebase';
import firebase from 'firebase/compat/app';
// components
import InputOption from './InputOption';
import Post from './Post'
// icons
import CreateIcon from '@mui/icons-material/Create'
import ImageIcon from '@mui/icons-material/Image'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import EventNoteIcon from '@mui/icons-material/EventNote'
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'




const Feed = () => {
const user = useSelector(selectUser);

  // state
    const [posts,setPosts] = useState([]);
    const [inputText,setInputText] = useState('');

  // handle text input
        const handleInput = (e)=>{
            setInputText(e.target.value);
        }


  // real time listener
    useEffect(() => {
       db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot=>(
           setPosts(snapshot.docs.map((doc)=>(
               {
                   id:doc.id,
                   data:doc.data(),
               }
           )))
       ));
    },[]);


// add post to the database
 const sendPost = (e)=>{
     e.preventDefault();
     if(inputText.trim().length !== 0){
         db.collection('posts').add({
           name:user.displayName,
           message:inputText,
           discription:user.email,
           photoUrl:user.photoUrl || '',
           timestamp:firebase.firestore.FieldValue.serverTimestamp()
         })
         setInputText('');
     }else{
         alert('please write something')
     }
    }

    

  return (
    <FeedStyle>

        <div className="input-container">

            {/* feed input */}
            <div className="feed-input">
                <CreateIcon/>
                    <form >
                       <input 
                         type="text"
                         placeholder='Start a post'
                         onChange={handleInput} 
                         value={inputText} 
                         />
                       <button onClick={sendPost} type='submit'>Send</button>
                    </form>
            </div>

            {/* input opions */}
            <div className="input-options">
                <InputOption title='Photo' Icon={ImageIcon} color='#70b5f9' />
                <InputOption title='Video' Icon={SubscriptionsIcon} color='#e7a33e' />
                <InputOption title='Photo' Icon={EventNoteIcon} color='#c0cbcd' />
                <InputOption title='Photo' Icon={CalendarViewDayIcon} color='#7fc15e' />

            </div>
        </div>

        {/* posts */}
        <FlipMove>
            {posts.map(({id,data:{name,discription,message,photoUrl}})=>
                <Post 
                 key={id} 
                 name={name} 
                 discription={discription} 
                 message={message}
                 photo={photoUrl}/>
            )}
        </FlipMove>
      
    </FeedStyle>
  )
}

export default Feed


const FeedStyle = styled.div`
flex: 0.6;
margin: 0 20px;

.input-container{
 background-color: white;
 padding: 10px;
 padding-bottom: 20px;
 border-radius: 10px;
 margin-bottom:20px;

 /* feed input */
 .feed-input{
     border:1px solid lightgray;
     border-radius: 30px;
     display: flex;
     padding: 10px;
     color: gray;
     padding-left: 15px;

  form{
      display: flex;
      width: 100%;

      input{
          border: none;
          flex: 1;
          margin-left: 10px;
          outline-width: 0;
          font-weight: 600;
      }

      button{
          display: none;
     }
   }
 }

 .input-options{
     display: flex;
     justify-content: space-evenly;
 }
}


`