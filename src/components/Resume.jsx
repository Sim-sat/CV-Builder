import { useState } from 'react'
import '/home/simsat/Javascript/my-first-react-app/src/App.css'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Entries(entries){
    const listItems = entries.entries.map(product =>
        <div id="product.id" className='flex flex-row justify-start ml-20 mb-8' >
            <div className='mr-5' >
                <p>{product.start} - {product.end} </p>
            </div>
            <div>
                <p className='font-bold'>{product.school} </p>
                <p>{product.degree}</p>
            </div>
        </div>
    );
    return <div className='text-xl font-normal'  >{listItems}</div>
}


function Resume({name, email, phone, adress, entries}){
    return(

            <div className="bg-white flex-grow h-screen ml-10 mr-10 max-h-[80rem] w-full drop-shadow-2xl max-w-4xl">
                
                <div className='bg-teal-900 w-full h-1/6 flex flex-col justify-center items-center'>
                    <p className='font-bold text-6xl text-white'>{name}</p> 
                    <div className='flex justify-between space-x-10 mt-4 px-4'>
                        <span className='font-bold text-2xl text-white ml flex items-center'>{email.length > 0 && <MdEmail className='mr-3'/>} {email}</span>
                        <span className='font-bold text-2xl text-white flex items-center'>{phone.length > 0 && <FaPhoneAlt className='mr-3'/>}{phone}</span>
                        <span className='font-bold text-2xl text-white flex item-center'>{adress.length > 0 && <FaLocationDot className='mr-3'/>}{adress}</span>
                    </div>
                </div>
                <div className='flex justify-center flex-col' >
                    <div className='text-teal-900 font-bold text-3xl bg-slate-100 w-5/6 text-center p-2 mt-10 mb-5 self-center'>Education</div>

                     <Entries entries={entries}></Entries>
                    
                </div>


            </div>
        
    )
}

export default Resume;