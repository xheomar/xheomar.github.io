#!/bin/bash

strike_start="\<s\>"
strike_end="\<\/s\>"
bold_start="\<b\>"
bold_end="\<\/b\>"

declare -a teams
teams=( 1553274 1557043 1559624 1558719 1562633 1557039 )
declare -a players
players=( pr-positive ymat xheo busotir cron314 PrincipessaMilana )
declare -a points
points=( 0 0 0 0 0 0 )
sports_ru_url="http://www.sports.ru/fantasy/football/team/"

element_count=${#teams[@]}

#while [ "$index" -lt "$element_count" ]
#do
#	echo $url${teams[$index]}".html" ${players[$index]} ${points[$index]}
#	let "index = $index + 1"
#done

while [ 1 ]
do
	cat top.html > index.html
	index=0
	while [ "$index" -lt "$element_count" ]
	do	
		echo ${players[$index]}
		while [ 1 ] 
		do 
			phantomjs getPoints.js $sports_ru_url${teams[$index]}".html" ${players[$index]} > temp.txt
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
				points[$index]=$line
				find -type f -name player.html -exec sed -i -r "s/URL/${teams[$index]}/g" {} \;
				find -type f -name player.html -exec sed -i -r "s/PLAYER/${players[$index]}/g" {} \;
				find -type f -name player.html -exec sed -i -r "s/POINTS/${points[$index]}/g" {} \;
			fi		
			let "count = $count + 1"		
		done < $file
		# After that we have upgraded player.html file which should be put in index.html instead of PLAYER<i>
		mv player.html ${points[$index]}".xml"
		#cat player.html >> index.html
		let "index = $index + 1"
	done	
	
	files=( `ls -v -r *.xml` )
	files_count=${#files[@]}
	index=0
	while [ "$index" -lt "$files_count" ]
	do
		cat ${files[$index]} >> index.html
		let "index = $index + 1"
	done
	
	rm -rf *.xml
	
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
