window.onload=function(){

    function animationCercle() {

        var elmCercle=document.getElementsByTagName('canvas')[0];
        var cercle=elmCercle.getContext("2d");
        cercle.clearRect(0, 0, elmCercle.width, elmCercle.height);

        
        if(i > 70) {
            i = 40;
        }

        
        if( i > 40) {
            cercle.beginPath();
            cercle.arc(50, 50, i-40, 0, 2 * Math.PI, true);
            cercle.fillStyle =  "rgb(246,94,94)";
            cercle.fill();
        }

        i++;
        cercle.restore();
        setTimeout(animationCercle, 19);
    }
    var i = 0;
    animationCercle();
}

