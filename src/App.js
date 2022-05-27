import React from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';




function App() {
  return (
    <div className="app">
      {/* header */}
        <Header/>

        <div className="app-body">
          <SideBar/>
        </div>


        
    </div>
  );
}

export default App;
