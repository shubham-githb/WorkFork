import React ,{useState,useEffect} from 'react'
import "./App.css"
import Header from "./Header";
import Sidebar from "./Sidebar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Chat from './Chat';
import Login from './Login';
import { useDebugValue } from "react"



function App() {


  const [user, setUser] = useState(null);

  return (
    <div className="app">
     <Router>
     {!user ? (
       <Login/>
     ):(

       <>
      <Header/>
      <div className="app__body">
        <Sidebar />
        <Switch>
          <Route path="/room/:roomId">
            <Chat />
          </Route>
          <Route path="/">
            <Chat />
          </Route>


        </Switch>
      </div>

      </>
     )}
     </Router>
    </div>
     
  )
}

export default App
