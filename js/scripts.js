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
                //gdp_data.push(data[i].gdp);
                // console.log(gdp_data);

                argentina.push(data[i].argentina);
                //console.log(argentina);
                bolivia.push(data[i].bolivia);
                brazil.push(data[i].brazil);
                chile.push(data[i].chile);
                colombia.push(data[i].colombia);
                ecuador.push(data[i].ecuador);
                paraguay.push(data[i].paraguay);
                peru.push(data[i].peru);
                uruguay.push(data[i].uruguay);
                venezuela.push(data[i].venezuela);
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
                text: 'Poverty rate in South America'
            },
            subtitle: {
                text: 'Source: World Bank Data Poverty Rate'
            },
            xAxis: {
                categories: gdp_data
            },
            yAxis: {
                title: 'Poverty Rate'
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