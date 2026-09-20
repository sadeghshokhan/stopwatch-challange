import { useRef, useState } from "react"

export default function TimerChallenge({title , targetTime}){
    const [timerExpired , setTimerExpired] = useState(false);
    const [timerStarted , setTimerStarted] = useState(false);
    const timer = useRef()


    function handleStartClick(){
    timer.current = setTimeout(() => {
        setTimerExpired(true);
    }, targetTime * 1000 );

    setTimerStarted(true);
    }

    function handleStopClick(){
        clearTimeout(timer.current)
    }

    return (
        <section className= "challenge">
            <h2>{title}</h2>
            <p>{timerExpired && "you lost!"}</p>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? "'s" : ""}
            </p>
            <button onClick={timerStarted ? handleStopClick : handleStartClick}>
                {timerStarted ? "stop challenge" : "start challenge"}
            </button>
            <p className={timerStarted ? "active" : undefined}>
                {timerStarted ? "time is running..."  : "just click start"}
            </p>
        </section>
    )
}