import React, {useState, createContext} from 'react'

export const UserContext = createContext();

const User = (props) => {
    const [user, setUser] = useState([
    {
        name:'Nimra Ahmed',
        book: 'yaram'
    }
    ]);
    console.log(props.children)
    return (
        <div>
    <UserContext.Provider value={{user}}>
      {props.children}
    </UserContext.Provider>
        </div>
    )
}

export default User
