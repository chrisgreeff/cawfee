const url = require('url')
const fs = require('fs')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const app = express()

const PORT = process.env.PORT || 8080

app.use(bodyParser.urlencoded({ extended: 'true' }))
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
app.use(methodOverride())

const root = path.join(__dirname, 'web')
app.use((req, res, next) => {
  let filename = url.parse(req.url)
  filename = filename.href.split(filename.search).join('')
  filename = filename.substring(filename.indexOf('/web'))

  req.url = filename

  if (!fs.existsSync(path.join(root, filename))) {
    req.url = '/index.html'
  }

  return next()
})

app.use(express.static(root))

app.listen(PORT)
console.log(`App listening on port ${PORT}`)
