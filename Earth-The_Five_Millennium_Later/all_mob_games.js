
 var hp_mob_0001; {hp_mob_0001 = 0;}
 var bron_mob; {bron_mob = 0;}
 var blok_mob; {blok_mob = 0;}
 var mob_uron_0001; {mob_uron_0001 = 100;}
 var jar_mob; {jar_mob = 0;}
 


 var all_hp_mob; {hp_mob_0001 = all_hp_mob = 100;}
  
  //урон от мобов
  
  
  
     var batle_lvl_mob; {batle_lvl_mob = 1;}
	 var lvl_mob; {lvl_mob = 1;}
	 var all_lvl_mob; {lvl_mob = all_lvl_mob = 1;}	
  
  //опыт моба, который он будет получать во время битвы, и усиляться
   //Опыт Молодого бога
	 var opit_mob; {opit_mob = 0;}
	 var all_opit_mob; {opit_mob = all_opit_mob = 20;}
  
  
  
  
  
  function raspred_ochkov_navika() {
	    opit_umeliy = 4;
		pluss_opit_umeliy_voin();
	  
	  
  }
  
  
 
  
 //атака моба по герою
 
function hp_obnov_mob() {
		
	    document.getElementById('visual_all_god_hp').innerHTML = 'Здоровье:  ' + all_god_hp;
	    if (all_god_hp <= 1) {
		alert ("Вы Проиграли");
		all_god_hp = god_hp;}	   
}
  
  

  
  // обычная атака по мобу
  function war_hp_mob_0001() {
		  
		hp_mob_0001 -= god_uron;
		raspred_ochkov_navika();
		 //вывод значения на экран
	    document.getElementById('visual_hp_mob_0001').innerHTML =  'Здоровье: ' + hp_mob_0001;
		
		
		 opit_mob -= 1;
		 //вывод значения на экран
	    document.getElementById('visual_opit_mob').innerHTML = opit_mob;
		
		
			
	
	    //если Жизни равны 0
	    if (hp_mob_0001 <= 1) {
		//то объект пропадает 
		
		opit_god -= 10;
		opit_slot_orujie = 1;
		slot();
		
		//позволяет видеть визуально прибавку к опыту персонажа
		document.getElementById('visual_opit_god_1').innerHTML = opit_god;
		hp_mob_0001 = 100;
		
		//добавляем необходимый элемент, чтобы вся система работала как нужно
		poluchenie_lvl_god();
		document.getElementById('visual_hp_mob_0001').innerHTML =  'Здоровье: ' + hp_mob_0001;
		opit_god_ojerelie_01 -= 1;
		exit_modal_all();
		}
		//после вашей атаки атакует сразу моб
		all_god_hp -= (mob_uron_0001-god_bron/2);	
		
}
	//усиленная атака 
  function war_usilenie_hp_mob_0001() {
		 
		hp_mob_0001 -= (jar_uron+2) * god_uron;
		raspred_ochkov_navika();
		 //вывод значения на экран
	    document.getElementById('visual_hp_mob_0001').innerHTML =  'Здоровье: ' + hp_mob_0001;
		
	     opit_mob -= 1;
		 //вывод значения на экран
	    document.getElementById('visual_opit_mob').innerHTML = opit_mob;
	
	
	
		
	    //если Жизни равны 0
	    if (hp_mob_0001 <= 1) {
		//то объект пропадает 
		
		opit_god -= 10;
		opit_slot_orujie = 1;
		slot();
		
		//позволяет видеть визуально прибавку к опыту персонажа
		document.getElementById('visual_opit_god_1').innerHTML = opit_god;
		hp_mob_0001 = 100;
		
		//добавляем необходимый элемент, чтобы вся система работала как нужно
		poluchenie_lvl_god();
		document.getElementById('visual_hp_mob_0001').innerHTML =  'Здоровье: ' + hp_mob_0001;
		opit_god_ojerelie_01 -= 1;
		exit_modal_all();
		}
		
		//после вашей атаки атакует сразу моб
		all_god_hp -= (mob_uron_0001-god_bron/2);
		
	 }	 
	
	 //защита
	 function war_zachita_hp_mob_0001() {
		 
		//после вашей атаки атакует сразу моб
		all_god_hp -= (mob_uron_0001-(god_bron*2));
		

		 opit_mob -= 1;
		 //вывод значения на экран
	    document.getElementById('visual_opit_mob').innerHTML = opit_mob;
		
		
		
		raspred_ochkov_navika();
		 //вывод значения на экран
	    document.getElementById('visual_hp_mob_0001').innerHTML =  'Здоровье: ' + hp_mob_0001;
		
			
		
	    //если Жизни равны 0
	    if (hp_mob_0001 <= 1) {
		//то объект пропадает 
		
		opit_god -= 10;
		opit_slot_orujie = 1;
		slot();
		
		//позволяет видеть визуально прибавку к опыту персонажа
		document.getElementById('visual_opit_god_1').innerHTML = opit_god;
		hp_mob_0001 = 100;
		
		//добавляем необходимый элемент, чтобы вся система работала как нужно
		poluchenie_lvl_god();
		document.getElementById('visual_hp_mob_0001').innerHTML =  'Здоровье: ' + hp_mob_0001;
		opit_god_ojerelie_01 -= 1;
		exit_modal_all();
		}
		
	 }
	 
	
	 // при использовании заклинания - моб не отвечает
	 function war_zaklinanie_hp_mob_0001() {
		 
	
		
		raspred_ochkov_navika();
		 //вывод значения на экран
	    document.getElementById('visual_hp_mob_0001').innerHTML =  'Здоровье: ' + hp_mob_0001;

	    //если Жизни равны 0
	    if (hp_mob_0001 <= 1) {
		//то объект пропадает 
		opit_god -= 10;
		opit_slot_orujie = 1;
		slot();
		
		//позволяет видеть визуально прибавку к опыту персонажа
		document.getElementById('visual_opit_god_1').innerHTML = opit_god;
		hp_mob_0001 = 100;
		
		//добавляем необходимый элемент, чтобы вся система работала как нужно
		poluchenie_lvl_god();
		document.getElementById('visual_hp_mob_0001').innerHTML =  'Здоровье: ' + hp_mob_0001;
		opit_god_ojerelie_01 -= 1;
		exit_modal_all();
		}
		
	 }
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 

	 
	 
