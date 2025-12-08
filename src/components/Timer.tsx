import { useEffect, useState } from "react";

function Timer (){
    const [timer, setTimer] = useState<number>(0)
    const [isRunning, setIsRunning] = useState<boolean>(false)
    

    useEffect (() => {
        startTimer
        return stopTimer
    }, [])

    return <div>
        <p>{ timer }</p>
        <button onClick={isRunning? stopTimer : startTimer}> {isRunning? "stop timer" : "start timer"} </button>
    </div>

    function startTimer(){
        setIsRunning(true)
    } 

    function stopTimer(){
        setIsRunning(false)
    }
}

export default Timer