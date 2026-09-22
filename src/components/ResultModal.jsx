import { useImperativeHandle, useRef } from "react"

export default function ResultModal({ targetTime, ref, remainingTime, onRestart }) {
    const dialog = useRef()

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal()
            }
        }
    });

    const lostTime = remainingTime <= 0
    const calculateTimeRamaining = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
    return (
        <dialog className="result-modal" ref={dialog}>
            {lostTime && <h2>Ridi</h2>}
            {!lostTime && <h2>your score: {score}</h2>}
            <p>the target time was <strong>{targetTime} seconds.</strong></p>
            <p>you stop the timer with <strong>{calculateTimeRamaining} seconds left.</strong></p>
            <form method="dialog" onSubmit={onRestart}>
                <button>close</button>
            </form>
        </dialog>
    )
}