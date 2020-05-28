let DATA = [];
let LAND =[];
let canvas_array = [];
let c = 0;
let d = 0;
let id_graph = 'L1';
let c_carou;
let i;
let affich_graph = 0;

//canvas presentation
window.onresize = function(){
    if (c<=1 && affich_graph == 0) {
        c_p();
    }

    else if (c > 1 && affich_graph == 0){
        c_p();
    }
}  

let c_p = function() {
    let width_window = window.innerWidth;
    let height_window = window.innerHeight;

    if (c <= 1){
        canvas = document.getElementById('canvas_presentation');
        canvas.height = height_window/1.8;
        canvas.width = width_window/1.8;
        c_pres = canvas.getContext('2d');
    }
    else if (c > 1) {
        let cnva = document.getElementById("caroussel1");
        cnva.innerHTML = "";
        c_pres = document.createElement('canvas');
        c_pres.setAttribute("id",'canvas_presentation');
        c_pres.setAttribute("width",width_window/1.8);
        c_pres.setAttribute("height",height_window/1.8);
        cnva.appendChild(c_pres);
        c_pres = document.getElementById('canvas_presentation').getContext('2d');
    }
    let taille = width_window/50;
    c_pres.font = taille + "px Arial";
    c_pres.fillStyle = "black";
    c_pres.textAlign = "center";

    if (c <= 1){
        c_pres.fillText('Please upload the csv file and click on GO to visualize graphs',canvas.width/2,canvas.height/2);
    }
    
    else if (c > 1){
        c_pres.fillText('Click on GO to visualize graphs', width_window/3.8,height_window/3.8);
    }
}

/* When the file is uploaded this function does the preparation of the data, 
it takes the value of column 1 and last colum and put them into arrays */

window.onload = function () {
    c_p();
    let f = document.getElementById('fileUpload');
    f.onchange = function () {
        affich_graph = 0;
        i = 0;
        c_carou = 0;
        c = c + 1; 
        canvas_array = [];
        DATA = [];
        LAND =[];
        c_p()
        let file = f.files[0];
        name_file = file.name;

        document.getElementById('label_upload').innerHTML = name_file;
        document.getElementById('label_upload').style.backgroundColor = 'rgb(112, 43, 43)';

        fr = new FileReader();
        fr.onload = function (event) {
            affich_graph = 0;
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
    affich_graph = 1;

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
let changeIndex= function(id) {
    if (c_carou > 0){
        let cnva = document.getElementById("caroussel1");
        if (canvas_array.length !=0){
            if (id === "previous") {
                i = (i - 1) % canvas_array.length;

                if (i < 0) {
                    i = canvas_array.length-1 ;
                }
            }
            else {
                i = (i+1) % canvas_array.length;
            }
            id_graph = canvas_array[i].id;
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
