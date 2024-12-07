import { useState } from 'react'
import '/home/simsat/Javascript/my-first-react-app/src/App.css'

function Personal({nameChange, emailChange, phoneChange, adressChange, name, email, phone, adress}){
    return (
    <div className='text-xs  bg-white  ml-5 p-5 rounded-2xl mb-5'  >
        <h2 className='font-bold text-3xl mb-2'>Personal Details</h2>
        <form>
            <label htmlFor="name" className='font-bold text-base'>Full Name</label><br></br>
            <input onChange={nameChange} 
            id="name" placeholder='First and last name' value={name} className="m-2 w-full rounded-xl bg-slate-100 p-2 text-base text-base/1" type="text"></input><br></br>
            <label htmlFor="email" className='font-bold  text-base'>Email</label><br></br>
            <input onChange={emailChange} value={email}
            id="email" placeholder="Enter email" className="m-2 rounded-xl bg-slate-100 w-full p-2 text-base" type="email"></input><br></br>
            <label htmlFor="phone" className='font-bold text-base'>Phone Number</label><br></br>
            <input onChange={phoneChange} value={phone}
            id ="phone" placeholder="Enter phone number" className="m-2 rounded-xl bg-slate-100 w-full p-2 text-base" type="tel"></input><br></br>
            <label htmlFor="adress" className='font-bold  text-base'>Adress</label><br></br>
            <input onChange={adressChange} value={adress}
            id="adress" placeholder='City, Country' className="m-2 rounded-xl w-full bg-slate-100  p-2 text-base" type="text"></input><br></br>
        </form>
    </div>)
}

export default Personal