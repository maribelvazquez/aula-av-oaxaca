// Aula MAS · reactivos de autoevaluación: <div class="q" data-ok="2"> con button.op y div.x
document.addEventListener('click',function(e){
  var b=e.target.closest('.q button.op'); if(!b) return;
  var q=b.closest('.q'); if(q.dataset.done) return; q.dataset.done=1;
  var ops=[].slice.call(q.querySelectorAll('button.op')); var ok=parseInt(q.dataset.ok,10);
  ops.forEach(function(o,i){ if(i===ok) o.classList.add('ok'); });
  if(ops.indexOf(b)!==ok) b.classList.add('no');
  var x=q.querySelector('.x'); if(x) x.classList.add('v');
  var bar=document.querySelector('.qbar .sc');
  if(bar){ var t=document.querySelectorAll('.q[data-done]').length, a=document.querySelectorAll('.q[data-done] button.op.ok:not(.no)').length;
    var bien=0; document.querySelectorAll('.q[data-done]').forEach(function(qq){ if(!qq.querySelector('button.op.no')) bien++; });
    bar.textContent=bien+' de '+t+' correctas'; }
});
