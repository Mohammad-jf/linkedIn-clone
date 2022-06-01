import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import {auth} from '../firebase'
import {login} from '../reducers/userSlice'



const Login = () => {
    // states
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [name,setName] = useState('')
    const [photoUrl,setPhotoUrl] = useState('')
    const dispatch = useDispatch();



 //regisert functionality
  const register = ()=>{
      if(!name){
          return alert('Please Enter a Full Name');
      }
      auth.createUserWithEmailAndPassword(email,password)
      .then((userAuth)=>{
          userAuth.user.updateProfile({
              displayName:name,
              photoURL:photoUrl
          })
          .then(()=>{
              dispatch(login({
                  email:userAuth.user.email,
                  uid:userAuth.user.uid,
                  displayName:name,
                  photoUrl:photoUrl
              }))
          })
      }).catch(err=>alert(err.message));

  }


// login functionality
  const loginToApp = (e)=>{
      e.preventDefault();
      auth.signInWithEmailAndPassword(email,password)
      .then((userAuth)=>{
          dispatch(login({
            email:userAuth.user.email,
            uid:userAuth.user.uid,
            displayName:userAuth.user.displayName,
            photoUrl:userAuth.user.photoURL,
          }))
      }).catch(err=>alert(err));
  };



  return (
    <LoginStyle>
       <h2>Linked<span>in</span></h2>

       <form >
           <input type="text" placeholder='Full Name (require if registering)'
            value={name}  onChange={(e)=>setName(e.target.value)}/>

           <input type="text" placeholder='Profile pic (optional)'
            value={photoUrl} onChange={(e)=>setPhotoUrl(e.target.value)} />

           <input type="email" placeholder='Email' value={email} 
            onChange={(e)=>setEmail(e.target.value)} />

           <input type="password" placeholder='Password' value={password} 
            onChange={(e)=>setPassword(e.target.value)}/>

           <button type='submit' onClick={loginToApp}>Sign in</button>
       </form>
       
       <p>Not a member? <span onClick={register}> Register now</span></p>
    </LoginStyle>
  )
}

export default Login




const LoginStyle = styled.div`
display: flex;
height: 100vh;
flex-direction: column;
align-items: center;
margin-top: 80px;


h2{
    font-size: 3.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    span{
        background-color:#1b78d4;
        color: #fff;
        padding: 0 10px;
        border-radius: 5px;
        margin-left: 5px;

    }
}

    form{
        display: flex;
        flex-direction: column;
        margin-top: 15px;

        input{
            width:270px;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid black;
            border-radius: 5px;
            :focus{
                outline: none;
            }
        }
            
        button{
            background-color: #1b78d4;
            color: #fff;
            padding: 12px;
            width: 270px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            :active{
                opacity: 0.8;
            }
        }
        
    }


    p{
      font-size: 14px;
       margin: 10px 0;
        span{
            text-decoration: none;
            color: #0971d9;
            cursor: pointer;
        }
    }
`