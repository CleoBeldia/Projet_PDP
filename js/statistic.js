let DATA = [];
let LAND =[];
let canvas_array = [];
let c = 0;
let d = 0;
let id_graph = 'L1';
let c_carou;
let i;

//canvas presentation
let c_p = function() {
    if (c <= 1){
        c_pres = document.getElementById('canvas_presentation').getContext('2d');
    }
    else if (c > 1) {
        let cnva = document.getElementById("caroussel1");
        cnva.innerHTML = "";
        c_pres = document.createElement('canvas');
        c_pres.setAttribute("id",'canvas_presentation');
        c_pres.setAttribute("width",600);
        c_pres.setAttribute("height",400);
        cnva.appendChild(c_pres);
        c_pres = document.getElementById('canvas_presentation').getContext('2d');
    }

    let fontSize = 20;
    c_pres.font = fontSize + "px Arial";
    c_pres.fillStyle = "grey";
    c_pres.textAlign = "center";

    if (c < 1){
        c_pres.fillText('Please upload the csv file and click on GO to visualize graphs', 600/2,400/2);
    }
    
    else if (c > 1){
        c_pres.fillText('Click on GO to visualize graphs', 600/2,400/2);
    }
}

/* When the file is uploaded this function does the preparation of the data, 
it takes the value of column 1 and last colum and put them into arrays */

window.onload = function () {
    c_p();
    console.log('ok ok');
    let f = document.getElementById('fileUpload');
    f.onchange = function () {
        i = 0;
        c_carou = 0;
        c = c + 1; 
        console.log('changer c = ',c);
        canvas_array = [];
        DATA = [];
        LAND =[];
       
        c_p()
        console.log('dac');
        let file = f.files[0];
        name_file = file.name;

        document.getElementById('label_upload').innerHTML = name_file;
        document.getElementById('label_upload').style.backgroundColor = 'rgb(112, 43, 43)';

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
            if(LAND.length != 0){
                c_carou+= 1;
            }
        };
        fr.readAsText(file);
    }
}

function Process() {

    let LM_array = [];
    let mean_array = [];
    let names = ['L1','L2','L3','L4','L5','L6','L7','L8','L9','L10','L11','L12','L13','L14','L15','L16', 'L17', 'L18'];
    let L =[];
    let Lmean=[];
    let LM=[];

    for (let i=0; i<=18; i++){
        array = [];
        LM_array.push(array);
    }

    for (let j = 1 ; j<294;j++){
        L.push(j);
    }

    for(let i=1; i<LAND.length-1;i++){
        for (let j=0; j<=18; j++){
            if(LAND[i] == j){
                LM_array[j-1].push(DATA[i]);
                break;
            }
        }
    }

    for (let i=0; i<=18; i++){
        mean_array.push(mean(LM_array[i]));
    }
    
    for (let i=0; i<LM_array.length; i++){
        if(LM_array[i]!= 0){
            renderChart(LM_array[i], L,names[i]);
            Lmean.push(mean_array[i]);
            LM.push(i+1);
        }
    }

    renderChart(Lmean,LM,'Global Graphic');
}


function renderChart(data, labels, name) {
    let cnva = document.getElementById("caroussel1");
    let ctx = document.createElement("canvas");
    ctx.setAttribute("id", name);
    canvas_array.push(ctx);
    d+= 1;
    if (name === 'L1'){;
        let old_c = document.getElementById('canvas_presentation');
        cnva.replaceChild(ctx, old_c);
    }
       
    ctx.getContext("2d");
    
    let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,//x
            datasets: [{
                label: name, //name of the Graph
                data: data,//y
                backgroundColor: 'rgba(0, 128, 128, 0.116)',
                borderColor: "rgb(0, 128, 128)",
                borderWidth : 1,
                pointBackgroundColor : 'rgb(175, 88, 88)',
                pointBorderColor : 'rgb(175, 88, 88)',
                pointRadius : 2,
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
        let c_mean =0.0;
        let av=0.0;
        for (let i =0;i<list.length;i++){
            c_mean=c_mean+parseFloat(list[i]);
        }
        av=c_mean/(list.length);
        return av;

    }    
}

//caroussel
console.log('id graph', id_graph);


let changeIndex= function(id) {
    if (c_carou > 0){
        console.log('i', i);
        let cnva = document.getElementById("caroussel1");
        if (canvas_array.length !=0){
            if (id === "previous") {
                i = (i - 1) % canvas_array.length;
                console.log('i apres', i);

                if (i < 0) {
                    i = canvas_array.length-1 ;
                    console.log('i apres apres', i);
                }
            }
            else {
                i = (i+1) % canvas_array.length;
            }
            id_graph = canvas_array[i].id;
            console.log('id graph', id_graph);
            cnva.innerHTML = "";
            changeImage(i);
        }
    }
}

let changeImage = function(i) {
    let cnva = document.getElementById("caroussel1");
    cnva.appendChild(canvas_array[i]);
}

let download_graph = function(){
    if (d != 0){
        let download = document.getElementById("download");
        let image = document.getElementById(id_graph).toDataURL("image/jpeg").replace("image/png", "image/octet-stream");
        download.setAttribute("href", image);
    }
}
