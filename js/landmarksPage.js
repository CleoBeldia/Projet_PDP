let x = [];
let y = [];
let x1 = [];
let y1 = [];
let dist = [];
let sizepoint = 3.5;

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
window.onload = function () {
    let f = document.getElementById('inputTps');
    f.onchange = function () {
        let file = f.files[0];
        fr = new FileReader();
        fr.onload = function () {
            x = [];
            y = [];
            let first = (fr.result).toString().split(' ');
            let second = first.toString().split('\n');
            let third = second.toString().split(',');
            listpoint(third, x, y)
        };
        fr.readAsText(file);
    }
    let g = document.getElementById('inputTps1');
    g.onchange = function () {
        let file2 = g.files[0];
        gr = new FileReader();
        gr.onload = function () {
            x1 = [];
            y1 = [];
            let firstg = (gr.result).toString().split(' ');
            let secondg = firstg.toString().split('\n');
            let thirdg = secondg.toString().split(',');
            listpoint(thirdg, x1, y1)
        };
        gr.readAsText(file2);

        console.log(x, '\n', x1, '\n', y, '\n', y1);
    }

}


function isChecked() {
    var checkBox = document.getElementById("buttonDraw");
    var checkBox1 = document.getElementById("buttonDraw1");
    var checkBox2 = document.getElementById("dis");
    var a = checkBox.checked;
    var b = checkBox1.checked;
    var c = checkBox2.checked;
    clearpoint();
    setTimeout(function () {
        if (a == true && b == false && c == false) {
            draw(x, y, sizepoint, 'red');
            affichercoord(x, y, "Manual");
            clearcoord("Predicted");
            clearcoord('Distance');
        } else if (a == true && b == true && c == false) {
            draw(x, y, sizepoint, 'red');
            draw(x1, y1, sizepoint, 'yellow');
            affichercoord(x, y, "Manual");
            affichercoord(x1, y1, "Predicted");
            clearcoord('Distance');
        } else if (a == true && b == false && c == true) {
            draw(x, y, sizepoint, 'red');
            affichercoord(x, y, "Manual");
            clearcoord("Predicted");
            clearcoord('Distance');
        } else if (a == true && b == true && c == true) {
            clearcoord("Distance");
            draw(x, y, sizepoint, 'red');
            draw(x1, y1, sizepoint, 'yellow');
            distance(x, x1, y, y1);
            affichercoord(x, y, "Manual");
            affichercoord(x1, y1, "Predicted");
        } else if (a == false && b == true && c == false) {
            draw(x1, y1, sizepoint, 'yellow');
            affichercoord(x1, y1, "Predicted");
            clearcoord("Manual");
            clearcoord('Distance');
        } else if (a == false && b == true && c == true) {
            draw(x1, y1, sizepoint, 'yellow');
            clearcoord("Manual");
            clearcoord('Distance');
        } else {
            clearpoint();
            clearcoord("Predicted");
            clearcoord("Manual");
            clearcoord('Distance');
        }
    }, 5);
}


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


//dist((x, y), (a, b)) = √(x - a)² + (y - b)²
function distance(x, x1, y, y1) {
    let ctx = document.getElementById('canvas').getContext('2d');
    clearcoord('Distance');
    for (let i = 0; i < x.length; i++) {
        let moyx = ((x[i] + x1[i]) / 2);
        let moyy = 185 - ((y[i] + y1[i]) / 2);
        let rep = Math.sqrt(Math.pow((x[i] - x1[i]), 2) + Math.pow((y[i] - y1[i]), 2));
        rep = Math.round(rep * 100) / 100;
        dist.push(rep);
        ctx.font = "10px Arial";
        ctx.fillStyle = "springgreen";
        ctx.fillText(i, moyx * 2, moyy * 2);
    }
    var dis= document.getElementById("Distance");
    dis.innerHTML = "<p> Distance in pixel :"+ "<br>"+dist.splice(x.length-1)+ "</p>";
    
}

/*
function affichedis(liste) {
    texte = "";
    for (let i = 0; i < liste.length; i++) {
        texte+= i + " -> ";
        texte += liste[i] + ",";
        texte += "\n";
    }
    var dis= document.getElementById("Distance");
    dis.innerHTML = "<p> Distance in pixel :"+ "<br>" +texte+ "</p>";
}
*/


function affichercoord(x, y, type) {
    texte = "";
    for (let i = 0; i < x.length; i++) {
        texte+= i + "  ";
        texte += "[";
        texte += x[i] + ",";
        texte += y[i];
        texte += "]";
        texte += "\n";
    }
    var coord = document.getElementById(type);
    coord.innerHTML = "<p> "+ type+ " landmark coordinates"+ "<br> " + texte + "</p>";
}

function clearcoord(type) {
    texte = ""
    var coord = document.getElementById(type);
    coord.innerHTML = "<p>" + texte + "</p>";
}
function clearpoint() {
    let ctx = document.getElementById('canvas').getContext('2d');
    let image = new Image();
    let input = document.getElementById('inputImage');
    image.src = URL.createObjectURL(input.files[0]);
    image.onload = function () {
        ctx.drawImage(image, 0, 0, 384, 384);
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
    image.onload = function () {
        ctx.drawImage(image, 0, 0, 384, 384);
    }
}

download_beetle = function (image) {
    var enregister = canvas.toDataURL("image/jpeg");
    image.href = enregister;
};
