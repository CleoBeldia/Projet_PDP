window.onload = function () {
    let f = document.getElementById('fileUpload');
    f.onchange = function () {
        var name = f.value.split(/(\\|\/)/g).pop();
        console.log(name);
        let file = f.files[0];
        let fr = new FileReader();
        fr.onload = function (event) {
            var csv = event.target.result;
            var rows = csv.split('\n');
            if (name == 'elytra.csv') {
                let LM1 = [],
                    LM2 = [],
                    LM3 = [],
                    LM4 = [],
                    LM5 = [],
                    LM6 = [],
                    LM7 = [],
                    LM8 = [],
                    LM9 = [],
                    LM10 = [],
                    LM11 = [],
                    L = [];
                for (let i = 0; i < rows.length; i++) {
                    //293 valeurs dans chaque liste  !
                    L.push(i);
                    vali = rows[i].split(',');
                    col1 = vali[1];
                    col6 = vali[6];


                    if (col1 % 11 == 1) {
                        LM1.push(col6);
                        renderChart(LM1, L, 'L1');
                    } else if (col1 % 11 == 2) {
                        LM2.push(col6);
                        renderChart(LM2, L, 'L2');
                    } else if (col1 % 11 == 3) {
                        LM3.push(col6);
                        renderChart(LM3, L, 'L3');
                    } else if (col1 % 11 == 4) {
                        LM4.push(col6);
                        renderChart(LM4, L, 'L4');
                    } else if (col1 % 11 == 5) {
                        LM5.push(col6);
                        renderChart(LM5, L, 'L5');
                    } else if (col1 % 11 == 6) {
                        LM6.push(col6);
                        renderChart(LM6, L, 'L6');
                    } else if (col1 % 11 == 7) {
                        LM7.push(col6);
                        renderChart(LM7, L, 'L7');
                    } else if (col1 % 11 == 8) {
                        LM8.push(col6);
                        renderChart(LM8, L, 'L8');
                    } else if (col1 % 11 == 9) {
                        LM9.push(col6);
                        renderChart(LM9, L, 'L9');
                    } else if (col1 % 11 == 10) {
                        LM10.push(col6);
                        renderChart(LM10, L, 'L10');
                    } else if (col1 % 11 == 11) {
                        LM11.push(col6);
                        renderChart(LM11, L, 'L11');
                    }
                }
            } else if (name == 'pronotum.csv') {
                let LM1 = [],
                    LM2 = [],
                    LM3 = [],
                    LM4 = [],
                    LM5 = [],
                    LM6 = [],
                    LM7 = [],
                    LM8 = [],
                    L = [];
                for (let i = 0; i < rows.length; i++) {
                    L.push(i);
                    vali = rows[i].split(',');
                    col1 = vali[1];
                    col6 = vali[6];
                    if (col1 % 8 == 1) {
                        LM1.push(col6);
                    } else if (col1 % 8 == 2) {
                        LM2.push(col6);
                    } else if (col1 % 8 == 3) {
                        LM3.push(col6);
                    } else if (col1 % 8 == 4) {
                        LM4.push(col6);
                    } else if (col1 % 8 == 5) {
                        LM5.push(col6);
                    } else if (col1 % 8 == 6) {
                        LM6.push(col6);
                    } else if (col1 % 8 == 7) {
                        LM7.push(col6);
                    } else if (col1 % 8 == 8) {
                        LM8.push(col6);
                    }
                }

            } else if (name == 'md.csv') {
                let LM1 = [],
                    LM2 = [],
                    LM3 = [],
                    LM4 = [],
                    LM5 = [],
                    LM6 = [],
                    LM7 = [],
                    LM8 = [],
                    LM9 = [],
                    LM10 = [],
                    LM11 = [],
                    LM12 = [],
                    LM13 = [],
                    LM14 = [],
                    LM15 = [],
                    LM16 = [],
                    LM17 = [],
                    LM18 = [],
                    L = [];
                for (let i = 0; i < rows.length; i++) {
                    L.push(i);
                    vali = rows[i].split(',');
                    col1 = vali[1];
                    col6 = vali[6];
                    if (col1 % 18 == 1) {
                        LM1.push(col6);
                    } else if (col1 % 18 == 2) {
                        LM2.push(col6);
                    } else if (col1 % 18 == 3) {
                        LM3.push(col6);
                    } else if (col1 % 18 == 4) {
                        LM4.push(col6);
                    } else if (col1 % 18 == 5) {
                        LM5.push(col6);
                    } else if (col1 % 18 == 6) {
                        LM6.push(col6);
                    } else if (col1 % 18 == 7) {
                        LM7.push(col6);
                    } else if (col1 % 18 == 8) {
                        LM8.push(col6);
                    } else if (col1 % 18 == 9) {
                        LM9.push(col6);
                    } else if (col1 % 18 == 10) {
                        LM10.push(col6);
                    } else if (col1 % 18 == 11) {
                        LM11.push(col6);
                    } else if (col1 % 18 == 12) {
                        LM12.push(col6);
                    } else if (col1 % 18 == 13) {
                        LM13.push(col6);
                    } else if (col1 % 18 == 14) {
                        LM14.push(col6);
                    } else if (col1 % 18 == 15) {
                        LM15.push(col6);
                    } else if (col1 % 18 == 16) {
                        LM16.push(col6);
                    } else if (col1 % 18 == 17) {
                        LM17.push(col6);
                    } else if (col1 % 18 == 18) {
                        LM18.push(col6);
                    }
                }

            } else if (name == 'mg.csv') {
                let LM1 = [],
                    LM2 = [],
                    LM3 = [],
                    LM4 = [],
                    LM5 = [],
                    LM6 = [],
                    LM7 = [],
                    LM8 = [],
                    LM9 = [],
                    LM10 = [],
                    LM11 = [],
                    LM12 = [],
                    LM13 = [],
                    LM14 = [],
                    LM15 = [],
                    LM16 = [],
                    L = [];
                for (let i = 0; i < rows.length; i++) {
                    L.push(i);
                    vali = rows[i].split(',');
                    col1 = vali[1];
                    col6 = vali[6];
                    if (col1 % 16 == 1) {
                        LM1.push(col6);
                    } else if (col1 % 16 == 2) {
                        LM2.push(col6);
                    } else if (col1 % 16 == 3) {
                        LM3.push(col6);
                    } else if (col1 % 16 == 4) {
                        LM4.push(col6);
                    } else if (col1 % 16 == 5) {
                        LM5.push(col6);
                    } else if (col1 % 16 == 6) {
                        LM6.push(col6);
                    } else if (col1 % 16 == 7) {
                        LM7.push(col6);
                    } else if (col1 % 16 == 8) {
                        LM8.push(col6);
                    } else if (col1 % 16 == 9) {
                        LM9.push(col6);
                    } else if (col1 % 16 == 10) {
                        LM10.push(col6);
                    } else if (col1 % 16 == 11) {
                        LM11.push(col6);
                    } else if (col1 % 16 == 12) {
                        LM12.push(col6);
                    } else if (col1 % 16 == 13) {
                        LM13.push(col6);
                    } else if (col1 % 16 == 14) {
                        LM14.push(col6);
                    } else if (col1 % 16 == 15) {
                        LM15.push(col6);
                    } else if (col1 % 16 == 16) {
                        LM16.push(col6);
                    }
                }

            } else if (name == 'tete.csv') {
                let LM1 = [],
                    LM2 = [],
                    LM3 = [],
                    LM4 = [],
                    LM5, LM6 = [],
                    LM7 = [],
                    LM8 = [],
                    LM9 = [],
                    LM10 = [],
                    L = [];
                for (let i = 0; i < rows.length; i++) {
                    L.push(i);
                    vali = rows[i].split(',');
                    col1 = vali[1];
                    col6 = vali[6];
                    if (col1 % 10 == 1) {
                        LM1.push(col6);
                    } else if (col1 % 10 == 2) {
                        LM2.push(col6);
                    } else if (col1 % 10 == 3) {
                        LM3.push(col6);
                    } else if (col1 % 10 == 4) {
                        LM4.push(col6);
                    } else if (col1 % 10 == 5) {
                        LM5.push(col6);
                    } else if (col1 % 10 == 6) {
                        LM6.push(col6);
                    } else if (col1 % 10 == 7) {
                        LM7.push(col6);
                    } else if (col1 % 10 == 8) {
                        LM8.push(col6);
                    } else if (col1 % 10 == 9) {
                        LM9.push(col6);
                    } else if (col1 % 10 == 10) {
                        LM10.push(col6);
                    }
                }

            } else {
                alert('pls upload the right file');
            }


        }
        fr.readAsText(file);
    };

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