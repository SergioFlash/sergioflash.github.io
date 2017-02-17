     
	
	
	//Здоровье 
	 
	 //любая прибавка к жизням на постоянную идет в это значение god_hp;
	 var god_hp; {god_hp = 0;} 
	 //обращаясь к этому значению мы можем временно добавлять параметры
	 var all_god_hp; {god_hp = all_god_hp = 100;}
	 //Броня
     	 
	 var god_bron; {god_bron = 0;}
	 var all_god_bron; {god_bron = all_god_bron = 10;}
	 //Урон 
	 
	 var god_uron; {god_uron = 0;}
	 var all_god_uron; {god_uron = all_god_uron = 10;} 
	 //Мана 
	 
	 var god_mana; {god_mana = 0;}
	 var all_god_mana; {god_mana = all_god_mana = 20;}
	 //Начальная Мана
	 
	 var god_n_mana; {god_n_mana = 0;}
	 var minus_god_n_mana; {god_n_mana = minus_god_n_mana = 0;}
	
	 //Ярость 
	 var god_jar_uron; {god_jar_uron = 0;}
	 var all_god_jar_uron; {god_jar_uron = all_god_jar_uron = 0;}
	 //блок
	 var god_blok; {god_blok = 0;}
	 var all_god_blok; {god_blok = all_god_blok = 0;}
	 
	 var god_vnimanie; {god_vnimanie = 0;}
	 var all_god_vnimanie; {god_vnimanie = all_god_vnimanie = 0;}
	 
	 //удача
	 var god_udacha; {god_udacha = 0;}
	 var all_god_udacha; {god_udacha = all_god_udacha = 0;}
	 
	 //Опыт получаемый навыками
	 var opit_navik; {opit_navik = 0;}
	 var opit_god_navik; {opit_navik = opit_god_navik = 0;}
	 var all_opit_god_navik; {opit_navik = opit_god_navik = all_opit_god_navik = 0;}
	 
	 
	 
	 //уровнеь 
	 var lvl; {lvl = 0;}
	 var lvl_god; {lvl = lvl_god = 0;}
	 var all_level_god; {lvl = lvl_god = all_level_god = 1;}
	 

	 var max_energia; {max_energia = 0;}
	 var max_god_energia; {max_energia = max_god_energia = 50;}
	 var energia; {energia = 0;}
	 var god_energiya; {energia = god_energiya = 0;}
	 var bonus_all_god_energiya; {energia = god_energiya = bonus_all_god_energiya = 0;}
	 var all_god_energiya; {energia = god_energiya = all_god_energiya = 0;}
	
	 //самый редкий и ценный ресурс в игре
	 var os_god_res_vip; {os_god_res_vip = 0;}
	 var os_g_r_v; {os_god_res_vip = os_g_r_v = 100000;}
	 var god_resurs_vip; {god_resurs_vip = 0;}
	 var bonus_all_god_resurs_vip; {all_god_resurs_vip = bonus_all_god_resurs_vip = 0;}
	 var all_god_resurs_vip; {god_resurs_vip = all_god_resurs_vip = 100;}
	 
	var os_god_opit_lvl_vip; {os_god_opit_lvl_vip = 0;}
	var os_g_o_l_v; {os_god_opit_lvl_vip = os_g_o_l_v = 100000;}
	var donat_god_opit_lvl_vip; {donat_god_opit_lvl_vip = 0;}
	var bonus_donat_all_god_opit_lvl_vip; {donat_all_god_opit_lvl_vip = bonus_donat_all_god_opit_lvl_vip = 0;}
	var donat_all_god_opit_lvl_vip; {donat_god_opit_lvl_vip = donat_all_god_opit_lvl_vip = 100;}
	
	var lvl_god_vip; {lvl_god_vip = 0;}
	var opit_god_lvl_vip_01; {opit_god_lvl_vip_01 = 0;}
	var all_opit_god_lvl_vip_01; {opit_god_lvl_vip_01 = all_opit_god_lvl_vip_01 = 500;}
	function opit_god_lvl_vip() {
		opit_god_lvl_vip_01 -= donat_all_god_opit_lvl_vip;
	    document.getElementById('visual_opit_god_lvl_vip').innerHTML = 'Опыт Випа:   ' + opit_god_lvl_vip_01;
	    if (opit_god_lvl_vip_01 <= 1) {
		//параметры от Випа
		
		all_opit_god_lvl_vip_01 += 500;
		lvl_god_vip += 1;
		document.getElementById('visual_lvl_god_vip').innerHTML = 'Уровень Випа:   ' + lvl_god_vip;
		opit_god_lvl_vip_01 = all_opit_god_lvl_vip_01;
		}	
}
	
		
		

	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//обновление данных 
	function obnovlenie_stat() {
	document.getElementById('visual_god_hp').innerHTML = 'Здоровье:  ' + god_hp;
	document.getElementById('visual_god_bron').innerHTML = 'Защита:  ' + god_bron;
	document.getElementById('visual_lvl_god_1').innerHTML =  'Уровень:  ' + lvl_god;
    document.getElementById('visual_opit_god_1').innerHTML = 'Опыт:  ' + opit_god;
	document.getElementById('visual_god_uron').innerHTML = 'Урон:  ' + god_uron;
	document.getElementById('visual_god_mana').innerHTML = 'Мана:  ' + god_mana;
	document.getElementById('visual_god_n_mana').innerHTML = 'Начальная Мана:  ' + god_n_mana;
	document.getElementById('visual_god_jar_uron').innerHTML = 'Ярость:  ' + god_jar_uron;
	document.getElementById('visual_god_vnimanie').innerHTML = 'Внимательность:  ' + god_vnimanie;
	document.getElementById('visual_god_udacha').innerHTML = 'Удача:  ' + god_udacha;
	
	//для визуализации статов моба
	
	document.getElementById('visual_hp_mob_0001').innerHTML =  'Здоровье: ' + hp_mob_0001;
	document.getElementById('visual_opit_mob').innerHTML = opit_mob;
	document.getElementById('visual_lvl_mob').innerHTML =  lvl_mob;
	
	
	
	document.getElementById('visual_mir_local_nachalnaya_locasiya').innerHTML = '<img src="raion_01.png"></img> ';
	document.getElementById('visual_oblast_local_nachalnaya_locasiya').innerHTML = '<img src="raion_01.png"></img> ';
	
	
	
	
    
	document.getElementById('visual_all_god_hp').innerHTML = 'Здоровье:  ' + all_god_hp;
	
	
	document.getElementById('visual_os_god_res_vip').innerHTML = 'Накопление Б.М.:  ' + os_god_res_vip;
	document.getElementById('visual_all_god_resurs_vip').innerHTML = 'Божественная Материя:  ' + god_resurs_vip;
	
	document.getElementById('visual_os_god_opit_lvl_vip').innerHTML = 'Накопление VIP:   ' + os_god_opit_lvl_vip;
	document.getElementById('visual_lvl_god_vip').innerHTML = 'Уровень Випа:   ' + lvl_god_vip;
	document.getElementById('visual_opit_god_lvl_vip').innerHTML = 'Опыт Випа:   ' + opit_god_lvl_vip_01;
    document.getElementById('visual_all_god_energiya').innerHTML = 'Энергия:  ' + god_energiya;
	document.getElementById('visual_max_god_energia').innerHTML = 'Максимальная Энергия:  ' + max_god_energia;
	
	document.getElementById('visual_god_serebro').innerHTML = '<img src="serebro_01.png"></img> ' + god_serebro;
	document.getElementById('visual_god_zoloto').innerHTML = 'Золото:  ' + god_zoloto;
	
	document.getElementById('visual_god_kamen').innerHTML = 'Камень:  ' + god_kamen;
	document.getElementById('visual_god_kristals').innerHTML = 'Кристалы:  ' + god_kristals;
	document.getElementById('visual_god_platina').innerHTML = 'Платина:  ' + god_platina;
	document.getElementById('visual_god_pitomes_suchnost').innerHTML = 'Сущности Питомцев:  ' + god_pitomes_suchnost;
	document.getElementById('visual_god_relikvii_suchnost').innerHTML = 'Сущности Реликвий:  ' + god_relikvii_suchnost;
	document.getElementById('visual_god_zveznaya_kroshka').innerHTML = 'Звездная Крошка:  ' + god_zveznaya_kroshka;
	//Визуализация уровня слотов
	document.getElementById('visual_level_god_oruzie').innerHTML = 'Уровень:  ' + level_god_oruzie;
	document.getElementById('visual_level_god_obod').innerHTML = 'Уровень:  ' + level_god_obod;
	document.getElementById('visual_level_god_chit').innerHTML = 'Уровень:  ' + level_god_chit;
	document.getElementById('visual_level_god_levoe_kolso').innerHTML = 'Уровень:  ' + level_god_levoe_kolso;
	document.getElementById('visual_level_god_ojerelie').innerHTML = 'Уровень:  ' + level_god_ojerelie;
	document.getElementById('visual_level_god_pravoe_kolso').innerHTML = 'Уровень:  ' + level_god_pravoe_kolso;
	document.getElementById('visual_level_god_braslet_leviy').innerHTML = 'Уровень:  ' + level_god_braslet_leviy;
	document.getElementById('visual_level_god_odejda').innerHTML = 'Уровень:  ' + level_god_odejda;
	document.getElementById('visual_level_god_braslet_praviy').innerHTML = 'Уровень:  ' + level_god_braslet_praviy;
    //Визуализация опыта слотов
	document.getElementById('visual_item_god_oruzie').innerHTML = opit_god_oruzie_01;
	document.getElementById('visual_item_god_obod').innerHTML = opit_god_obod_01;
	document.getElementById('visual_item_god_chit').innerHTML = opit_god_chit_01;
	document.getElementById('visual_item_god_levoe_kolso').innerHTML = opit_god_levoe_kolso_01;
	document.getElementById('visual_item_god_ojerelie').innerHTML = opit_god_ojerelie_01;
	document.getElementById('visual_item_god_pravoe_kolso').innerHTML = opit_god_pravoe_kolso_01;
	document.getElementById('visual_item_god_braslet_leviy').innerHTML = opit_god_braslet_leviy_01;
    document.getElementById('visual_item_god_odejda').innerHTML = opit_god_odejda_01;
    document.getElementById('visual_item_god_braslet_praviy').innerHTML = opit_god_braslet_praviy_01;
	
	
	


document.getElementById('visual_opit_slot_orujie').innerHTML = opit_slot_orujie;
document.getElementById('visual_opit_slot_obod').innerHTML = opit_slot_obod;
document.getElementById('visual_opit_slot_chit').innerHTML = opit_slot_chit;
document.getElementById('visual_opit_slot_odejda').innerHTML = opit_slot_odejda;	
document.getElementById('visual_opit_slot_ojerelie').innerHTML = opit_slot_ojerelie;
document.getElementById('visual_opit_slot_levoe_kolso').innerHTML = opit_slot_levoe_kolso;
document.getElementById('visual_opit_slot_pravoe_kolso').innerHTML = opit_slot_pravoe_kolso;
document.getElementById('visual_opit_slot_braslet_leviy').innerHTML = opit_slot_braslet_leviy;
document.getElementById('visual_opit_slot_braslet_praviy').innerHTML = opit_slot_braslet_praviy;

	
	
	
	
	//Визуализация Навыков
	document.getElementById('visual_umeliy_voin').innerHTML = 'Навык Умелый Воин:   ' + umeliy_voin;
	document.getElementById('visual_opit_umeliy_voin').innerHTML = 'Навык Умелый Воин:   ' + opit_umeliy_voin;
	
	document.getElementById('visual_bonus_opit_slot').innerHTML = bonus_opit_slot;
	
	document.getElementById('visual_navik_slot').innerHTML = 'Навык Слот:   ' + navik_slot_umeliy_voin;
	
	
	 
	
	
	} 


	
	
	
	
	
	
	
	//Функция дающая бонус к накоплении Божественной Материи от количества друзей
	  
	  function people_bonus_all_god_resurs_vip() {
	           bonus_all_god_resurs_vip += 1; 
			   bonus_donat_all_god_opit_lvl_vip += 1;
document.getElementById('visual_people_bonus_all_god_resurs_vip').innerHTML = 'Бонус к Б. Материи:  ' + bonus_all_god_resurs_vip; 
document.getElementById('visual_people_bonus_donat_all_god_opit_lvl_vip').innerHTML = 'Бонус к Опыту Вип  ' + bonus_donat_all_god_opit_lvl_vip;  
}
 
 
      function minus_god_energiya() {
		  if (god_energiya>=9) {
			 god_energiya -= 10;
          document.getElementById('visual_all_god_energiya').innerHTML = 'Энергия:  ' + all_god_energiya;
		  document.getElementById('visual_all_god_energiya').innerHTML = 'Энергия:  ' + god_energiya;			 
		  }
		  else if (god_energiya<=10) {
			 minus_god_energiya() = false; 
		  }
	  }
	  
	  
	  function pluss_god_energiya() {
		  god_energiya += 10;
		  document.getElementById('visual_all_god_energiya').innerHTML = 'Энергия:  ' + all_god_energiya;
		  document.getElementById('visual_all_god_energiya').innerHTML = 'Энергия:  ' + god_energiya;		
	  }
       
       function pluss_max_god_energiya() {
		  max_god_energia +=10; 
		 document.getElementById('visual_max_god_energia').innerHTML = 'Максимальная Энергия:  ' + max_god_energia;
	   }
 
 
  
	 var opit_ot_ubiistva_moba; {opit_ot_ubiistva_moba = 0;}
	 
	 
	 
	 
	  function poluchenie_lvl_mob_clik() {
		 //при каждом выполнении функции к опыту прибавляется 100 единиц
		 opit_ot_ubiistva_moba = 1000;
		 
	 }
	 
	 
	 function poluchenie_lvl_mob_0001() {
		 //при каждом выполнении функции к опыту прибавляется 1 единиц
		 opit_ot_ubiistva_moba -= 10;
		
	 }
	 
	 
	  //Опыт Молодого бога
	 var opit_god; {opit_god = 0;}
	 var all_opit_god; {opit_god = all_opit_god = 8000;}
	 //Функция получения уровня молодым Богом
	 function poluchenie_lvl_god() {
		 opit_god -= opit_ot_ubiistva_moba;
		 //вывод значения на экран
		polosa_opit_level_heroes.width -= opit_ot_ubiistva_moba*1/(all_opit_god/800);
	    document.getElementById('visual_opit_god_1').innerHTML = opit_god;
	    //если опыт меньше 0
	    if (opit_god <= 1) {
		//то к уровню бога 1 
		lvl_god += 1;
		// и выводится значение на экран
		document.getElementById('visual_lvl_god_1').innerHTML =  lvl_god;
		//возвращается значение опыта
		opit_god = all_opit_god;
		polosa_opit_level_heroes.width = 800;
		//добавляем дальше статы, которые будут добавляться с каждым уровнем
		god_hp += 100;
		god_bron += 5;
		god_uron += 10;
		all_level_god = lvl_god;
		}
else if (all_level_god == 5) {max_god_energia +=10; all_level_god = false;}
else if (all_level_god == 10) {max_god_energia +=10; all_level_god = false;}
else if (all_level_god == 15) {max_god_energia +=10; all_level_god = false;}
else if (all_level_god == 20) {max_god_energia +=10; all_level_god = false;}
else if (all_level_god == 25) {max_god_energia +=10; dostijenie_level_god_0001(); all_level_god = false; alert ('Получено достижение')}
else if (all_level_god == 30) {max_god_energia +=10; all_level_god = false;}
else if (all_level_god == 35) {max_god_energia +=10; all_level_god = false;}
else if (all_level_god == 40) {max_god_energia +=10; all_level_god = false;}
else if (all_level_god == 45) {max_god_energia +=10; all_level_god = false;}
else if (all_level_god == 50) {max_god_energia +=10; dostijenie_level_god_0001(); all_level_god = false; alert ('Получено достижение')}
else if (all_level_god == 55) {max_god_energia +=10; all_level_god = false;}
else if (all_level_god == 60) {max_god_energia +=10; all_level_god = false;}
else if (all_level_god == 65) {max_god_energia +=10; all_level_god = false;}
else if (all_level_god == 70) {max_god_energia +=10; all_level_god = false;}
else if (all_level_god == 75) {max_god_energia +=10; dostijenie_level_god_0001(); all_level_god = false; alert ('Получено достижение')}
else if (all_level_god == 80) {max_god_energia +=10; all_level_god = false;}
else if (all_level_god == 85) {max_god_energia +=10; all_level_god = false;}
else if (all_level_god == 90) {max_god_energia +=10; all_level_god = false;}
else if (all_level_god == 95) {max_god_energia +=10; all_level_god = false;}
else if (all_level_god == 100) {max_god_energia +=10; dostijenie_level_god_0001(); all_level_god = false; alert ('Получено достижение')}
else if (all_level_god == 105) {max_god_energia +=10; all_level_god = false;}
else if (all_level_god == 110) {max_god_energia +=10; all_level_god = false;}
else if (all_level_god == 115) {max_god_energia +=10; all_level_god = false;}
else if (all_level_god == 120) {max_god_energia +=10; all_level_god = false;}
else if (all_level_god == 125) {max_god_energia +=10; dostijenie_level_god_0001(); all_level_god = false; alert ('Получено достижение')}
else if (all_level_god == 130) {max_god_energia +=10; all_level_god = false;}
else if (all_level_god == 135) {max_god_energia +=10; all_level_god = false;}
else if (all_level_god == 140) {max_god_energia +=10; all_level_god = false;}
else if (all_level_god == 145) {max_god_energia +=10; all_level_god = false;}
else if (all_level_god == 150) {max_god_energia +=10; dostijenie_level_god_0001(); all_level_god = false; alert ('Получено достижение')}
	   
}



