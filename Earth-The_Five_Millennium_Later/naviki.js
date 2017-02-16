	
	
	//временная проверочная функция
	



	//Функция для активации навыка в одном из 3 столов для пасивных навыков
	var navik_slot_umeliy_voin; {navik_slot_umeliy_voin = 0;}
	
function navik_slot_umeliy_voin_01() {
	if (navik_slot_umeliy_voin >= 4) {navik_slot_umeliy_voin_01() = false;}
	else if (navik_slot_umeliy_voin <= 4) {navik_slot_umeliy_voin = 1; obnovlenie_stat();}}

function navik_slot_umeliy_voin_02() {
	if (navik_slot_umeliy_voin >= 4) {navik_slot_umeliy_voin_02() = false;}
	else if (navik_slot_umeliy_voin <= 4) {navik_slot_umeliy_voin = 2; obnovlenie_stat();}}
function navik_slot_umeliy_voin_03() {
	if (navik_slot_umeliy_voin >= 4) {navik_slot_umeliy_voin_03() = false;}
	else if (navik_slot_umeliy_voin <= 4) {navik_slot_umeliy_voin = 3; obnovlenie_stat();}}
function navik_slot_umeliy_voin_04() {
	if (navik_slot_umeliy_voin >= 4) {navik_slot_umeliy_voin_04() = false;}
	else if (navik_slot_umeliy_voin <= 4) {navik_slot_umeliy_voin = 0; obnovlenie_stat();}}
	
function navik_slot_umeliy_voin_05() {navik_slot_umeliy_voin = 4+bonus_aktiv_slot_navik; obnovlenie_stat();}
    var opit_umeliy; {opit_umeliy = 0;}

function pluss_opit_umeliy_voin() {
	    if (navik_slot_umeliy_voin == 1) {opit_umeliy_voin -= opit_umeliy; }
		else if (navik_slot_umeliy_voin == 2) {opit_umeliy_voin -= opit_umeliy; }
		else if (navik_slot_umeliy_voin == 3) {opit_umeliy_voin -= opit_umeliy; }
		else if (navik_slot_umeliy_voin == 0) {opit_umeliy_voin = 1000;}
		else if (navik_slot_umeliy_voin == 4+bonus_aktiv_slot_navik) {opit_umeliy_voin -= opit_umeliy; }
		
	obnovlenie_stat(); 
	all_umeliy_voin();
	document.getElementById('visual_navik_slot').innerHTML = 'Навык Слот:   ' + navik_slot_umeliy_voin;
	}	

	//навык "Умелый Воин"
	var umeliy_voin; {umeliy_voin = 0;}
	var opit_umeliy_voin; {opit_umeliy_voin = 1000;}
	 //Бонус который добавляется к накапливанию опыта слотов
	var bonus_opit_slot; {bonus_opit_slot = 0;}
function all_umeliy_voin() {	
	if (opit_umeliy_voin<=1) {
		umeliy_voin += 1;
		opit_umeliy_voin = 1000;
		document.getElementById('visual_opit_umeliy_voin').innerHTML = 'Навык Умелый Воин:   ' + opit_umeliy_voin;
		}
if (umeliy_voin<=1) {bonus_opit_slot = 0;}
else if (umeliy_voin<=2) {bonus_opit_slot = 2;}		
else if (umeliy_voin<=3) {bonus_opit_slot = 4;}
else if (umeliy_voin<=4) {bonus_opit_slot = 6;}
else if (umeliy_voin<=5) {bonus_opit_slot = 8;}
else if (umeliy_voin<=6) {bonus_opit_slot = 10;}
else if (umeliy_voin<=7) {bonus_opit_slot = 12;}
else if (umeliy_voin<=8) {bonus_opit_slot = 14;}
else if (umeliy_voin<=9) {bonus_opit_slot = 16;}
else if (umeliy_voin<=10) {bonus_opit_slot = 18;}
else if (umeliy_voin<=15) {bonus_opit_slot = 20;}
else if (umeliy_voin<=20) {bonus_opit_slot = 22;}
else if (umeliy_voin<=25) {bonus_opit_slot = 24;}
else if (umeliy_voin<=50) {bonus_opit_slot = 26;}
else if (umeliy_voin<=100) {bonus_opit_slot = 28;}
else if (umeliy_voin<=150) {bonus_opit_slot = 50;}
else if (umeliy_voin<=250) {bonus_opit_slot = 100;}
else if (umeliy_voin<=500) {bonus_opit_slot = 250;}
else if (umeliy_voin>=1000)	{bonus_opit_slot = 500; opit_umeliy_voin = 1000;}	
obnovlenie_stat();	
}


































//Дополнительные навыки пасивные, которые появляются от наличия соответствующего Спутника

//Навык Хитрюга (способный дать возможность активировать все пасивные навыки)
//Появляется, когда к вашей команде присоединяется Девушка-Лиса

//Функция для активации навыка 
	var navik_slot_hitryuga; {navik_slot_hitryuga = 1;}
	

function navik_slot_hitryuga_05() {navik_slot_hitryuga = 5; obnovlenie_stat();}
function pluss_opit_hitryuga() {
	    if (navik_slot_hitryuga == 0) {opit_hitryuga = 1000; }
		else if (navik_slot_hitryuga == 5) {opit_hitryuga -= 100;}	
	obnovlenie_stat(); 
	all_hitryuga();
	document.getElementById('visual_navik_slot_hitryuga').innerHTML = 'Навык Слот:   ' + navik_slot_hitryuga;
	}	

	//навык "Хитрюга"
	
	var hitryuga; {hitryuga = 0;}
	var opit_hitryuga; {opit_hitryuga = 1000;}
	 //Бонус который добавляется к накапливанию опыта слотов
	var bonus_aktiv_slot_navik; {bonus_aktiv_slot_navik = 0;}
function all_hitryuga() {	
	if (opit_hitryuga<=1) {
		hitryuga += 1;
		opit_hitryuga = 1000;
		document.getElementById('visual_opit_hitryuga').innerHTML = 'Опыт навыка Хитрюга:   ' + opit_hitryuga;
		}
if (hitryuga<=1) {bonus_aktiv_slot_navik = 1;}
else if (hitryuga<=2) {bonus_aktiv_slot_navik = 2;}		
else if (hitryuga<=3) {bonus_aktiv_slot_navik = 3;}
else if (hitryuga<=4) {bonus_aktiv_slot_navik = 4;}
else if (hitryuga<=5) {bonus_aktiv_slot_navik = 5;}
else if (hitryuga<=6) {bonus_aktiv_slot_navik = 6;}
else if (hitryuga<=7) {bonus_aktiv_slot_navik = 7;}
else if (hitryuga<=8) {bonus_aktiv_slot_navik = 8;}
else if (hitryuga<=9) {bonus_aktiv_slot_navik = 9;}
else if (hitryuga<=10) {bonus_aktiv_slot_navik = 10;}
else if (hitryuga<=15) {bonus_aktiv_slot_navik = 15;}
else if (hitryuga<=20) {bonus_aktiv_slot_navik = 20;}
else if (hitryuga<=25) {bonus_aktiv_slot_navik = 25;}
else if (hitryuga<=50) {bonus_aktiv_slot_navik = 30;}
else if (hitryuga<=100) {bonus_aktiv_slot_navik = 40;}
else if (hitryuga>=100) {bonus_aktiv_slot_navik = 100; opit_hitryuga = 1000;}
		
obnovlenie_stat();	
}





















