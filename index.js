const cats = ['Milo','Otis','Garfield'];

function destructivelyAppendCat(name){
   cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    const newCats = [...cats];
    newCats.push(name);
    return newCats;
  }

  function prependCat(name){
    const newCats2 = [...cats];
    newCats2.unshift(name);
    return newCats2;
  }

  function removeLastCat(){
    const newCats3 = cats.slice();
    newCats3.pop();
    return newCats3;
  }

  function removeFirstCat(){
    const newCats4 = cats.slice();
    newCats4.shift();
    return newCats4;
  }