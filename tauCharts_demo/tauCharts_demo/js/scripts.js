$(function(){
  console.log('scripts loaded');

var url = 'js/nations.json';
var nations = '';

  $.ajax({
      type:'GET',
      url:url,
      data:nations,
      async:true,
      dataType:'json',
      success:function(nations){
          console.log(nations);

          var chart = new Taucharts.Chart({
                    guide: {
                      x: {label:'Infant Mortality Rate'},  // custom label for X axis
                      y: {label:'Life Expectancy'},    // custom label for Y axis
                      padding: {b:40,l:40,t:10,r:10}  // chart paddings
                    },
                    data: nations,
                    type: 'scatterplot',
                    x: 'Infant Mortality Rate',
                    y: 'Life Expectancy',
                    color: 'Obesity Rate', // every team will be represented by different color
                    size: 'Per Capita GDP',
                    plugins:[
                       Taucharts.api.plugins.get('tooltip')({
                         fields: ['name', 'Infant Mortality Rate', 'Life Expectancy', 'Per Capita GDP', 'Obesity Rate', 'Unemployment Rate']
                       }),
                       Taucharts.api.plugins.get('legend')()
                    ]
                });
          chart.renderTo('#results');

      }//close successs


  });//close Ajax

});//close ready wrapper
