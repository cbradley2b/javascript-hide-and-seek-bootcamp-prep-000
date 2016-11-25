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
//find the level
  let node = document.querySelectorAll('.ranked-list')

  for(let i=0,l = node.length; i<l; i++){
    let nextNode = node[i].children

      for(let j=0,k = nextNode.length; j<k; j++){
      nextNode[j].innerHTML = parseInt(nextNode[j].innerHTML) + n;
    }
  }
}
