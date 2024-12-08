
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import clsx from 'clsx';

function Entries(entries){

    const listItems = entries.entries.map(product =>
        <div id="product.id" className='flex flex-row text-start mb-4 mr-20 max-w-full' >
            <div className='mr-5 ' >
                <p className="text-base">{product.start} - {product.end} </p>
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
        <div id="product.id" className='flex flex-row text-start mb-4 mr-20 max-w-full' >
            <div className='mr-10' >
                <p className="text-base">{product.from} - {product.end} </p>
                <p className="text-base">{product.location}</p>

            </div>
            <div className='max-w-full'>
                <p className='font-bold text-xl'>{product.companyName} </p>
                <p>{product.title}</p>
                <p className='break-words mt-1'>{product.description}</p>
            </div>
        </div>
    )

    return <div className='text-xl font-normal'>{listItems}</div>
}


function Resume(props){

    return(
            
            <>
            {props.layout === 0 &&
            <div style={{fontFamily: props.font}} id="centerLayout" className={clsx("bg-white ml-10 mr-10 h-screen max-h-[80rem] overflow-scroll flex-shrink w-full drop-shadow-2xl max-w-4xl text-center justify-center")}>
                
                <div style={{backgroundColor: props.color}} 
                    className=' w-full h-1/6 flex flex-col justify-center items-center break-words'>
                    <p className='font-bold text-5xl text-white'>{props.name}</p> 
                    <div className='flex justify-between space-x-10 mt-4 px-4 font-bold text-xl text-white items-center ' >
                        <span className=' flex items-center break-all'>{props.email.length > 0 && <MdEmail className='mr-3'/>} {props.email}</span>
                        <span className='flex items-center'>{props.phone.length > 0 && <FaPhoneAlt className='mr-3'/>}{props.phone}</span>
                        <span className=' flex item-center'>{props.adress.length > 0 && <FaLocationDot className='mr-3'/>}{props.adress}</span>
                    </div>
                </div>
                <div className="mt-10">
                {props.educationEntries.length > 0 &&
                <div className='flex justify-center flex-col' >
                    <div style={{color: props.color}} 
                        className='font-bold text-3xl bg-slate-100 w-5/6 text-center p-2 mb-5 self-center'>Education</div>
                        <div className='ml-20'>
                     <Entries entries={props.educationEntries}></Entries>     

                        </div>
                    
                </div>
                }
                {props.professionalEntries.length > 0 &&
                <div className='flex justify-center flex-col max-w-full' >
                    <div style={{color: props.color}} className='font-bold text-3xl bg-slate-100 w-5/6 text-center p-2 mb-5 self-center'>Professional Experience</div>
                    <div className='ml-20'>
                    <ProfessionalEnrty entries={props.professionalEntries}></ProfessionalEnrty>    
                    </div>
                </div>
                }
                </div>

            </div>}
            {props.layout === 1 &&
            <div style={{fontFamily: props.font}} className={clsx("bg-white ml-10 mr-10 h-screen max-h-[80rem] w-full drop-shadow-2xl max-w-4xl flex overflow-scroll")}>
                
            <div style={{backgroundColor: props.color}} 
                className=' w-1/2 flex flex-col p-2 justify-start justify-items-start text-center gap-5 font-bold text-white items-center h-full break-words'>
                <p className=' text-4xl mt-5'>{props.name}</p> 
        
                    <span className='text-xl flex items-center break-all'>{props.email.length > 0 && <MdEmail className='mr-3'/>} {props.email}</span>
                    <span className='text-xl flex items-center'>{props.phone.length > 0 && <FaPhoneAlt className='mr-3'/>}{props.phone}</span>
                    <span className='text-xl flex item-center'>{props.adress.length > 0 && <FaLocationDot className='mr-3'/>}{props.adress}</span>
          
            </div>
            <div className='flex flex-col  w-2/3 items-start text-center mt-10'>

                {props.educationEntries.length > 0 &&
                <div className='' >
                    <div style={{color: props.color}} 
                        className='font-bold text-2xl bg-slate-100 w-5/6 p-2 mb-5 ' >Education</div>
                    <div className='ml-5'>
                        <Entries entries={props.educationEntries}></Entries>
                        </div>
                   
                    
                </div>
                }
                {props.professionalEntries.length > 0 &&
                <div className='' >
                    <div style={{color: props.color}} className='font-bold text-2xl bg-slate-100 w-5/6  p-2  mb-5 '>Professional Experience</div>
                    <div className='ml-5'>
                        <ProfessionalEnrty className="" entries={props.professionalEntries}></ProfessionalEnrty>    
                        </div>
                </div>
                }
            </div>

        </div>
            
            }{props.layout === 2 &&
            <div style={{fontFamily: props.font}} className={clsx("bg-white ml-10 mr-10 h-screen max-h-[80rem] w-full drop-shadow-2xl max-w-4xl flex flex-row overflow-scroll")}>
                    
                
                <div className='flex flex-col  w-2/3 items-start text-center mt-10'>
    
                    {props.educationEntries.length > 0 &&
                    <div className='' >
                        <div style={{color: props.color}} 
                            className='font-bold text-3xl bg-slate-100 w-5/6 p-2  mb-5 ' >Education</div>
                        <div className='ml-5'>
                        <Entries entries={props.educationEntries}></Entries>
                        </div>
                    </div>
                    }
                    {props.professionalEntries.length > 0 &&
                    <div className='' >
                        <div style={{color: props.color}} className='font-bold text-3xl bg-slate-100 w-5/6  p-2  mb-5 '>Professional Experience</div>
                        <div className='ml-5'>
                        <ProfessionalEnrty className="" entries={props.professionalEntries}></ProfessionalEnrty>    
                        </div>
                    </div>
                    }
                    </div>
                <div style={{backgroundColor: props.color}} 
                    className=' w-1/2 flex flex-col justify-start justify-items-start text-white text-center gap-5 items-center h-full break-words'>
                    <p className='font-bold text-5xl mt-5'>{props.name}</p> 
            
                        <span className='text-2xl flex items-center break-all'>{props.email.length > 0 && <MdEmail className='mr-3'/>} {props.email}</span>
                        <span className='text-2xl flex items-center'>{props.phone.length > 0 && <FaPhoneAlt className='mr-3'/>}{props.phone}</span>
                        <span className='text-2xl flex item-center'>{props.adress.length > 0 && <FaLocationDot className='mr-3'/>}{props.adress}</span>
              
                    </div>
                
            </div>
  
                
                }
                </>
        
    )
}

export default Resume;