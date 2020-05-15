/*
function Upload() {
    let fileUpload = document.getElementById("fileUpload");
    let regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
    if (regex.test(fileUpload.value.toLowerCase())) {
        if (typeof (FileReader) != "undefined") {
            let reader = new FileReader();
            reader.onload = function (e) {
                let table = document.createElement("table");
                let rows = e.target.result.split("\n");
                for (let i = 0; i < rows.length; i++) {
                    let cells = rows[i].split(",");
                    if (cells.length > 1) {
                        let row = table.insertRow(-1);
                        for (let j = 0; j < cells.length; j++) {
                            let cell = row.insertCell(-1);
                            cell.innerHTML = cells[j];
                        }
                    }
                }
                let dvCSV = document.getElementById("dvCSV");
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
    let dataPoints = [];
    let csv = document.getElementById("fileUpload")
    function getDataPointsFromCSV(csv) {
        let dataPoints = csvLines = points = [];
        csvLines = csv.split(/[\r?\n|\r|\n]+/);         
            
        for (let i = 0; i < csvLines.length; i++)
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

    function chartMaker(data) {
    let chart = new CanvasJS.Chart("chartContainer", {
        title: {
             text: "Chart from CSV",
        },
        data: [{
             type: "line",
             dataPoints: getDataPointsFromCSV(data)
          }]
     });
    
      chart.render();

};
}
*/
function renderChart(data,labels) {
    let ctx = document.getElementById("myChart").getContext('2d');
    let myChart = new Chart(ctx, {
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
    let file = document.querySelector('#fileUpload').files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    //When the file finish load
    reader.onload = function(event) {
      //get the file.
      let csv = event.target.result;
      console.log('csv' + csv);
      //split and get the rows in an array
      let rows = csv.split('\n');
      console.log(rows);
      let cols = rows[0].split(',');
      console.log(cols)
      //move line by line
      /*for (let i = 1; i < rows.length; i++) {
        //split by separator (,) and get the columns
        cols = rows[i].split(',');
        console.log('cols'+cols);
        */
        //move column by column
        let DATA = [];
        let LABELS = [];
        for (let j = 1; j < rows.length; j++) {
          /*the value of the current column.
          Do whatever you want with the value*/
          let value = rows[j].split(',');
          console.log(value[6]);
          DATA.push(value[6]);
          LABELS.push(value[1]);
        }
        console.log(DATA,LABELS);
        let data=[];
        let labels=[]
        for (let i = 0 ; i< DATA.length ; i=i+11){
            data.push(DATA[i]);
            labels.push(LABELS[i]);
        }
        console.log(data);
        console.log(labels);
        renderChart(data,labels);
    }
    }
