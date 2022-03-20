const express = require('express');
const { Agent } = require('http');
var player = require('play-sound')(opts = {}) //a media player that will spawn a new process to play the specified media
var videoPlayer = require('play-sound')(opts = {}) //a second media player is needed so we can play videos and audio at the same time on the host
let app = express()
let port = 8443
// vars that store the current process spawned that is playing the current audio or video 
let currentAudio;
let currentVideo;

//when a client connects, send them the control html page
app.get('/', (req,res)=>{
    console.log('Client connected. User-agent: ' + req.headers['user-agent']);
    res.sendFile(process.cwd()+'/html/index.html');
})

//when the /music endpoint on the server is hit, audio will play on the host
app.get('/music', (req, res)=>{
    //console.log(req.rawHeaders); TODO accept which song to play from the url params
    console.log('playing audio');
    currentAudio = player.play(process.cwd()+'/data/tavern.mp3', {mplayer:['-loop','0']}, function(err){
        if (err) {
            console.log(err)
        }
    })
    res.send('started playing tavern music');
})

//when the /hologram endpoint on the server is hit, video will play on the host
app.get('/hologram', (req, res)=>{
    console.log('displaying video');
    currentVideo = videoPlayer.play(process.cwd()+'/data/fire-low-res.mp4', {mplayer:['-loop','0']}, function(err){
        if (err) {
            console.log(err)
        }
    })
    res.send('starting Displaying hologram');
})

//endpoints to stop the looped media from playing
app.get('/stopaudio', (req, res)=>{
    //console.log(req);
    console.log('stopping audio');
    currentAudio.kill();
    res.send('stopped music');
})

app.get('/stopvideo', (req, res)=>{
    //console.log(req);
    console.log('stopping video');
    currentVideo.kill();
    res.send('stoped hollogram');
})

app.listen(port, () => {
    console.log(`Sconce App listening at http://localhost:${port}`)
})