function Personal(props) {
  return (
    <div className="text-xs  bg-white  ml-5 p-5 rounded-2xl mb-5 shrink">
      <h2 className="font-bold text-3xl mb-2">Personal Details</h2>
      <form>
        <label htmlFor="name" className="font-bold text-base">
          Full Name
        </label>
        <br></br>
        <input
          onChange={props.nameChange}
          id="name"
          placeholder="First and last name"
          value={props.name}
          className="m-2 w-full rounded-xl bg-slate-100 p-2 text-base text-base/1"
          type="text"
        ></input>
        <br></br>
        <label htmlFor="email" className="font-bold  text-base">
          Email
        </label>
        <br></br>
        <input
          onChange={props.emailChange}
          value={props.email}
          id="email"
          placeholder="Enter email"
          className="m-2 rounded-xl bg-slate-100 w-full p-2 text-base"
          type="email"
        ></input>
        <br></br>
        <label htmlFor="phone" className="font-bold text-base">
          Phone Number
        </label>
        <br></br>
        <input
          onChange={props.phoneChange}
          value={props.phone}
          id="phone"
          placeholder="Enter phone number"
          className="m-2 rounded-xl bg-slate-100 w-full p-2 text-base"
          type="tel"
        ></input>
        <br></br>
        <label htmlFor="adress" className="font-bold  text-base">
          Adress
        </label>
        <br></br>
        <input
          onChange={props.adressChange}
          value={props.adress}
          id="adress"
          placeholder="City, Country"
          className="m-2 rounded-xl w-full bg-slate-100  p-2 text-base"
          type="text"
        ></input>
        <br></br>
      </form>
    </div>
  );
}

export default Personal;
