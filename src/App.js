import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login'
import { useStateValue } from './StateProvider';
function App() {
//  is state.user =={user}
  const [{user},dispatch] = useStateValue()
  // {console.log("useeeee ",user )}

  return (
    <div className="app">
      {!user ? (<Login />) :(
        <>
         {/* header */}
      <Header />
      
      <div className="app_body">
        
         {/* sidebar */}
         <Sidebar />
         
         {/* Feeds */}
         <Feed />
         {/* Widgets */}
       {/* <Widgets /> */}
      </div>
        </>
      )
      }
     

    
    </div>
  );
}

export default App;
