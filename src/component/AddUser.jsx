import React, {useState , Fragment , useRef} from 'react'
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from "./AddUser.module.css"
import ErrorModal from '../UI/ErrorModal';




function AddUser(props) {

   // to get and store values

  // const [enteredUserName , setEnteredUserName] = useState("");
  // const [enteredUserAge , setEnteredUserAge] = useState("");
  
  // to manage error message
  const [error , setError ] = useState()

  // We use useRef to interect directly with the DOM-Nodw/ React-Element
  const userNameRef = useRef();
  const userAgeRef = useRef();



  const AddUserHandler = (event)=>{
    event.preventDefault();
    console.log(userNameRef.current.value) 
    // if(enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0 ){
    if(userNameRef.current.value === ""|| userAgeRef.current.value === 0 ){
      setError({
        title : "Invalid input !",
        message : "Please enter a valid name and age (non-empty values)"
      })  
      return; 
    } 
    if(+userAgeRef.current.value < 1){ 
    setError({
      title : "Invalid Age",
      message : "Please enter a valid age(> 0)"
    }) 
    return 
    }
    const userData = {
      // name : enteredUserName,
      // age : enteredUserName, 
      name : userNameRef.current.value,
      age : userAgeRef.current.value
    }
    props.newData(userData)
    userNameRef.current.value = ""
    userAgeRef.current.value = ""
    // console.log(enteredUserName , enteredUserAge)
    // setEnteredUserName("")
    // setEnteredUserAge("")
  }



  // const UserNameHandler = (e)=>{
  //        setEnteredUserName(e.target.value)
  // }


  // const UserAgeHandler = (e)=>{
  //   // if(enteredUserAge.length)
  //   setEnteredUserAge(e.target.value)
  // }

  const ErrorHandler = ()=>{
    setError(null)
  }
  


  return (
    <Fragment>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={ErrorHandler}/>}
    <Card className={classes.input}>

    <form className='user_form' onSubmit={AddUserHandler}>
        <div className='name_section'>
            <label   htmlFor="userName">Username</label>
            {/* <input   value={enteredUserName}  type="text"  id="userName" onChange={UserNameHandler}/> */}
            <input  ref={userNameRef}   type="text"  id="userName" />
        </div>

        <div className="age_section">
            <label  htmlFor="age">Age (Years)</label>
            {/* <input  value={enteredUserAge} type="number"  id="age"  onChange={UserAgeHandler}/> */}
            <input  ref={userAgeRef} type="number"  id="age"  />
        </div><br/>
        <Button type="submit">Add User</Button>
    </form>

    </Card>
    </Fragment>
  )
}

export default AddUser