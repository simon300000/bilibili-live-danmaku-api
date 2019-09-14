const got = require('got')

module.exports = async ({ msg, SESSDATA, csrf, roomid }) => {
  const { body } = await got('https://api.live.bilibili.com/msg/send', {
    headers: { Cookie: `SESSDATA=${SESSDATA}` },
    form: true,
    json: true,
    body: {
      color: '16777215',
      fontsize: '25',
      msg,
      rnd: '1568480554',
      roomid,
      csrf_token: csrf,
      csrf
    }
  })
  if (body.code) {
    throw body.message
  }
}
