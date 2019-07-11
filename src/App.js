import React, { useState } from 'react'
import AddUserForm from './Component/Formulaire'
//import Place from './Component/Place'
import './App.css';

const App = () => {
  const usersData = [
    
  ]

  const [users, setUsers] = useState(usersData)
  
  const addUser = user => {
		user.id = users.length
		setUsers([ ...users, user ])
  }


  return (
    
      <div className="container">
        <div>
          <AddUserForm addUser={addUser} />
        </div><br></br>
      </div> 
  )
}

export default App