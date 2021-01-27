import React, { useState } from 'react'
import './App.css';
import FriendsList from './components/FriendsList'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import { Route, Switch, Link} from 'react-router-dom'
import { axiosWithAuth } from './utils/axiosWithAuth'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false)
  }



  return (
    
      <div className="App">
        <header>
          <h1>Authentication Project</h1>
          <nav>
              {!isLoggedIn && <Link to='/login'>Login</Link>}
              {isLoggedIn && <Link onClick={logout}>Logout</Link>}
              {isLoggedIn && <Link to='/friendslist'>Friends List</Link>}
          </nav>
        </header>
        <Switch>
          <PrivateRoute exact path='/friendslist' component={FriendsList} />
          <Route path='/login' render={(props) => {
            return <Login {...props} setIsLoggedIn={setIsLoggedIn} />
          }} />
          <Route render={(props) => {
            return <Login {...props} setIsLoggedIn={setIsLoggedIn} />
          }} />
        </Switch>
        
      </div>
    
  );
}

export default App;
