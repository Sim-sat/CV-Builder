import clsx from "clsx";

function Customize(props) {
  const handleChangeColor = (color) => {
    props.changeColor(color);
  };

  const handleFontChange = (font) => {
    props.changeFont(font);
  };

  const handleLayoutChange = (layout) => {
    props.changeLayout(layout);
  };

  return (
    <>
      <div className="text-xs content-center bg-white flex gap-6 flex-col ml-5 p-5 rounded-2xl mb-8 justify-center">
        <p className="font-bold text-4xl">Layout</p>
        <div className="flex flex-row gap-6 pb-8">
          <button
            onClick={() => handleLayoutChange(0)}
            id="top"
            className={clsx(
              " w-14 h-14 border border-black text-xl rounded-md active:scale-100 hover:scale-105 overflow-hidden",
              props.layout == 0 && " border-2"
            )}
          >
            <div className="flex flex-col w-full h-full">
              <div
                style={{ backgroundColor: props.color }}
                className=" w-full h-1/2"
              ></div>
              <div className=" bg-white w-full h-1/2"></div>
            </div>
          </button>
          <button
            onClick={() => handleLayoutChange(1)}
            id="left"
            className={clsx(
              " w-14 h-14 border border-black text-xl rounded-md active:scale-100 hover:scale-105 overflow-hidden",
              props.layout == 1 && " border-2"
            )}
          >
            <div
              style={{ backgroundColor: props.color }}
              className="  w-1/2 h-full"
            ></div>
            <div className=" bg-white w-full h-1/2"></div>
          </button>
          <button
            onClick={() => handleLayoutChange(2)}
            id="right"
            className={clsx(
              " w-14 h-14 border border-black text-xl rounded-md active:scale-100 hover:scale-105 overflow-hidden",
              props.layout == 2 && " border-2"
            )}
          >
            <div className="flex w-full h-full">
              <div className=" bg-white w-1/2 h-full"></div>
              <div
                style={{ backgroundColor: props.color }}
                className=" w-1/2 h-full"
              ></div>
            </div>
          </button>
        </div>
      </div>

      <div className="text-xs content-center bg-white flex flex-col gap-4  ml-5 p-5 rounded-2xl mb-5 justify-center">
        <p className="font-bold text-4xl">Color</p>
        <div className="flex  gap-4">
          <label htmlFor="colorPicker" className="text-2xl ">
            Accent Color{" "}
          </label>
          <input
            value={props.color}
            onInput={(e) => handleChangeColor(e.target.value)}
            id="colorPicker"
            className=" w-10 h-10 rounded-full active:scale-100 hover:scale-105 cursor-pointer"
            type="color"
          ></input>
        </div>
      </div>

      <div className="text-xs content-center bg-white flex flex-col gap-5 ml-5 p-5 rounded-2xl mb-8  justify-center">
        <p className="font-bold text-4xl">Fonts</p>
        <div className="flex flex-row gap-6 pb-8">
          <button
            onClick={() => handleFontChange("serif")}
            className={clsx(
              " w-16 h-20 font-bold border border-black text-xl rounded-md active:scale-100 hover:scale-105 font-serif",
              props.font == "serif" && "border-2"
            )}
          >
            Aa <br></br> Serif
          </button>
          <button
            onClick={() => handleFontChange("sans")}
            className={clsx(
              " w-16 h-20 font-bold border border-black text-xl rounded-md active:scale-100 hover:scale-105 font-serif",
              props.font == "sans" && "border-2"
            )}
          >
            Aa <br></br> Sans
          </button>
          <button
            onClick={() => handleFontChange("mono")}
            className={clsx(
              " w-16 h-20 font-bold border border-black text-xl rounded-md active:scale-100 hover:scale-105 font-serif",
              props.font == "mono" && "border-2"
            )}
          >
            Aa <br></br> Mono
          </button>
        </div>
      </div>
    </>
  );
}

export default Customize;
