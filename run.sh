#!/bin/bash

rm -rf *.xml

declare -a teams
#teams=( 1553274 1557043 1559624 1558719 1562633 1557039 1562633 1557039 )
teams=( 1674259 1676841 1674996 1674953 1672245 1674689 1675289 1676289 )
declare -a players
players=( ymat PrincipessaMilana busotir xheo cron314 pr-positive Ganna4ka xvka )
declare -a points
points=( 0 0 0 0 0 0 0 0 )
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
			#MUM=`grep -c "TypeError"  ./temp.txt`
			#if [[ ${NUM} -ne 0 || ${MUN} -ne 0 || ${MUM} -ne 0 ]]
			if [[ ${NUM} -ne 0 || ${MUN} -ne 0 ]]
				then continue;
				else break;
			fi
		done 
		# Here we have temp.txt with actual roster with points
		cp player_template.html player.html
		li_type="field"
		file="temp.txt"
		member_logo="LOGO-"
		member_class="CLASS-"
		member_name="MEMBER-"
		member_o4ki="POINTS-"
		count=10
		ravno_string="eshe_ne_byla"
		while read line
		do				
			if [ "$line" != "====================" ]
			then 
				if [  "$ravno_string" == "eshe_ne_byla"  ]
				then
					continue
				fi								
			else
				ravno_string="uzhe_byla"
				continue
			fi				
			if [ "$line" == "--------------------" ]
			then 
				li_type="bench"
				continue				
			fi			
			if [ "$line" == "++++++++++++++++++++" ]
			then 
				li_type="player"
				continue				
			fi			
			if [[ "$li_type" == "field" || "$li_type" == "bench" ]]
			then
				# name = всё, что до первого "+"
				name="${line%%+*}"
				# o4ki = всё, что перед последнего с конца "+"
				o4ki="${line##*+}"
				o4ki="${o4ki%%:*}"
				# logo = всё, что после первого с конца "/"
				logo="${line##*/}"
				if [ "$li_type" == "field" ]
				then
					class="success"
				fi
				if [ "$li_type" == "bench" ]
				then
					class="danger"
				fi
				find -type f -name player.html -exec sed -i -r "s/$member_logo$count/$logo/g" {} \;
				find -type f -name player.html -exec sed -i -r "s/$member_class$count/$class/g" {} \;
				find -type f -name player.html -exec sed -i -r "s/$member_name$count/$name/g" {} \;
				find -type f -name player.html -exec sed -i -r "s/$member_o4ki$count/$o4ki/g" {} \;
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
		
		find -type f -name player.html -exec sed -i -r 's/Левандовс\.\.\./Левандовски/g' {} \;
			find -type f -name player.html -exec sed -i -r 's/Ибрагимов\.\.\./Ибрагимович/g' {} \;
			find -type f -name player.html -exec sed -i -r 's/Эль-Шаара\.\.\./Эль-Шаарави/g' {} \;
			find -type f -name player.html -exec sed -i -r 's/Алдервейр\.\.\./Алдервейрелд/g' {} \;
			find -type f -name player.html -exec sed -i -r 's/Андре\ Гом\.\.\./Андре\ Гомеш/g' {} \;
			find -type f -name player.html -exec sed -i -r 's/Лихтштайн\.\.\./Лихтштайнер/g' {} \;
			find -type f -name player.html -exec sed -i -r 's/Блашчиков\.\.\./Блашчиковски/g' {} \;
			find -type f -name player.html -exec sed -i -r 's/Хадльвред\.\.\./Хадльвредсон/g' {} \;
			
			case "${players[$index]}" in
			"ymat")
				find -type f -name player.html -exec sed -i -r 's/Гризманн/<b>Гризманн<\/b>/g' {} \;
				;;
			"PrincipessaMilana")
				find -type f -name player.html -exec sed -i -r 's/Левандовски/<b>Левандовски<\/b>/g' {} \;
				;;
			"busotir")
				find -type f -name player.html -exec sed -i -r 's/Мюллер/<b>Мюллер<\/b>/g' {} \;
				;;
			"xheo")
				find -type f -name player.html -exec sed -i -r 's/Пайет/<b>Пайет<\/b>/g' {} \;
				;;
			"cron314")
				find -type f -name player.html -exec sed -i -r 's/Роналду/<b>Роналду<\/b>/g' {} \;
				;;
			"pr-positive")
				find -type f -name player.html -exec sed -i -r 's/Погба/<b>Погба<\/b>/g' {} \;
				;;
			"Ganna4ka")
				find -type f -name player.html -exec sed -i -r 's/Нойер/<b>Нойер<\/b>/g' {} \;
				;;
			"xvka")
				find -type f -name player.html -exec sed -i -r 's/Ибрагимович/<b>Ибрагимович<\/b>/g' {} \;
				;;
			esac
			
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
	#find -type f -name index.html -exec sed -i -r 's/Фелипе\ Ан\.\.\./Филиппок/g' {} \;
	#№find -type f -name index.html -exec sed -i -r 's/Бонавенту\.\.\./Бонавентура/g' {} \;
	#find -type f -name index.html -exec sed -i -r 's/А\.\ Масьел\.\.\./А\.\ Масьелло/g' {} \;
	#find -type f -name index.html -exec sed -i -r 's/Педру\ Пер\.\.\./Педру\ Перейра/g' {} \;
	#find -type f -name index.html -exec sed -i -r 's/Бернардес\.\.\./Бернардески/g' {} \;
	#find -type f -name index.html -exec sed -i -r 's/Куальярел\.\.\./Куальярелла/g' {} \;
	#find -type f -name index.html -exec sed -i -r 's/Н\.\ Бурдис\.\.\./Н\.\ Бурдиссо/g' {} \;
	
	find -type f -name index.html -exec sed -i -r 's/italic_start/<i>/g' {} \;
	find -type f -name index.html -exec sed -i -r 's/italic_end/<\/i>/g' {} \;
	
	
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
	
	poin="${files[6]%%_*}"
	name="${files[6]##*_}"
	name="${name%.*}"
	find -type f -name index.html -exec sed -i -r "s/7ST/$name\ \-\ $poin/g" {} \;
	last_poin=$(cat last_points/${name})
	let "poin = $poin + $last_poin"
	mv "${files[6]}" "${poin}_${name}.xml"	
	
	poin="${files[7]%%_*}"
	name="${files[7]##*_}"
	name="${name%.*}"
	find -type f -name index.html -exec sed -i -r "s/8ST/$name\ \-\ $poin/g" {} \;
	last_poin=$(cat last_points/${name})
	let "poin = $poin + $last_poin"
	mv "${files[7]}" "${poin}_${name}.xml"
	
	
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
	
	poin="${files[6]%%_*}"
	name="${files[6]##*_}"
	name="${name%.*}"
	find -type f -name index.html -exec sed -i -r "s/ALL7/$name\ \-\ $poin/g" {} \;
	
	poin="${files[7]%%_*}"
	name="${files[7]##*_}"
	name="${name%.*}"
	find -type f -name index.html -exec sed -i -r "s/ALL8/$name\ \-\ $poin/g" {} \;
	
	#phantomjs pic.js http://www.livescore.com/euro/today/
	#phantomjs stat.js http://www.sports.ru/fantasy/football/league/102422.html
	
	rm -rf *.xml
	
	git add --all && git commit -m "A new commit `date`" && git push -u origin master

done
