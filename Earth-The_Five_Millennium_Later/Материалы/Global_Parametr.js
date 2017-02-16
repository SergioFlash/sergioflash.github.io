     
	 //Здоровье Молодого Бога
	 var god_hp; {god_hp = 1000;}
	 //Броня Молодого Бога
	 var god_bron; {god_bron = 25;}
	 //Мана Молодого Бога
	 var god_mana; {god_mana = 100;}
	 //Начальная Мана Молодого Бога
	 var god_n_mana; {god_n_mana = 20;}
	 //Опыт Молодого бога
	 var opit_god; {opit_god = 0;}
	 //Опыт получаемый навыками
	 var opit_god_navik; {opit_god_navik = 0;}
	 //
	 var lvl_god; {lvl_god = 1;}
	 
	 
	
	 
	 
	 function znachenie() {
		 //при каждом нажатии прибавляет 10 к мане
		 god_n_mana += 10;
		 //выводит на экран полученое значение
		 alert(god_n_mana);
		 
	 }
	 
	 //Функция получения уровня молодым Богом
	 function poluchenie_lvl_god() {
		 //при каждом выполнении функции к опыту прибавляется 10 единиц
		 opit_god += 10;
		 //вывод значения на экран
		 //alert(opit_god);
	    document.getElementById('opit_god_1').innerHTML = opit_god;
	    //если опыт равен 100
	    if (opit_god == 100) {
		//то к уровню бога прибавляется 1 
		lvl_god += 1;
		// и выводится значение на экран
		document.getElementById('msg').innerHTML =  'Уровень 2' ;
		
        //alert( 'Получен 2 уровень' );
       }
	   
	   //если опыт равен 100
	    if (opit_god == 150) {
		//то к уровню бога прибавляется 1 
		lvl_god += 1;
		// и выводится значение на экран
        document.getElementById('msg').innerHTML =  'Уровень 3' ;
       }
	   
	   
	   
	   
	   
	   
}
	 
	 
	 
	 

	 
	 
	 
	// if (opit_god == 100) {
		 
		//lvl_god += 1; 
//  alert( 'Получен 2 уровень' );
//} 

//else {
 // alert( 'А вот и неправильно!' ); // любое значение, кроме 2011
//}
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 