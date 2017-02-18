	
	
	//навык "Умелый Воин"
var umeliy_voin; {umeliy_voin = 0;}
var opit_umeliy; {opit_umeliy = 0;}
var opit_umeliy_voin; {opit_umeliy_voin = 1000;}
	 //Бонус который добавляется к накапливанию опыта слотов
var bonus_opit_slot; {bonus_opit_slot = 0;}
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
	
function navik_slot_umeliy_voin_05() {navik_slot_umeliy_voin = 4+bonus_aktiv_slot_navik; obnovlenie_stat();




}
    




































//Дополнительные навыки пасивные, которые появляются от наличия соответствующего Спутника

//Навык Хитрюга (способный дать возможность активировать все пасивные навыки)
//Появляется, когда к вашей команде присоединяется Девушка-Лиса

//Функция для активации навыка 

	var navik_slot_hitryuga; {navik_slot_hitryuga = 0;}
	var bonus_aktiv_slot_navik; {bonus_aktiv_slot_navik = 0;}
	
	
	function aktiv_navik_hitryuga() {navik_slot_hitryuga = 5;
	document.getElementById('visual_navik_slot_hitryuga').innerHTML = 'Навык Слот Хитрюги:   ' + navik_slot_hitryuga;
	
	
	
	}
	
	
	
	
	
	

	






















