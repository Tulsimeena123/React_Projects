import React, {useEffect, useState } from 'react'
import tulsiImg from "../../assets/tulsi.jpeg";


function Github() {
    const [data, setData]=useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/TulsiMeena123')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    } ,[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white
    p-4 text-3xl'>Github followers:{data.followers}
    <img className='text-center' src={tulsiImg}
    alt="tulsi" width={300}/>
    </div>
  )
}

export default Github
