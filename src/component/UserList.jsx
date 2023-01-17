import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css"

function UserList(props) {
  return (
    <Card className={classes.users}>
        <ul>
            {
                props.users.map((user)=>{
                    return (<li>{user.name} {user.age}</li> )
                })
            }
            {/* <li>
            {`${props.name} ${props.age}`}
            </li> */}
        </ul>
    </Card>
  )
}

export default UserList