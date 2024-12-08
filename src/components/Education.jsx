import { useState } from "react";
import moment from "moment";
import { IoMdSchool } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import clsx from "clsx";
import { v4 as uuidv4 } from "uuid";

function Education(props) {
  const [degree, setTitle] = useState("");
  const [school, setSchool] = useState("");
  const [start, setFrom] = useState("");
  const [end, setEnd] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [open, setOpen] = useState(false);

  const handleButton = () => {
    setShowForm(true);
  };

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleSchoolChange(e) {
    setSchool(e.target.value);
  }

  function handleFromChange(e) {
    const date = moment(e.target.value);
    setFrom(date.format("MM.YYYY"));
  }

  function handleEndChange(e) {
    const date = moment(e.target.value);
    setEnd(date.format("MM.YYYY"));
  }

  function handleCancel(e) {
    e.preventDefault();
    setShowForm(false);
  }
  const handleSubmit = (e) => {
    setShowForm(false);
    e.preventDefault();
    const newEducation = { id: uuidv4(), degree, school, start, end };
    props.createEntry((prev) => {
      return [...prev, newEducation];
    });
    setTitle("");
    setSchool("");
    setFrom("");
    setEnd("");
  };

  return (
    <div
      className={clsx(
        "text-xs bg-white  ml-5 p-5 rounded-2xl mb-5 grow-0 justify-center"
      )}
    >
      <p
        onClick={() => setOpen(!open)}
        className="font-bold text-3xl cursor-pointer flex  flex-row gap-4"
      >
        <IoMdSchool
          className={clsx(
            "self-center transition-all duration-150",
            open && "scale-105"
          )}
        />
        Education
        <IoIosArrowDown
          className={clsx(
            "scale-75 self-center ml-auto transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </p>

      {open && !showForm && (
        <div>
          {props.listItems}
          <div className="flex content-center justify-center">
            <button
              onClick={handleButton}
              className="border border-grey rounded-xl p-3 text-xl text-center mt-10 hover:bg-slate-100 active:scale-95"
            >
              + Education
            </button>
          </div>
        </div>
      )}
      {showForm && open && (
        <form>
          <label htmlFor="name" className="font-bold text-base">
            Title
          </label>
          <br></br>
          <input
            onChange={handleTitleChange}
            id="name"
            placeholder="Title of study"
            className="m-2 w-full rounded-xl bg-slate-100 p-2 text-base"
            type="text"
          ></input>
          <br></br>
          <label htmlFor="school" className="font-bold  text-base">
            School
          </label>
          <br></br>
          <input
            onChange={handleSchoolChange}
            id="school"
            placeholder="Name of school"
            className="m-2 rounded-xl bg-slate-100 w-full p-2 text-base"
            type="text"
          ></input>
          <br></br>
          <label htmlFor="start" className="font-bold text-base">
            From
          </label>
          <br></br>
          <input
            onChange={handleFromChange}
            id="start"
            placeholder="Enter phone number"
            className="m-2 rounded-xl bg-slate-100 w-full p-2 text-base"
            type="date"
          ></input>
          <br></br>
          <label htmlFor="end" className="font-bold  text-base">
            To
          </label>
          <br></br>
          <input
            onChange={handleEndChange}
            id="end"
            placeholder="City, Country"
            className="m-2 rounded-xl w-full bg-slate-100  p-2 text-base"
            type="date"
          ></input>
          <br></br>
          <div className="flex justify-between mt-2">
            <button
              onClick={handleCancel}
              id="addEducation"
              className="border border-black p-2 w-20 rounded-xl font-bold text-base hover:bg-slate-100 active:scale-95"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              id="addEducation"
              className="border border-black p-2 w-20 rounded-xl font-bold text-base hover:bg-slate-100 active:scale-95"
            >
              Add
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Education;
