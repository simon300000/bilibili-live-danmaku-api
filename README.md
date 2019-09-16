# bilibili live danmaku api [![npm](https://img.shields.io/npm/v/bilibili-live-danmaku-api.svg)](https://www.npmjs.com/package/bilibili-live-danmaku-api)

## Install

```shell
npm install bilibili-live-danmaku-api -S
```

## Usage

### As a package

You need some cookies of the logined user.

```javascript
const send = require('bilibili-live-danmaku-api')

const msg = /* Message */
const roomid = /* Roomid */
const SESSDATA = /* Cookie: SESSDATA */
const csrf = /* Cookie: bili_jct */
// const extra = {} /* (optional) Extra data append to POST body */

send({
  msg,
  roomid,
  SESSDATA,
  csrf
  // extra
})

```

Return: Promise\<undefined\>

#### Error handling

If the process is not successful, send() will reject.

### Fork/stdio (use with other program)

Please use `submodule` or other ways to clone the repo, install Node.js environment.

Install npm packge `got`

```sh
npm install got -g
```

And fork file `stdio.js` with node, use stdin to send danmakus.

stdin format for each line: `SESSDATA bili_jct roomid message`, a space in between.

If the process is not successful, error message will be printed to stderr.

## License

MIT

