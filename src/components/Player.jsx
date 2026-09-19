import { useState } from "react";

export default function Player() {
  const [enteredPlayerName , setEnteredPlayerName] = useState("");
  const [submitted , setSubmitted] = useState(false);

  function handleChangeName(event){
    setSubmitted(false)
    setEnteredPlayerName(event.target.value);
  }

  function handleClickChangeName(){
    setSubmitted(true)
  }
  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayerName : "unknown entity"}</h2>
      <p>
        <input type="text" value={enteredPlayerName} onChange={handleChangeName} />
        <button onClick={handleClickChangeName}>Set Name</button>
      </p>
    </section>
  );
}
