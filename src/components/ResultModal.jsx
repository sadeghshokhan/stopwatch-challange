import { useImperativeHandle, useRef } from "react"

export default function ResultModal({ targetTime , ref , remainingTime , onRestart}){
    const dialog = useRef()

    useImperativeHandle(ref , ()=>{
        return {
            open(){
                dialog.current.showModal()
            }
        }
    });

    const lostTime = remainingTime <= 0
    const calculateTimeRamaining = (remainingTime / 1000).toFixed(2);

    return (
        <dialog className="result-modal" ref={dialog}>
            <h2>{lostTime && <p>Ridi</p>}</h2>
            <p>the target time was <strong>{targetTime} seconds.</strong></p>
            <p>you stop the timer with <strong>{calculateTimeRamaining} seconds left.</strong></p>
            <form method="dialog" onSubmit={onRestart}>
                <button>close</button>
            </form>
        </dialog>
    )
}