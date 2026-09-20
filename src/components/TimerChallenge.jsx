export default function TimerChallenge({title , targetTime}){
    return (
        <section className= "challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? "'s" : ""}
            </p>
            <button>
                start challenge
            </button>
            <p className="">
                time is running...
            </p>
        </section>
    )
}