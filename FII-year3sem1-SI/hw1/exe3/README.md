# Algo
a bit of everything
  

## SI / Homework 1 / Exercise 3

### Workflow

![](architecture-exe3.png)

### Requirements:
+ `pip install pycrypto`

### Functionality

There are 3 nodes in the network:
+ node A - port 1594
+ key manager - port 1595, 1596
+ node B - port 1597
  
Run in the following order: (you can alternately use ./)
+ `python2 key_manager.py`
+ `python2 nodeB.py`
+ `python2 nodeA.py CFB|ECB input.txt`
  
KM is strictly a server, while A and B are servents (both server and client).  
KM reuses port 1595 for sending keys to A and B.  
A exposes port 1596, and B exposes port 1597.  

