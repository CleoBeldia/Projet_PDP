
let open = function(){
    document.getElementById('old_side').style.display = 'none';
    document.getElementById('new_side').style.display = 'block';
}

let close = function(){
    document.getElementById('old_side').style.display = 'block';
    document.getElementById('new_side').style.display = 'none';
}

let prevent = function(){
    let button_old = document.getElementById('side_bar');
    let button_new = document.getElementById('close');
    button_old.addEventListener("click", open);
    button_new.addEventListener("click", close);
}

window.onload = prevent;

