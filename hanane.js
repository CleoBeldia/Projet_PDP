let x = [];
let y = [];
let x1 = [];
let y1 = [];



//image
let loadFile = function(event) {
    let image = document.getElementById('uploadImage');
    image.src = URL.createObjectURL(event.target.files[0]);
};

window.onload = function() {
    let f = document.getElementById('inputTps');
    f.onchange = function() {
        let file = f.files[0];
        fr = new FileReader();
        fr.onload = function() {
            x1 = [];
            y1 = [];
            let first =(fr.result).toString().split(' ');
            let second = first.toString().split('\n'); 
            let third = second.toString().split(','); 
            console.log('third : ', third);
            for (let i=1; i<(third.length)-1; i++){
                if (i%2==0){
                    y1.push(parseInt(third[i]));
                } 
                else {
                    x1.push(parseInt(third[i]));
                }
                console.log(x1);
            }
        };
        fr.readAsText(file);
    }
    let g = document.getElementById('inputTps1');
    console.log(g);
    g.onchange = function() {
        let file2 = g.files[0];
        gr = new FileReader();
        gr.onload = function() {
            x = [];
            y = [];
            let firstg =(gr.result).toString().split(' ');
            let secondg = firstg.toString().split('\n'); 
            let thirdg = secondg.toString().split(','); 
            console.log('third : ', thirdg);
            for (let i=1; i<(thirdg.length)-1; i++){
                if (i%2==0){
                    y.push(parseInt(thirdg[i]));
                } 
                else {
                    x.push(parseInt(thirdg[i]));
                }
            }
        };
        gr.readAsText(file2);
    }
}


function isChecked() {
    var checkBox = document.getElementById("buttonDraw");
    var checkBox1 = document.getElementById("buttonDraw1");
    var checkBox2 = document.getElementById("dis");

    if (checkBox.checked == true){
        draw(x,y,2.5,'red');
    }if (checkBox.checked==false) {
        draw(x,y,0,'red');
    }
    if (checkBox1.checked == true){
        draw(x1,y1,2.5,'yellow');
    }if (checkBox1.checked==false){
        draw(x1,y1,0,'yellow');
    }
    if (checkBox2.checked==true){
        distance(x,x1,y,y1);
    }if (checkBox2.checked==false){
        draw(x1,y1,0,'yellow');
    }
} 


function draw(x,y,size,color){
    let ctx = document.getElementById('canvas').getContext('2d');
    for (let i=0; i<=x.length; i++) {    
        ctx.beginPath();
        ctx.arc(x[i], 192-y[i], size, 0, 2 * Math.PI);
        ctx.fillStyle =color;
        ctx.fill();
        ctx.stroke();
    }; 
}


//dist((x, y), (a, b)) = √(x - a)² + (y - b)²
function distance(x,x1,y,y1){
    let ctx = document.getElementById('canvas').getContext('2d');
    for(let i=0; i<x.length; i++){
        let moyx=-10+((x[i]+x1[i])/2);
        let moyy=185 - ((y[i]+y1[i])/2);
        let rep = Math.sqrt(Math.pow((x[i]-x1[i]),2) + Math.pow((y[i]-y1[i]),2));
        rep = Math.round(rep * 100) / 100 ;
        ctx.font = "10px Arial";
        ctx.fillStyle = "aqua";
        ctx.fillText(rep, moyx, moyy); 
    }

}


function allowDrop(ev) {
    ev.preventDefault();
  }
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    let ctx = document.getElementById('canvas').getContext('2d');
    let image = new Image();
    let input = document.getElementById('inputImage');
    image.src = URL.createObjectURL(input.files[0]);
    image.onload = function() {
    ctx.drawImage(image,0,0);    
    }    
  }

download_beetle = function(image) {
    var enregister = canvas.toDataURL("image/jpeg");
    image.href = enregister;
  };
