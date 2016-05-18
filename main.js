document.addEventListener('DOMContentLoaded', function() {
    alert("Welcome to Thomas Walker's Online Resume!");
});    

var colors = document.getElementById('color');
colors.addEventListener('click', randomColor);

function randomColor(e){
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    e.target.style.color = color;
};

$('#Education').on('click', function (){
    $('#animate').animate({left: '+=50px'}, 10000);
})