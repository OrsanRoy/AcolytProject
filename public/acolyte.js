const dreadlord = document.querySelector('#dreadlord-speech');
const acolyt = document.querySelector('#acolyte-speech');


/* Найти чётное/нечётное */
const evenBtn = document.querySelector('#even');
let array = [2, 4, 0, 100, 4, 11, 2602, 36];

evenBtn.addEventListener('click', () => {
  let answer = findOutlier(array);
  acolyt.innerHTML = `Данный массив состоит из ${isEven(answer)} чисел, 
единственное ${isEvenReverse(isEven(answer))} число в нём — ${answer}.`;

dreadlord.innerHTML = `Прислужник, найди лишнее число в массиве ${array}!`;
})

function findOutlier(integers){
    let array = integers.filter(int => int % 2 === 0)
    return array.length > 1 ? integers.find(elem => elem % 2 !== 0) : array[0];
  }

  function isEven(num) {
    return num % 2 === 0 ? 'нечётных' : 'чётных';
  }
  
  function isEvenReverse(str) {
    return str === 'чётных' ? 'нечётное' : 'чётное';
  }

// let answer = findOutlier(array);


/* Прыгающий мячик */
const ballBtn = document.querySelector('#ball')
let height = 6;
let bounce = 0.5;
let peephole = 1.5;

ballBtn.addEventListener('click', () => {
  let count = countBounce(height, bounce, peephole);
  dreadlord.innerHTML = `Прислужник, сколько раз можно увидеть мяч из окна на уровне ${peephole}
метров, если высота, откуда упал мяч, равна ${height} ${count === 1 ? 'метру' : 'метрам'}, а отскок мяча — ${bounce}?`

acolyt.innerHTML = `Из окна высотой ${peephole} метра можно увидеть 
мячик ${count} ${count === 1 ? 'раз' : 'раза'}!`;
})

let countBounce = function (h, b, w) {
  if (h > 0 && b > 0 && b < 1 && w < h) {
    let bounce = h;
    let i = -1;
    while (bounce > w) {
      i += 2;
      bounce = bounce * b;
      console.log(bounce)
    }
    return i;
    console.log(bounce, i)
  } else {
    return -1
  }
}


