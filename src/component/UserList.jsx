import React from "react";
import { Fragment } from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css"

function UserList(props) {
  return (
    <Fragment >
    <Card className={classes.users}>
        <ul>
            {
                props.users.map((user)=>{
                    return (<li key={Math.random().toString()}>{user.name} {user.age}</li> )
                })
            }
        </ul>
    </Card>
    </Fragment>
  )
}

export default UserList