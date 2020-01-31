import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import HeaderMaker from './HeaderMaker'
import UserDatas from './UserDatas';

const API = 'https://acme-users-api-rev.herokuapp.com/api';

const fetchUser = async ()=> {
  const storage = window.localStorage;
  const userId = storage.getItem('userId'); 
  if(userId){
    try {
      return (await axios.get(`${API}/users/detail/${userId}`)).data;
    }
    catch(ex){
      storage.removeItem('userId');
      return fetchUser();
    }
  }
  const user = (await axios.get(`${API}/users/random`)).data;
  storage.setItem('userId', user.id);
  return user;
};

function App() {
  const [user, setUser] = useState({});
  
  useEffect(() => {
    fetchUser()
      .then( user => setUser(user))
  }, [])

  const changeUser = () => {
    window.localStorage.removeItem('userId')
    fetchUser()
        .then( user => setUser(user))
  }

  return (
    <div className="App">
      <HeaderMaker user = {user} changeUser = {changeUser}/>
      <UserDatas user = {user} />
    </div>
  );
}

export default App;
