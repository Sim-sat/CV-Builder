import { useState } from 'react'
import '/home/simsat/Javascript/my-first-react-app/src/App.css'
import { MdDeleteOutline } from "react-icons/md";



function Education({createEntry}){

    function Entries(entries){
        const listItems = entries.entries.map(entry =>
            <div key={entry.school} className='font-bold text-xl m-5 bg-slate-100 p-5 flex '>{entry.school} 
                <button className='inline self-end ml-auto'>
                    <MdDeleteOutline onClick={() => deleteEntry(entry.school)}
                                     className='size-8'/>
                    </button>
            </div>
         ) 
        return (
            <div>
                {listItems}
            </div>
        )
    }

    
    const[degree, setTitle] = useState("");
    const[school, setSchool] = useState("");
    const[start, setFrom] = useState("");
    const[end, setEnd] = useState("");
    const[showForm, setShowForm] = useState(false);
    const[list, setList] = useState([]);

    const deleteEntry = (school) => {
        console.log(school);
        setList((prev) => {
            const updatedList = prev.filter((entry) => entry.school != school)
            createEntry(updatedList);
            return updatedList;
        });
    };

    const handleButton = () => {
        setShowForm(true);
    }

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
        setShowForm(false);
        e.preventDefault();
        const newEducation = {   degree, 
                                school, 
                                start, 
                                end
                            };
        setList((prev) =>{ 
            const updatedList = [...prev, newEducation];
            createEntry (updatedList);
            return updatedList;

    });
        setTitle("");
        setSchool("");
        setFrom("");
        setEnd("");
    


    };
    
    return (
        <div className='text-xs content-center bg-white  ml-5 p-5 rounded-2xl mb-5 flex-grow justify-center'  >
         <details className=''>
            <summary className='font-bold text-3xl cursor-pointer '>Education</summary>
            <Entries entries={list}></Entries>
            {!showForm ? (<div className='flex content-center justify-center'>
                <button onClick={handleButton} className='border border-grey rounded-xl p-3 text-xl text-center mt-10'>+ Education</button>
            </div> ) : <form>
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
            </form>}

        </details>
       
    </div>)

}

export default Education;