/**
* Created by Administrator on 2014/11/27.
*/
function saveStorage(id){
var data = document.getElementById(id).value;
var time = new Date().getTime();
localStorage.setItem(time,data);
alert("内容已经被保存！");
loadStorage('msg');
}
function loadStorage(id){
var reselt = '<button style="background-color:#F6F6F6;border:0px solid;border-radius:25px;-moz-border-radius:25px;">';
for(var i=0;i<localStorage.length;i++)
{
var value = localStorage.getItem( localStorage.key(i));
var date = new Date();
date.setTime( localStorage.key(i));
var datestr = date.toGMTString();
reselt += '</p><td>'+'第'+i+'条备忘录</p><td>'+ localStorage.getItem( localStorage.key(i))+'</p>'+datestr+'</p></br>';
}
reselt += '</button>';
var target = document.getElementById(id);
target.innerHTML = reselt;
}
function clearStorage(id){
localStorage.clear();
alert("内容已经被成功删除！");
loadStorage('msg');
}