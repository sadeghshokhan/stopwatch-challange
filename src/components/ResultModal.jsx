import { useImperativeHandle, useRef } from "react"

export default function ResultModal({result , targetTime , ref}){
    const dialog = useRef()
    useImperativeHandle(ref , ()=>{
        return {
            open(){
                dialog.current.showModal()
            }
        }
    })
    return (
        <dialog className="result-modal" ref={dialog}>
            <h2>{result}</h2>
            <p>the target time was <strong>{targetTime} seconds.</strong></p>
            <p>you stop the timer with <strong>X seconds left.</strong></p>
            <form method="dialog">
                <button>close</button>
            </form>
        </dialog>
    )
}