function upload() {
    let canvas = document.getElementById('canvas');
    let file = document.getElementById('doc');
    let image = new SimpleImage(file);
    image.drawTo(canvas);
}


let point = function(){
    
    let doc = document.getElementById("doc");
    /*
    doc = doc.toString();
    let l=doc.split(" ");
        l=l.toString();
        l=l.split('\n');
        l=l.toString();
        l=l.split(',');
        l.shift();
    console.log(l); */

    let l=[108, 166,
        114, 175,
        101 ,175,
        116, 171,
        142, 173,
        126, 36,
        109, 25,
        103, 25,
        86 ,37,
        71, 173,
        98, 171];
    let x=[];
    let y=[];
    let listfinale=[];
    for (let i=0;i<l.length;i++){
        if (i%2==0) {
            x.push(parseInt(l[i]));
        } else {
            y.push(parseInt(192-l[i]));
        }
        console.log("this is x y ", y,x);
    } 
    for (let i = 0; i<=x.length;i++){
        listfinale.push([x[i],y[i]]);
    }
    return listfinale;
}

let point1 = function(){
    
    let doc = document.getElementById("doc");
    /*
    doc = doc.toString();
    let l=doc.split(" ");
        l=l.toString();
        l=l.split('\n');
        l=l.toString();
        l=l.split(',');
        l.shift();
    console.log(l); */

let l=[109.15718, 162.86506,
        115.67837, 174.70253,
        100.16949 ,174.01152,
        116.5345 ,168.3912,
        141.83722 ,171.6337,
        132.1871 ,38.48774,
        114.42662, 24.22618,
        108.21744 ,24.57917,
        90.087, 36.52368,
        71.73245 ,168.48278,
        99.70144 ,167.71805];
    let x=[];
    let y=[];
    let listfinale=[];
    for (let i=0;i<l.length;i++){
        if (i%2==0) {
            x.push(parseInt(l[i]));
        } else {
            y.push(parseInt(192-l[i]));
        }
        console.log("this is x y ", y,x);
    } 
    for (let i = 0; i<=x.length;i++){
        listfinale.push([x[i],y[i]]);
    }
    return listfinale;
}

let draw = function(event){
    let canvas = document.getElementById('canvas');
    let list = point();
    console.log(list);
    for(let i=0; i<=list.length; i++ ){
    let drawImage = canvas.getContext("2d");
    drawImage.beginPath();
    drawImage.arc(list[i][0], list[i][1] , 2, 0, 2 * Math.PI);
    drawImage.fillStyle = "yellow";
    drawImage.stroke(); 
    drawImage.fill();
    }
}

let draw1 = function(event){
    let canvas = document.getElementById('canvas');
    let list = point1();
    console.log(list);
    for(let i=0; i<=list.length; i++ ){
    let drawImage = canvas.getContext("2d");
    drawImage.beginPath();
    drawImage.arc(list[i][0], list[i][1] , 2, 0, 2 * Math.PI);
    drawImage.fillStyle = "red";
    drawImage.stroke(); 
    drawImage.fill();
    }
}



let setupListeners = function(){
    let canvas = document.getElementById("canvas");
    let lm = document.getElementById("lm");
    let lp= document.getElementById("lp");
    let stat = document.createElement("csv");
   

    lm.addEventListener("click", draw);
    lp.addEventListener("click", draw1);

    

}



window.onload = setupListeners;
