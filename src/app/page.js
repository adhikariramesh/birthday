"use client";
import { useState } from 'react';
import Image from 'next/image';
import UserData from '@/utils/UserData';


const page = () => {
  const [user, setUser] = useState(UserData);
  const [count, setCount] = useState(5);
  const handleClear = ()=>{
    const container = document.querySelectorAll(".container");
    container.forEach((cr,index)=>{
      container[index].style.display = "none";
      setCount(0);
    });
  }
  return (
    <main>
      <h1 className="title"> {count} Birthdays Today</h1>
      <div className="main_container">
        {
          user.map((curElmnt) => {
            return (
                <div className="container" key={curElmnt.id}>
                  <div className="imgBody">
                    <Image src={curElmnt.imgUrl} alt='userImage' width={200} height={200} />
                  </div>
                  <div className="content">
                    <h2 className="name">{curElmnt.name}</h2>
                    <p className="age">{curElmnt.age} years</p>
                  </div>
                </div>
            )
          })
        }
      </div>
      <button className="btn"
      onClick={handleClear}
      >clear all</button>
    </main>
  )
}

export default page
