let DATA = [];
let LAND =[];

/* When the file is uploaded this function does the preparation of the data, 
it takes the value of column 1 and last colum and put them into arrays */
window.onload = function () {
    let f = document.getElementById('fileUpload');
    f.onchange = function () {
        let file = f.files[0];
        fr = new FileReader();
        fr.onload = function (event) {
            let csv = event.target.result;
            DATA = [];
            //split and get the rows in an array
            let rows = csv.split('\n');
            let cols = rows[0].split(',');
            for (let j = 1; j < rows.length; j++) {
                let value = rows[j].split(',');
                DATA.push(value[6]);
                LAND.push(value[1]);
            }
            console.log(DATA,LAND);
        };
        fr.readAsText(file);
    }
}

function Process() {
        let LM1 = [],LM2 = [],LM3 = [],LM4 = [],LM5 = [],LM6 = [],LM7 = [],LM8 = [],LM9 = [],LM10 = [],LM11 = [];
        let LM12 =[], LM13 =[], LM14 =[], LM15 =[], LM16 =[], LM17 =[], LM18 =[];
        let L =[]
        for (let j = 0 ; j<294;j++){
            L.push(j);
        }
        for(let i=0; i<LAND.length;i++){
            if (LAND[i]=='1') {
                LM1.push(DATA[i]);
            } else if (LAND[i] =='2') {
                LM2.push(DATA[i]);
            } else if (LAND[i] =='3') {
                LM3.push(DATA[i]);
            } else if (LAND[i] =='4') {
                LM4.push(DATA[i]);
            } else if (LAND[i] =='5') {
                LM5.push(DATA[i]);
            } else if (LAND[i] =='6') {
                LM6.push(DATA[i]);
            } else if (LAND[i] =='7') {
                LM7.push(DATA[i]);
            } else if (LAND[i] =='8') {
                LM8.push(DATA[i]);
            } else if (LAND[i] =='9') {
                LM9.push(DATA[i]);
            } else if (LAND[i] =='10') {
                LM10.push(DATA[i]);
            } else if (LAND[i] =='11') {
                LM11.push(DATA[i]);
            } else if (LAND[i] =='12') {
                LM12.push(DATA[i]);
            } else if (LAND[i] =='13') {
                LM13.push(DATA[i]);
            } else if (LAND[i] =='14') {
                LM14.push(DATA[i]);
            } else if (LAND[i] =='15') {
                LM15.push(DATA[i]);
            } else if (LAND[i] =='16') {
                LM16.push(DATA[i]);
            } else if (LAND[i] =='17') {
                LM17.push(DATA[i]);
            } else if (LAND[i] =='18') {
                LM18.push(DATA[i]);
            }
        }
        if (LM1.length!=0){
            renderChart(LM1, L, 'L1');
        }
        if (LM2.length!=0){
            renderChart(LM2, L, 'L2');
        }
        if (LM3.length!=0){
            renderChart(LM3, L, 'L3');
        }if (LM4.length!=0){
            renderChart(LM4, L, 'L4');
        }if (LM15.length!=0){    
        renderChart(LM5, L, 'L5');
        }if (LM6.length!=0){    
        renderChart(LM6, L, 'L6');
        }if (LM7.length!=0){    
        renderChart(LM7, L, 'L7');
        }if (LM8.length!=0){    
        renderChart(LM8, L, 'L8');
        }if (LM9.length!=0){    
        renderChart(LM9, L, 'L9');
        }if (LM10.length!=0){    
        renderChart(LM10, L, 'L10');
        }if (LM11.length!=0){    
        renderChart(LM11, L, 'L11');
        }if (LM12.length!=0){    
        renderChart(LM12, L, 'L12');
        }if (LM13.length!=0){    
        renderChart(LM13, L, 'L13');
        }if (LM14.length!=0){    
        renderChart(LM14, L, 'L14');
        }if (LM15.length!=0){    
        renderChart(LM15, L, 'L15');
        }if (LM16.length!=0){    
        renderChart(LM16, L, 'L16');
        }if (LM17.length!=0){    
            renderChart(LM17, L, 'L17');
        }if (LM18.length!=0){    
        renderChart(LM18, L, 'L18');
         }
    }
    

function renderChart(data, labels, name) {
    let divis = document.getElementById("container");
    let ctx = document.createElement("canvas");
    ctx.setAttribute("class", "graph");
    ctx.setAttribute("id", name);
    divis.appendChild(ctx);
    ctx.getContext("2d");

    let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,//x
            datasets: [{
                label: name, //name of the Graph
                data: data,//y
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

function MeanGraph(){
    
}