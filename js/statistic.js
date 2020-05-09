
var DATA = [];
var LAND =[];

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
                LAND.push(value[1]);
            }
            console.log(DATA,LAND);
        };
        fr.readAsText(file);
    }
}

function Process() {
    var fileInput = document.getElementById('fileUpload');
    var file = fileInput.value.split(/(\\|\/)/g).pop();
    console.log(file);
    if (file == 'elytra.csv') {
        let LM1 = [],LM2 = [],LM3 = [],LM4 = [],LM5 = [],LM6 = [],LM7 = [],LM8 = [],LM9 = [],LM10 = [],LM11 = [];
        let L = new Array(293);
        for(let i=0; i<LAND.length;i++){
            if (LAND[i]=='1') {
                LM1.push(DATA[i]);
                renderChart(LM1, L, 'L1');
            } else if (LAND[i] =='2') {
                LM2.push(DATA[i]);
                renderChart(LM2, L, 'L2');
            } else if (LAND[i] =='3') {
                LM3.push(DATA[i]);
                renderChart(LM3, L, 'L3');
            } else if (LAND[i] =='4') {
                LM4.push(DATA[i]);
                renderChart(LM4, L, 'L4');
            } else if (LAND[i] =='5') {
                LM5.push(DATA[i]);
                renderChart(LM5, L, 'L5');
            } else if (LAND[i] =='6') {
                LM6.push(DATA[i]);
                renderChart(LM6, L, 'L6');
            } else if (LAND[i] =='7') {
                LM7.push(DATA[i]);
                renderChart(LM7, L, 'L7');
            } else if (LAND =='8') {
                LM8.push(DATA[i]);
                renderChart(LM8, L, 'L8');
            } else if (LAND[i] =='9') {
                LM9.push(DATA[i]);
                renderChart(LM9, L, 'L9');
            } else if (LAND[i] =='10') {
                LM10.push(DATA[i]);
                renderChart(LM10, L, 'L10');
            } else if (LAND[i] =='11') {
                LM11.push(DATA[i]);
                renderChart(LM11, L, 'L11');
            }
        }
    } else {
        alert('pls upload the right file');
    }
       
    }
    

function renderChart(data, labels, name) {
    var divis = document.getElementById("container");
    var ctx = document.createElement("canvas");
    ctx.setAttribute("id", name);
    divis.appendChild(ctx);
    ctx.getContext("2d");

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: name, //name of the Graph
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
