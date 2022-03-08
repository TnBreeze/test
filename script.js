var d = new Date();

var day=new Array("Воскресенье","Понедельник","Вторник",
"Среда","Четверг","Пятница","Суббота");

var weekday=new Array("1","2","3","4");

var month=new Array("января","февраля","марта","апреля","мая","июня",
"июля","августа","сентября","октября","ноября","декабря");

document.write(day[d.getDay()]+" " +d.getDate()+ " "+ weekday[d.getWeekday()]+" " + month[d.getMonth()]
+ " " + d.getFullYear() + " года.");