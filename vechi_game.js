
function all_opit_slot() {
opit_slot_orujie += bonus_opit_slot;
opit_slot_obod += bonus_opit_slot;
opit_slot_chit += bonus_opit_slot;
opit_slot_odejda += bonus_opit_slot;
opit_slot_ojerelie += bonus_opit_slot;
opit_slot_levoe_kolso += bonus_opit_slot;
opit_slot_pravoe_kolso += bonus_opit_slot;
opit_slot_braslet_leviy += bonus_opit_slot;
opit_slot_braslet_praviy += bonus_opit_slot;

document.getElementById('visual_bonus_opit_slot').innerHTML = bonus_opit_slot;

document.getElementById('visual_opit_slot_orujie').innerHTML = opit_slot_orujie;
document.getElementById('visual_opit_slot_obod').innerHTML = opit_slot_obod;
document.getElementById('visual_opit_slot_chit').innerHTML = opit_slot_chit;
document.getElementById('visual_opit_slot_odejda').innerHTML = opit_slot_odejda;	
document.getElementById('visual_opit_slot_ojerelie').innerHTML = opit_slot_ojerelie;
document.getElementById('visual_opit_slot_levoe_kolso').innerHTML = opit_slot_levoe_kolso;
document.getElementById('visual_opit_slot_pravoe_kolso').innerHTML = opit_slot_pravoe_kolso;
document.getElementById('visual_opit_slot_braslet_leviy').innerHTML = opit_slot_braslet_leviy;
document.getElementById('visual_opit_slot_braslet_praviy').innerHTML = opit_slot_braslet_praviy;
opit_god_oruzie();
opit_god_obod();
opit_god_chit();
opit_god_odejda();
opit_god_ojerelie();
opit_god_levoe_kolso();
opit_god_pravoe_kolso();
opit_god_braslet_leviy();
opit_god_braslet_praviy();




	
}



     //Прокачка вещей одетых на персонаже//
	 //Оружие
	
	 var opit_slot_orujie; {opit_slot_orujie = 0;}
	 var all_opit_slot_orujie; {opit_slot_orujie = all_opit_slot_orujie = 0;}
	 
	 var level_god_oruzie; {level_god_oruzie = 0;}
     var opit_god_oruzie_01; {opit_god_oruzie_01 = 0;}
	 var all_opit_god_oruzie_01; {opit_god_oruzie_01 = all_opit_god_oruzie_01 = 1000;}
	 function opit_god_oruzie() {
		opit_god_oruzie_01 -= opit_slot_orujie;
		polosa_opit_slot_orujie.width -= opit_slot_orujie*1/(all_opit_god_oruzie_01/100);
		
		
	    document.getElementById('visual_item_god_oruzie').innerHTML = opit_god_oruzie_01;
	    if (opit_god_oruzie_01 <= 1) {
			//добавляем статы
		god_uron += 10;
		
		level_god_oruzie += 1;
		document.getElementById('visual_level_god_oruzie').innerHTML = 'Уровень:  ' + level_god_oruzie;
		opit_god_oruzie_01 = all_opit_god_oruzie_01;
		polosa_opit_slot_orujie.width = 100;
		}
}

