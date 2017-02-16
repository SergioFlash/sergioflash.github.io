


 //Функция восполнения энергии
      setInterval(function prirost_all_god_energiya() {
		  
		  if (god_energiya<=max_god_energia) {
			 god_energiya += 1+bonus_all_god_energiya;
		 document.getElementById('visual_all_god_energiya').innerHTML = 'Энергия:  ' + god_energiya;  
			  
		  }
		  else if (god_energiya>=max_god_energia) {
			 prirost_all_god_energiya() = false; 
		  }
		  
		 
	  }, 36000)

	

	
	
		 //Функция добычи Божественной Материи
      setInterval(function prirost_all_god_resurs_vip() {
		 
		 os_god_opit_lvl_vip -= 0+bonus_donat_all_god_opit_lvl_vip;
		 os_god_res_vip -= 0+bonus_all_god_resurs_vip;
		 document.getElementById('visual_os_god_res_vip').innerHTML = 'Накопление Б.М.:  ' + os_god_res_vip;
		 document.getElementById('visual_os_god_opit_lvl_vip').innerHTML = 'Накопление VIP:   ' + os_god_opit_lvl_vip;
		 if (os_god_opit_lvl_vip <= 1) {god_resurs_vip += 1; 
		 document.getElementById('visual_all_god_resurs_vip').innerHTML = 'Божественная Материя:  ' + god_resurs_vip;
		 os_god_opit_lvl_vip = os_g_o_l_v;
		
		 }
		 if (os_god_res_vip <= 1) {opit_god_lvl_vip_01 +=1;
		 document.getElementById('visual_opit_god_lvl_vip').innerHTML = 'Опыт Випа:   ' + opit_god_lvl_vip_01;
		 os_god_res_vip = os_g_r_v;
		 
		 }

	  }, 60000)
	  
	  
	  
	  //Функция для накопления серебра
     setInterval(function prirost_all_serebro() {		
		god_serebro += 0+bonus_nakoplenie_serebro;
document.getElementById('visual_god_serebro').innerHTML = '<img src="serebro_01.png"></img> ' + god_serebro;
	 }, 60000)

	 
	  //Функция для накопления золото
     setInterval(function prirost_all_zoloto() {
		god_zoloto += 0+bonus_nakoplenie_zoloto;		
document.getElementById('visual_god_zoloto').innerHTML = 'Золото:  ' + god_zoloto;		
	 }, 60000)
	 
	  //Функция для накопления кристалы
     setInterval(function prirost_all_kristals() {	
		god_kristals += 0+bonus_nakoplenie_kristals;
document.getElementById('visual_god_kristals').innerHTML = 'Кристалы:  ' + god_kristals;		
	 }, 60000)
	 
	  //Функция для накопления камень
     setInterval(function prirost_all_kamni() {
		god_kamen += 0+bonus_nakoplenie_kamen;	
document.getElementById('visual_god_kamen').innerHTML = 'Камень:  ' + god_kamen;		
	 }, 60000)
	 
	  //Функция для накопления платина
     setInterval(function prirost_all_platina() {
		god_platina += 0+bonus_nakoplenie_platina;
document.getElementById('visual_god_platina').innerHTML = 'Платина:  ' + god_platina;		
	 }, 60000)
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	