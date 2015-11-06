#!/bin/bash

strike_start="\<s\>"
strike_end="\<\/s\>"
bold_start="\<b\>"
bold_end="\<\/b\>"
under_start="\<u\>"
under_end="\<\/u\>"

declare -a teams
teams=( 1553274 1557043 1559624 1558719 1562633 1557039 )
declare -a players
players=( pr-positive ymat xheo busotir cron314 PrincipessaMilana )
declare -a points
points=( 0 0 0 0 0 0 )

url="http://www.sports.ru/fantasy/football/team/"

element_count=${#teams[@]}
index=0

while [ "$index" -lt "$element_count" ]
do    # Список всех элементов в массиве.
	echo $url${teams[$index]}".html" ${players[$index]} ${points[$index]}
	let "index = $index + 1"
done

exit


while [ 1 ]
do
		cat top.html > index.html

###################################################################################################################		
		echo PR-POSITIVE
		while [ 1 ] 
		do 
			phantomjs getPoints.js http://www.sports.ru/fantasy/football/team/1553274.html pr-positive > temp.txt
			NUM=`grep -c "ads.adfox.ru" ./temp.txt` 
			MUN=`grep -c "gstatic.com"  ./temp.txt`
			if [[ ${NUM} -ne 0 || ${MUN} -ne 0 ]]
				then continue;
				else break;
			fi
		done 
		# Here we have temp.txt with actual roster with points
		cp player_template.html player.html
		li_type="bold"
		file="temp.txt"
		member="MEMBER-"
		count=10
		while read line
		do			
			#echo "$line"			
			if [ "$line" == "--------------------" ]
			then 
				li_type="strike"
				continue				
			fi			
			if [ "$line" == "++++++++++++++++++++" ]
			then 
				li_type="player"
				continue				
			fi			
			if [ "$li_type" == "bold" ]
			then
				find -type f -name player.html -exec sed -i -r "s/$member$count/$bold_start$line$bold_end/g" {} \;
			fi			
			if [ "$li_type" == "strike" ]
			then
				find -type f -name player.html -exec sed -i -r "s/$member$count/$strike_start$line$strike_end/g" {} \;
			fi	
			if [ "$li_type" == "player" ]
			then
				find -type f -name player.html -exec sed -i -r "s/PLAYER/$under_start$line$under_end/g" {} \;
			fi			
			count=$((1 + $count))			
		done < $file
		# After that we have upgraded player.html file which should be put in index.html instead of PLAYER<i>		
		cat player.html >> index.html
###################################################################################################################

###################################################################################################################	
		echo YMAT
		while [ 1 ] 
		do 
			phantomjs getPoints.js http://www.sports.ru/fantasy/football/team/1557043.html ymat > temp.txt
			NUM=`grep -c "ads.adfox.ru" ./temp.txt` 
			MUN=`grep -c "gstatic.com"  ./temp.txt`
			if [[ ${NUM} -ne 0 || ${MUN} -ne 0 ]]
				then continue;
				else break;
			fi
		done 
		# Here we have temp.txt with actual roster with points
		cp player_template.html player.html
		li_type="bold"
		file="temp.txt"
		member="MEMBER-"
		count=10
		while read line
		do			
			#echo "$line"			
			if [ "$line" == "--------------------" ]
			then 
				li_type="strike"
				continue				
			fi			
			if [ "$line" == "++++++++++++++++++++" ]
			then 
				li_type="player"
				continue				
			fi			
			if [ "$li_type" == "bold" ]
			then
				find -type f -name player.html -exec sed -i -r "s/$member$count/$bold_start$line$bold_end/g" {} \;
			fi			
			if [ "$li_type" == "strike" ]
			then
				find -type f -name player.html -exec sed -i -r "s/$member$count/$strike_start$line$strike_end/g" {} \;
			fi	
			if [ "$li_type" == "player" ]
			then
				find -type f -name player.html -exec sed -i -r "s/PLAYER/$under_start$line$under_end/g" {} \;
			fi			
			count=$((1 + $count))			
		done < $file
		# After that we have upgraded player.html file which should be put in index.html instead of PLAYER<i>		
		cat player.html >> index.html	
###################################################################################################################		
		
###################################################################################################################			
		echo XHEO
		while [ 1 ] 
		do 
			phantomjs getPoints.js http://www.sports.ru/fantasy/football/team/1559624.html xheo > temp.txt
			NUM=`grep -c "ads.adfox.ru" ./temp.txt` 
			MUN=`grep -c "gstatic.com"  ./temp.txt`
			if [[ ${NUM} -ne 0 || ${MUN} -ne 0 ]]
				then continue;
				else break;
			fi
		done 
		# Here we have temp.txt with actual roster with points
		cp player_template.html player.html
		li_type="bold"
		file="temp.txt"
		member="MEMBER-"
		count=10
		while read line
		do			
			#echo "$line"			
			if [ "$line" == "--------------------" ]
			then 
				li_type="strike"
				continue				
			fi			
			if [ "$line" == "++++++++++++++++++++" ]
			then 
				li_type="player"
				continue				
			fi			
			if [ "$li_type" == "bold" ]
			then
				find -type f -name player.html -exec sed -i -r "s/$member$count/$bold_start$line$bold_end/g" {} \;
			fi			
			if [ "$li_type" == "strike" ]
			then
				find -type f -name player.html -exec sed -i -r "s/$member$count/$strike_start$line$strike_end/g" {} \;
			fi	
			if [ "$li_type" == "player" ]
			then
				find -type f -name player.html -exec sed -i -r "s/PLAYER/$under_start$line$under_end/g" {} \;
			fi			
			count=$((1 + $count))			
		done < $file
		# After that we have upgraded player.html file which should be put in index.html instead of PLAYER<i>		
		cat player.html >> index.html	
###################################################################################################################			

###################################################################################################################			
		echo BUSOTIR
		while [ 1 ] 
		do 
			phantomjs getPoints.js http://www.sports.ru/fantasy/football/team/1558719.html busotir > temp.txt
			NUM=`grep -c "ads.adfox.ru" ./temp.txt` 
			MUN=`grep -c "gstatic.com"  ./temp.txt`
			if [[ ${NUM} -ne 0 || ${MUN} -ne 0 ]]
				then continue;
				else break;
			fi
		done 
		# Here we have temp.txt with actual roster with points
		cp player_template.html player.html
		li_type="bold"
		file="temp.txt"
		member="MEMBER-"
		count=10
		while read line
		do			
			#echo "$line"			
			if [ "$line" == "--------------------" ]
			then 
				li_type="strike"
				continue				
			fi			
			if [ "$line" == "++++++++++++++++++++" ]
			then 
				li_type="player"
				continue				
			fi			
			if [ "$li_type" == "bold" ]
			then
				find -type f -name player.html -exec sed -i -r "s/$member$count/$bold_start$line$bold_end/g" {} \;
			fi			
			if [ "$li_type" == "strike" ]
			then
				find -type f -name player.html -exec sed -i -r "s/$member$count/$strike_start$line$strike_end/g" {} \;
			fi	
			if [ "$li_type" == "player" ]
			then
				find -type f -name player.html -exec sed -i -r "s/PLAYER/$under_start$line$under_end/g" {} \;
			fi			
			count=$((1 + $count))			
		done < $file
		# After that we have upgraded player.html file which should be put in index.html instead of PLAYER<i>		
		cat player.html >> index.html	
###################################################################################################################			

###################################################################################################################			
		echo CRON314
		while [ 1 ] 
		do 
			phantomjs getPoints.js http://www.sports.ru/fantasy/football/team/1562633.html cron314 > temp.txt
			NUM=`grep -c "ads.adfox.ru" ./temp.txt` 
			MUN=`grep -c "gstatic.com"  ./temp.txt`
			if [[ ${NUM} -ne 0 || ${MUN} -ne 0 ]]
				then continue;
				else break;
			fi
		done 
		# Here we have temp.txt with actual roster with points
		cp player_template.html player.html
		li_type="bold"
		file="temp.txt"
		member="MEMBER-"
		count=10
		while read line
		do			
			#echo "$line"			
			if [ "$line" == "--------------------" ]
			then 
				li_type="strike"
				continue				
			fi			
			if [ "$line" == "++++++++++++++++++++" ]
			then 
				li_type="player"
				continue				
			fi			
			if [ "$li_type" == "bold" ]
			then
				find -type f -name player.html -exec sed -i -r "s/$member$count/$bold_start$line$bold_end/g" {} \;
			fi			
			if [ "$li_type" == "strike" ]
			then
				find -type f -name player.html -exec sed -i -r "s/$member$count/$strike_start$line$strike_end/g" {} \;
			fi	
			if [ "$li_type" == "player" ]
			then
				find -type f -name player.html -exec sed -i -r "s/PLAYER/$under_start$line$under_end/g" {} \;
			fi			
			count=$((1 + $count))			
		done < $file
		# After that we have upgraded player.html file which should be put in index.html instead of PLAYER<i>		
		cat player.html >> index.html	
###################################################################################################################			

###################################################################################################################			
		echo MILANA
		while [ 1 ] 
		do 
			phantomjs getPoints.js http://www.sports.ru/fantasy/football/team/1557039.html PrincipessaMilana > temp.txt
			NUM=`grep -c "ads.adfox.ru" ./temp.txt` 
			MUN=`grep -c "gstatic.com"  ./temp.txt`
			if [[ ${NUM} -ne 0 || ${MUN} -ne 0 ]]
				then continue;
				else break;
			fi
		done 
		# Here we have temp.txt with actual roster with points
		cp player_template.html player.html
		li_type="bold"
		file="temp.txt"
		member="MEMBER-"
		count=10
		while read line
		do			
			#echo "$line"			
			if [ "$line" == "--------------------" ]
			then 
				li_type="strike"
				continue				
			fi			
			if [ "$line" == "++++++++++++++++++++" ]
			then 
				li_type="player"
				continue				
			fi			
			if [ "$li_type" == "bold" ]
			then
				find -type f -name player.html -exec sed -i -r "s/$member$count/$bold_start$line$bold_end/g" {} \;
			fi			
			if [ "$li_type" == "strike" ]
			then
				find -type f -name player.html -exec sed -i -r "s/$member$count/$strike_start$line$strike_end/g" {} \;
			fi	
			if [ "$li_type" == "player" ]
			then
				find -type f -name player.html -exec sed -i -r "s/PLAYER/$under_start$line$under_end/g" {} \;
			fi			
			count=$((1 + $count))			
		done < $file
		# After that we have upgraded player.html file which should be put in index.html instead of PLAYER<i>		
		cat player.html >> index.html	
###################################################################################################################			

		find -type f -name index.html -exec sed -i -r 's/Фелипе\ Ан\.\.\./Фелипе\ Андерсон/g' {} \;
		find -type f -name index.html -exec sed -i -r 's/Бонавенту\.\.\./Бонавентура/g' {} \;
		find -type f -name index.html -exec sed -i -r 's/А\.\ Масьел\.\.\./А\.\ Масьелло/g' {} \;
		find -type f -name index.html -exec sed -i -r 's/Педру\ Пер\.\.\./Педру\ Перейра/g' {} \;
		find -type f -name index.html -exec sed -i -r 's/Бернардес\.\.\./Бернардески/g' {} \;
		
		today=`date`
		find -type f -name index.html -exec sed -i -r "s/TODAY/$today/g" {} \;
		
		cat bottom.html >> index.html

		git add --all && git commit -m "A new commit `date`" && git push -u origin master
done
