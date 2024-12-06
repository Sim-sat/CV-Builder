import { useState } from 'react'
import '/home/simsat/Javascript/my-first-react-app/src/App.css'


function Education({createEntry}){

    const[degree, setTitle] = useState("");
    const[school, setSchool] = useState("");
    const[start, setFrom] = useState("");
    const[end, setEnd] = useState("");

    function handleTitleChange(e){
        setTitle(e.target.value);
    }

    function handleSchoolChange(e){
        setSchool(e.target.value);
    }

    function handleFromChange(e){
        setFrom(e.target.value);
    }
    
    function handleEndChange(e){
        setEnd(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newEducation = {   degree, 
                                school, 
                                start, 
                                end
                            };
        createEntry(newEducation);
        setTitle("");
        setSchool("");
        setFrom("");
        setEnd("");
    


    };
    
    return (
        <div className='text-xs content-center bg-white  ml-5 p-5 rounded-2xl mb-5 flex-grow block'  >
        
        <details className='cursor-pointer'>
            <summary className='font-bold text-3xl '>Education</summary>
            <form>
                <label htmlFor="name" className='font-bold text-base'>Title</label><br></br>
                <input onChange={handleTitleChange} 
                        id="name" 
                        placeholder='Title of study' 
                        className="m-2 w-full rounded-xl bg-slate-100 p-2 text-base text-base/1" 
                        type="text"></input><br></br>
                <label htmlFor="school" className='font-bold  text-base'>School</label><br></br>
                <input  onChange={handleSchoolChange}
                        id="school" 
                        placeholder="Name of school" 
                        className="m-2 rounded-xl bg-slate-100 w-full p-2 text-base" type="text"></input><br></br>
                <label htmlFor="start" className='font-bold text-base'>From</label><br></br>
                <input  onChange={handleFromChange}
                        id ="start" 
                        placeholder="Enter phone number" 
                        className="m-2 rounded-xl bg-slate-100 w-full p-2 text-base" type="date"></input><br></br>
                <label htmlFor="end" className='font-bold  text-base'>To</label><br></br>
                <input  onChange={handleEndChange}
                        id="end" 
                        placeholder='City, Country' 
                        className="m-2 rounded-xl w-full bg-slate-100  p-2 text-base" type="date"></input><br></br>
                <button onClick={handleSubmit} id="addEducation" className='border border-black p-2 w-20 rounded-xl font-bold text-base'>Add</button>
            </form>
        </details>
    </div>)

}

export default Education;