import React from "react";
import UserList from "./UserList";



function UserInfo(props) {
  return (
    <div  className="user_list-container">
            {
                props.users.map((user)=>{
                    return ( <UserList name={user.name} age={user.age}/>)
                })
            }
    </div>
  )
}

export default UserInfo

