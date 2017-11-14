var render25 = function(o) {
  if (o.value < 25 ) { o.style = { color: 'Red'};}
  else if (o.value < 30 ) { o.style = { color: 'OrangeRed'};}
  else if (o.value < 50 ) { o.style = { color: 'Orange'};}
  else if (o.value < 60 ) { o.style = { color: 'Yellow'};}
  else if (o.value < 80 ) { o.style = { color: 'YellowGreen'};}
  else if (o.value >= 80 ) { o.style = { color: 'Green'};}
  o.value = o.value + '%';
  return o;
};

var render35 = function(o) {
  if (o.value < 10 ) { o.style = { color: 'Red'};}
  else if (o.value < 20 ) { o.style = { color: 'OrangeRed'};}
  else if (o.value < 35 ) { o.style = { color: 'Orange'};}
  else if (o.value < 45 ) { o.style = { color: 'Yellow'};}
  else if (o.value < 65 ) { o.style = { color: 'YellowGreen'};}
  else if (o.value >= 65 ) { o.style = { color: 'Green'};}
  o.value = o.value + '%';
  return o;
};

var render45 = function(o) {
  if (o.value <= 0 ) { o.style = { color: 'Red'};}
  else if (o.value < 10 ) { o.style = { color: 'OrangeRed'};}
  else if (o.value < 15 ) { o.style = { color: 'Orange'};}
  else if (o.value < 20 ) { o.style = { color: 'Yellow'};}
  else if (o.value < 25 ) { o.style = { color: 'YellowGreen'};}
  else if (o.value >= 25 ) { o.style = { color: 'Green'};}
  o.value = o.value + '%';
  return o;
};

var render55 = function(o) {
  if (o.value <= 0 ) { o.style = { color: 'Red'};}
  else if (o.value < 5 ) { o.style = { color: 'OrangeRed'};}
  else if (o.value < 10 ) { o.style = { color: 'Orange'};}
  else if (o.value < 15 ) { o.style = { color: 'Yellow'};}
  else if (o.value < 20 ) { o.style = { color: 'YellowGreen'};}
  else if (o.value >= 20 ) { o.style = { color: 'Green'};}
  o.value = o.value + '%';
  return o;
};

var renderLDS = function(o) {
  if (o.value <= 0 ) { o.style = { color: 'Red'};}
  else if (o.value < 5 ) { o.style = { color: 'OrangeRed'};}
  else if (o.value < 10 ) { o.style = { color: 'Orange'};}
  else if (o.value < 15 ) { o.style = { color: 'Yellow'};}
  else if (o.value < 20 ) { o.style = { color: 'YellowGreen'};}
  else if (o.value >= 20 ) { o.style = { color: 'Green'};}
  o.value = o.value + '%';
  return o;
};

var renderChangesFn = function(o) {
  if (o.value < 10 ) { o.style = { color: 'Red'};}
  else if (o.value < 20 ) { o.style = { color: 'OrangeRed'};}
  else if (o.value < 30 ) { o.style = { color: 'Orange'};}
  else if (o.value < 35 ) { o.style = { color: 'Yellow'};}
  else if (o.value < 45 ) { o.style = { color: 'YellowGreen'};}
  else if (o.value >= 45 ) { o.style = { color: 'Green'};}
  o.value = o.value + '%';
  return o;
};

var renderChangesParts = function(o) {
  if (o.value < 10 ) { o.style = { color: 'Red'};}
  else if (o.value < 20 ) { o.style = { color: 'OrangeRed'};}
  else if (o.value < 30 ) { o.style = { color: 'Orange'};}
  else if (o.value < 35 ) { o.style = { color: 'Yellow'};}
  else if (o.value < 45 ) { o.style = { color: 'YellowGreen'};}
  else if (o.value >= 45 ) { o.style = { color: 'Green'};}
  if (o.value == 0 ) {o.value = '-';}
  else {o.value = o.value + '%';}  
  return o;
};

