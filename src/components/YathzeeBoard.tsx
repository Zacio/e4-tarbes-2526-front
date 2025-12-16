import { useContext, useEffect, useState } from "react";
import DieThrow from "./yathzeeComponent/DieThrow";
import DieZone from "./yathzeeComponent/DieZone";
import ThrowButton from "./yathzeeComponent/ThrowButton";
import YathzeeContext, { PlayerContext } from "./yathzeeComponent/YathzeeContext";



export default function YathzeeBoard() {
const context = useContext(PlayerContext)
    if(!context){
        console.log(context)
        throw new Error('context not found')
        
    }


    const {players, setPlayers} = context;

    const [onBoardDice, setOnBoardDice] = useState<number[]>([])
    const [numberOfThrow, setNumberOfThrow] = useState<number>(0)
    const [turn, setTurn] = useState<number>(0)

    function clearDice() {
        setOnBoardDice([])
    }

    function clearNumberOfThrow() {
        setNumberOfThrow(0)
    }

    function clearTurn() {
        setTurn(0)
    }


    //Liste de test
    useEffect(() => {
        setPlayers([
            { diceSaved: [1, 4, 6, 3, 6], score: [] },
            { diceSaved: [4, 4, 4, 4, 4], score: [] },
            { diceSaved: [1, 2, 3, 4, 5], score: [] }
        ])
    }, [])


    return (<>
        <p>{players[0] ? players[1].diceSaved : "No player"}</p>
        <DieZone >
            <DieThrow diceFace={2} />
        </DieZone>
        <ThrowButton />
    </>)
}