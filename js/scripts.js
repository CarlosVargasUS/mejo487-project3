$(document).ready(function () {

    console.log("This B is reaadyy!");

    var url = 'js/south_american_poverty_rate.json';
    //var urlArray = [url, url2];
    var data = [];
    var xCat = [];
    var year = [];
    var gdp_data = [];
    var argentina = [];
    var bolivia = [];
    var brazil = [];
    var chile = [];
    var colombia = [];
    var ecuador = [];
    var paraguay = [];
    var peru = [];
    var uruguay = [];
    var venezuela = [];
    var gdp_ecuador = [];
    



    //Load the JSON data
    $.ajax({
        type: 'GET',
        dataType: 'json',
        data: data,
        url: url,
        async: true,
        success: function (data) {
            //console.log(data);
            //Loop through and push the data into the empty arrays for Population and Airports
            for (i = 0; i < data.length; ++i) {

                xCat.push(data[i].year);
                console.log(xCat);
                argentina.push(data[i].Argentina); // building an array for each year for each country
                bolivia.push(data[i].Bolivia);
                brazil.push(data[i].Brazil);
                chile.push(data[i].Chile);
                colombia.push(data[i].Colombia);
                ecuador.push(data[i].Ecuador);
                paraguay.push(data[i].Paraguay);
                peru.push(data[i].Peru);
                uruguay.push(data[i].Uruguay);
                venezuela.push(data[i].Venezuela);

                //building an array for each GDP of each country

                gdp_ecuador.push(data[i].gdp_ecuador);
                console.log('array for ecuador gdp');
                console.log(gdp_ecuador);
            }
            // console.log(gdp);
            //Call the function that builds the chart
            buildChart();
        }
    });//close AJAX call

    //  console.log(xCat);

    function buildChart() {
        var myChart = Highcharts.chart('poverty_rate', {
            chart: {
                type: 'line'
            },
            title: {
                text: 'Poverty Rate in South America'
            },
            subtitle: {
                text: 'Source: World Bank Data Poverty Rate'
            },
            xAxis: {
                cathegories : xCat,
                title: {
                    text: 'Year'
                }
            },
            yAxis: {
                title: {
                    text: 'GDP: Gross Domestic Product'
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: true
                },
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: 1987
                }
            },
            toolTip: {
                valueSuffix: '$'
            },
            series: [
                {
                    name: 'Argentina',
                    data: argentina
                },
                {
                    name: 'Bolivia',
                    data: bolivia
                },
                {
                    name: 'Brazil',
                    data: brazil
                },
                {
                    name: 'Chile',
                    data: chile
                },
                {
                    name: 'Colombia',
                    data: colombia
                },
                {
                    name: 'Ecuador',
                    data: ecuador
                },
                {
                    name: 'Paraguay',
                    data: paraguay
                },
                {
                    name: 'Peru',
                    data: peru
                },
                {
                    name: 'Uruguay',
                    data: uruguay
                },
                {
                    name: "Venezuela",
                    data: venezuela
                }
            ]
        });
    }// end of buildChart function



}); //.ready function