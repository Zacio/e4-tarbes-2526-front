import { useEffect, useState } from "react";

type Joke = {id: string; joke: string} 

function JokeComponent (){
    const [joke, setJoke] = useState <string>("loading...")

    function loading(){
        setJoke("loading...")
    }

    useEffect(() =>{
        fetch('https://icanhazdadjoke.com/', {
            headers: {Accept: 'application/json' }
        }).then(response => response.json()).then((data: Joke) => setJoke(data.joke))
    }, [])

    function newJoke(){
        loading()
        setTimeout(()=>{
            fetch('https://icanhazdadjoke.com/', {
            headers: {Accept: 'application/json' }
        }).then(response => response.json()).then((data: Joke) => setJoke(data.joke))
        }, 1000)
    }

    return <div>
        <p>{ joke }</p>
        <button onClick={newJoke}>New joke</button>
    </div>
}

export default JokeComponent