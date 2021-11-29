const getDadJoke = async () => {
    try {
        const config = {
            headers: {
                Accept: 'application/json'
            }
        }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    } catch(e) {
        clearJokes();
        return "No jokes avaliable! Sorry :("
    }
    
        
}


const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('LI')
    newLI.append(jokeText)
    jokes.append(newLI);
}
const clearJokes = function() {
    const jokes = document.querySelector('#jokes')

    jokes.innerHTML = ''
}
const newJokeBtn = document.querySelector('#newJokeBtn')
newJokeBtn.addEventListener('click', addNewJoke)

const clearJokeBtn = document.querySelector("#clearJokeBtn")
clearJokeBtn.addEventListener('click', clearJokes)