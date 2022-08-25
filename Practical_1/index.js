
function changeBg(){
    var txt = document.getElementById('background_color').innerHTML;
    if(txt == 'Light Mode'){
        document.getElementById('background_color').innerHTML='Dark Mode';
        document.body.style.backgroundColor = "white";
        document.getElementById('background_color').style.backgroundColor='black';
        document.getElementById('background_color').style.color='white';
        document.getElementById('header').style.backgroundColor='rgb(190, 247, 247)';
        document.getElementById('footer').style.backgroundColor='rgb(190, 247, 247)';

        document.getElementById('main_heading').style.color='black';
        document.getElementById('sub_heading').style.color='black';
        document.getElementById('sub_heading2').style.color='black';
        document.getElementById('sub_heading3').style.color='black';
        document.getElementById('sub_heading4').style.color='black';

        document.getElementById('footer').style.color='black';

        document.getElementById('article').style.color='black';

    }
    else{
        document.getElementById('background_color').innerHTML='Light Mode';
        document.body.style.backgroundColor = "black";
        document.getElementById('background_color').style.backgroundColor='white';
        document.getElementById('background_color').style.color='black';
        document.getElementById('header').style.backgroundColor='rgb(61, 63, 63)';
        document.getElementById('footer').style.backgroundColor='rgb(61, 63, 63)';

        document.getElementById('main_heading').style.color='white';
        document.getElementById('sub_heading').style.color='white';
        document.getElementById('sub_heading2').style.color='white';
        document.getElementById('sub_heading3').style.color='white';
        document.getElementById('sub_heading4').style.color='white';

        document.getElementById('footer').style.color='white';

        document.getElementById('article').style.color='rgb(148, 148, 148)';

    }
}

function header_color_choice_to_red(){
    document.getElementById('article').style.color='red';

}
function header_color_choice_to_white(){
    document.getElementById('article').style.color='white';

}
function header_color_choice_to_blue(){
    document.getElementById('article').style.color='blue';

}
function header_color_choice_to_yellow(){
    document.getElementById('article').style.color='rgb(255, 251, 0)';

}        
