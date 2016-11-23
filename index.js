function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  const targ = document.getElementById('nested').querySelector('.target');
  return targ;
}

function deepestChild(){
  const child = document.getElementById('grand-node').getElementsByTagName('div')
  return child[3]
}

function increaseRankBy(n){
    return n+parseInt(document.getElementById('app').querySelectorAll('ul.ranked-list li')[0].innerHTML,10);
}
