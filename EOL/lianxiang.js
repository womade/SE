var input=document.getElementById('search-text')
var oUl=document.getElementById('ul')
input.onkeyup=function(){var value=this.value;var oScript=document.createElement('script');oScript.src='https://suggestion.baidu.com/su?cb=queryList&wd='+value+'&cb=aa'
document.body.appendChild(oScript)}
function aa(data){oUl.style.display='block';var list=data.s;var str='';if(list.length>0&&document.getElementById("search-text").getAttribute("placeholder")=='百度一下'){list.forEach(function(ele,index){str+='<li class="wei"><a class="a" href ="https://www.baidu.com/s?wd='+ele+'"><nobr>'+ele+'</nobr></li>';})
oUl.innerHTML=str;}else{oUl.style.display='none';}}