const express = require('express')
const app = express()
const port = 3000

app.get('/twitter', (req, res) => {
  res.send('pratapdotcom')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})