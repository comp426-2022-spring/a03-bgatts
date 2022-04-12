import { flipper } from './modules/flip.js';
import { multFlips } from './modules/flips.js';
import { guesser_H } from './modules/guess-flip-H.js';
import { guesser_T } from './modules/guess-flip-T.js';


import express from "express"
import minimist from "minimist"

const app = express()
const args = minimist(process.argv.slice(2))
args["port"]





//app.use((req, res, next) => {
//    res.status(404)
//  })

app.get('/',(req,res)=>{

})


app.use(function(req, res, next){
    res.setHeader('Content-Type','text/html')
    next();
});

// Default response for any other request
app.use(function(req, res, next){
    next()
    res.status(404).send('404 NOT FOUND')
    //console.log('here we go agian')
});




app.get('/app/',(req,res)=>{
    res.status(200).send('200 OK')
})


app.get('/app/flip/',(req,res)=>{
    res.status(200)
    let flip = flipper()
    res.send(flip)
})

app.get('/app/flips/:number',(req,res)=>{
    res.status(200)
    let num = req.params.number
    let flips = multFlips(num)
    res.send({flips: flips[0], results: flips[1]})

})

app.get('/app/flip/call/heads',(req,res)=>{
    res.status(200)
    let guess = guesser_H()
    res.send(guess)
})


app.get('/app/flip/call/tails',(req,res)=>{
    res.status(200)
    let guess = guesser_T()
    res.send(guess)
})


const port = args.port || 5000;
//app.listen(port, ()=> console.log(`listneing on port ${server}...`))

const server = app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});