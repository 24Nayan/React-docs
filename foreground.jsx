import React, { useState } from 'react'
import Card from './Card'
import {useRef } from 'react'
// ...existing code...
const Foreground = () => {
  // const data=[
  //   icon,desc,filesize,close,download,tagdeetails
  // ]
  const ref = useRef(null);
  const data =[
    {desc:"lorem",
      filesize:".9mb",
      close:false,
      tag:{isOpen:true,tagtitle:"download now",tagcolor:"green"},
    },
     {desc:"lorem",
      filesize:".9mb",
      close:true,
      tag:{isOpen:true,tagtitle:"upload",tagcolor:"blue"},
    },
     {desc:"lorem",
      filesize:".9mb",
      close:false,
      tag:{isOpen:true,tagtitle:"download now",tagcolor:"green"},
    },
  ];
  useState()
  return (
    <div ref={ref} className='absolute top-0 left-0 z-[3] w-full h-full '>
      <div  className="absolute top-10 left-10 flex gap-10  flex-wrap p-5">
       {data.map((item, index) => (
        <Card data={item} reference={ref}  />
       ))}
        
      </div>
    </div>
  )
}

export default Foreground