//востановить польностью здоровье героя
	 function obnovlenie_all() {
     all_god_hp = god_hp;
	 document.getElementById('visual_all_god_hp').innerHTML = 'Здоровье:  ' + all_god_hp;
	 }
	 
	 
	 
	 
	 
	  
	
	 
	 
	 
	 
	 

	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
var god_kamen; {god_kamen = 0;}	
var bonus_nakoplenie_kamen; {bonus_nakoplenie_kamen = 0;}

var god_serebro; {god_serebro = 0;}
var bonus_nakoplenie_serebro; {bonus_nakoplenie_serebro = 0;}

var god_zoloto; {god_zoloto = 0;}
var bonus_nakoplenie_zoloto; {bonus_nakoplenie_zoloto = 0;}

var god_kristals; {god_kristals = 0;}
var bonus_nakoplenie_kristals; {bonus_nakoplenie_kristals = 0;}

var god_platina; {god_platina = 0;}
var bonus_nakoplenie_platina; {bonus_nakoplenie_platina = 0;}

var god_pitomes_suchnost; {god_pitomes_suchnost = 0;}	 
var god_relikvii_suchnost; {god_relikvii_suchnost = 0;}
var god_zveznaya_kroshka; {god_zveznaya_kroshka = 0;}	 
	 //Функция локации иследования
	 var location_isledovanie_opit_001; {location_isledovanie_opit_001 = 0;}
	 var location_isledovanie_001; {location_isledovanie_001 = 0;}
	 var location_isledovanie_prosent_001; {location_isledovanie_prosent_001 = 0;}
	 var location_isledovanie_bonus_random; {location_isledovanie_bonus_random = 0;}
	 
	 //Функция боевого рандома 1 локации
	 function batle_random_001()
{
	
	location_isledovanie_opit_001 += 1;
	if (location_isledovanie_opit_001 == 100) {location_isledovanie_001 += 1; location_isledovanie_bonus_random += 1; location_isledovanie_opit_001 = 0;}
	
	if (location_isledovanie_001 == 100) {location_isledovanie_prosent_001 += 1; location_isledovanie_001 = 0;}
	if (location_isledovanie_prosent_001 == 100 && location_isledovanie_prosent_001 >= 100) {location_isledovanie_prosent_001 = 100;}
	
    var ra_001=0;
	
    ra_001 = god_udacha+Math.floor(Math.random() * (location_isledovanie_bonus_random - 1 + 1)) + 1;
    document.getElementById('visual_s_random').innerHTML = 'Рандом:  ' + ra_001;
	//alert("Вы выбросили число "+ra_001);
   
    if (ra_001<=1){god_kamen += 5;}
	else if (ra_001<=2  && ra_001<=10){god_kamen += 10; god_serebro += 10;}
	else if (ra_001==11  && ra_001<=20){god_kamen += 10; god_serebro += 50;}
	else if (ra_001<=21  && ra_001<=30){god_kamen += 25; god_serebro += 100;}
	else if (ra_001<=31  && ra_001<=50){god_kamen += 50; god_serebro += 100;}
    else if (ra_001<=252  && ra_001<=350){god_energiya += 2; god_serebro += 100;}
    else if (ra_001<=352  && ra_001<=450){god_serebro += 1000;}
    else if (ra_001<=452  && ra_001<=550){god_serebro += 1000; god_kamen += 100; god_energiya += 10;}
    else if (ra_001<=552  && ra_001<=650){god_serebro += 2000; god_zoloto += 1;}
    else if (ra_001<=652  && ra_001<=750){god_serebro += 5000; god_kamen += 500; god_zoloto += 1;}
	else if (ra_001<=752  && ra_001<=850){god_serebro += 5000; god_kamen += 1000; god_zoloto += 1; god_energiya += 5;}
	else if (ra_001<=852  && ra_001<=900){god_serebro += 5000; god_kamen += 1000; god_zoloto += 1; god_energiya += 5; god_resurs_vip += 1;}
	else if (ra_001<=902  && ra_001<=950){god_serebro += 10000; god_kamen += 1500; god_zoloto += 1; god_energiya += 50; god_kristals += 250;}
	else if (ra_001<=952  && ra_001<=1000){god_serebro += 10000; god_kamen += 1500; god_zoloto += 1; god_energiya += 25; god_kristals += 500; god_resurs_vip += 1;}
	else if (ra_001==250){god_resurs_vip += 2;}
    else if (ra_001==350){god_resurs_vip += 5;}
    else if (ra_001==450){god_resurs_vip += 10;}
    else if (ra_001==550){god_resurs_vip += 10; god_platina += 1; god_kristals += 100;}
    else if (ra_001==650){god_resurs_vip += 10; god_platina += 5; god_kristals += 100; god_energiya += 100;}
	else if (ra_001==750){god_resurs_vip += 10; god_platina += 10; god_kristals += 250; god_energiya += 100; god_zoloto += 25;}
	else if (ra_001==850){god_resurs_vip += 10; god_platina += 15; god_kristals += 500; god_energiya += 100; god_zoloto += 50;}
	else if (ra_001==950){god_kamen += 10000; god_resurs_vip += 10; god_platina += 15; god_kristals += 1000; god_energiya += 250; god_zoloto += 100;}
	else if (ra_001==1000){god_kamen += 10000; god_resurs_vip += 25; god_platina += 100; god_kristals += 2500; god_energiya += 1000; god_zoloto += 100; god_zveznaya_kroshka += 1;}
    // дальше идут уникальные награды, которые возможно получить только благодаря удаче
	else if (ra_001==1001){god_pitomes_suchnost += 1; alert ('Получено уникальный приз')}
	else if (ra_001==1002){god_relikvii_suchnost += 1; alert ('Получено уникальный приз')}
	else if (ra_001==1003){god_pitomes_suchnost += 1; god_relikvii_suchnost += 1; alert ('Получено уникальный приз')}
	else if (ra_001==1004){god_pitomes_suchnost += 1; god_relikvii_suchnost += 1; god_zveznaya_kroshka += 1; alert ('Получено уникальный приз')}
	else if (ra_001==1005){god_pitomes_suchnost += 2; god_relikvii_suchnost += 2; god_zveznaya_kroshka += 2; alert ('Получено уникальный приз')}
	else if (ra_001==1006){god_pitomes_suchnost += 3; god_relikvii_suchnost += 3; god_zveznaya_kroshka += 3; alert ('Получено уникальный приз')}
	else if (ra_001==1007){god_pitomes_suchnost += 4; god_relikvii_suchnost += 4; god_zveznaya_kroshka += 4; alert ('Получено уникальный приз')}
	else if (ra_001==1008){god_pitomes_suchnost += 5; god_relikvii_suchnost += 5; god_zveznaya_kroshka += 5; alert ('Получено уникальный приз')}
	else if (ra_001==1009){god_pitomes_suchnost += 6; god_relikvii_suchnost += 6; god_zveznaya_kroshka += 6; alert ('Получено уникальный приз')}
	else if (ra_001==1010){god_pitomes_suchnost += 7; god_relikvii_suchnost += 7; god_zveznaya_kroshka += 7; alert ('Получено уникальный приз')}
	document.getElementById('visual_god_serebro').innerHTML = '<img src="serebro_01.png"></img> ' + god_serebro;
	document.getElementById('visual_god_zoloto').innerHTML = 'Золото:  ' + god_zoloto;
	
	document.getElementById('visual_god_kamen').innerHTML = 'Камень:  ' + god_kamen;
	document.getElementById('visual_god_kristals').innerHTML = 'Кристалы:  ' + god_kristals;
	document.getElementById('visual_god_platina').innerHTML = 'Платина:  ' + god_platina;
	document.getElementById('visual_god_pitomes_suchnost').innerHTML = 'Сущности Питомцев:  ' + god_pitomes_suchnost;
	document.getElementById('visual_god_relikvii_suchnost').innerHTML = 'Сущности Реликвий:  ' + god_relikvii_suchnost;
	document.getElementById('visual_god_zveznaya_kroshka').innerHTML = 'Звездная Крошка:  ' + god_zveznaya_kroshka;
	
    
	document.getElementById('visual_location_isledovanie_001').innerHTML = 'Иследование территории:  ' + location_isledovanie_001;
	document.getElementById('visual_location_isledovanie_bonus_random').innerHTML = 'Бонус к рандому:  ' + location_isledovanie_bonus_random;
	document.getElementById('visual_location_isledovanie_opit_001').innerHTML = 'Иследование территории опыт:  ' + location_isledovanie_opit_001;
	document.getElementById('visual_location_isledovanie_prosent_001').innerHTML = 'Иследование территории в %:  ' + location_isledovanie_prosent_001;
}
	 
	 
	
	 
	 
	 
	 
	 
	 