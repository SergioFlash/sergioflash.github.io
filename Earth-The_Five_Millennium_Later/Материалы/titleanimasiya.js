
var tit = document.title;
var c = 0;
//
function zagolovokstranis() {
  document.title = tit.substring(0,c);
  if(c==tit.length) {
    c = 1;setTimeout("zagolovokstranis()", 1500) //с = 1 - с какой буквы начнется загрузка; цыфры в конце - ыремя через которое обновится цикл
  } else {
    c++;
    setTimeout("zagolovokstranis()", 200) //цыфры - скорость ввода букв (меньшее значение - быстрее, большее - медленее)
  }
}
zagolovokstranis();



