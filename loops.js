function forLoop(array)  {
  for (var i = 0; i < 25; i++) {
    if(i == 1) {
      array.push("I am 1 strange loop.");
      //console.log("i==1: " + array);
    }
    else { //if(i != 1)
      array.push("I am ${i} strange loops."); //
      //console.log("i==" + i + ": " + array); //("i==${i}: " + array);
    }
    //console.log(array);
  }
  return array;
}

function whileLoop(n)  {
  while (n > 0) {
    console.log(--n);
    //--n;
  }
  return('done');
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array)  {
  do {
    //console.log(array.length--);
    array.length--;
  } while (array.length > 0 && maybeTrue());
  return array;
}
