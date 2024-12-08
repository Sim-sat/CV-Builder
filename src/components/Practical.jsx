import { useState } from "react";

import moment from "moment";
import { MdWork } from "react-icons/md";

import { IoIosArrowDown } from "react-icons/io";
import clsx from "clsx";
import { v4 as uuidv4 } from "uuid";

function Practical(props) {
  const [showForm, setShowForm] = useState(false);
  const [end, setEnd] = useState("");
  const [from, setFrom] = useState("");
  const [description, setDescription] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [open, setOpen] = useState(false);

  function handleFromChange(e) {
    const date = moment(e.target.value);
    setFrom(date.format("MM.YYYY"));
  }

  function handleEndChange(e) {
    const date = moment(e.target.value);
    setEnd(date.format("MM.YYYY"));
  }

  function handleButton() {
    setShowForm(true);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleNameChange(e) {
    setCompanyName(e.target.value);
  }

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleLocationChange(e) {
    setLocation(e.target.value);
  }

  const handleSubmit = (e) => {
    setShowForm(false);
    e.preventDefault();
    const newProfessional = {
      id: uuidv4(),
      companyName,
      title,
      from,
      end,
      location,
      description,
    };
    props.professionalEntry((prev) => {
      return [...prev, newProfessional];
    });

    setEnd("");
    setFrom("");
    setDescription("");
    setTitle("");
    setCompanyName("");
    setLocation("");
  };

  function handleCancel(e) {
    e.preventDefault();
    setShowForm(false);
  }

  return (
    <div
      className={clsx(
        "text-xs bg-white  ml-5 p-5 rounded-2xl mb-5 justify-center grow-0"
      )}
    >
      <p
        onClick={() => setOpen(!open)}
        className="font-bold text-3xl cursor-pointer flex  flex-row gap-4"
      >
        <MdWork
          className={clsx(
            "self-center transition-all duration-150",
            open && "scale-105"
          )}
        />
        Experience
        <IoIosArrowDown
          className={clsx(
            "scale-75 self-center ml-auto transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </p>
      {open && !showForm && (
        <>
          {props.listItems}
          <div className="flex content-center justify-center">
            <button
              onClick={handleButton}
              className="border border-grey rounded-xl p-3 text-xl text-center mt-10 hover:bg-slate-100 active:scale-95"
            >
              + Experience
            </button>
          </div>
        </>
      )}
      {showForm && open && (
        <form>
          <label htmlFor="name" className="font-bold text-base">
            Company Name
          </label>
          <br></br>
          <input
            onChange={handleNameChange}
            type="text"
            id="name"
            placeholder="First Company Name"
            className="m-2 w-full rounded-xl bg-slate-100 p-2 text-base text-base/1"
          ></input>
          <br></br>
          <label htmlFor="tile" className="font-bold  text-base">
            Title
          </label>
          <br></br>
          <input
            onChange={handleTitleChange}
            id="title"
            placeholder="Enter tile"
            className="m-2 rounded-xl bg-slate-100 w-full p-2 text-base"
            type="text"
          ></input>
          <br></br>
          <label htmlFor="start" className="font-bold  text-base">
            From
          </label>
          <br></br>
          <input
            onChange={handleFromChange}
            id="start"
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
            className="m-2 rounded-xl w-full bg-slate-100  p-2 text-base"
            type="date"
          ></input>
          <br></br>
          <label htmlFor="location" className="font-bold  text-base">
            Location
          </label>
          <br></br>
          <input
            onChange={handleLocationChange}
            id="location"
            placeholder="City, Country"
            className="m-2 rounded-xl w-full bg-slate-100  p-2 text-base"
            type="text"
          ></input>
          <br></br>
          <label htmlFor="description" className="font-bold  text-base">
            Description
          </label>
          <br></br>
          <textarea
            onChange={handleDescriptionChange}
            id="description"
            className="m-2 rounded-xl bg-slate-100 w-full p-2 text-base"
            placeholder="Enter Description"
          >
            {" "}
          </textarea>
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

export default Practical;
