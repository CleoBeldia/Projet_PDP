window.onload = function () {
    let f = document.getElementById('fileUpload');
    f.onchange = function () {
        var name = f.value.split(/(\\|\/)/g).pop();
        console.log(name);
        let file = f.files[0];
        fr = new FileReader();
        fr.onload = function (event) {
            var csv = event.target.result;
            var rows = csv.split('\n');
            if (name == 'elytra.csv'){
                let LM1,LM2,LM3,LM4,LM5,LM6,LM7,LM8, LM9,LM10,LM11 =[];
                for(let i = 0; i < rows.length; i++){
                    vali= rows[i].split(',');
                    col1 = vali[1];
                    col6 = vali[6];
                    if (col1%8 == 1){
                        LM1.push(col6);
                    }else if (col1%8 == 2){
                        LM2.push(col6);
                    }else if (col1%8 == 3){
                        LM3.push(col6);
                    }else if (col1%8 == 4){
                        LM4.push(col6);
                    }else if (col1%8 == 5){
                        LM5.push(col6);
                    }else if (col1%8 == 6){
                        LM6.push(col6);
                    }else if (col1%8 == 7){
                        LM7.push(col6);
                    }else if (col1%8 == 8){
                        LM8.push(col6);
                    }else if (col1%8 == 9){
                        LM9.push(col6);
                    }else if (col1%8 == 10){
                        LM10.push(col6);
                    }else if (col1%8 == 11){
                        LM11.push(col6);
                    }
                    console.log(LM1,LM2);
                }
            
            }else if(name == 'pronotum.csv'){
                let LM1,LM2,LM3,LM4,LM5,LM6,LM7,LM8 =[];
                for(let i = 0; i < rows.length; i++){
                    vali= rows[i].split(',');
                    col1 = vali[1];
                    col6 = vali[6];
                    if (col1%8 == 1){
                        LM1.push(col6);
                    }else if (col1%8 == 2){
                        LM2.push(col6);
                    }else if (col1%8 == 3){
                        LM3.push(col6);
                    }else if (col1%8 == 4){
                        LM4.push(col6);
                    }else if (col1%8 == 5){
                        LM5.push(col6);
                    }else if (col1%8 == 6){
                        LM6.push(col6);
                    }else if (col1%8 == 7){
                        LM7.push(col6);
                    }else if (col1%8 == 8){
                        LM8.push(col6);
                    }
                }

            }else if(name == 'md.csv'){
                let LM1,LM2,LM3,LM4,LM5,LM6,LM7,LM8, LM9,LM10,LM11
                ,LM12,LM13,LM14,LM15,LM16,LM17,LM18 =[];
                for(let i = 0; i < rows.length; i++){
                    vali= rows[i].split(',');
                    col1 = vali[1];
                    col6 = vali[6];
                    if (col1%8 == 1){
                        LM1.push(col6);
                    }else if (col1%8 == 2){
                        LM2.push(col6);
                    }else if (col1%8 == 3){
                        LM3.push(col6);
                    }else if (col1%8 == 4){
                        LM4.push(col6);
                    }else if (col1%8 == 5){
                        LM5.push(col6);
                    }else if (col1%8 == 6){
                        LM6.push(col6);
                    }else if (col1%8 == 7){
                        LM7.push(col6);
                    }else if (col1%8 == 8){
                        LM8.push(col6);
                    }else if (col1%8 == 9){
                        LM9.push(col6);
                    }else if (col1%8 == 10){
                        LM10.push(col6);
                    }else if (col1%8 == 11){
                        LM11.push(col6);
                    }else if (col1%8 == 12){
                        LM12.push(col6);
                    }else if (col1%8 == 13){
                        LM13.push(col6);
                    }else if (col1%8 == 14){
                        LM14.push(col6);
                    }else if (col1%8 == 15){
                        LM15.push(col6);
                    }else if (col1%8 == 16){
                        LM16.push(col6);
                    }else if (col1%8 == 17){
                        LM17.push(col6);
                    }else if (col1%8 == 18){
                        LM18.push(col6);
                    }
                }

            }else if(name == 'mg.csv'){
                let LM1,LM2,LM3,LM4,LM5,LM6,LM7,LM8, LM9,LM10,LM11
                ,LM12,LM13,LM14,LM15,LM16=[];
                for(let i = 0; i < rows.length; i++){
                    vali= rows[i].split(',');
                    col1 = vali[1];
                    col6 = vali[6];
                    if (col1%8 == 1){
                        LM1.push(col6);
                    }else if (col1%8 == 2){
                        LM2.push(col6);
                    }else if (col1%8 == 3){
                        LM3.push(col6);
                    }else if (col1%8 == 4){
                        LM4.push(col6);
                    }else if (col1%8 == 5){
                        LM5.push(col6);
                    }else if (col1%8 == 6){
                        LM6.push(col6);
                    }else if (col1%8 == 7){
                        LM7.push(col6);
                    }else if (col1%8 == 8){
                        LM8.push(col6);
                    }else if (col1%8 == 9){
                        LM9.push(col6);
                    }else if (col1%8 == 10){
                        LM10.push(col6);
                    }else if (col1%8 == 11){
                        LM11.push(col6);
                    }else if (col1%8 == 12){
                        LM12.push(col6);
                    }else if (col1%8 == 13){
                        LM13.push(col6);
                    }else if (col1%8 == 14){
                        LM14.push(col6);
                    }else if (col1%8 == 15){
                        LM15.push(col6);
                    }else if (col1%8 == 16){
                        LM16.push(col6);
                    }
                }
                
            }else if(name == 'tete.csv'){
                let LM1,LM2,LM3,LM4,LM5,LM6,LM7,LM8, LM9,LM10 =[];
                for(let i = 0; i < rows.length; i++){
                    vali= rows[i].split(',');
                    col1 = vali[1];
                    col6 = vali[6];
                    if (col1%8 == 1){
                        LM1.push(col6);
                    }else if (col1%8 == 2){
                        LM2.push(col6);
                    }else if (col1%8 == 3){
                        LM3.push(col6);
                    }else if (col1%8 == 4){
                        LM4.push(col6);
                    }else if (col1%8 == 5){
                        LM5.push(col6);
                    }else if (col1%8 == 6){
                        LM6.push(col6);
                    }else if (col1%8 == 7){
                        LM7.push(col6);
                    }else if (col1%8 == 8){
                        LM8.push(col6);
                    }else if (col1%8 == 9){
                        LM9.push(col6);
                    }else if (col1%8 == 10){
                        LM10.push(col6);
                    }
                }

            }else {
                alert('pls upload the right file');
            }
            
            
            }
        };
    fr.readAsText(file);
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