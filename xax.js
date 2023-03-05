
function eght() {
    const result = [];
    for (let i = 0; i <= 8; i++) {
      result.push(i);
    }
    return result;
  }
  
  const resultArr = eght();
  
  function random(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    array[array.indexOf(0)] = "";
    return array;
  }
  let shuf = random(resultArr);
  for (i = 0; i < shuf.length; i++) {
    document.getElementById(i).innerHTML = shuf[i];
  }
  
  function changeItem(event) {
    let neighbour = [],
      empty;
    
    function findN() {
      for (i = 0; i < shuf.length; i++) {
        document.getElementById(i).innerHTML = shuf[i];
        if (shuf[i] === "") {
          empty = document.getElementById(i);
          if (document.getElementById(i - 1) && i !== 3 && i !== 6) {
            neighbour.push(document.getElementById(i - 1));
          }
          if (document.getElementById(i + 1) && i !== 2 && i !== 5 && i !== 8) {
            neighbour.push(document.getElementById(i + 1));
          }
          if (document.getElementById(i - 3)) {
            neighbour.push(document.getElementById(i - 3));
          }
          if (document.getElementById(i + 3))
            neighbour.push(document.getElementById(i + 3));
        }
      }
    }
    findN();
    let empId = Number(empty.id);
    let target = event.target;
   /* if (event.code === "ArrowUp" && empId < 6) {
      target = document.getElementById(empId + 3);
    } else if (event.code === "ArrowDown" && empId > 2) {
      target = document.getElementById(empId - 3);
    } else if (
      event.code === "ArrowLeft" &&
      empId !== 2 &&
      empId !== 5 &&
      empId !== 8
    ) {
      target = document.getElementById(empId + 1);
    } else if (
      event.code === "ArrowRight" &&
      empId !== 0 &&
      empId !== 3 &&
      empId !== 6
    ) {
      target = document.getElementById(empId - 1);
    }*/
    if (neighbour.includes(target)) {
      let buffer = target.innerHTML;
      let idx = shuf.indexOf(Number(target.innerHTML));
      target.innerHTML = "";
      empty.innerHTML = buffer;
  debugger
      let numb = [];
      for (let i = 0; i < shuf.length; i++) {
        numb.push(Number(document.getElementById(i.toString()).innerHTML));
      }
      numb[numb.indexOf(0)] = "";
      shuf = numb;
    }
  }
  document.onclick = changeItem;
  document.onkeyup = changeItem;