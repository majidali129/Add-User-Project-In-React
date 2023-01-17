import React from "react";
import "./CommonFile.css"

function UserList(props) {
  return (
    <div>
         <ul>
        <li>
        {`${props.name} ${props.age}`}
        </li>
    </ul>
        {/*  */}
    </div>
  )
}

export default UserList