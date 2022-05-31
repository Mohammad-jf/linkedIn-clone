import React, { useEffect } from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Feed from './components/Feed';
import Login from './components/Login';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from './reducers/userSlice';
import {auth} from './firebase'
import {login,logOut} from './reducers/userSlice'


function App() {
const user = useSelector(selectUser);
const dispatch = useDispatch();


useEffect(()=>{
auth.onAuthStateChanged(userAuth=>{
  if(userAuth){
    dispatch(login({
      email:userAuth.email,
      uid:userAuth.uid,
      displayName:userAuth.displayName,
      photoUrl:userAuth.photoURL
    }));
  }else{
    dispatch(logOut());
  }
})
},[])

  return (
    <div className="app">
      {/* header */}
        <Header/>

        {!user ? <Login/> :(
          <div className="app-body">
            <SideBar/>
            <Feed/>
          </div>
        )}

        
    </div>
  );
}

export default App;
