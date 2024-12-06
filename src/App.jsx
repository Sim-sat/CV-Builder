import { useState } from 'react'
import Education from './components/Education.jsx'
import Personal from './components/Personal.jsx'
import Practical from './components/Practical.jsx'
import Resume from './components/Resume.jsx'


function App() {
  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[phone, setPhone] = useState("");
  const[adress, setAdress] = useState("");
  const[educationList, setEducationList] = useState([]);

 
  function handleNameChange(e){
    setName(e.target.value);
  }

  function handleEmailChange(e){
    setEmail(e.target.value);
  }

  function handlePhoneChange(e){
    setPhone(e.target.value);
  }

  function handleAdressChange(e){
    setAdress(e.target.value);
  }

  const createEntry = (newEducation) => {
      setEducationList(newEducation);
  }

  return (
    <>
      <h1 className='font-bold text-4xl text-center mb-10 '>Resume Builder</h1>
      <div className='font-serif flex  justify-center items-center min-h-screen h-screen' >
  
          <div id="left side" className='flex w-1/3 flex-col max-w-lg'>
            <Personal 
            nameChange={(e) => handleNameChange(e)}
            emailChange={(e) => handleEmailChange(e)}
            phoneChange={(e) => handlePhoneChange(e)}
            adressChange={(e) => handleAdressChange(e)}
            ></Personal>
            <Education createEntry={createEntry} ></Education>
            <Practical></Practical>
          </div>
          
          <Resume name={name} email={email} phone={phone} adress={adress} entries={educationList}></Resume>
     
      
      </div>
    </>
  )
}

export default App
