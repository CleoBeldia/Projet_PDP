let x = [];
let y = [];
console.log('x1 :',x);
console.log('y1 :',y);


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
            x = [];
            y = [];
            let first =(fr.result).toString().split(' ');
            let second = first.toString().split('\n'); 
            let third = second.toString().split(','); 
            console.log('third : ', third);
            for (let i=1; i<(third.length)-1; i++){
                if (i%2==0){
                    y.push(parseInt(third[i]));
                } 
                else {
                    x.push(parseInt(third[i]));
                }
            }
        };
        fr.readAsText(file);
    }
}

function draw1(){
    let ctx = document.getElementById('canvas').getContext('2d');
    let img = new Image();

    console.log('x',x);

    img.onload = function() {
        ctx.drawImage(img, 0, 0);
        for (let i=0; i<=x.length; i++) {    
            ctx.beginPath();
            ctx.arc(x[i], 192-y[i], 2.5, 0, 5 * Math.PI);
            ctx.fillStyle ='red';
            ctx.fill();
        };
        ctx.stroke();
    };
    let image = document.getElementById('inputImage');
    img.src = URL.createObjectURL(image.files[0]);    
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
    // get image URI from canvas object
    var enregister = canvas.toDataURL("image/jpeg");
    image.href = enregister;
  };
