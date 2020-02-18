window.onload=function(){

    function animationCercle() {

        var elmCercle=document.getElementsByTagName('canvas')[0];
        var cercle=elmCercle.getContext("2d");

        /*On ajuste le cadre pour garder une bonne qualité*/ 
        elmCercle.width = window.innerWidth;    
        elmCercle.height = window.innerHeight/4;

        function couleurAleatoire() {
            var o = Math.round, r = Math.random, s = 255;
            return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
        }
        
        if(i > 80){
          i = 0;
          
        }

        i++;
       
        if( i > 0) {
            var couleur = couleurAleatoire();
            cercle.beginPath();
            cercle.arc(220, 90, i+5, 0, 2 * Math.PI, true);
            cercle.arc(540, 90, i+5, 0, 2 * Math.PI, true);
            cercle.arc(860, 90, i+5, 0, 2 * Math.PI, true);
            cercle.fillStyle =  couleur;
            cercle.fill();
        }

        cercle.restore();
        setTimeout(animationCercle, 109);
    }
    
    var i = 0;
    animationCercle();   
}

