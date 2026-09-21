import { useRef, useState } from "react"
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const timer = useRef()
    const modalRef = useRef()

    const timerIsActive = timeRemaining < targetTime * 1000 && timeRemaining > 0;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        modalRef.current.open();
    }

    function handleRestartClick() {
        setTimeRemaining(targetTime * 1000);
    };


    function handleStartClick() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRamaining => prevTimeRamaining - 10)
        }, 10);
    }

    function handleStopClick() {
        clearInterval(timer.current)
        modalRef.current.open();
    }

    return (
        <>
            {<ResultModal result={"you lost"} targetTime={targetTime} ref={modalRef} remainingTime={timeRemaining} onRestart={handleRestartClick} />}
            <section className="challenge">
                <h2>{title}</h2>
                {/* <p>{timerExpired && "you lost!"}</p> */}
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? "'s" : ""}
                </p>
                <button onClick={timerIsActive ? handleStopClick : handleStartClick}>
                    {timerIsActive ? "stop challenge" : "start challenge"}
                </button>
                <p className={timerIsActive ? "active" : undefined}>
                    {timerIsActive ? "time is running..." : "just click start"}
                </p>
            </section>
        </>
    )
}