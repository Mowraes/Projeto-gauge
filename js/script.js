    google.charts.load('current', {'packages':['gauge']});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {

            var data = google.visualization.arrayToDataTable([
            ['Label', 'Value'],
            ['Memory', 80],
            ['CPU', 55],
            ['Network', 68],
            ['Temperatura', 68]
            ]);

            var options = {
            width: 800, height: 240,
            redFrom: 90, redTo: 100,
            yellowFrom:75, yellowTo: 90,
            minorTicks: 6,
            min: 0,
            max: 100
            };

            var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

            chart.draw(data, options);

            setInterval(function() {
                data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
                chart.draw(data, options);
            }, 13000);

            setInterval(function() {
                data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
                chart.draw(data, options);
            }, 5000);

            setInterval(function() {
                data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
                chart.draw(data, options);
            }, 26000);

            setInterval(function() {
                data.setValue(3, 1, 80 + Math.round(20 * Math.random()));
                chart.draw(data, options);
            }, 26000);
        }