function lokation_batle_lvl_mob() {
		 batle_lvl_mob +=1; 
		 poluchenie_lvl_mob();
document.getElementById('visual_batle_lvl_mob').innerHTML =  'Локация ' + batle_lvl_mob;
document.getElementById('visual_hp_mob_0001').innerHTML =  'Здоровье ' + hp_mob_0001;
}
	 
	 
	
	

	//Функция получения уровня моба


  
function final_poluchenie_lvl_mob() {
	
if (opit_mob == 1) {
		//то к уровню +1 
		lvl_mob += 1;
		// и выводится значение на экран
		document.getElementById('visual_lvl_mob').innerHTML =  lvl_mob;
		//возвращается значение опыта
		opit_mob += 20;
		poluchenie_lvl_mob();
		
		
		
}
else if (opit_mob == 0) {all_lvl_mob = lvl_mob;}	
document.getElementById('visual_batle_lvl_mob').innerHTML =  'Локация ' + batle_lvl_mob;
document.getElementById('visual_hp_mob_0001').innerHTML =  'Здоровье ' + hp_mob_0001;
	
}
	 
	
function poluchenie_lvl_mob() {

if (lvl_mob == 1) {hp_mob_0001 += 100*batle_lvl_mob;}				
else if (lvl_mob == 2) {hp_mob_0001 += 250*batle_lvl_mob; opit_mob += 5;}
else if (lvl_mob == 3) {hp_mob_0001 += 500*batle_lvl_mob; opit_mob += 5;}
else if (lvl_mob == 4) {hp_mob_0001 += 1000*batle_lvl_mob; opit_mob += 5;}
else if (lvl_mob == 5) {hp_mob_0001 += 2500*batle_lvl_mob; opit_mob += 10;}
else if (lvl_mob == 6) {hp_mob_0001 += 5000*batle_lvl_mob; opit_mob += 10;}
else if (lvl_mob == 7) {hp_mob_0001 += 10000*batle_lvl_mob; opit_mob += 10;}
else if (lvl_mob == 8) {hp_mob_0001 += 15000*batle_lvl_mob; opit_mob += 15;}
else if (lvl_mob == 9) {hp_mob_0001 += 30000*batle_lvl_mob; opit_mob += 15;}
else if (lvl_mob == 10) {hp_mob_0001 = 45000*batle_lvl_mob; opit_mob += 15;}
else if (lvl_mob == 11) {hp_mob_0001 = 60000*batle_lvl_mob; opit_mob += 20;}
else if (lvl_mob == 12) {hp_mob_0001 = 100000*batle_lvl_mob; opit_mob += 20;}
else if (lvl_mob == 13) {hp_mob_0001 = 150000*batle_lvl_mob; opit_mob += 20;}
else if (lvl_mob == 14) {hp_mob_0001 = 250000*batle_lvl_mob; opit_mob += 25;}
else if (lvl_mob == 16) {hp_mob_0001 = 0; lvl_mob = 1; all_lvl_mob = false; alert ("Я сдаюсь, если позволишь я присоеденюсь к тебе, мне нравится сильный воин");}

// уникальный уровень будет давать героя, либо больше опыта данному герою
document.getElementById('visual_batle_lvl_mob').innerHTML =  'Локация ' + batle_lvl_mob;

document.getElementById('visual_hp_mob_0001').innerHTML =  'Здоровье ' + hp_mob_0001;
document.getElementById('visual_lvl_mob').innerHTML =  lvl_mob;
}	 
	 
	 
	 
	 