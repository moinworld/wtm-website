# FirebaseRoom

FirebaseRoom is a sample that shows basic usage of FirebaseArduino to push
sensor data to Firebase, and trigger actuators from Firebase.

## Software setup

1. Install [Arduino 1.6.12](https://www.arduino.cc/en/Main/Software)
1. Install Arduino ESP8266 core :
	- Start Arduino and open File -> Preferences window
	- Enter "http://arduino.esp8266.com/stable/package_esp8266com_index.json" into Additional Board Manager URLs field
	- Open Boards Manager from Tools > Board menu and install esp8266 platform 
1. Install [Silicon Labs VCP driver](https://www.silabs.com/products/mcu/Pages/USBtoUARTBridgeVCPDrivers.aspx) (for MacOSX and Windows)
1. Download [FirebaseArduino library](https://github.com/googlesamples/firebase-arduino/archive/master.zip)
	- In Arduino Software click `Sketch > Include Library > Add .ZIP Library...`
	- Choose the just downloaded file `firebase-arduino-master.zip`

## Hardware setup

1. Get a [Wio Link](http://www.seeedstudio.com/depot/Wio-Link-p-2604.html) board
1. Connect:
  - a [Grove - Vibration Motor](http://www.seeedstudio.com/wiki/Grove_-_Vibration_Motor) on `I2C`
  - a [Grove - Light Sensor](http://www.seeedstudio.com/wiki/Grove_-_Light_Sensor) on `Analog`
  - a [Grove - Red LED](http://www.seeedstudio.com/wiki/Grove_-_Red_LED) on `Digital1`
  - a [Grove - Button](http://www.seeedstudio.com/wiki/Grove_-_Button) on `Digital0`
  - a [Grove - Mini Fan](http://www.seeedstudio.com/wiki/Grove_-_Mini_Fan) on `Digital2`

1. Connect the board to you PC with the USB cable (it needs to stay connected to have power all the time)

## Configuration


1. In Arduino: Open `File > Examples > FirebaseArduino > FirebaseRoom_ESP8266` 
(you can close the other Window)
1. In the file replace `WIFI_SSID` "SSID" with `WIFI_SSID` "Mindspace_kloepperhaus"
1. Replace with the `WIFI_PASSWORD` 
1. Go to https://firebase.google.com/ and create a new Project
1. Go to Project Settings
1. Copy the `Project-ID`
1. Replace (in the Arduino file) at `FIREBASE_HOST` the word `example` with the Project-ID
(ex: '#define FIREBASE_HOST "wtm-iotworkshop.firebaseio.com"')
1. In Firebase,still in the settings, go to `Database`
1. Click `Show` on the database secret
1. Copy the `Secret`
1. Replace `FIREBASE_AUTH` "token_or_secret" with your 'Secret'
(ex. #define FIREBASE_AUTH "fCDTy92kAvgFPIi0rt2uVjPv9ysTH4pNg3IM7S")
1. Select the board `Tools > Board > NodeMCU 1.0`
1. Select the serial port  `Tools > Port > USBtoUART or COM3`
1. Select the upload speed `Tools > Upload Speed > 115200`
1. Click `Sketch > Upload` or the arrow button

## Play

1. Go to your Firebase `Database` section (your actual database, not the settings sections)
1. If everything went well, you should see here now 5 entries in the database (if not, you can press the reset button on the board or/and re-check your settings)
1. Set `cooldown` to `1` then `0`
1. Watch the Ventilation turn on and off in the room
1. Same for `redlight` * and `brrr`
1. Press the push button in the room
1. Watch the `pushbutton` value change in the Firebase console
1. Put one hand on the light sensor
1. Watch the `sunlight` value change in the Firebase console

* If the red LED is not turning on, try this two fixes:
 - change the direction of the LED (switch the legs on + and -)
 - turn the potentiometer (that orange thing with the plus) completely to one side (you might need a screwdriver)

1. Go ahead and distribute the components in your Lego Smart House and add some logic to it (eg. If someone presses the button, the ventilation turns on) 
