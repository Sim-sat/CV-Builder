import { useState } from "react";
import Education from "./components/Education.jsx";
import Personal from "./components/Personal.jsx";
import Practical from "./components/Practical.jsx";
import Resume from "./components/Resume.jsx";
import Top from "./components/Top.jsx";
import Customize from "./components/Customize.jsx";
import Example from "./components/Example.jsx";
import { MdDeleteOutline } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const [educationList, setEducationList] = useState([]);
  const [professionalList, setProfessionalList] = useState([]);
  const [custom, setCustom] = useState(0);
  const [font, setFont] = useState("serif");
  const [color, setColor] = useState("#0e374e");
  const [layout, setLayout] = useState(0);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePhoneChange(e) {
    setPhone(e.target.value);
  }

  function handleAdressChange(e) {
    setAdress(e.target.value);
  }

  const createEntry = (newEducation) => {
    setEducationList(newEducation);
  };

  const createProfessionalEntry = (newProfessional) => {
    setProfessionalList(newProfessional);
  };

  const handleStateChange = (state) => {
    setCustom(state);
  };

  const changeFont = (font) => {
    setFont(font);
  };

  const changeColor = (color) => {
    setColor(color);
  };

  const deleteEntry = (id) => {
    setEducationList(educationList.filter((entry) => entry.id != id));
  };

  const loadExample = () => {
    setName("Anna Schneider");
    setEmail("anna@example.com");
    setPhone("+49 152 34567890");
    setAdress("Munich, Germany");
    setEducationList([
      {
        id: uuidv4(),
        degree: "Master Informatik",
        school: "Fernuni Hagen",
        start: "09.2025",
        end: "09.2027",
      },
      {
        id: uuidv4(),
        degree: "Bachelor Informatik",
        school: "Fernuni Hagen",
        start: "09.2022",
        end: "09.2025",
      },
    ]);
    setProfessionalList([
      {
        id: uuidv4(),
        companyName: "Umbrelle Inc.",
        title: "UX & UI Designer",
        from: "09.2019",
        end: "09.2021",
        location: "Munich",
        description:
          "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
      },
      {
        id: uuidv4(),
        companyName: "Black Mesa Labs",
        title: "UX Research Assistant",
        from: "09.2021",
        end: "06.2025",
        location: "Munich",
        description:
          "Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.",
      },
    ]);
  };

  const clearResume = () => {
    setName("");
    setEmail("");
    setPhone("");
    setAdress("");
    setEducationList([]);
    setProfessionalList([]);
  };

  const deleteEntryProf = (id) => {
    setProfessionalList(professionalList.filter((entry) => entry.id != id));
  };

  function entries() {
    const educationList2 = educationList.map((entry) => (
      <div className="font-bold text-xl m-5 bg-slate-100 p-5 flex justify-between flex-wrap items-center">
        {entry.school}
        <button className="self-end  active:scale-90 ml-auto">
          <MdDeleteOutline
            onClick={() => deleteEntry(entry.id)}
            className="size-8  "
          />
        </button>
      </div>
    ));
    return educationList2;
  }

  function professionalEntries() {
    const listItems = professionalList.map((entry) => (
      <div className="font-bold text-xl m-5 bg-slate-100 p-5 flex justify-between  items-center">
        {entry.companyName}
        <button className="inline self-end ml-auto active:scale-90 ">
          <MdDeleteOutline
            onClick={() => deleteEntryProf(entry.id)}
            className="size-8"
          />
        </button>
      </div>
    ));

    return listItems;
  }

  const changeLayout = (layout) => {
    setLayout(layout);
  };

  return (
    <>
      <div className="font-serif flex justify-center min-h-screen h-screen mt-10 shrink">
        <div id="left side" className="flex flex-col max-w-1/3 shrink grow-0 ">
          <Top customizeState={handleStateChange}></Top>
          <Example
            loadExample={loadExample}
            clearResume={clearResume}
          ></Example>
          {custom === 0 ? (
            <>
              <Personal
                name={name}
                email={email}
                phone={phone}
                adress={adress}
                nameChange={(e) => handleNameChange(e)}
                emailChange={(e) => handleEmailChange(e)}
                phoneChange={(e) => handlePhoneChange(e)}
                adressChange={(e) => handleAdressChange(e)}
              ></Personal>
              <Education
                createEntry={createEntry}
                listItems={entries()}
              ></Education>
              <Practical
                professionalEntry={createProfessionalEntry}
                listItems={professionalEntries()}
              ></Practical>
            </>
          ) : (
            <Customize
              changeFont={changeFont}
              changeColor={changeColor}
              changeLayout={changeLayout}
              color={color}
              font={font}
              layout={layout}
            ></Customize>
          )}
        </div>

        <Resume
          name={name}
          email={email}
          phone={phone}
          adress={adress}
          educationEntries={educationList}
          professionalEntries={professionalList}
          layout={layout}
          font={font}
          color={color}
        ></Resume>
      </div>
    </>
  );
}
