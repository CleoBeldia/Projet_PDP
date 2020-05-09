/*
function Upload() {
    var fileUpload = document.getElementById("fileUpload");
    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
    if (regex.test(fileUpload.value.toLowerCase())) {
        if (typeof (FileReader) != "undefined") {
            var reader = new FileReader();
            reader.onload = function (e) {
                var table = document.createElement("table");
                var rows = e.target.result.split("\n");
                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");
                    if (cells.length > 1) {
                        var row = table.insertRow(-1);
                        for (var j = 0; j < cells.length; j++) {
                            var cell = row.insertCell(-1);
                            cell.innerHTML = cells[j];
                        }
                    }
                }
                var dvCSV = document.getElementById("dvCSV");
                dvCSV.innerHTML = "";
                dvCSV.appendChild(table);
            }
            reader.readAsText(fileUpload.files[0]);
        } else {
            alert("This browser does not support HTML5.");
        }
    } else {
        alert("Please upload a valid CSV file.");
    }
}
/*
/*
window.onload = function() {
    var dataPoints = [];
    var csv = document.getElementById("fileUpload")
    function getDataPointsFromCSV(csv) {
        var dataPoints = csvLines = points = [];
        csvLines = csv.split(/[\r?\n|\r|\n]+/);         
            
        for (var i = 0; i < csvLines.length; i++)
            if (csvLines[i].length > 0) {
                points = csvLines[i].split(",");
                console.log(points);
                dataPoints.push({ 
                    x: parseFloat(points[0]), 
                    y: parseFloat(points[1]) 		
                });
            }
        return dataPoints;
    }

    function chartMaker(DATA[i]) {
    var chart = new CanvasJS.Chart("chartContainer", {
        title: {
             text: "Chart from CSV",
        },
        data: [{
             type: "line",
             dataPoints: getDataPointsFromCSV(DATA[i])
          }]
     });
    
      chart.render();

};
}
*/
function renderChart(data,labels) {
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'L1',
                data: data,
            }]
        },
        options: {
            legend: {
                position : 'bottom',
                labels:{
                    fontSize: 12,
                    boxWidth: 12,
                    usePointStyle: true,
                }
            }
        }
    });
}

function processFile(){
    var file = document.querySelector('#fileUpload').files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    //When the file finish load
    reader.onload = function(event) {
      //get the file.
      var csv = event.target.result;
      console.log('csv' + csv);
      //split and get the rows in an array
      var rows = csv.split('\n');
      console.log(rows);
      var cols = rows[0].split(',');
      console.log(cols)
      //move line by line
      /*for (var i = 1; i < rows.length; i++) {
        //split by separator (,) and get the columns
        cols = rows[i].split(',');
        console.log('cols'+cols);
        */
        //move column by column
        var DATA = [];
        var LABELS = [];
        for (var j = 1; j < rows.length; j++) {
          /*the value of the current column.
          Do whatever you want with the value*/
          var value = rows[j].split(',');
          console.log(value[6]);
          DATA.push(value[6]);
          LABELS.push(value[1]);
        }
        console.log(DATA,LABELS);
        var data=[];
        var labels=[]
        for (var i = 0 ; i< DATA.length ; i=i+11){
            data.push(DATA[i]);
            labels.push(LABELS[i]);
        }
        console.log(DATA[i]);
        console.log(labels);
        renderChart(data,labels);
    }
    }
