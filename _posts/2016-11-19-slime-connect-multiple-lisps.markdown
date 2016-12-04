---
layout: post
title: Slime Connect to MultipleLisps
date: 2016-11-19 12:46
comments: true
external-url:
categories: CommonLisp
---
When you are using slime to connect emacs the default 'M-x slime' will connect to local
instance of CommonLisp. But If you want to connect to Lisps in different machine you can
use slime feature called
> M-x slime-connect

Inorder to do that we need start CommonLisp server.

##  Swank Server
You can start another local instance or start swank server on different machine.

###  Starting Local Instance of Lisp

```common-lisp
  (ql:quickload "swank")
  (swank:create-server :port 4005)
```
###  Starting Remote Instance via SSH

In order to start Lisp instance on remote machine we need to set '*loopback-interface*' to remote-ip address.

```common-lisp
 (ql:quickload "swank")
 (setf swank::*loopback-interface* "192.168.0.5")
  (swank:create-server :port 4005)
```
##  Connecting to Different Lisp

So inorder to connect to different lisp just use

> M-x slime-connect

It will ask for IP and port.

Connect and Enjoy