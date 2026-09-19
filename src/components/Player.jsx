import { useRef, useState } from "react";

export default function Player() {
  const [enteredPlayerName , setEnteredPlayerName] = useState("");
  // const [submitted , setSubmitted] = useState(false);
  const inputPlayer = useRef()

  // function handleChangeName(event){
  //   setSubmitted(false)
  //   setEnteredPlayerName(event.target.value);
  // }

  function handleClickChangeName(){
    setEnteredPlayerName(inputPlayer.current.value);
    inputPlayer.current.value = ""
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ? enteredPlayerName : " <<Dear User>>"}</h2>
      <p>
        <input type="text"  ref={inputPlayer} />
        <button onClick={handleClickChangeName}>Set Name</button>
      </p>
    </section>
  );
}
