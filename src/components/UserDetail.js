import React, { useContext } from 'react'
import {UserContext} from './User'

const UserDetail = () => {
    const { user } = useContext(UserContext);
    console.log(user)
    return (
        <div>
            <ul>
            {user.map((item)=>( 
                <li> {item.name}</li>
               
        )
        )}
        </ul>
        </div>
    )
}

export default UserDetail
