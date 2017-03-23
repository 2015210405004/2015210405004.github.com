/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-03-16 13:46:24
 * @version $Id$
 */

var tdList = document.querySelectorAll('.td')

for(i = 0;i < tdList.length;i++){
	item = tdList[i];
	item.addEventListener('click',function () {
		alert('a');})
function showMsg(event) {
	console.log(event.target.innerHTML);
	// body...
}
/*
document.getElementById("c1").addEventListener("click", function(){
    document.getElementById("tbl").style.backgroundColor = 'red';
});*/