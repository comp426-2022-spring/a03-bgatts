import { flipper } from './modules/flip.js';
import { multFlips } from './modules/flips.js';
import { guesser_H } from './modules/guess-flip-H.js';
import { guesser_T } from './modules/guess-flip-T.js';



import express from "express"

const app = express()

//app.use((req, res, next) => {
//    res.status(404)
//  })

app.get('/',(req,res)=>{

})

// Default response for any other request
app.use(function(req, res){
    res.status(404).send('404 NOT FOUND')
});

app.get('/app/',(req,res)=>{
    res.status(200).send('OK')
    res.setHeader('Content-Type','text/html')
})


app.get('/app/flip/',(req,res)=>{
    res.status(200).send('OK')
    res.setHeader('Content-Type','text/html')
    let flip = flipper()
    res.send(flip)
})

app.get('/app/flips/:number',(req,res)=>{
    res.status(200).send('OK')
    res.setHeader('Content-Type','text/html')
    let num = req.params.number
    let flips = multFlips(num)
    res.send({flips: flips[0], results: flips[1]})

})

app.get('/app/flip/call/heads',(req,res)=>{
    res.status(200).send('OK')
    res.setHeader('Content-Type','text/html')
    let guess = guesser_H()
    res.send(guess)
})


app.get('/app/flip/call/tails',(req,res)=>{
    res.status(200).send('OK')
    res.setHeader('Content-Type','text/html')
    let guess = guesser_T()
    res.send(guess)
})



const server = app.listen(HTTP_PORT, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%',HTTP_PORT))
});