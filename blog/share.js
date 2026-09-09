document.querySelectorAll('.share-copy').forEach(function(b){
  b.addEventListener('click',function(){
    var u=b.getAttribute('data-url')||location.href;
    if(navigator.clipboard&&navigator.clipboard.writeText){
      navigator.clipboard.writeText(u).then(function(){
        var t=b.textContent;b.textContent='コピーしました';setTimeout(function(){b.textContent=t;},1600);
      }).catch(function(){window.prompt('このURLをコピーしてください',u);});
    }else{window.prompt('このURLをコピーしてください',u);}
  });
});
