const play = document.querySelectorAll('.element');
for (let i=0; i<link.length; i++){
    play[i].onclick=()=>{window.open(link[i],"_blank");}
}
var bg = document.querySelector('.feature');
var box1 = document.querySelector('.box1');
var box2 = document.querySelector('.box2');
var box3 = document.querySelector('.box3');
var box4 = document.querySelector('.box4');
bg.style.backgroundImage = "url('source/background.jpg')";
box1.style.backgroundImage = "url('source/box1.jpg')";
box2.style.backgroundImage = "url('source/box2.jpg')";
box3.style.backgroundImage = "url('source/box3.jpg')";
box4.style.backgroundImage = "url('source/box4.jpg')";

var tags = document.querySelectorAll('.element');
tags.forEach(tag => {
    tag.style.backgroundImage = "url('source/tags.jpg')";
});

document.querySelectorAll('.text').forEach(txt=>{
    txt.style.color = mau_chu;
});

var footer = document.querySelector('.footer');
footer.style.backgroundImage = "url('source/footer.jpg')";