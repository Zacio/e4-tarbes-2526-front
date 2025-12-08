import { useReducer } from "react";

type State = { count: number }

type Action = { type: 'inc' } | { type: 'dec' } | { type: 'reset' }

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'inc': return { count: state.count + 1 }
        case 'dec': return { count: state.count - 1 }
        case 'reset': return { count: 0 }
    }
}

function Counter(){
    const [state, dispatch] = useReducer(reducer, {count: 0})
    return <div>
        <p>{state.count}</p>
        <button onClick={()=>{dispatch({type: 'inc'})}}>inc</button>
        <button onClick={()=>{dispatch({type: 'dec'})}}>dec</button>
        <button onClick={()=>{dispatch({type: 'reset'})}}>reset</button>
    </div>
}

export default Counter