#!/bin/bash

count=1

while [ 1 ]
do
	phantomjs pic.js http://www.livescore.com/euro/today/
	#sleep $count
	sleep 1
	let "count = $count + 1"
done
