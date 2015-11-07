#!/bin/bash

strike_start="\<s\>"
strike_end="\<\/s\>"
bold_start="\<b\>"
bold_end="\<\/b\>"

rm -rf *.xml

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
				find -type f -name player.html -exec sed -i -r "s/$member$count/$line/g" {} \;
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
		mv player.html "${points[$index]}_${players[$index]}"".xml"
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
	
	#rm -rf *.xml
	
	find -type f -name index.html -exec sed -i -r 's/Фелипе\ Ан\.\.\./Фелипе\ Андерсон/g' {} \;
	find -type f -name index.html -exec sed -i -r 's/Бонавенту\.\.\./Бонавентура/g' {} \;
	find -type f -name index.html -exec sed -i -r 's/А\.\ Масьел\.\.\./А\.\ Масьелло/g' {} \;
	find -type f -name index.html -exec sed -i -r 's/Педру\ Пер\.\.\./Педру\ Перейра/g' {} \;
	find -type f -name index.html -exec sed -i -r 's/Бернардес\.\.\./Бернардески/g' {} \;
	
	today=`date +"%A %d-%m-%Y %T"`
	find -type f -name index.html -exec sed -i -r "s/TODAY/$today/g" {} \;
	
	cat bottom.html >> index.html
	
	files=( `ls -v -r *.xml` )
	
	poin="${files[0]%%_*}"
	name="${files[0]##*_}"
	name="${name%.*}"
	find -type f -name index.html -exec sed -i -r "s/1ST/$name\ \-\ $poin/g" {} \;
	last_poin=$(cat last_points/${name})
	let "poin = $poin + $last_poin"
	mv "${files[0]}" "${poin}_${name}.xml"
	
	poin="${files[1]%%_*}"
	name="${files[1]##*_}"
	name="${name%.*}"
	find -type f -name index.html -exec sed -i -r "s/2ST/$name\ \-\ $poin/g" {} \;
	last_poin=$(cat last_points/${name})
	let "poin = $poin + $last_poin"
	mv "${files[1]}" "${poin}_${name}.xml"	
	
	poin="${files[2]%%_*}"
	name="${files[2]##*_}"
	name="${name%.*}"
	find -type f -name index.html -exec sed -i -r "s/3ST/$name\ \-\ $poin/g" {} \;
	last_poin=$(cat last_points/${name})
	let "poin = $poin + $last_poin"
	mv "${files[2]}" "${poin}_${name}.xml"	
	
	poin="${files[3]%%_*}"
	name="${files[3]##*_}"
	name="${name%.*}"
	find -type f -name index.html -exec sed -i -r "s/4ST/$name\ \-\ $poin/g" {} \;
	last_poin=$(cat last_points/${name})
	let "poin = $poin + $last_poin"
	mv "${files[3]}" "${poin}_${name}.xml"	
	
	poin="${files[4]%%_*}"
	name="${files[4]##*_}"
	name="${name%.*}"
	find -type f -name index.html -exec sed -i -r "s/5ST/$name\ \-\ $poin/g" {} \;
	last_poin=$(cat last_points/${name})
	let "poin = $poin + $last_poin"
	mv "${files[4]}" "${poin}_${name}.xml"	
	
	poin="${files[5]%%_*}"
	name="${files[5]##*_}"
	name="${name%.*}"
	find -type f -name index.html -exec sed -i -r "s/6ST/$name\ \-\ $poin/g" {} \;
	last_poin=$(cat last_points/${name})
	let "poin = $poin + $last_poin"
	mv "${files[5]}" "${poin}_${name}.xml"	
	
	
	files=( `ls -v -r *.xml` )
	
	poin="${files[0]%%_*}"
	name="${files[0]##*_}"
	name="${name%.*}"
	find -type f -name index.html -exec sed -i -r "s/ALL1/$name\ \-\ $poin/g" {} \;
	
	poin="${files[1]%%_*}"
	name="${files[1]##*_}"
	name="${name%.*}"
	find -type f -name index.html -exec sed -i -r "s/ALL2/$name\ \-\ $poin/g" {} \;
	
	poin="${files[2]%%_*}"
	name="${files[2]##*_}"
	name="${name%.*}"
	find -type f -name index.html -exec sed -i -r "s/ALL3/$name\ \-\ $poin/g" {} \;
	
	poin="${files[3]%%_*}"
	name="${files[3]##*_}"
	name="${name%.*}"
	find -type f -name index.html -exec sed -i -r "s/ALL4/$name\ \-\ $poin/g" {} \;
	
	poin="${files[4]%%_*}"
	name="${files[4]##*_}"
	name="${name%.*}"
	find -type f -name index.html -exec sed -i -r "s/ALL5/$name\ \-\ $poin/g" {} \;
	
	poin="${files[5]%%_*}"
	name="${files[5]##*_}"
	name="${name%.*}"
	find -type f -name index.html -exec sed -i -r "s/ALL6/$name\ \-\ $poin/g" {} \;
	
	rm -rf *.xml
	
	git add --all && git commit -m "A new commit `date`" && git push -u origin master

done
