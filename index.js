import express from 'express'
import path from 'path'

const PORT = process.env.PORT ?? 5000
const app = express()
const __dirname = path.resolve()

app.get('/', (req, res) => {
    // res.send('<h1>Hello Express!</h1>')
    res.sendFile(path.resolve(__dirname, 'static', 'index.html'))

})

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}...`)
})