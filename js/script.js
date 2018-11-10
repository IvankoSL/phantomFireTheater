 
document.getElementById('menuOpen').onclick = menuShou;
document.getElementById('myTopnav').onclick = menuHide;
 

      function menuShou() {
 	      document.getElementById('myTopnav').style.left = '1px';
      }


      function menuHide() {
	      document.getElementById('myTopnav').style.left = '-112px';
      }

function slowScroll (id) {
	var offset = 70;
	$('html, body').animate ({
		scrollTop: $(id).offset ().top - offset
	}, 900);
	return false;
}

 new WOW().init();