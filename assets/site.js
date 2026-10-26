(function(){
var BP=768;
var burger=document.querySelector('.burger');
var drawer=document.getElementById('mobdrawer');
var ov=document.getElementById('mobov');
var root=document.documentElement;
function openM(){drawer.classList.add('open');ov.classList.add('open');burger.setAttribute('aria-expanded','true');root.style.overflow='hidden';}
function closeM(){drawer.classList.remove('open');ov.classList.remove('open');burger.setAttribute('aria-expanded','false');root.style.overflow='';}
if(burger&&drawer&&ov){
burger.addEventListener('click',openM);
ov.addEventListener('click',closeM);
var cl=drawer.querySelector('.mob-close');
if(cl){cl.addEventListener('click',closeM);}
var links=drawer.querySelectorAll('a');
for(var i=0;i<links.length;i++){links[i].addEventListener('click',closeM);}
document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeM();}});
window.addEventListener('resize',function(){if(window.innerWidth>BP){closeM();}});
}
var qs=document.querySelectorAll('.faq-q');
for(var j=0;j<qs.length;j++){
qs[j].addEventListener('click',function(){
var item=this.parentNode;
var a=item.querySelector('.faq-a');
var open=item.classList.contains('open');
if(open){item.classList.remove('open');a.style.maxHeight='0px';this.setAttribute('aria-expanded','false');}
else{item.classList.add('open');a.style.maxHeight=a.scrollHeight+'px';this.setAttribute('aria-expanded','true');}
});
}
})();