//Обод




	
	 var opit_slot_obod; {opit_slot_obod = 0;}
	 var all_opit_slot_obod; {opit_slot_obod = all_opit_slot_obod = 0;}
	 
	 var level_god_obod; {level_god_obod = 0;}
     var opit_god_obod_01; {opit_god_obod_01 = 0;}
	 var all_opit_god_obod_01; {opit_god_obod_01 = all_opit_god_obod_01 = 1000;}
	 function opit_god_obod() {
		opit_god_obod_01 -= opit_slot_obod;
		polosa_opit_slot_obod.width -= opit_slot_obod*1/(all_opit_god_obod_01/100);
		
		
	    document.getElementById('visual_item_god_obod').innerHTML = opit_god_obod_01;
	    if (opit_god_obod_01 <= 1) {
			//добавляем статы
		god_vnimanie += 1;
		
		level_god_obod += 1;
		document.getElementById('visual_level_god_obod').innerHTML = 'Уровень:  ' + level_god_obod;
		opit_god_obod_01 = all_opit_god_obod_01;
		polosa_opit_slot_obod.width = 100;
		}
}





	 //Шит, или другая рука
	
	 var opit_slot_chit; {opit_slot_chit = 0;}
	 var all_opit_slot_chit; {opit_slot_chit = all_opit_slot_chit = 0;}
	 
	 var level_god_chit; {level_god_chit = 0;}
     var opit_god_chit_01; {opit_god_chit_01 = 0;}
	 var all_opit_god_chit_01; {opit_god_chit_01 = all_opit_god_chit_01 = 1000;}
	 function opit_god_chit() {
		opit_god_chit_01 -= opit_slot_chit;
		polosa_opit_slot_chit.width -= opit_slot_chit*1/(all_opit_god_chit_01/100);
		
		
	    document.getElementById('visual_item_god_chit').innerHTML = opit_god_chit_01;
	    if (opit_god_chit_01 <= 1) {
			//добавляем статы
		god_uron += 10;
		god_bron += 5;
		level_god_chit += 1;
		document.getElementById('visual_level_god_chit').innerHTML = 'Уровень:  ' + level_god_chit;
		opit_god_chit_01 = all_opit_god_chit_01;
		polosa_opit_slot_chit.width = 100;
		}
}





	 //Одежда
	 var opit_slot_odejda; {opit_slot_odejda = 0;}
	 var all_opit_slot_odejda; {opit_slot_odejda = all_opit_slot_odejda = 0;}
	 
	 var level_god_odejda; {level_god_odejda = 0;}
     var opit_god_odejda_01; {opit_god_odejda_01 = 0;}
     var all_opit_god_odejda_01; {opit_god_odejda_01 = all_opit_god_odejda_01 = 1000;}
	 function opit_god_odejda() {
		opit_god_odejda_01 -= opit_slot_odejda;
		polosa_opit_slot_odejda.width -= opit_slot_odejda*1/(all_opit_god_odejda_01/100);
		
		
	    document.getElementById('visual_item_god_odejda').innerHTML = opit_god_odejda_01;
	    if (opit_god_odejda_01 <= 1) {
		god_bron += 10;
		god_hp += 100;
		
		level_god_odejda += 1;
		document.getElementById('visual_level_god_odejda').innerHTML = 'Уровень:  ' + level_god_odejda;
		opit_god_odejda_01 = all_opit_god_odejda_01;
		polosa_opit_slot_odejda.width = 100;
		}	
}



	 //Ожерелье
	 var opit_slot_ojerelie; {opit_slot_ojerelie = 0;}
	 var all_opit_slot_ojerelie; {opit_slot_ojerelie = all_opit_slot_ojerelie = 0;}
	 
	 var level_god_ojerelie; {level_god_ojerelie = 0;}
     var opit_god_ojerelie_01; {opit_god_ojerelie_01 = 0;}
     var all_opit_god_ojerelie_01; {opit_god_ojerelie_01 = all_opit_god_ojerelie_01 = 1000;}
	 function opit_god_ojerelie() {
		opit_god_ojerelie_01 -= opit_slot_ojerelie;
		polosa_opit_slot_ojerelie.width -= opit_slot_ojerelie*1/(all_opit_god_ojerelie_01/100);
		
		
	    document.getElementById('visual_item_god_ojerelie').innerHTML = opit_god_ojerelie_01;
	    if (opit_god_ojerelie_01 <= 1) {
		god_bron += 5;
		god_hp += 50;
		god_uron += 1;
		god_mana += 1;
		
	
		level_god_ojerelie += 1;
		document.getElementById('visual_level_god_ojerelie').innerHTML = 'Уровень:  ' + level_god_ojerelie;
		opit_god_ojerelie_01 = all_opit_god_ojerelie_01;
		polosa_opit_slot_ojerelie.width = 100;
		}		
}




	 //Кольцо левой Руки
	 var opit_slot_levoe_kolso; {opit_slot_levoe_kolso = 0;}
	 var all_opit_slot_levoe_kolso; {opit_slot_levoe_kolso = all_opit_slot_levoe_kolso = 0;}
	 
	 var level_god_levoe_kolso; {level_god_levoe_kolso = 0;}
     var opit_god_levoe_kolso_01; {opit_god_levoe_kolso_01 = 0;}
     var all_opit_god_levoe_kolso_01; {opit_god_levoe_kolso_01 = all_opit_god_levoe_kolso_01 = 1000;}
	 function opit_god_levoe_kolso() {
		opit_god_levoe_kolso_01 -= opit_slot_levoe_kolso;
		polosa_opit_slot_levoe_kolso.width -= opit_slot_levoe_kolso*1/(all_opit_god_levoe_kolso_01/100);
		
		
	    document.getElementById('visual_item_god_levoe_kolso').innerHTML = opit_god_levoe_kolso_01;
	    if (opit_god_levoe_kolso_01 <= 1) {
		god_uron += 5;
		god_mana += 1;
		god_jar_uron += 1;
		
		
		level_god_levoe_kolso += 1;
		document.getElementById('visual_level_god_levoe_kolso').innerHTML = 'Уровень:  ' + level_god_levoe_kolso;
		opit_god_levoe_kolso_01 = all_opit_god_levoe_kolso_01;
		polosa_opit_slot_levoe_kolso.width = 100;
		}		
}



     //Кольцо правой руки
	 var opit_slot_pravoe_kolso; {opit_slot_pravoe_kolso = 0;}
	 var all_opit_slot_pravoe_kolso; {opit_slot_pravoe_kolso = all_opit_slot_pravoe_kolso = 0;}
	 
	 var level_god_pravoe_kolso; {level_god_pravoe_kolso = 0;}
     var opit_god_pravoe_kolso_01; {opit_god_pravoe_kolso_01 = 0;}
     var all_opit_god_pravoe_kolso_01; {opit_god_pravoe_kolso_01 = all_opit_god_pravoe_kolso_01 = 1000;}
	 function opit_god_pravoe_kolso() {
		opit_god_pravoe_kolso_01 -= opit_slot_pravoe_kolso;
		polosa_opit_slot_pravoe_kolso.width -= opit_slot_pravoe_kolso*1/(all_opit_god_pravoe_kolso_01/100);
		
		
	    document.getElementById('visual_item_god_pravoe_kolso').innerHTML = opit_god_pravoe_kolso_01;
	    if (opit_god_pravoe_kolso_01 <= 1) {
		god_uron += 5;
		god_mana += 1;
		god_jar_uron += 1;
		
		
		level_god_pravoe_kolso += 1;
		document.getElementById('visual_level_god_pravoe_kolso').innerHTML = 'Уровень:  ' + level_god_pravoe_kolso;
		opit_god_pravoe_kolso_01 = all_opit_god_pravoe_kolso_01;
		polosa_opit_slot_pravoe_kolso.width = 100;
		}		
}

     
	 
	//Браслет левой ноги
	 var opit_slot_braslet_leviy; {opit_slot_braslet_leviy = 0;}
	 var all_opit_slot_braslet_leviy; {opit_slot_braslet_leviy = all_opit_slot_braslet_leviy = 0;}
	 
	 var level_god_braslet_leviy; {level_god_braslet_leviy = 0;}
     var opit_god_braslet_leviy_01; {opit_god_braslet_leviy_01 = 0;}
     var all_opit_god_braslet_leviy_01; {opit_god_braslet_leviy_01 = all_opit_god_braslet_leviy_01 = 1000;}
	 function opit_god_braslet_leviy() {
		opit_god_braslet_leviy_01 -= opit_slot_braslet_leviy;
		polosa_opit_slot_braslet_leviy.width -= opit_slot_braslet_leviy*1/(all_opit_god_braslet_leviy_01/100);
		
		
	    document.getElementById('visual_item_god_braslet_leviy').innerHTML = opit_god_braslet_leviy_01;
	    if (opit_god_braslet_leviy_01 <= 1) {
		god_uron += 5;
		god_n_mana += 1;
		
		
		level_god_braslet_leviy += 1;
		document.getElementById('visual_level_god_braslet_leviy').innerHTML = 'Уровень:  ' + level_god_braslet_leviy;
		opit_god_braslet_leviy_01 = all_opit_god_braslet_leviy_01;
		polosa_opit_slot_braslet_leviy.width = 100;
		}		
}
		
	


