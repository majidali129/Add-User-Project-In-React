import './App.css';
import AddUser from './component/AddUser';
// import UserList from './component/UserList';
import React, {useState} from 'react';
import UserInfo from './component/UserInfo';


function App() {

  const [newUser , setNewUser] = useState([]);


  const newUserData = (userData)=>{

    setNewUser((prevUser=>{
      let data =  [...prevUser , userData]
      return data
    }))

  }

  return (
    <div className="App">
      <AddUser newData={newUserData}/>
      <UserInfo users={newUser} />
    </div>
  );
}

export default App;
