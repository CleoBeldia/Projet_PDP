// variables
let x = [];
let y = [];
let x1 = [];
let y1 = [];
let dist = [];
let sizepoint = 3.5;
let c;
let c_drop = 0;
let frise =  document.getElementsByClassName('protocole');


//image
let loadFile = function (event) {
    let image = document.getElementById('uploadImage');
    image.src = URL.createObjectURL(event.target.files[0]);
};


function listpoint(third, x, y) {
    for (let i = 1; i < (third.length) - 1; i++) {
        if (i % 2 == 0) {
            y.push(parseInt(third[i]));
        } else {
            x.push(parseInt(third[i]));
        }
    }
}

window.onload = function loadTPS() {
    textcanvas();
    c = 0;
    let f = document.getElementById('inputTps');
    f.onchange = function () {
        let file = f.files[0];
        let name_file = file.name;

        document.getElementById('labelT1').innerHTML = name_file;

        fr = new FileReader();
        fr.onload = function () {
            x = [];
            y = [];
            let first = (fr.result).toString().split(' ');
            let second = first.toString().split('\n');
            let third = second.toString().split(',');
            listpoint(third, x, y);
            if (x.length!=0){
                c = c + 1; 
            }
            if (c == 2){
                distance(x, x1, y, y1);
                creerTab2(x,y,'values_table');
                creerTab2(x,y,'predicted_table');
                creerTab2(x1,y1,'manual_table');
                creerTab2(x1,y1,'distance_table');
                for (let i = 0; i<frise.length; i++){
                    frise[i].style.display = 'none';
                }
                if (c_drop >= 1){
                    document.getElementById('do_land').style.display = 'inline-block';
                }
                else {
                    document.getElementById('do_image').style.display = 'inline-block';
                }
            }
            else if (c==1){
                for (let i = 0; i<frise.length; i++){
                    frise[i].style.display = 'none';
                }
                document.getElementById('do_tps2').style.display = 'inline-block';
            }
        };
        fr.readAsText(file);
    }

    let g = document.getElementById('inputTps1');
    g.onchange = function () {
        let file2 = g.files[0];
        let name_file = file2.name;

        document.getElementById('labelT2').innerHTML = name_file;        
        
        gr = new FileReader();
        gr.onload = function () {
            x1 = [];
            y1 = [];
            let firstg = (gr.result).toString().split(' ');
            let secondg = firstg.toString().split('\n');
            let thirdg = secondg.toString().split(',');
            listpoint(thirdg, x1, y1);
            if (x1.length!=0){
                c = c + 1; 
            }
            if (c == 2){
                distance(x, x1, y, y1);
                creerTab2(x,y,'values_table');
                creerTab2(x,y,'predicted_table');
                creerTab2(x1,y1,'manual_table');
                creerTab2(x1,y1,'distance_table');
                for (let i = 0; i<frise.length; i++){
                    frise[i].style.display = 'none';
                }
                if (c_drop >= 1){
                    document.getElementById('do_land').style.display = 'inline-block';
                }
                else {
                    document.getElementById('do_image').style.display = 'inline-block';
                }
            }
            else if (c==1){
                for (let i = 0; i<frise.length; i++){
                    frise[i].style.display = 'none';
                }
                document.getElementById('do_tps2').style.display = 'inline-block';
            }
        };
        gr.readAsText(file2);
 

    }

}

function creerTab2(x,y,type){
    let taille_tab = 0;
    if (x.length >= y.length){
        taille_tab = x.length; 
    }
    else {
        taille_tab = y.length;
    }
        let table = document.getElementById(type);
        for (let i=0; i < taille_tab ; i++){
            let tr_tab = document.createElement('tr');
            let td_tab1 = document.createElement('td');
            table.appendChild(tr_tab);
            tr_tab.appendChild(td_tab1);

            if (type =='values_table'){
                td_tab1.innerHTML = i+1;
            } 
            else if (type == 'distance_table'){
                td_tab1.innerHTML = dist[i];
            }
            else {
                let td_tab2 = document.createElement('td');
                tr_tab.appendChild(td_tab2);
                td_tab1.innerHTML = x[i];
                td_tab2.innerHTML = y[i];
            }
        }
}


function afficherTab (type){
    let table = document.getElementById(type);
    table.style.display = 'initial';
}




function clearTab(type){
    let table = document.getElementById(type);
    table.style.display = 'none';
}


