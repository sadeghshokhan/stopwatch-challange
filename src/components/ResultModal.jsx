export default function ResultModal({result , targetTime}){
    return (
        <dialog open>
            <h2>{result}</h2>
            <p>the target time was <strong>{targetTime} seconds.</strong></p>
            <p>you stop the timer with <strong>X seconds left.</strong></p>
            <form method="dialog">
                <button>close</button>
            </form>
        </dialog>
    )
}