# sconce-hologram
IoT Device - node server controlling the features of the sconce. 

### installing

set up raspberry os https://www.tomshardware.com/reviews/raspberry-pi-set-up-how-to,6029.html

install screen drivers https://www.elecrow.com/wiki/index.php?title=RC050_5_inch_HDMI_800_x_480_Capacitive_Touch_LCD_Display_for_Raspberry_Pi/_PC/_SONY_PS4

make sure the appropriate audio player is installed and is accessible in the path, mplayer preferred
make sure node is installed 
```bash
sudo su
curl -fsSL https://deb.nodesource.com/setup_17.x | bash -
apt install nodejs
```

### start server

NOTE: be sure to run as the pi user, NOT root
run `npm start` and the server will run on localhost:8443

### design

hitting the root of the site sends an html home page which is how you control the app.
the html page will have buttons that make requests to the other endpoints on the server which will then fire the desired event.

/tavern will play the audio of the tavern music

### plans

future endpoints:
/fire - turn the screen on and play a fire animation
/crackle - play the audio of a fire crackling

### connecting to server

ip address is (last checked) 192.168.1.221

ssh to the server for maintenance, connect to server to activate

maintenance credentials: pi:Ra$pb3rry

### uploading files to the server

before uploading video files, make sure they fit the proper resolution for the screen (800x480), can use this website to translate video resolutions online https://www.onlineconverter.com/resize-video
(could resize video files with args to mplayer, but thats a future improvements)

scp .\<file on local machine>.mp4 pi@192.168.1.221:/home/pi/sconce-hologram/data