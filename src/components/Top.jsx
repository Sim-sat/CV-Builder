import clsx from "clsx";
import { useState } from "react";
import { BiBookContent } from "react-icons/bi";
import { VscSymbolColor } from "react-icons/vsc";

function Top({ customizeState }) {
  const [button, setButton] = useState(0);

  const setToZero = () => {
    setButton(0);
    customizeState(0);
  };

  const setToOne = () => {
    setButton(1);
    customizeState(1);
  };

  return (
    <div className="text-xs content-center  bg-white flex flex-col max-h-48 ml-5 p-5 rounded-2xl mb-5 justify-center shrink-0">
      <button
        onClick={setToZero}
        className={clsx(
          " h-20 text-2xl font-bold justify-center flex items-center rounded-xl active:scale-100 hover:scale-105",
          button === 0 && "bg-slate-100"
        )}
      >
        <BiBookContent className="mr-2" />
        Content
      </button>
      <button
        onClick={setToOne}
        className={clsx(
          " h-20 text-2xl font-bold justify-center flex items-center rounded-xl active:scale-100 hover:scale-105",
          button === 1 && "bg-slate-100"
        )}
      >
        {" "}
        <VscSymbolColor className="mr-2" />
        Customize
      </button>
    </div>
  );
}

export default Top;
