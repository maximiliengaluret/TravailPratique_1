window.onload=function(){

    function animationCercle() {

        var elmCercle=document.getElementsByTagName('canvas')[0];
        var cercle=elmCercle.getContext("2d");
        //cercle.clearRect(0, 0, elmCercle.width, elmCercle.height);

        /*On ajuste le cadre pour garder une bonne qualité*/ 
        elmCercle.width = window.innerWidth;    
        elmCercle.height = window.innerHeight/4;

        
        
        if(i > 80){
          i = 0;
        }

        i++;
        
        if( i > 0) {
            cercle.beginPath();
            cercle.arc(187, 90, i+5, 0, 2 * Math.PI, true);
            cercle.fillStyle =  "rgb(246,94,94)";
            cercle.fill();
        }
    
      
        cercle.restore();
        setTimeout(animationCercle, 29);
    }

    

   
    var i = 0;
    animationCercle();   

    
   
   


}

