import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import clsx from 'clsx';

function Example({loadExample, clearResume}){

    return (
        <div className="text-xs content-center bg-white flex gap-6 flex-row ml-5rounded-2xl ml-5 mb-8  justify-center rounded-2xl">
            <button onClick={clearResume} className="text-red-600 w-1/2 font-bold text-xl flex gap-4 active:scale-100 hover:scale-105 m-4 ml-8 p-2 items-center"><FaTrash className="self-center justify-center" /> Clear Resume</button>
            <button onClick={loadExample} className=" w-1/2 font-bold text-xl flex gap-4 active:scale-100 hover:scale-105 bg-slate-100 mr-8 m-4 p-2 rounded-xl justify-center ">Load Example</button>
        </div>
    )
}

export default Example;