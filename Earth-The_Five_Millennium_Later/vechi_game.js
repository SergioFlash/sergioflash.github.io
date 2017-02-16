

function slot(){
	
        obnovlenie_stat();
		opit_god_oruzie();
		opit_god_odejda();
		opit_god_ojerelie();
		opit_god_levoe_kolso();
		opit_god_pravoe_kolso();
		opit_god_levaya_noga();
		opit_god_pravaya_noga();
		all_umeliy_voin();
}		





     //Прокачка вещей одетых на персонаже//
	 //Оружие
	
	 var opit_slot_orujie; {opit_slot_orujie = 0;}
	 
	 var level_god_oruzie; {level_god_oruzie = 0;}
     var opit_god_oruzie_01; {opit_god_oruzie_01 = 0;}
	 var all_opit_god_oruzie_01; {opit_god_oruzie_01 = all_opit_god_oruzie_01 = 1000;}
	 function opit_god_oruzie() {
		opit_god_oruzie_01 -= opit_slot_orujie+bonus_opit_slot;
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

	 //Одежда
	 var opit_slot_odejda; {opit_slot_odejda = 0;}
	 
	 var level_god_odejda; {level_god_odejda = 0;}
     var opit_god_odejda_01; {opit_god_odejda_01 = 0;}
     var all_opit_god_odejda_01; {opit_god_odejda_01 = all_opit_god_odejda_01 = 1000;}
	 function opit_god_odejda() {
		opit_god_odejda_01 -= opit_slot_odejda+bonus_opit_slot;
		polosa_opit_slot_odejda.width -= opit_slot_odejda*1/(all_opit_god_odejda_01/100);
		
		
	    document.getElementById('visual_item_god_odejda').innerHTML = opit_god_odejda_01;
	    if (opit_god_odejda_01 <= 1) {
		god_bron += 2;
		god_hp += 100;
		
		level_god_odejda += 1;
		document.getElementById('visual_level_god_odejda').innerHTML = 'Уровень:  ' + level_god_odejda;
		opit_god_odejda_01 = all_opit_god_odejda_01;
		polosa_opit_slot_odejda.width = 100;
		}	
}



	 //Ожерелье
	 var opit_slot_ojerelie; {opit_slot_ojerelie = 0;}
	 
	 var level_god_ojerelie; {level_god_ojerelie = 0;}
     var opit_god_ojerelie_01; {opit_god_ojerelie_01 = 0;}
     var all_opit_god_ojerelie_01; {opit_god_ojerelie_01 = all_opit_god_ojerelie_01 = 1000;}
	 function opit_god_ojerelie() {
		opit_god_ojerelie_01 -= opit_slot_ojerelie+bonus_opit_slot;
		polosa_opit_slot_ojerelie.width -= opit_slot_ojerelie*1/(all_opit_god_ojerelie_01/100);
		
		
	    document.getElementById('visual_item_god_ojerelie').innerHTML = opit_god_ojerelie_01;
	    if (opit_god_ojerelie_01 <= 1) {
		god_bron += 1;
		god_hp += 50;
		god_uron += 1;
		god_mana += 1;
		god_jar_uron += 1;
		god_udacha += 1;
	
		level_god_ojerelie += 1;
		document.getElementById('visual_level_god_ojerelie').innerHTML = 'Уровень:  ' + level_god_ojerelie;
		opit_god_ojerelie_01 = all_opit_god_ojerelie_01;
		polosa_opit_slot_ojerelie.width = 100;
		}		
}



	 //Кольцо левой Руки
	 var opit_slot_levoe_kolso; {opit_slot_levoe_kolso = 0;}
	 
	 var level_god_levoe_kolso; {level_god_levoe_kolso = 0;}
     var opit_god_levoe_kolso_01; {opit_god_levoe_kolso_01 = 0;}
     var all_opit_god_levoe_kolso_01; {opit_god_levoe_kolso_01 = all_opit_god_levoe_kolso_01 = 1000;}
	 function opit_god_levoe_kolso() {
		opit_god_levoe_kolso_01 -= opit_slot_levoe_kolso+bonus_opit_slot;
		polosa_opit_slot_levoe_kolso.width -= opit_slot_levoe_kolso*1/(all_opit_god_levoe_kolso_01/100);
		
		
	    document.getElementById('visual_item_god_levoe_kolso').innerHTML = opit_god_levoe_kolso_01;
	    if (opit_god_levoe_kolso_01 <= 1) {
		god_uron += 1;
		god_mana += 1;
		god_jar_uron += 1;
		god_udacha += 1;
		
		level_god_levoe_kolso += 1;
		document.getElementById('visual_level_god_levoe_kolso').innerHTML = 'Уровень:  ' + level_god_levoe_kolso;
		opit_god_levoe_kolso_01 = all_opit_god_levoe_kolso_01;
		polosa_opit_slot_levoe_kolso.width = 100;
		}		
}


     //Кольцо правой руки
	 var opit_slot_pravoe_kolso; {opit_slot_pravoe_kolso = 0;}
	 
	 var level_god_pravoe_kolso; {level_god_pravoe_kolso = 0;}
     var opit_god_pravoe_kolso_01; {opit_god_pravoe_kolso_01 = 0;}
     var all_opit_god_pravoe_kolso_01; {opit_god_pravoe_kolso_01 = all_opit_god_pravoe_kolso_01 = 1000;}
	 function opit_god_pravoe_kolso() {
		opit_god_pravoe_kolso_01 -= opit_slot_pravoe_kolso+bonus_opit_slot;
		polosa_opit_slot_pravoe_kolso.width -= opit_slot_pravoe_kolso*1/(all_opit_god_pravoe_kolso_01/100);
		
	    document.getElementById('visual_item_god_pravoe_kolso').innerHTML = opit_god_pravoe_kolso_01;
	    if (opit_god_pravoe_kolso_01 <= 1) {
		god_uron += 1;
		god_mana += 1;
		god_jar_uron += 1;
		god_udacha += 1;
		
		level_god_pravoe_kolso += 1;
		document.getElementById('visual_level_god_pravoe_kolso').innerHTML = 'Уровень:  ' + level_god_pravoe_kolso;
		opit_god_pravoe_kolso_01 = all_opit_god_pravoe_kolso_01;
		polosa_opit_slot_pravoe_kolso.width = 100;
		}		
}


	  //Браслет левой ноги
	 var opit_slot_levaya_noga; {opit_slot_levaya_noga = 0;} 
	  
	 var level_god_levaya_noga; {level_god_levaya_noga = 0;}
     var opit_god_levaya_noga_01; {opit_god_levaya_noga_01 = 0;}
     var all_opit_god_levaya_noga_01; {opit_god_levaya_noga_01 = all_opit_god_levaya_noga_01 = 1000;}
	 function opit_god_levaya_noga() {
		opit_god_levaya_noga_01 -= opit_slot_levaya_noga+bonus_opit_slot;
	    document.getElementById('visual_item_god_levaya_noga').innerHTML = opit_god_levaya_noga_01;
	    if (opit_god_levaya_noga_01 <= 1) {
		god_uron += 1;
		god_mana += 1;
		god_jar_uron += 1;
		god_udacha += 1;
		all_opit_god_levaya_noga_01 += 25;
		level_god_levaya_noga += 1;
		document.getElementById('visual_level_god_levaya_noga').innerHTML = 'Уровень Браслета Л. Ноги:   ' + level_god_levaya_noga;
		opit_god_levaya_noga_01 = all_opit_god_levaya_noga_01;
		}		
}



	 //Браслет правой ноги
	 var opit_slot_pravaya_noga; {opit_slot_pravaya_noga = 0;} 
	 
	 var level_god_pravaya_noga; {level_god_pravaya_noga = 0;}
     var opit_god_pravaya_noga_01; {opit_god_pravaya_noga_01 = 0;}
     var all_opit_god_pravaya_noga_01; {opit_god_pravaya_noga_01 = all_opit_god_pravaya_noga_01 = 1000;}
	 function opit_god_pravaya_noga() {
		opit_god_pravaya_noga_01 -= opit_slot_pravaya_noga+bonus_opit_slot;
	    document.getElementById('visual_item_god_pravaya_noga').innerHTML = opit_god_pravaya_noga_01;
	    if (opit_god_pravaya_noga_01 <= 1) {
		god_uron += 1;
		god_mana += 1;
		god_jar_uron += 1;
		god_udacha += 1;
		all_opit_god_pravaya_noga_01 += 25;
		level_god_pravaya_noga += 1;
		document.getElementById('visual_level_god_pravaya_noga').innerHTML = 'Уровень Браслета П. Ноги:   ' + level_god_pravaya_noga;
		opit_god_pravaya_noga_01 = all_opit_god_pravaya_noga_01;
		}		
}
	 
	 
		
		
		
		
		
		
		
		
		
		
		

