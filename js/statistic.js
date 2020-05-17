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
    let LM1 = [],LM2 = [],LM3 = [],LM4 = [],LM5 = [],LM6 = [],LM7 = [],LM8 = [],LM9 = [],LM10 = [],LM11 = [];
    let LM12 =[], LM13 =[], LM14 =[], LM15 =[], LM16 =[], LM17 =[], LM18 =[];
    let L =[];
    let Lmean=[],LM=[];
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
        
        let m1=mean(LM1),m2=mean(LM2),m3=mean(LM3),m4=mean(LM4),m5=mean(LM5),m6=mean(LM6),m7=mean(LM7),m8=mean(LM8);
        let m9=mean(LM9),m10=mean(LM10),m11=mean(LM11),m12=mean(LM12),m13=mean(LM13),m14=mean(LM14);
        let m15=mean(LM15),m16=mean(LM16),m17=mean(LM17),m18=mean(LM18);

        if (LM1.length!=0){
            renderChart(LM1, L, 'L1');
            Lmean.push(m1);
            LM.push(1);
        }
        if (LM2.length!=0){
            renderChart(LM2, L, 'L2');
            Lmean.push(m2);
            LM.push(2);
        }
        if (LM3.length!=0){
            renderChart(LM3, L, 'L3');
            Lmean.push(m3);
            LM.push(3);
        }if (LM4.length!=0){
            renderChart(LM4, L, 'L4');
            Lmean.push(m4);
            LM.push(4);
        }if (LM15.length!=0){    
            renderChart(LM5, L, 'L5');
            Lmean.push(m5);
            LM.push(5);
        }if (LM6.length!=0){    
            renderChart(LM6, L, 'L6');
            Lmean.push(m6);
            LM.push(6);
        }if (LM7.length!=0){    
            renderChart(LM7, L, 'L7');
            Lmean.push(m7);
            LM.push(7);
        }if (LM8.length!=0){    
            renderChart(LM8, L, 'L8');
            Lmean.push(m8);
            LM.push(8);
        }if (LM9.length!=0){    
            renderChart(LM9, L, 'L9');
            Lmean.push(m9);
        LM.push(9);
        }if (LM10.length!=0){    
            renderChart(LM10, L, 'L10');
            Lmean.push(m10);
            LM.push(10);
        }if (LM11.length!=0){    
            renderChart(LM11, L, 'L11');
            console.log('m11',m11);
            Lmean.push(m11);
            LM.push(11);
        }if (LM12.length!=0){    
            renderChart(LM12, L, 'L12');
            Lmean.push(m12);
            LM.push(12);
        }if (LM13.length!=0){    
            renderChart(LM13, L, 'L13');
            Lmean.push(m13);
            LM.push(13);
        }if (LM14.length!=0){    
            renderChart(LM14, L, 'L14');
            Lmean.push(m14);
            LM.push(14);
        }if (LM15.length!=0){    
            renderChart(LM15, L, 'L15');
            Lmean.push(m15);
            LM.push(15);
        }if (LM16.length!=0){    
            renderChart(LM16, L, 'L16');
            Lmean.push(m16);
            LM.push(16);
        }if (LM17.length!=0){    
            renderChart(LM17, L, 'L17');
            Lmean.push(m17);
            LM.push(17);
        }if (LM18.length!=0){    
            renderChart(LM18, L, 'L18');
            Lmean.push(m18);
            LM.push(18);
        }
        console.log(Lmean);
        console.log(LM);
        renderChart(Lmean,LM,'Global Graphic');
    }
    

function renderChart(data, labels, name) {
    var divis = document.getElementById("container");
    var ctx = document.createElement("canvas");
    ctx.setAttribute("class", "graph");
    ctx.setAttribute("id", name);
    divis.appendChild(ctx);
    ctx.getContext("2d");

    var myChart = new Chart(ctx, {
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

function mean(list){
    if (list.length=='0'){
        return 0;
    } else {
        let c =0.0;
        let av=0.0;
        for (let i =0;i<list.length;i++){
            c=c+parseFloat(list[i]);
        }
        av=c/(list.length);
        return av;

    }    
}