//Браслет правой ноги
	 var opit_slot_braslet_praviy; {opit_slot_braslet_praviy = 0;}
	 var all_opit_slot_braslet_praviy; {opit_slot_braslet_praviy = all_opit_slot_braslet_praviy = 0;}
	 
	 var level_god_braslet_praviy; {level_god_braslet_praviy = 0;}
     var opit_god_braslet_praviy_01; {opit_god_braslet_praviy_01 = 0;}
     var all_opit_god_braslet_praviy_01; {opit_god_braslet_praviy_01 = all_opit_god_braslet_praviy_01 = 1000;}
	 function opit_god_braslet_praviy() {
		opit_god_braslet_praviy_01 -= opit_slot_braslet_praviy;
		polosa_opit_slot_braslet_praviy.width -= opit_slot_braslet_praviy*1/(all_opit_god_braslet_praviy_01/100);
		
		
	    document.getElementById('visual_item_god_braslet_praviy').innerHTML = opit_god_braslet_praviy_01;
	    if (opit_god_braslet_praviy_01 <= 1) {
		god_uron += 5;
		god_n_mana += 1;
		
		level_god_braslet_praviy += 1;
		document.getElementById('visual_level_god_braslet_praviy').innerHTML = 'Уровень:  ' + level_god_braslet_praviy;
		opit_god_braslet_praviy_01 = all_opit_god_braslet_praviy_01;
		polosa_opit_slot_braslet_praviy.width = 100;
		}		
}








	
		
		
		
		
		
		
		
		

