// Вещи которые будут давать статы персонажу

var item_hp; {item_hp = 0;}

var item_bron; {item_bron = 0;}

var item_mana; {item_mana = 0;}

var item_n_mana; {item_n_mana = 0;}




     //Здоровье Молодого Бога
	 //var god_hp; {god_hp = 1000;}
	 //Броня Молодого Бога
	 //var god_bron; {god_bron = 25;}
	 //Урон Молодого Бога 
	 //var god_uron; {god_uron = 10;}
	 //Ярость Молодого Бога
	 //var god_jarosti; (god_jarosti = 0;)
	 //Мана Молодого Бога
	 //var god_mana; {god_mana = 100;}
	 //Начальная Мана Молодого Бога
	 //var god_n_mana; {god_n_mana = 20;}
	 //Опыт Молодого бога
	 //var opit_god; {opit_god = 0;}
	 
	 //Опыт получаемый навыками
	 //var opit_god_navik; {opit_god_navik = 0;}
	 //
	 //var lvl_god; {lvl_god = 0;}
	 
     // document.getElementById('visual_opit_god_1').innerHTML = opit_god;


		
     var opit_god_oruzie_01; {opit_god_oruzie_01 = 0.000;}
    
	 
	 // god_uron * prosent_uron = perem_prosent_uron
	 // god_uron + perem_prosent_uron
	 
	 
	 function item_knife_001() {
		
		opit_god_oruzie_01 += 0.1;
		
		 //вывод значения на экран
	    document.getElementById('visual_item_heroes').innerHTML = opit_god_oruzie_01;
		
		//если опыт оружия больше или равен 1, то к урону добавляется 100
	    if (opit_god_oruzie_01 >= 1) {
		
		//позволяет видеть визуально прибавку к опыту персонажа
		document.getElementById('visual_god_uron').innerHTML = god_uron;
		god_uron += 100;
		}
		
	 }
	 
 
	
	 
		
		
		
		
		
		
		
		
		
		
		