var renderAVG = function(o) {
  if (o.value < 2 ) { o.style = { color: 'Red'};}
  else if (o.value < 2.5 ) { o.style = { color: 'OrangeRed'};}
  else if (o.value < 3 ) { o.style = { color: 'Orange'};}
  else if (o.value < 3.5 ) { o.style = { color: 'Yellow'};}
  else if (o.value < 4 ) { o.style = { color: 'YellowGreen'};}
  else if (o.value >= 4 ) { o.style = { color: 'Green'};}
  // o.value = o.value + '%';
  return o;
};

var renderGTP = function(o) {
  o.value = o.value + '%';
  return o;
};


$(function(){
  new FancyGrid({
    theme: 'dark',
    title: 
    {
    	text: 'Football',
    	style: 
      {
      	'text-align': 'center'
    	}
  	},
    renderTo: 'container',
    width: 'fit',
    height: 'fit',
    data: data_football,
    selModel: 'rows',
    //multiSort: true,
    trackOver: true,
    textSelection: true,
    defaults: {
      type: 'string',
      resizable: true,
      sortable: true
    },
	//grouping: 
	  //{
		//  by: 'type'
	  //},
    paging: {
	  barType: 'tbar',
    pageSize: 15,
    pageSizeData: [5,10,15,20,25,50,100]
		},
    columnLines: false,	  
    columns: [
	    {
		    index: 'name', 
		    title: 'League',
		    width: 250, 
		    filter: {
        		header: true,
        		emptyText: 'Поиск по лиге'
      			}
	    },
      {
        text: 'Игры',
        columns: [
        {index: 'gp', title: 'GP', width: 45, type: 'number'},
        {index: 'gtp', title: 'G(%)', width: 45, type: 'number', render: renderGTP}
      	]
  		},
	    {index: 'avg', title: 'AVG', width: 40, type: 'number', render: renderAVG},
      {
        text: 'Исходы',
        columns: [
        {index: 'p1', title: 'П1', width: 40, type: 'number', render: renderChangesFn},
        {index: 'draw', title: 'Н', width: 40, type: 'number', render: renderChangesFn},
        {index: 'p2', title: 'П2', width: 40, type: 'number', render: renderChangesFn}
        ]
  		}, 
      {
        text: 'Тоталы больше',
        columns: [
        {index: 'over2', title: 'ТБ2.5', width: 45, type: 'number', render: render25},
        {index: 'over3', title: 'ТБ3.5', width: 45, type: 'number', render: render35},
        {index: 'over4', title: 'ТБ4.5', width: 45, type: 'number', render: render45},
        {index: 'over5', title: 'ТБ5.5', width: 45, type: 'number', render: render55}
	    	]
  		},
      {index: 'aos', title: 'ЛДС', width: 45, type: 'number', render: renderLDS},
      {index: 'fourZeroOrZeroFour', title: '4:0 0:4', width: 55, type: 'number', render: renderLDS},
      {
        text: 'П1, точный счёт',
        columns: [
        {index: 'oneZero', title: '1:0', width: 40, type: 'number', render: renderChangesFn},
        {index: 'twoZero', title: '2:0', width: 40, type: 'number', render: renderChangesFn},
        {index: 'twoOne', title: '2:1', width: 40, type: 'number', render: renderChangesFn},
        {index: 'threeZero', title: '3:0', width: 40, type: 'number', render: renderChangesFn},
        {index: 'threeOne', title: '3:1', width: 40, type: 'number', render: renderChangesFn},
        {index: 'threeTwo', title: '3:2', width: 40, type: 'number', render: renderChangesFn}
      	]
  		},
      {
        text: 'Ничья, точный счёт',
        columns: [
        {index: 'zeroZero', title: '0:0', width: 40, type: 'number', render: renderChangesFn},
        {index: 'oneOne', title: '1:1', width: 40, type: 'number', render: renderChangesFn},
        {index: 'twoTwo', title: '2:2', width: 40, type: 'number', render: renderChangesFn},
        {index: 'threeThree', title: '3:3', width: 40, type: 'number', render: renderChangesFn}
      	]
  		},
      {
        text: 'П2, точный счёт',
        columns: [
        {index: 'zeroOne', title: '0:1', width: 40, type: 'number', render: renderChangesFn},
        {index: 'zeroTwo', title: '0:2', width: 40, type: 'number', render: renderChangesFn},
        {index: 'oneTwo', title: '1:2', width: 40, type: 'number', render: renderChangesFn},
        {index: 'zeroThree', title: '0:3', width: 40, type: 'number', render: renderChangesFn},
        {index: 'oneThree', title: '1:3', width: 40, type: 'number', render: renderChangesFn},
        {index: 'twoThree', title: '2:3', width: 40, type: 'number', render: renderChangesFn}
	    	]
  		},   
      {
        text: 'Количество голов',
        columns: [
        {index: 'one', title: '1', width: 40, type: 'number', render: renderChangesFn},
        {index: 'two', title: '2', width: 40, type: 'number', render: renderChangesFn},
        {index: 'three', title: '3', width: 40, type: 'number', render: renderChangesFn},
        {index: 'four', title: '4', width: 40, type: 'number', render: renderChangesFn},
        {index: 'five', title: '5', width: 40, type: 'number', render: renderChangesFn},
        {index: 'sixandmore', title: '>5', width: 45, type: 'number', render: renderChangesFn}
       ]
  		}, 
      {
        text: '1й тайм',
        columns: [
        {index: 'partOneTm05', title: 'ТМ0.5', width: 55, type: 'number', render: renderChangesParts},
        {index: 'partOneTb15', title: 'ТБ1.5', width: 55, type: 'number', render: renderChangesParts}
       ]
  		}, 
      {
        text: '2й тайм',
        columns: [
        {index: 'partTwoTm05', title: 'ТМ0.5', width: 55, type: 'number', render: renderChangesParts},
        {index: 'partTwoTb15', title: 'ТБ1.5', width: 55, type: 'number', render: renderChangesParts}
       ]
  		}, 
      {
        text: 'Таймы',
        columns: [
        {index: 'partOneMore', title: '1>2', width: 40, type: 'number', render: renderChangesParts},
        {index: 'partsEqual', title: '1=2', width: 40, type: 'number', render: renderChangesParts},
        {index: 'partTwoMore', title: '1<2', width: 40, type: 'number', render: renderChangesParts}
       ]
  		}, 
	    {index: 'draw25', title: 'Н+ТБ2.5', width: 65, type: 'number', render: renderChangesFn},
	    {index: 'bts', title: 'ОЗ', width: 40, type: 'number', render: renderChangesFn},
      {index: 'bnts25', title: 'ОЗН+ТБ2.5', width: 80, type: 'number', render: renderChangesFn},
      {index: 'ldsTrend', title: 'ЛДС Тренд', width: 500, type: 'string'},
      {index: 'firstDay', title: 'Начало тура', width: 100, type: 'string'},
      {index: 'lastDay', title: 'Конец тура', width: 100, type: 'string'},
	    {index: 'date', title: 'Дата генерации', width: 130, type: 'string'}
    ]
  });
});



$(function(){
  new FancyGrid({
    theme: 'blue',
    title: 
    {
    	text: 'Handball',
    	style: 
      {
      	'text-align': 'center'
    	}
  	},
    renderTo: 'container2',
    width: 'fit',
    height: 'fit',
    data: data_handball,
    selModel: 'rows',
    //multiSort: true,
    trackOver: true,
    textSelection: true,
    defaults: {
      type: 'string',
      resizable: true,
      sortable: true
    },
	/*grouping: 
	  {
		  by: 'type'
	  },*/
	  paging: {
	  barType: 'tbar',
    pageSize: 15,
    pageSizeData: [5,10,15,20,25,50,100]
		},
    columnLines: false,	  
    columns: [
	    {
		    index: 'name', 
		    title: 'League',
		    width: 400, 
		    filter: {
        		header: true,
        		emptyText: 'Поиск по лиге'
      			}
	    },
		{index: 'gp', title: 'GP', width: 40, type: 'number'},
	    	{index: 'avg', title: 'AVG', width: 60, type: 'number', render: renderAVG},
		{index: 'draw', title: 'Н', width: 50, type: 'number', render: renderChangesFn},
	    	{index: 'date', title: 'Дата', width: 130, type: 'string'}
    ]
  });
  });