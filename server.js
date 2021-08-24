const express = require('express');
const { Agent } = require('http');
var player = require('play-sound')(opts = {})
let app = express()
let port = 8443

app.get('/', (req,res)=>{
    console.log('Client connected. User-agent: ' + req.headers['user-agent']);
    res.sendFile(process.cwd()+'/html/index.html');
})

app.get('/tavern', (req, res)=>{
    console.log('playing audio');
    player.play(process.cwd()+'/tavern.mp3', function(err){
        if (err) {
            console.log(err)
        }
    })
    res.send('playing tavern music');
})

// app.get()

app.listen(port, () => {
    console.log(`Sconce App listening at http://localhost:${port}`)
})