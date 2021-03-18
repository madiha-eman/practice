import React, { useState } from 'react'
import Book from './Book';

const AddTodo = () => {
    const [book, setBook]= useState({title:'',id:''});
    const [bookList, setBookList]= useState([]);
    // const [del, setDel]= useState(id)

    const handleChange =(e) =>{
        setBook({title:e.target.value,id:2})
    }
     const handleDelete = () =>{

     }
    const handleSubmit = (e) =>{
          e.preventDefault();
          console.log('hi')
          setBookList([...bookList, book])
          e.target.firstChild.value='';
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={handleChange} />
                <button type='submit'>add</button>
            </form>
              <Book
               todolist={bookList}
               handleDelete={handleDelete}
              />
        </div>
    )
}

export default AddTodo

