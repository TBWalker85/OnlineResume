document.addEventListener('DOMContentLoaded', function() {
    alert("Welcome to Thomas Walker's Online Resume!");
});    

var colors = document.getElementById('container');
colors.addEventListener('mouseenter', randomColor);
console.log(colors);

function randomColor(e){
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    e.target.style.color = color;
};

$('#Education').click(function (){
    $('#animate').animate({left: '+=30em'}, 10000);
})