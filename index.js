function upload() {
    var img = document.getElementById('img');
    var file = document.getElementById('fileup');
    var image = new SimpleImage(file);
    image.drawTo(img);
}


function dispLandmark(){
    var tps = document.getElementById('land');
    var image = document.getElementById('img');
    var drawImage = image.getContext("2d");
    drawImage.beginPath();
    drawImage.arc(50, 50, 5, 0, 2 * Math.PI);
    drawImage.fillStyle = "blue";
    drawImage.stroke(); 
    drawImage.fill();
}



function dispLandmark1(){
    var image = document.getElementById('img');
    var tps = document.getElementById('land1');
    let l=[90, 152,
        97 ,161,
        83 ,162,
        98 ,158,
        124, 161,
        110, 30,
        89, 14,
        80, 13,
        63, 27,
        52, 161,
        81 ,158];

    /*
    let line=tps.(/\r\n|\n/);
    l.push(line);
    console.log(l);
    l.shift();
    console.log(l);
    l.pop();
    console.log(l);
    */

    let x=[];
    let y=[];
    for(let i in l){
        if (l[i]%2==0){
            x.push(l[i]);
        }else{
            y.push(l[i]);  
        }
    } 
    for(let i=0; i<=x.length; i++ ){
        var drawImage = image.getContext("2d");
        drawImage.beginPath();
        drawImage.arc(x[i], y[i], 5, 0, 2 * Math.PI);
        drawImage.fillStyle = "red";
        drawImage.stroke(); 
        drawImage.fill();
    }
    
}
