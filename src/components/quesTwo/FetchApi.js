import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const FetchApi = () => {
    const [product, setproduct] = useState([]);
    useEffect(() => {
       Axios.get('https://api.mocki.io/v1/13f44462')
       .then(res =>{
           console.log(res.data)
           setproduct(res.data);
       })
    }, [])
    console.log(product)
    return (
        <div>
            <ul>
                {product.map(item=>(
                    <>
                    <h1>Title</h1>
                    <li>{item.title}</li>
                    <h3>Description</h3>
                    <li>{item.description}</li>
                    </>
                ))}
            </ul>
        </div>
    )
}

export default FetchApi
