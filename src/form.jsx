import { useState } from "react";

function Form({onSubmit}){

    const [item, setItem] = useState("");

function handleSubmit(event) {
    event.preventDefault();
    if (item === "") return

    onSubmit(item);
    setItem("");
  }
return(
<form action="" onSubmit={handleSubmit}>
<label htmlFor="inp1">Enter your todos</label><br />
<input type="" id="inp1" onChange={(e) => {
  setItem(e.target.value)
}} value={item} /> <br />
<button className="add" >Add Todos</button>
</form>
)

}

export default Form;
