"use strict"

let express = require('express')
let app = express()

let path = require('path')

app.use('/dist', express.static('dist'))

// everything else --> index.html
app.get('/*', (req, res) => {
   res.sendFile(path.join(__dirname, 'index.html'))
})

let host = process.env.HOST
let port = process.env.PORT || 8080
app.listen(port, host, () => {
  console.log('TypeScript Example listening on ' + (host||'') + ':' + port)
})
