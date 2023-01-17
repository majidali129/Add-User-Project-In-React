import React from 'react'

function AddUser() {
  return (
    <form>
        <div className="name_section">
            <label htmlFor="userName">Username</label>
            <input type="text" name="userName" id="userName" placeholder="Enter user's name"  />
        </div>

        <div className="age_section">
            <label htmlFor="userAge">Age</label>
            <input type="number" name="userAge" id="userAge"  />
        </div>
    </form>
  )
}

export default AddUser