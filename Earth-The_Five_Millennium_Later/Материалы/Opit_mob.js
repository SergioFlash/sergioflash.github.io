	 
	 ///////////Функции получения опыта от убийства мобов
	 
	 function poluchenie_lvl_mob_clik() {
		 //при каждом выполнении функции к опыту прибавляется 100 единиц
		 opit_god += 100;
		 document.getElementById('visual_opit_god_1').innerHTML = opit_god;
	 }
	 
	 
	 function poluchenie_lvl_mob_0001() {
		 //при каждом выполнении функции к опыту прибавляется 1 единиц
		 opit_god += 1;
		 document.getElementById('visual_opit_god_1').innerHTML = opit_god;
	 }
	 
	 var hp_mob_0001 = 100;
	 
	 
	 
	 function war_hp_mob_0001() {
		 
		hp_mob_0001 -= 10;
		 //вывод значения на экран
	    document.getElementById('mob_0001').innerHTML = hp_mob_0001;
		
		
	    //если Жизни равны 0
	    if (hp_mob_0001 <= 1) {
		//то объект пропадает 
		alert ("монстр убит");
		opit_god -= 10;
		//позволяет видеть визуально прибавку к опыту персонажа
		document.getElementById('visual_opit_god_1').innerHTML = opit_god;
		hp_mob_0001 = 100;
		//добавляем необходимый элемент, чтобы вся система работала как нужно
		poluchenie_lvl_god();
		
		}
		
	 }
	 
	 
	
	 
	 
	 
	 
	