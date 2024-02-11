let about_me_rest = document.getElementById('about-me-rest')
let show_btn = document.getElementById('see-more-btn')
let dots = document.getElementById('dots')
let btn_state = false;

function show(){
    if(btn_state == false){
        about_me_rest.style.display = "block";
        show_btn.innerText = "Ver menos";
        dots.innerText = ".";
        btn_state = true;
    }else{
        about_me_rest.style.display = "none";
        show_btn.innerText = "Ver mais";
        btn_state = false;
        dots.innerText = "...";
    }
}