function appel(){
    for (let i = 0; i<frise.length; i++){
        frise[i].style.display = 'none';
    }

    let p_check = document.getElementById('buttonDraw1');
    let m_check = document.getElementById('buttonDraw');
    let d_check = document.getElementById('dis');

    let p = p_check.checked;
    let m = m_check.checked;
    let d = d_check.checked;


    if (c_drop >= 1 && c >= 2){
        document.getElementById('do_coor').style.display = 'inline-block';
        clearpoint();
        setTimeout(function () {
            if (p == true && m == false && d == false ){
                draw(x, y, sizepoint, 'red');
                afficherTab('values_table');
                afficherTab('predicted_table'); 
                clearTab('manual_table');
                clearTab('distance_table');
                document.getElementById('do_coor').innerHTML = 'You can check the coordinates of the predicted landmarks below the image ';
            }
    
            else if (p == false && m == true && d == false){
                draw(x1, y1, sizepoint, 'yellow');
                afficherTab('values_table');
                clearTab('predicted_table'); 
                afficherTab('manual_table');
                clearTab('distance_table');
                document.getElementById('do_coor').innerHTML = 'You can check the coordinates of the manual landmarks below the image ';
            }
    
            else if (p == true && m == false && d == true){
                draw(x, y, sizepoint, 'red');
                afficherTab('values_table');
                afficherTab('predicted_table'); 
                clearTab('manual_table');
                clearTab('distance_table');
                document.getElementById('do_coor').innerHTML = 'You can check the coordinates of the predicted landmarks below the image ';
            }
    
            else if (p == true && m == true && d == false){
                draw(x, y, sizepoint, 'red');
                draw(x1, y1, sizepoint, 'yellow');
                afficherTab('values_table');
                afficherTab('predicted_table'); 
                afficherTab('manual_table');
                clearTab('distance_table');
                document.getElementById('do_coor').innerHTML = 'You can check the coordinates of all the landmarks below the image';
            }
    
            else if (p == false && m == true && d == true){
                draw(x1, y1, sizepoint, 'yellow');
                afficherTab('values_table');
                clearTab('predicted_table'); 
                afficherTab('manual_table');
                clearTab('distance_table');
                document.getElementById('do_coor').innerHTML = 'You can check the coordinates of the manual landmarks below the image ';
            }
    
            else if (p == true && m == true && d == true){
                draw(x, y, sizepoint, 'red');
                draw(x1, y1, sizepoint, 'yellow');
                distance(x, x1, y, y1);
                afficherTab('values_table');
                afficherTab('predicted_table'); 
                afficherTab('manual_table');
                afficherTab('distance_table');
                document.getElementById('do_coor').innerHTML = 'You can check the coordinates of all the landmarks and the distances below the image ';
            }
    
            else {
                clearpoint();
                clearTab('values_table');
                clearTab('predicted_table');
                clearTab('manual_table');
                clearTab('distance_table');
                document.getElementById('do_coor').style.display = 'none';
                document.getElementById('do_land').style.display = 'inline-block';
            }
        },5);
    }
    
    else if (c <= 1){
        document.getElementById('do_war_tps').style.display = 'inline-block';

    }

    else if (c_drop < 1){
     document.getElementById('do_war_image').style.display = 'inline-block';
    }
  
}

//Fonction qui dessine des point de couleurs 'color' et de taille 'size' sur l'image en fonction de coordonnées
function draw(x, y, size, color) {
    let ctx = document.getElementById('canvas').getContext('2d');
    for (let i = 0; i <= x.length; i++) {
        ctx.beginPath();
        ctx.arc(x[i] * 2, 384 - (y[i] * 2), size, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();
    };
}



// Fonction qui permet l'écriture le calcul des distances entre les coordonnées des points prédit (x et y)
// et ceux des points manuels (x1 et y1) puis son écriture sur l'image
function distance(x, x1, y, y1) {
    let ctx = document.getElementById('canvas').getContext('2d');
    let dis = document.getElementById("Distance");
    let d_check = document.getElementById('dis');

    for (let i = 0; i < x.length; i++) {
        let moyx = ((x[i] + x1[i]) / 2);
        let moyy = 185 - ((y[i] + y1[i]) / 2);
        let rep = Math.sqrt(Math.pow((x[i] - x1[i]), 2) + Math.pow((y[i] - y1[i]), 2));
        rep = Math.round(rep * 100) / 100;
        dist.push(rep);
        if(d_check.checked == true){
            ctx.font = "10px Arial";
            ctx.fillStyle = "springgreen";
            ctx.fillText(i, moyx * 2, moyy * 2);
        }
    }

}


//Fonction qui permet de remplacer l'ancienne image par une la même sans landmarks ou distances
function clearpoint() {
    let ctx = document.getElementById('canvas').getContext('2d');
    let image = new Image();
    let input = document.getElementById('inputImage');
    image.src = URL.createObjectURL(input.files[0]);
    image.onload = function () {
        ctx.drawImage(image, 0, 0, 384, 384);
    }
}


//Fonction relative au 'drag and drop' de l'image 
function allowDrop(ev) {
    ev.preventDefault();
}


function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}


function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    let ctx = document.getElementById('canvas').getContext('2d');
    let image = new Image();
    let input = document.getElementById('inputImage');
    image.src = URL.createObjectURL(input.files[0]);
    image.onload = function () {
        ctx.drawImage(image, 0, 0, 384, 384);
    }

    if (c >= 2){
        let frise =  document.getElementsByClassName('protocole');
        for (let i = 0; i<frise.length; i++){
            frise[i].style.display = 'none';
        }
        document.getElementById('do_land').style.display = 'inline-block';
    }
    else if (c < 2){
        let frise =  document.getElementsByClassName('protocole');
        for (let i = 0; i<frise.length; i++){
            frise[i].style.display = 'none';
        }
        document.getElementById('do_war_tps').style.display = 'inline-block';
    }
  

    c_drop+= 1;
    }


download_beetle = function (image) {
    let enregister = canvas.toDataURL("image/jpeg");
    image.href = enregister;
};


//CHANGEMENT COULEUR 
function color(label) {
    document.getElementById(label).style.backgroundColor = "white";
    document.getElementById(label).style.color = "teal";
    document.getElementById(label).style.borderColor = "white";
};


//ECRITURE CANVAS DEBUT
function  textcanvas(){
    let canvas = document.getElementById('canvas');
    let canvasContext = canvas.getContext('2d');
    let img  = new Image(); 
    img.src = 'images/dragdrop.png';
    canvasContext.drawImage(img, 384/2-50, 50);
    let fontSize = 20;

    canvasContext.font = fontSize + "px Arial";
    canvasContext.fillStyle = "rgb(51,51,51)";
    canvasContext.textAlign = "center";

    let string = "DRAG AND DROP YOUR IMAGE \n HERE";
    let array = string.split('\n');

    let x = 384/2;
    let y = 384/2;

    for (let i = 0; i < array.length; i++) {
        canvasContext.fillText(array[i], x, y);
         y += fontSize;
    }
}
