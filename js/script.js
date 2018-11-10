 
      document.getElementById('menuOpen').onclick = menuShou;
      document.getElementById('myTopnav').onclick = menuHide;
 

      function menuShou() {
 	      document.getElementById('myTopnav').style.left = '1px';
      }


      function menuHide() {
	      document.getElementById('myTopnav').style.left = '-112px';
      }
