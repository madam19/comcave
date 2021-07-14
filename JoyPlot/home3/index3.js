
var ctx = document.getElementById('myLineChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['2009', '2010', '2011', '2012', '2013', '2014'] ,
        datasets: [{
            label: 'java',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [1,0,5,6,4]
            
        }]
    },

    // Configuration options go here
    options: {}
});