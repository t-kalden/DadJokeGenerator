const getDadJoke = async () => {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
    const res = await axios.get('https://icanhazdadjoke.com/', config)
    return res.data.joke;
    console.log(joke);
    //APPENDING JOKES TO PAGE
    
}

const jokes = document.querySelector('#jokes')

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('LI')
    newLI.append(jokeText)
    jokes.append(newLI);
}

const btn = document.querySelector('#btn')
btn.addEventListener('click', addNewJoke)