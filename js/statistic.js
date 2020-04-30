function Checked(){
    var p1 = document.getElementById("part1");
    var p2 = document.getElementById("part2");
    var p3 = document.getElementById("part3");
    var p4 = document.getElementById("part4");
    var p5 = document.getElementById("part5");

    var a = p1.checked;
    var b = p2.checked;
    var c = p3.checked;
    var d = p4.checked;
    var e = p5.checked;
    var choice=0;
   
    //setTimeout(function(){
        if (a==true && b==false && c==false && d==false && e==false){  
            choice=1;
        }  
        if (a==false && b==true && c==false && d==false && e==false){  
            choice=2;
        }
        if (a==false && b==false && c==true && d==false && e==false){ 
            choice=3;
        }
        if (a==false && b==false && c==false && d==true && e==false){ 
            choice=4;
        }
        if (a==false && b==false && c==false && d==false && e==true){ 
            choice=5;
        }

    return choice;
}

function renderChart(data,labels) { 
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'L1',
                data: data,
            }]
        },
        options: {
            legend: {
                position : 'bottom',
                labels:{
                    fontSize: 12,
                    boxWidth: 12,
                    usePointStyle: true,
                }
            }
        }
    });
}



function processFile(){ 
    var file = document.querySelector('#fileUpload').files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    //When the file finish load
    reader.onload = function(event) {
      //get the file.
      var csv = event.target.result;
      console.log('csv' + csv);
      //split and get the rows in an array
      var rows = csv.split('\n');
      console.log(rows);
      var cols = rows[0].split(',');
      console.log(cols);

        var DATA = [];
        var LABELS = [];
        for (var j = 1; j < rows.length; j++) {
          /*the value of the current column.
          Do whatever you want with the value*/
          var value = rows[j].split(',');
          console.log(value[6]);
          DATA.push(value[6]);
          LABELS.push(value[0]);
        }
        console.log(DATA,LABELS);
        var data=[];
        var labels=[]
        var choice = Checked();
        if (choice==1){    
            for (var i = 0 ; i< DATA.length ; i=i+11){
                data.push(DATA[i]);
                labels.push(LABELS[i]);
            }
        renderChart(data,labels);
        }
        if (choice==2){    
            for (var i = 1 ; i< DATA.length ; i=i+8){
                data.push(DATA[i]);
                labels.push(LABELS[i]);
        }
        renderChart(data,labels);
        }
        if (choice==3){    
            for (var i = 1 ; i< DATA.length ; i=i+18){
                data.push(DATA[i]);
                labels.push(LABELS[i]);
            }
        renderChart(data,labels);
        }
        if (choice==4){   
            for (var i = 1 ; i< DATA.length ; i=i+16){
                data.push(DATA[i]);
                labels.push(LABELS[i]);
            }
        renderChart(data,labels);
        }
        if (choice==5){  
            for (var i = 1 ; i< DATA.length ; i=i+10){
                data.push(DATA[i]);
                labels.push(LABELS[i]);
            }
        renderChart(data,labels);
        }
        console.log(data,labels);
    }
   
    }
