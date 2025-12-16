import { createContext, useState } from "react"

type Player = {
    score:number[],
    diceSaved:number[]
}

type PlayerContextType = {
    players: Player[],
    setPlayers: (p: Player[]) => void
}
export const PlayerContext = createContext<PlayerContextType | undefined>(undefined)

export default function YathzeeContext({ children }: { children: React.ReactNode }) {
    const [players, setPlayers] = useState<Player[]>([])
    return (
        <PlayerContext.Provider value={{ players, setPlayers }}>
            {children}
        </PlayerContext.Provider>
    )
}