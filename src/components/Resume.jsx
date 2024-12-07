import { useState } from 'react'
import '/home/simsat/Javascript/my-first-react-app/src/App.css'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import clsx from 'clsx';
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

function Entries(entries){

    const listItems = entries.entries.map(product =>
        <div id="product.id" className='flex flex-row text-start  mb-8' >
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

function ProfessionalEnrty(entries){
    const listItems = entries.entries.map(product =>
        <div id="product.id" className='flex flex-row text-start mb-8 mr-20 max-w-full' >
            <div className='mr-5 w-2/3' >
                <p>{product.from} - {product.end} </p>
                <p>{product.location}</p>

            </div>
            <div className='max-w-full'>
                <p className='font-bold text-2xl'>{product.companyName} </p>
                <p>{product.title}</p>
                <p className='break-words mt-1'>{product.description}</p>
            </div>
        </div>
    )

    return <div className='text-xl font-normal'>{listItems}</div>
}


function Resume({name, email, phone, adress, educationEntries, professionalEntries, font, color, layout}){

    

    return(
            <>
            {layout === 0 &&
            <div className={clsx("bg-white ml-10 mr-10 h-screen max-h-[80rem] w-full drop-shadow-2xl max-w-4xl text-center justify-center" , `font-${font}`)}>
                
                <div style={{backgroundColor: color}} 
                    className=' w-full h-1/6 flex flex-col justify-center items-center'>
                    <p className='font-bold text-6xl text-white'>{name}</p> 
                    <div className='flex justify-between space-x-10 mt-4 px-4'>
                        <span className='font-bold text-2xl text-white ml flex items-center'>{email.length > 0 && <MdEmail className='mr-3'/>} {email}</span>
                        <span className='font-bold text-2xl text-white flex items-center'>{phone.length > 0 && <FaPhoneAlt className='mr-3'/>}{phone}</span>
                        <span className='font-bold text-2xl text-white flex item-center'>{adress.length > 0 && <FaLocationDot className='mr-3'/>}{adress}</span>
                    </div>
                </div>
                {educationEntries.length > 0 &&
                <div className='flex justify-center flex-col' >
                    <div style={{color: color}} 
                        className='font-bold text-3xl bg-slate-100 w-5/6 text-center p-2 mt-10 mb-5 self-center'>Education</div>
                        <div className='ml-20'>
                     <Entries entries={educationEntries}></Entries>     

                        </div>
                    
                </div>
                }
                {professionalEntries.length > 0 &&
                <div className='flex justify-center flex-col max-w-full' >
                    <div style={{color: color}} className='font-bold text-3xl bg-slate-100 w-5/6 text-center p-2 mt-10 mb-5 self-center'>Professional Experience</div>
                    <div className='ml-20'>
                    <ProfessionalEnrty entries={professionalEntries}></ProfessionalEnrty>    
                    </div>
                </div>
                }

            </div>}
            {layout === 1 &&
            <div className={clsx("bg-white ml-10 mr-10 h-screen max-h-[80rem] w-full drop-shadow-2xl max-w-4xl flex " , `font-${font}`)}>
                
            <div style={{backgroundColor: color}} 
                className=' w-1/2 flex flex-col justify-start justify-items-start text-center gap-5 items-center h-full'>
                <p className='font-bold text-5xl text-white mt-5'>{name}</p> 
        
                    <span className='font-bold text-2xl text-white ml flex items-center'>{email.length > 0 && <MdEmail className='mr-3'/>} {email}</span>
                    <span className='font-bold text-2xl text-white flex items-center'>{phone.length > 0 && <FaPhoneAlt className='mr-3'/>}{phone}</span>
                    <span className='font-bold text-2xl text-white flex item-center'>{adress.length > 0 && <FaLocationDot className='mr-3'/>}{adress}</span>
          
            </div>
            <div className='flex flex-col  w-2/3 items-start text-center'>

                {educationEntries.length > 0 &&
                <div className='' >
                    <div style={{color: color}} 
                        className='font-bold text-3xl bg-slate-100 w-5/6 p-2 mt-10 mb-5 ' >Education</div>
                    <div className='ml-5'>
                        <Entries entries={educationEntries}></Entries>
                        </div>
                   
                    
                </div>
                }
                {professionalEntries.length > 0 &&
                <div className='' >
                    <div style={{color: color}} className='font-bold text-3xl bg-slate-100 w-5/6  p-2 mt-10 mb-5 '>Professional Experience</div>
                    <div className='ml-5'>
                        <ProfessionalEnrty className="" entries={professionalEntries}></ProfessionalEnrty>    
                        </div>
                </div>
                }
            </div>

        </div>
            
            }{layout === 2 &&
            <div className={clsx("bg-white ml-10 mr-10 h-screen max-h-[80rem] w-full drop-shadow-2xl max-w-4xl flex flex-row" , `font-${font}`)}>
                    
                
                <div className='flex flex-col  w-3/5 items-start text-center'>
    
                    {educationEntries.length > 0 &&
                    <div className='' >
                        <div style={{color: color}} 
                            className='font-bold text-3xl bg-slate-100 w-5/6 p-2 mt-10 mb-5 ' >Education</div>
                        <div className='ml-5'>
                        <Entries entries={educationEntries}></Entries>
                        </div>
                    </div>
                    }
                    {professionalEntries.length > 0 &&
                    <div className='' >
                        <div style={{color: color}} className='font-bold text-3xl bg-slate-100 w-5/6  p-2 mt-10 mb-5 '>Professional Experience</div>
                        <div className='ml-5'>
                        <ProfessionalEnrty className="" entries={professionalEntries}></ProfessionalEnrty>    
                        </div>
                    </div>
                    }
                    </div>
                <div style={{backgroundColor: color}} 
                    className=' w-1/2 flex flex-col justify-start justify-items-start text-center gap-5 items-center h-full'>
                    <p className='font-bold text-5xl text-white mt-5'>{name}</p> 
            
                        <span className='font-bold text-2xl text-white ml flex items-center'>{email.length > 0 && <MdEmail className='mr-3'/>} {email}</span>
                        <span className='font-bold text-2xl text-white flex items-center'>{phone.length > 0 && <FaPhoneAlt className='mr-3'/>}{phone}</span>
                        <span className='font-bold text-2xl text-white flex item-center'>{adress.length > 0 && <FaLocationDot className='mr-3'/>}{adress}</span>
              
                    </div>
                
            </div>
  
                
                }
                </>
        
    )
}

export default Resume;