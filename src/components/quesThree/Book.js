import React from 'react'

const Book = ({todolist, handleDelete}) => {
    return (
        <div>
            {
                todolist.map((item)=>(
                    <ul>
                        <li key={item.id}>{item.title}<span onClick={handleDelete}>X</span></li>
                    </ul>
                ))
            }
        </div>
    )
}

export default Book
