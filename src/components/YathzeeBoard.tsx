import { useEffect, useState } from "react";
import DieThrow from "./yathzeeComponent/DieThrow";
import DieZone from "./yathzeeComponent/DieZone";
import ThrowButton from "./yathzeeComponent/ThrowButton";

export type Player = {
    score:number[],
    diceSaved:number[]
}

export default function YathzeeBoard(){
const [playerList, setPlayerList] = useState<Player[]>([])
const [onBoardDice, setOnBoardDice] = useState<number[]>([])
const [numberOfThrow, setNumberOfThrow] = useState<number>(0)
const [turn, setTurn] = useState<number>(0)

    function clearPlayer(){
        setPlayerList([])
    }

    function clearDice(){
        setOnBoardDice([])
    }

    function clearNumberOfThrow(){
        setNumberOfThrow(0)
    }

    function clearTurn(){
        setTurn(0)
    }
    //Liste de test
    useEffect(()=>{
        setPlayerList([
            {diceSaved: [1,4,6,3,6], score: []},
            {diceSaved: [4,4,4,4,4], score: []},
            {diceSaved: [1,2,3,4,5], score: []}
        ])
    }, [])


    return(<>
    <DieZone >
        <DieThrow diceFace={2} />
    </DieZone>
    <ThrowButton/>
    </>)
}