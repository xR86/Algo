# Algo
a bit of everything
  
  
### Using push buttons as a controller for PC

![](img.png)
> Fritzing diagram available

I've used some push buttons that, when pushed, write to serial, and on the other side a python script listens and executes specific keyboard commands for the button pushed. (could have been simpler with a Leonardo board, which can emulate a keyboard i believe)


#### Installation

pip install pyserial
README: https://sourceforge.net/projects/pywin32/
install: https://sourceforge.net/projects/pywin32/files/pywin32/Build%20220/

or

pip install pypiwin32
src: https://stackoverflow.com/questions/4863056/how-to-install-pywin32-module-in-windows-7

python exe9-serial.py


Tuts:
https://petrimaki.com/2013/04/28/reading-arduino-serial-ports-in-windows-7/
https://stackoverflow.com/questions/2791839/which-is-the-easiest-way-to-simulate-keyboard-and-mouse-on-python
http://win32com.goermezer.de/content/view/136/254/
