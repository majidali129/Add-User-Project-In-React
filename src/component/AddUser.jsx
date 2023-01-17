import React, {useState} from 'react'
import "./CommonFile.css"




function AddUser(props) {

  const [enteredUserName , setEnteredUserName] = useState("");
  const [enteredUserAge , setEnteredUserAge] = useState("");

  const UserNameHandler = (e)=>{
    setEnteredUserName(e.target.value)
  }


  const UserAgeHandler = (e)=>{
    setEnteredUserAge(e.target.value)
  }


  const AddUserHandler = (event)=>{
    event.preventDefault();
    const userData = {
      name : enteredUserName, 
      age : enteredUserAge
    }
    props.newData(userData)
    // console.log(enteredUserName , enteredUserAge)
    setEnteredUserName("")
    setEnteredUserAge("")
  }


  return (
    <form className='user_form'>

        <div className='name_section'>
            <label className="label" htmlFor="userName">Username</label>
            <input  className="input" value={enteredUserName}  type="text" name="userName" id="userName" onChange={UserNameHandler}/>
        </div>

        <div className="age_section">
            <label className="label" htmlFor="userAge">Age</label>
            <input className="input" value={enteredUserAge} type="number" name="userAge" id="userAge"  onChange={UserAgeHandler}/>
        </div><br/>
        <input className="userBtn" type="submit" value="Add User" onClick={AddUserHandler} />

    </form>
  )
}

export default AddUser