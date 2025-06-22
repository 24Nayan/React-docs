import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { IoIosCloudDownload } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import {motion, scale} from "framer-motion";


function Card({data,reference}){
  return (
    <motion.div drag dragConstraints={reference}  whileDrag={{scale:1.2}} dragElastic={0.2} className='relative flex-shrink-0 w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
      <FaFileAlt />
      <p className='text-sm leading-tight font-semibold mt-5'>{data.desc}</p>
      {/* Adjusted footer position */}
      <div className='footer absolute bottom-0 w-full  left-0'>
        <div className='flex items-center justify-between px-6 py-5 mb-3'>
          <h5>{data.filesize}</h5>
          <span className='w-5 h-5 bg-zinc-600 rounded-full flex items-center justify-between  mb-3'>
           {data.close ? <IoMdClose/> : <IoIosCloudDownload size="1em" color="#fff"/>}
            
          </span>
        </div> 
        {
          data.tag.isOpen && ( <div className={`tag w-full h-10 ${data.tag.tagcolor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center `}> 
          <h3 className='text-sm font-semibold'>{data.tag.tagtitle}</h3>
        </div>

          )
        }
       
      </div>
    </motion.div>
  )
}

export default Card
