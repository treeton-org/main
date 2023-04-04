import express from 'express'
const app = express()
const portNumber = 3000
const sourceDir = 'dist'

app.use(express.static(sourceDir))
app.listen(portNumber, () => {
  console.log(`Web server started: http://localhost:${portNumber}`)
})
