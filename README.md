# bilibili live danmaku api
## Install

```shell
npm install bilibili-live-danmaku-api -S
```

## Usage

You need some cookie of the logined user.

```javascript
const send = require('bilibili-live-danmaku-api')

const msg = /* Message */
const roomid = /* Roomid */
const SESSDATA = /* Cookie: SESSDATA */
const csrf = /* Cookie: bili_jct */

send({
  msg,
  roomid,
  SESSDATA,
  csrf
})

```

Return: Promise<void>

#### Error handling

If the process is not success, send() will reject.

## License

MIT

