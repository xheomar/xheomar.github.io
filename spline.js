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
      categories: ['0', '1', '2']
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
	{tour: 2, xheo: 115, positive: 86, busotir: 68, Евгений: 103, PrincipessaMilana: 133, ymat: 128}
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
