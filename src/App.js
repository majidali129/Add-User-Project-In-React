import './App.css';
import AddUser from './component/AddUser';
import React, {useState , Fragment} from 'react';
import UserList from './component/UserList';


function App() {

  const [newUser , setNewUser] = useState([]);


  const newUserData = (userData)=>{

    setNewUser((prevUser=>{
      let data =  [...prevUser , userData]
      return data
    }))

  }

  return (
    <Fragment>
      <AddUser newData={newUserData}/>
      <UserList users={newUser} />
    </Fragment>
  );
}

export default App;

