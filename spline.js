$(function() {  
  $('#spline').highcharts({
    tooltip: {
      followPointer: true
    },
    chart: {
      type: 'spline',
      marginTop: 45,
      marginRight: 20
    },
    title: {
      text: 'Я вашу лигу СПАЛ'
    },
    xAxis: {
      categories: ['0', '1', '2', '3']
    },
    yAxis: {
      //allowDecimals: false,
      title: false
    },
    plotOptions: {
      bar: {
        stacking: 'percent'
      }
    },
    series: 
	[
		{
		  name: 'xheo'
		}, 
		{
		  name: 'positive'
		}, 
		{
		  name: 'busotir'
		}, 
		{
		  name: 'Евгений'
		}, 
		{
		  name: 'PrincipessaMilana'
		}, 
		{
		  name: 'ymat'
		}
	]
  });

var data = [
	{tour: 0, xheo: 0, positive: 0, busotir: 0, Евгений: 0, PrincipessaMilana: 0, ymat: 0},
	{tour: 1, xheo: 54, positive: 52, busotir: 0, Евгений: 60, PrincipessaMilana: 64, ymat: 61},
	{tour: 2, xheo: 115, positive: 86, busotir: 68, Евгений: 103, PrincipessaMilana: 133, ymat: 128},
	{tour: 3, xheo: 158, positive: 151, busotir: 120, Евгений: 134, PrincipessaMilana: 180, ymat: 173},
	{tour: 4, xheo: 214, positive: 204, busotir: 212, Евгений: 178, PrincipessaMilana: 266, ymat: 246},
	{tour: 5, xheo: 262, positive: 252, busotir: 250, Евгений: 221, PrincipessaMilana: 327, ymat: 296},
	{tour: 6, xheo: 303, positive: 303, busotir: 299, Евгений: 259, PrincipessaMilana: 380, ymat: 344}
];	

  new FancyGrid({
    renderTo: 'grid',
    width: 'fit',
    height: 'fit',
    theme: 'blue',
    data: {
      items: data,
      chart: [{
        type: 'highchart',
        id: 'spline',
        fields: ['xheo', 'positive', 'busotir', 'Евгений', 'PrincipessaMilana', 'ymat' ]
      }]
    },
    defaults: {
      type: 'number',
      width: 95,
      sortable: false,
      resizable: true
    },
    columns: [
		{
		  title: 'Tour',
		  index: 'tour',
		  editable: false,
		  width: 55
		}, 
		{
		  title: 'xheo',
		  index: 'xheo',
		  format: 'number'
		}, 
		{
		  title: 'positive',
		  index: 'positive',
		  format: 'number'
		}, 
		{
		  title: 'busotir',
		  index: 'busotir',
		  format: 'number'
		}, 
		{
		  title: 'Евгений',
		  index: 'Евгений',
		  format: 'number'
		}, 
		{
		  title: 'PrincipessaMilana',
		  index: 'PrincipessaMilana',
		  format: 'number'
		}, 
		{
		  title: 'ymat',
		  index: 'ymat',
		  format: 'number'
		}
	]
  });
});  
