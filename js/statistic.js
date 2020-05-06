var DATA = [];
var LABELS = [];


/* When the file is uploaded this function does the preparation of the data, 
it takes the value of column 1 and last colum and put them into arrays */
window.onload = function () {
    let f = document.getElementById('fileUpload');
    f.onchange = function () {
        let file = f.files[0];
        fr = new FileReader();
        fr.onload = function (event) {
            var csv = event.target.result;
            DATA = [];
            //split and get the rows in an array
            var rows = csv.split('\n');
            var cols = rows[0].split(',');
            for (var j = 1; j < rows.length; j++) {
                var value = rows[j].split(',');
                DATA.push(value[6]);
                LABELS.push(value[0]);
            }
        };
        fr.readAsText(file);
    }
}



function Process() {
    var fileInput = document.getElementById('fileUpload');
    var file = fileInput.value.split(/(\\|\/)/g).pop();
    console.log(file);
    console.log(DATA, LABELS);
    if (file == 'elytra.csv') {
        for (var j = 0; j < 11; j++) {
            graph(DATA, LABELS, 11, j);
        }
    }
    if (file == 'pronotum.csv') {
        for (var k = 0; k < 8; k++) {
            graph(DATA, LABELS, 8, k);
        }
    }
    if (file == 'md.csv') {
        for (var l = 0; l < 18; l++) {
            graph(DATA, LABELS, 18, l);
        }

    }
    if (file == 'mg.csv') {
        for (var m = 0; m < 16; m++) {
            graph(DATA, LABELS, 16, m);
        }

    }
    if (file == 'tete.csv') {
        for (var n = 0; n < 10; n++) {
            graph(DATA, LABELS, 10, n);
        }
    }
}

function renderChart(data, labels, landnb, canvas) {
    var ctx = document.getElementById(canvas).getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: landnb,
                data: data,
            }]
        },
        options: {
            legend: {
                position: 'bottom',
                labels: {
                    fontSize: 12,
                    boxWidth: 20,
                    usePointStyle: true,
                }
            }
        }
    });
}


function graph(DATA, LABELS, LandmarkNb, j) {
    var data = [];
    var labels = [];
    for (var i = 0 + j; i < DATA.length; i = i + LandmarkNb) {
        data.push(DATA[i]);
        labels.push(LABELS[i]);
        renderChart(data, labels, ('L' + (j + 1)), ('myChart' + (j + 1)));
    }
    console.log(data, labels);

} 