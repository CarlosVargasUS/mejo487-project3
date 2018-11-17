$(document).ready(function () {

    console.log("This B is reaadyy!");

    var url = 'js/south_american_poverty_rate.json';
    //var urlArray = [url, url2];
    var data = [];
    var xCat = [];
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
                cathegories: xCat,
                title: {
                    text: 'Year'
                }
            },
            yAxis: {
                title: {
                    text: 'Poverty Levels'
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

    $.ajax({
        url: 'js/ecuador_GDP.json', success: function (gdp) {
            var chart = new Taucharts.Chart({
                guide: {
                    x: { label: 'year' },  // custom label for X axis
                    y: { label: 'gdp' },    // custom label for Y axis
                    //padding: { b: 90, l: 40, t: 10, r: 10 }  // chart paddings
                },

                data: gdp,
                type: 'line',
                x: 'year',
                y: 'gdp',
                color: 'Gross Domestic Product',
                size: {
                    func: 'linear',
                    minSize: 1960,
                    maxSize: 2017
                },
                plugins: [
                    Taucharts.api.plugins.get('tooltip')({
                        fields: ['country_name', 'year', 'gdp']
                    }),
                    Taucharts.api.plugins.get('legend')()
                ]
            })

            chart.renderTo('#ecuador_gdp_chart');

        }
    });// end of ajax call 


    $('#migration-table').DataTable({
        "ajax": "/js/migrants.txt",//MAKE THE AJAX CALL ON AN OBJECT; NOTE THE PATH
        //YOU MUST ADD A WRAPPER OF SQUIGLY BRACKETS & 'DATA:' TO THE JSON FILE
        "columns": [ //TELL DATABALES WHAT KEYS YOU WANT TO USE FOR YOUR COLUMNS
            { "data": "country-region" },//YOU CAN USE TWO-WORD JSON KEYS WITHOUT BRACKET NOTATION!
            //{ "data": "1950-1955" },
            //{ "data": "1955-1960" },
            //{ "data": "1960-1965" },
            //{ "data": "1965-1970" },
            { "data": "1970-1975" },
            //{ "data": "1975-1980" },
            { "data": "1980-1985" },
            //{ "data": "1985-1990"},
            { "data": "1990-1995" },
            { "data": "1995-2000"},
            { "data": "2000-2005" },
            { "data": "2005-2010" },
            { "data": "2010-2015" }

        ],
        "columnDefs": [{
            //"className": "dt-body-left",//CHANGE ALIGNMENT OF COLUMNs 1 & 3 (with INDEX values)
            "targets": [0, 7],//YOU MUST SPECIFY THE TARGET COLUMNS FOR TOOLTIPS, ETC.
            "createdCell": function (td, cellData, rowData, row, col) {
                if (cellData > 1000) {
                    $(td).css('color', 'red');//HIGHLIGHT CELLS USING CONDITIONAL LOGIC
                }
                $(td).on({//CREATE A TOOLTIP
                    mouseenter: function () {
                        var txt = $(this).text();
                        console.log(txt);
                        $('#' + txt).toggleClass('hidden');
                    },
                    mouseleave: function () {
                        var txt = $(this).text();
                        $('#' + txt).toggleClass('hidden');
                    }
                });
            }//close createdCell
        }]//close columnDefs
    });//close DataTable

    $('#basic-table').DataTable();





}); //.ready function