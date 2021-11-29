axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
.then(res => {
    console.log("BITCOIN PRICE: ", res.data.ticker.price)
})
.catch(e => {
    console.log("ERROR: ", e)
})

const fetchBitcoinPrice = async () => {
    try {
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
        console.log("BITCOIN PRICE: ", res.data.ticker.price)
    } catch (e) {
        console.log("ERROR: ", e)
    }
}

// console.log(fetchBitcoinPrice)
const jokes = document.querySelector('#jokes')

const getDadJoke = async () => {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
    const res = await axios.get('https://icanhazdadjoke.com/', config)
    let joke = res.data.joke;
    console.log(joke);
    //APPENDING JOKES TO PAGE
    const newLI = document.createElement('LI')
    newLI.append(joke)
    jokes.append(newLI);
}

const btn = document.querySelector('#btn')
btn.addEventListener('click', getDadJoke)