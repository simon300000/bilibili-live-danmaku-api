const readline = require('readline')
const send = require('.')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

rl.on('line', line => {
  const [SESSDATA, csrf, roomid, ...message] = line.split(' ')
  const msg = message.join(' ')
  send({ SESSDATA, csrf, roomid, msg }).catch(console.error)
})
