const sec_bk_slider = document.querySelector('.sb_slider_wrap'),
sb_sliderRow = document.querySelector('.sb_slider_row'),
dot = document.querySelectorAll('.sb_dots .dot'),
dot_red = document.querySelectorAll('.tb_dots .dot');
// 'use strict'
{



let sb_sliderWidth = sec_bk_slider.offsetWidth - 8,
index = 1,
dot_index = 0;
x1 = 0,
x2 = 0;

function getEvt() {
return event.type.search('touch') !== -1 ? event.touches[0] : event;
}
function startTouch() {
ev = getEvt();
x1 = ev.clientX;
// sec_bk_slider.removeEventListener('touchstart', startTouch);
// setTimeout(function(){
//     sec_bk_slider.addEventListener('touchstart', startTouch);
// },500)
}
function moveTouch() {

ev = getEvt();
x2 = x1 - ev.clientX; 

}


sec_bk_slider.addEventListener('touchstart', startTouch);
sec_bk_slider.addEventListener('touchmove', moveTouch);
sec_bk_slider.addEventListener('touchend', endTouch);

function endTouch(e){
if (x2 >= sb_sliderWidth *.25) {
    index++;

    // dot_index++;
    // if (dot_index > 2){
    //     dot_index = 0;
    // } else if (dot_index < 0) {
    //     dot_index = 2;
    // }
    

    
} else if (x2 <= sb_sliderWidth *.25 ){
    index--;

    // dot_index--;
    // if (dot_index < 0){
    //     dot_index = 2;
    // } else if (dot_index > 2) {
    //     dot_index = 0;
    // }

}

sb_sliderRow.style.transform = `translate3d(${sb_sliderWidth * (-index)}px, 0px, 0px)`;
sb_sliderRow.style.transition = 'all ease 0.5s';
sec_bk_slider.removeEventListener('touchstart', startTouch);
sec_bk_slider.removeEventListener('touchmove', moveTouch);
sec_bk_slider.removeEventListener('touchend', endTouch);

setTimeout(function(){
    sec_bk_slider.addEventListener('touchstart', startTouch);
    sec_bk_slider.addEventListener('touchmove', moveTouch);
    sec_bk_slider.addEventListener('touchend', endTouch);
},500)

if (dot[index-1]){
    for(let i = 0; i < dot.length; i++){
        dot[i].classList.remove('dot_active');
      }
      dot[index-1].classList.add('dot_active');
}


} 

sb_sliderRow.addEventListener('transitionend', function(){
if (index === 4){
    dot_index = 0;
    index = 1;
    sb_sliderRow.style.transform = `translate3d(${sb_sliderWidth * (-index)}px, 0px, 0px)`;
    sb_sliderRow.style.transition = 'none';
   
} else if (index === 0){

    dot_index = 1;
    index = 3;
    sb_sliderRow.style.transform = `translate3d(${sb_sliderWidth * (-index)}px, 0px, 0px)`;
    sb_sliderRow.style.transition = 'none';


}
for(let i = 0; i < dot.length; i++){
    dot[i].classList.remove('dot_active');
  }
  dot[index-1].classList.add('dot_active');

})
}
// slider sb
{
const sec_bk_slider = document.querySelector('.tb_slider_wrap'),
sb_sliderRow = document.querySelector('.tb_slider_row');


let sb_sliderWidth = sec_bk_slider.offsetWidth - 8,
index = 1,
x1 = 0,
x2 = 0;

function getEvt() {
return event.type.search('touch') !== -1 ? event.touches[0] : event;
}


sec_bk_slider.addEventListener('touchstart', function(e){
ev = getEvt();
x1 = ev.clientX;

});
sec_bk_slider.addEventListener('touchmove', function(e){
ev = getEvt();
x2 = x1 - ev.clientX; 
sb_sliderRow.style.transform = `translate3d(${sb_sliderWidth * (-index) - x2}px, 0px, 0px)`;
});


sec_bk_slider.addEventListener('touchend', function(e){
if (x2 >= sb_sliderWidth *.25) {
    index++;
    sb_sliderRow.style.transform = `translate3d(${sb_sliderWidth * (-index)}px, 0px, 0px)`;
    sb_sliderRow.style.transition = 'all ease 0.5s';
    for(let i = 0; i < dot.length; i++){
        dot[i].classList.remove('dot_active_red');
    }
    dot[index].classList.add('dot_active_red');

    return;
} else if (x2 <= sb_sliderWidth *.25 ){
    index--;
    sb_sliderRow.style.transform = `translate3d(${sb_sliderWidth * (-index)}px, 0px, 0px)`;
    sb_sliderRow.style.transition = 'all ease 0.5s';
    for(let i = 0; i < dot.length; i++){
        dot[i].classList.remove('dot_active_red');
    }
    dot[index].classList.add('dot_active_red');

}
});
}

