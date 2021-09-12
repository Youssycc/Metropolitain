const express = require('express')
const app = express()
const port = 3000

//serving static files in public folder
app.use(express.static('public'))

app.listen(port, ()=> {
  console.log(`Setup test listening on http://localhost:${port}`)
})
