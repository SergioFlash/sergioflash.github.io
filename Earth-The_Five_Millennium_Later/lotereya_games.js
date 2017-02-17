
	var fichka_besplat_gold; {fichka_besplat_gold = 0;}
	var fichka_besplat_kristal; {fichka_besplat_kristal = 0;}
	var fichka_besplat_b_materiya; {fichka_besplat_b_materiya = 0;}
	
	
var fichka_besplat_serebro; {fichka_besplat_serebro = 0;}
var all_fichka_besplat_serebro; {fichka_besplat_serebro = all_fichka_besplat_serebro = 0;}
//добавим попытку	
function pluss_fichka_besplat_serebro() {fichka_besplat_serebro += 100;
document.getElementById('visual_fichka_besplat_serebro').innerHTML = 'Бесплатная попытка :  ' + fichka_besplat_serebro;
}
function lotereya_start() 
{
		  if (fichka_besplat_serebro==0) {
			fichka_besplat_serebro  = 0;
		                                 }
		 else if (fichka_besplat_serebro>=1) {
			 lotereya();
			 lot_full();
			 obnovlenie_lotereya();
         	fichka_besplat_serebro -= 1;
                                             }
document.getElementById('visual_fichka_besplat_serebro').innerHTML = 'Бесплатная попытка :  ' + fichka_besplat_serebro;
		
}
function obnovlenie_lotereya() 
{
document.getElementById('visual_fichka_besplat_serebro').innerHTML = 'Бесплатная попытка :  ' + fichka_besplat_serebro;
document.getElementById('visual_lot_all').innerHTML = 'Выпадение :  ' + lot;
}
	                         var lot_01; {lot_01 = 0;}
	                         var lot_02; {lot_02 = 0;}
	                         var lot_03; {lot_03 = 0;}
	                         var lot_04; {lot_04 = 0;}
							 var lot_05; {lot_05 = 0;}
							 var lot_06; {lot_06 = 0;}
							 var lot_07; {lot_07 = 0;}
							 var bonus_lot_serebro; {bonus_lot_serebro = 0;}
							 
var lot; {lot = 0;}
var all_lot; {lot = all_lot = 0;}	
		function lotereya() 
{
  
    lot_01 = Math.floor(Math.random() * (1 + 1 + 1 + 1 + 1 + 1 + 1)) + 1;
    lot_02 = Math.floor(Math.random() * (1 + 1 + 1 + 1 + 1 + 1 + 1)) + 1;
	lot_03 = Math.floor(Math.random() * (1 + 1 + 1 + 1 + 1 + 1 + 1)) + 1;
	lot_04 = Math.floor(Math.random() * (1 + 1 + 1 + 1 + 1 + 1 + 1)) + 1;
	lot_05 = Math.floor(Math.random() * (1 + 1 + 1 + 1 + 1 + 1 + 1)) + 1;
	
	document.getElementById('visual_lot_01').innerHTML = 'число :  ' + lot_01;
	document.getElementById('visual_lot_02').innerHTML = 'число :  ' + lot_02;
	document.getElementById('visual_lot_03').innerHTML = 'число :  ' + lot_03;
	document.getElementById('visual_lot_04').innerHTML = 'число :  ' + lot_04;
	document.getElementById('visual_lot_05').innerHTML = 'число :  ' + lot_05;
		
	
	if (lot_01 == 1) {'добавить div'}
	else if (lot_01 == 2) {'добавить div'}
	else if (lot_01 == 3) {'добавить div'}
	else if (lot_01 == 4) {'добавить div'}
	else if (lot_01 == 5) {'добавить div'}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
function lot_full() 
{
	 
    if (lot_01 == 7 && lot_02 == 7 && lot_03 == 7){alert('Победа')}
    else if (lot_02 == 7 && lot_03 == 7 && lot_04 == 7){alert('Победа')}
	else if (lot_03 == 7 && lot_04 == 7 && lot_05 == 7){alert('Победа')}
    else if (lot_01 == 7 && lot_03 == 7 && lot_04 == 7){alert('Победа')}
	else if (lot_01 == 7 && lot_04 == 7 && lot_05 == 7){alert('Победа')}
	else if (lot_02 == 7 && lot_04 == 7 && lot_05 == 7){alert('Победа')}
	else if (lot_01 == 7 && lot_02 == 7 && lot_03 == 7 && lot_04 == 7){alert('Победа')}
	else if (lot_02 == 7 && lot_03 == 7 && lot_04 == 7 && lot_05 == 7){alert('Победа')}
	else if (lot_01 == 7 && lot_03 == 7 && lot_04 == 7 && lot_05 == 7){alert('Победа')}
	else if (lot_01 == 7 && lot_02 == 7 && lot_03 == 7 && lot_04 == 7 && lot_05 == 7){alert('Победа')}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		
}

			
	