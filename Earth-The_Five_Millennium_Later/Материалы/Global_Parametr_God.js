     
	 //Здоровье Молодого Бога
	 var god_hp; {god_hp = 1000;}
	 //Броня Молодого Бога
	 var god_bron; {god_bron = 25;}
	 //Урон Молодого Бога 
	 var god_uron; {god_uron = 10;}
	 //Мана Молодого Бога
	 var god_mana; {god_mana = 100;}
	 //Начальная Мана Молодого Бога
	 var god_n_mana; {god_n_mana = 20;}
	 //Опыт Молодого бога
	 var opit_god; {opit_god = 100;}
	 
	 var god_jar_uron; {god_jar_uron = 0;}
	 
	 //Опыт получаемый навыками
	 var opit_god_navik; {opit_god_navik = 0;}
	 //
	 var lvl_god; {lvl_god = 1;}
	 
	
	
	
	
	//обновление данных 
	function obnovlenie_stat() {
	document.getElementById('visual_god_hp').innerHTML = god_hp;
	document.getElementById('lvl_god_1').innerHTML =  lvl_god ;	
	} 
	 
	 function znachenie() {
		 //при каждом нажатии прибавляет 10 к мане
		 god_n_mana += 10;
		 //выводит на экран полученое значение
		 alert(god_n_mana);
		 
	 }
	 
	 //Функция получения уровня молодым Богом
	 function poluchenie_lvl_god() {
		 //при каждом выполнении функции к опыту прибавляется 1 единиц
		opit_god -= 10;
		 //вывод значения на экран
	    document.getElementById('visual_opit_god_1').innerHTML = opit_god;
	    //если опыт меньше равен 0
	    if (opit_god <= 1) {
		//то к уровню бога равен 1 
		lvl_god += 1;
		// и выводится значение на экран
		document.getElementById('lvl_god_1').innerHTML =  'Уровень 1' ;		
		}
		if (opit_god >= 50) {
		//то к уровню бога прибавляется 1 
		lvl_god += 1;
		// и выводится значение на экран
		document.getElementById('lvl_god_1').innerHTML =  'Уровень 2' ;
       }
	    if (opit_god >= 100) {
		//то к уровню бога прибавляется 1 
		lvl_god += 1;
		// и выводится значение на экран
        document.getElementById('lvl_god_1').innerHTML =  'Уровень 3' ;
       }
	   if (opit_god >= 200) {
		//то к уровню бога прибавляется 1 
		lvl_god += 1;
		// и выводится значение на экран
        document.getElementById('lvl_god_1').innerHTML =  'Уровень 4' ;
       }
	   if (opit_god >= 300) {
		//то к уровню бога прибавляется 1 
		lvl_god += 1;
		// и выводится значение на экран
        document.getElementById('lvl_god_1').innerHTML =  'Уровень 5' ;
       }
	   if (opit_god >= 500) {
		//то к уровню бога прибавляется 1 
		lvl_god += 1;
		// и выводится значение на экран
        document.getElementById('lvl_god_1').innerHTML =  'Уровень 6' ;
       }
	   if (opit_god >= 750) {
		//то к уровню бога прибавляется 1 
		lvl_god += 1;
		// и выводится значение на экран
        document.getElementById('lvl_god_1').innerHTML =  'Уровень 7' ;
       }
	   if (opit_god >= 1000) {
		//то к уровню бога прибавляется 1 
		lvl_god += 1;
		// и выводится значение на экран
        document.getElementById('lvl_god_1').innerHTML =  'Уровень 8' ;
       }
	   if (opit_god >= 1500) {
		//то к уровню бога прибавляется 1 
		lvl_god += 1;
		// и выводится значение на экран
        document.getElementById('lvl_god_1').innerHTML =  'Уровень 9' ;
       }
	   if (opit_god >= 2000) {
		//то к уровню бога прибавляется 1 
		lvl_god += 1;
		// и выводится значение на экран
        document.getElementById('lvl_god_1').innerHTML =  'Уровень 10' ;
       }
	   if (opit_god >= 2500) {
		//то к уровню бога прибавляется 1 
		lvl_god += 1;
		// и выводится значение на экран
        document.getElementById('lvl_god_1').innerHTML =  'Уровень 11' ;
       }
	   if (opit_god >= 5000) {
		//то к уровню бога прибавляется 1 
		lvl_god += 1;
		// и выводится значение на экран
        document.getElementById('lvl_god_1').innerHTML =  'Уровень 12' ;
       }
	   if (opit_god >= 7500) {
		//то к уровню бога прибавляется 1 
		lvl_god += 1;
		// и выводится значение на экран
        document.getElementById('lvl_god_1').innerHTML =  'Уровень 13' ;
       }
	   if (opit_god >= 10000) {
		//то к уровню бога прибавляется 1 
		lvl_god += 1;
		// и выводится значение на экран
        document.getElementById('lvl_god_1').innerHTML =  'Уровень 14' ;
       }
	   if (opit_god >= 15000) {
		//то к уровню бога прибавляется 1 
		lvl_god += 1;
		// и выводится значение на экран
        document.getElementById('lvl_god_1').innerHTML =  'Уровень 15' ;
       }
	   if (opit_god >= 20000) {
		//то к уровню бога прибавляется 1 
		lvl_god += 1;
		// и выводится значение на экран
        document.getElementById('lvl_god_1').innerHTML =  'Уровень 16' ;
       }
	   if (opit_god >= 25000) {
		//то к уровню бога прибавляется 1 
		lvl_god += 1;
		// и выводится значение на экран
        document.getElementById('lvl_god_1').innerHTML =  'Уровень 17' ;
       }
	   if (opit_god >= 50000) {
		//то к уровню бога прибавляется 1 
		lvl_god += 1;
		// и выводится значение на экран
        document.getElementById('lvl_god_1').innerHTML =  'Уровень 18' ;
       }
	   if (opit_god >= 75000) {
		//то к уровню бога прибавляется 1 
		lvl_god += 1;
		// и выводится значение на экран
        document.getElementById('lvl_god_1').innerHTML =  'Уровень 19' ;
       }
	   if (opit_god >= 100000) {
		//то к уровню бога прибавляется 1 
		lvl_god += 1;
		// и выводится значение на экран
        document.getElementById('lvl_god_1').innerHTML =  'Уровень 20' ;
       }
	   if (opit_god >= 125000) {
		//то к уровню бога прибавляется 1 
		lvl_god += 1;
		// и выводится значение на экран
        document.getElementById('lvl_god_1').innerHTML =  'Уровень 21' ;
       }
	   if (opit_god >= 150000) {
		//то к уровню бога прибавляется 1 
		lvl_god += 1;
		// и выводится значение на экран
        document.getElementById('lvl_god_1').innerHTML =  'Уровень 22' ;
       }
	   if (opit_god >= 200000) {
		//то к уровню бога прибавляется 1 
		lvl_god += 1;
		// и выводится значение на экран
        document.getElementById('lvl_god_1').innerHTML =  'Уровень 23' ;
       }
	   if (opit_god >= 250000) {
		//то к уровню бога прибавляется 1 
		lvl_god += 1;
		// и выводится значение на экран
        document.getElementById('lvl_god_1').innerHTML =  'Уровень 24' ;
       }
	   if (opit_god >= 300000) {
		//то к уровню бога прибавляется 1 
		lvl_god += 1;
		// и выводится значение на экран
        document.getElementById('lvl_god_1').innerHTML =  'Уровень 25' ;
       }
	   

	   
}

	 
	 
	 
	// if (opit_god == 100) {
		 
		//lvl_god += 1; 
//  alert( 'Получен 2 уровень' );
//} 

//else {
 // alert( 'А вот и неправильно!' ); // любое значение, кроме 2011
//}
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 