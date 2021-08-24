# sconce-hologram
IoT Device - node server controlling the features of the sconce. 

### installing

make sure the appropriate audio player is installed and is accessible in the path, for windows the tool used is mplayer. (this could work on the raspberry pi, but omxplayer is the preferred player for the pi)

### start server locally

run `npm start` and the server will run on localhost:8443

### design

hitting the root of the site sends an html home page which is how you control the app.
the html page will have buttons that make requests to the other endpoints on the server which will then fire the desired event.

/tavern will play the audio of the tavern music

### plans

future endpoints:
/fire - turn the screen on and play a fire animation
/crackle - play the audio of a fire crackling